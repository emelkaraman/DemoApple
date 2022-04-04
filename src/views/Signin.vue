<template>
    <div>  
        <h1 class="h">Please Sign in.</h1><br><br>
        <input class="vtext" type="text" placeholder="Apple ID" id="emailsigninarea"><br><br>
        <input class="vtext" type="password" placeholder="Passwords" id="passwordsigninarea">
        <p class="pmessage">Your Apple ID is the email address you use to sign in to iTunes,<br>
             the App Store, and iCloud.</p><br>
        <button class="sign-in-button" @click="signWithFirebase()"> Sign In </button><br><br>
        <router-link style="margin-left:406px" to="/Forget" class="routerlink">Forgot your Apple ID or password?</router-link><br><br>
        <router-link style="margin-left:406px" to="/CreateApple" class="routerlink">Don't have an Apple ID? Create one now.</router-link> <br><br><br><br><br><br><br><hr>
        
        <p class="pmessage2" >Need some help? <button class="chatNow-button">Chat Now</button>or call 1‑800‑MY‑APPLE. </p>
    </div>
    
</template>
<script>
import {initializeApp} from "firebase/app";
import {signInWithEmailAndPassword,getAuth} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCgnV0EtR42NiduT40r5G6TtXme5QDY3jk",
  authDomain: "demoapple-53a3f.firebaseapp.com",
  databaseURL: "https://demoapple-53a3f-default-rtdb.firebaseio.com",
  projectId: "demoapple-53a3f",
  storageBucket: "demoapple-53a3f.appspot.com",
  messagingSenderId: "955121115155",
  appId: "1:955121115155:web:8f7a0a6eb51a842f119fe6"
};

// Initialize Firebase
const appp = initializeApp(firebaseConfig);
console.log(appp.name);
export default {
    methods:{
    signWithFirebase: function(){
      const email = document.getElementById("emailsigninarea").value;
      const sifre = document.getElementById("passwordsigninarea").value;
      const auth = getAuth();
    signInWithEmailAndPassword(auth, email, sifre)
    .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    alert(user.email + " Kullanıcısı giris yaptı");
    // ...

  })
  .catch((error) => {
    const errorMessage = error.message;
    alert(errorMessage);
  });
},


}//end of methods
}// end of export default

</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400&display=swap');
.h{
    font-size: 40px;
    font-family: 'Open Sans', sans-serif;
    text-align:left;
    margin-left: 400px;
    margin-top: 90px;
}
.pmessage{
    color: rgb(90, 86, 86);
    font-family: 'Open Sans', sans-serif;
    font-size: 13px;
    margin-left: 400px;
}
.pmessage2{
    color: rgb(49, 49, 49);
    font-family: 'Open Sans', sans-serif;
    font-size: 17px;
    margin-left: 400px;
}
.vtext {
    font-size: 18px;
    border-radius: 10px;
    margin-left: 400px;
    border:none;
    border: 1px solid lightgray ;
    padding: 15px;
    width: 400px;
}
.vtext:focus{
      border: 4px solid rgb(90, 113, 241);

}
.sign-in-button{
    background-color: #0071e3;
    margin-left: 400px;
    border-radius: 10px;
    width: 400px;
    height: 3rem;
    color: white;
    font-family: 'Open Sans', sans-serif;
    font-size: 20px;
    border-color: #0071e3;
    
}
.chatNow-button{
    
    background-color: white;
    border:none;
    font-size: 16px;
    color:#0071e3;


}
.chatNow-button:hover{
    text-decoration: underline;
}

.createandforget-button{
    margin-left: 400px;
    background-color: white;
    border:none;
    font-size: 16px;
    color:#0071e3;


}
.routerlink{
    margin-left: 400px;
    background-color: white;
    border:none;
    font-size: 16px;
    color:#0071e3;
    text-decoration: none;
}

.createandforget-button:hover{
    text-decoration: underline;
}
.routerlink:hover{
    text-decoration: underline;
}
.hr{
    border:none;
    border-top: 0.5px solid lightgrey;
}

</style>