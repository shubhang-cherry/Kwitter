var firebaseConfig = {
      apiKey: "AIzaSyAkR0NJlMKZlu39jChnoMcmtNt5yqOah3Q",
      authDomain: "kwitter-88f1e.firebaseapp.com",
      databaseURL: "https://kwitter-88f1e-default-rtdb.firebaseio.com",
      projectId: "kwitter-88f1e",
      storageBucket: "kwitter-88f1e.appspot.com",
      messagingSenderId: "266948819966",
      appId: "1:266948819966:web:1c46508bccf8630212deaf"
    };
    
    // Initialize Firebase
   firebase.initializeApp(firebaseConfig);

user_name = localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML =  "Welcome " + user_name + "!";

function addRoom() {
      room_name = document.getElementById("room_name").value;
      firebase.database().ref("/").child(room_name).update({
          purpose : "adding room name"  
      });

      localStorage.setItem("room_name", room_name);
      window.location = "kwitter_page.html";
}     


function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
console.log("room_name - " + Room_names);
row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
document.getElementById("output").innerHTML += row;
});});}
getData();
function redirectToRoomName(name) {
      console.log(name);
      localStorage.setItem("room_name", name);
      window.location = "kwitter_page.html";
} 

      //End code
      
function logout () {
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");      
      window.location= "index.html";
}
