// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyCcI88D8PW8fky37P0NdL244OeHQb7MbzA",
    authDomain: "kwitter-knock-of-twitter.firebaseapp.com",
    databaseURL: "https://kwitter-knock-of-twitter-default-rtdb.firebaseio.com",
    projectId: "kwitter-knock-of-twitter",
    storageBucket: "kwitter-knock-of-twitter.appspot.com",
    messagingSenderId: "313453830145",
  };
  
  // Initialize Firebase
firebase.initializeApp(firebaseConfig);
//ADD YOUR FIREBASE LINKS

user_name = localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML = "welcome" + user_name + "!";


function addRoom(){
      room_name = document.getElementById("room_name").value;
      firebase.database().ref("/").child(room_name).update({
            purpose:"adding room name"
      });
      localStorage.setItem("room_name", room_name);
      window.location = "kwitter_page.html";
}


function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
              Room_names = childKey;
      //Start code
        row = "<div class=`room_name` id="+Room_names+" onclick=`redirectToRoomName(this.id)`>"+Room_names+"</div>";
        document.getElementById("output").innerHTML+=row;

      //End code
      });});}
getData();


function redirectToRoomName(name){
      console.log(name);
      localStorage.setItem("room_name", name );
      window.location = "kwitter_page.html";
}

function logout(){
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location="index.html";
}