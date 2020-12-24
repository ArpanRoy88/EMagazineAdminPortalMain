
var firebaseConfig = {
    apiKey: "AIzaSyCAcFycxHT2JUD6S7wLbYnddhjPE0nTSCA",
    authDomain: "tezu-33542.firebaseapp.com",
    databaseURL: "https://tezu-33542.firebaseio.com",
    projectId: "tezu-33542",
    storageBucket: "tezu-33542.appspot.com",
    messagingSenderId: "726233873189",
    appId: "1:726233873189:web:6910dca291972bf76478cc"
    };
 
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  //firebase.analytics();




    firebase.auth.Auth.Persistence.LOCAL;


    $("#btn-login").click(function(){
    
        var email = $("#email").val();
        var password = $("#password").val();

        var result = firebase.auth().signInWithEmailAndPassword(email,password);

        result.catch(function(error){
        var errorCode = error.code;
        var errorMessage = error.message;

        console.log(errorCode);
        console.log(errorMessage);
        });
       
    });

    $("#btn-logout").click(function(){

       // alert("Clicked");
        firebase.auth().signOut().then(function(){

        }).catch(function(error){

        });
    });

    function switchView(view){
        $.get({
            url:view,
            cache:false,
        }).then(function(data){
            $("#container").html(data);
        });
    }