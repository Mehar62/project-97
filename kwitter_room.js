  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyDUwvdtF7hrj35VQ_aZNNLdSNAV3dopVQE",
    authDomain: "chat-32bd6.firebaseapp.com",
    databaseURL: "https://chat-32bd6-default-rtdb.firebaseio.com",
    projectId: "chat-32bd6",
    storageBucket: "chat-32bd6.appspot.com",
    messagingSenderId: "46999947827",
    appId: "1:46999947827:web:a8f6be714cb4ca48947146"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  user_name = localStorage.getItem("user_name");

  document.getElementById("user_name").innerHTML = "<h2 class='mmee'>Welcome </h2>" + " " + "<h1 class='mmeee'>" + user_name + "!!</h1>";


  function getData() {
    firebase.database().ref("/").on('value', function (snapshot) {
      document.getElementById("output").innerHTML = "";
      snapshot.forEach(function (childSnapshot) {
        childKey = childSnapshot.key;
        Room_names = childKey;
        //Start code
        console.log("Room name - " + Room_names);
        row = "<div class='room_name' id=" + Room_names + " onclick='redirectToRoomPage(this.id);'>#" + Room_names + "</div><hr>";
        document.getElementById("output").innerHTML = row;
        //End code
      });
    });
  }
  getData();


  function addRoom() {

    room_name = document.getElementById("room_name").value;

    firebase.database().ref("/").child(room_name).update({
      purpose: "adding room name"
    });

    localStorage.setItem("room_name", room_name);

    window.location = "kwitter_page.html";
  }

  function redirectToRoomPage(name) {
    console.log(name);
    localStorage.setItem("room_name", name);
    window.location = "kwitter_page.html";
  }

  function logout() {
    localStorage.removeItem("room_name");
    localStorage.removeItem("user_name");
    window.location = "index.html";
  }