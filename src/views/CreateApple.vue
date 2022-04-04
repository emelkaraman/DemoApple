<template>
<div>
    <div >
        <nav id="ac-globalnav"   dir="ltr">
            <div class="ac-gn-content">
                <ul class="ac-gn-list">
                    <li class="ac-gn-item">
                        <a class="ac-gn-link"  id="ac-gn-firstfocus"
                        href="#"><img style="height: 44px;" src="https://www.apple.com/ac/globalnav/6/en_US/images/be15095f-5a20-57d0-ad14-cf4c638e223a/globalnav_apple_image__cxwwnrj0urau_large.svg"></a>
                            <span></span>
                    </li>
                    <li class="ac-gn-item">
                        <a class="ac-gn-link" href="#" >
                            <span >Store</span>
                        </a>
                    </li>
                    <li class="ac-gn-item">
                        <a class="ac-gn-link" href="#" >
                            <span >Mac</span>
                        </a>
                    </li>
                    <li class="ac-gn-item">
                        <a class="ac-gn-link" href="#" >
                            <span >iPad</span>
                        </a>
                    </li>
                    <li class="ac-gn-item">
                        <a class="ac-gn-link" href="#" >
                            <span >iPhone</span>
                        </a>
                    </li>
                    <li class="ac-gn-item">
                        <a class="ac-gn-link" href="#" >
                            <span >Watch</span>
                        </a>
                    </li>
                    <li class="ac-gn-item">
                        <a class="ac-gn-link" href="#" >
                            <span >AirPods</span>
                        </a>
                    </li>
                    <li class="ac-gn-item">
                        <a class="ac-gn-link" href="#">
                            <span >TV &amp; Home</span>
                        </a>
                    </li>
                    <li class="ac-gn-item">
                        <a class="ac-gn-link" href="#" >
                            <span >Only on Apple</span>
                        </a>
                    </li>
                    <li class="ac-gn-item">
                        <a class="ac-gn-link" href="#" >
                            <span >Accessories</span>
                        </a>
                    </li>
                    <li class="ac-gn-item">
                        <a class="ac-gn-link" href="#" >
                            <span >Support</span>
                        </a>
                    </li>
                    <li class="ac-gn-item">
                        <a id="ac-gn-link-search" class="ac-gn-link  ac-gn-link-search"  href="#" ></a>
                    </li>
                    <li class="ac-gn-item ac-gn-bag" id="ac-gn-bag">
                        <div class="ac-gn-bag-wrapper">
                             <router-link to="/Bag">
                                <span><img style="height: 44px;" src="https://www.apple.com/ac/globalnav/7/en_US/images/be15095f-5a20-57d0-ad14-cf4c638e223a/globalnav_bag_image__yzte50i47ciu_large.svg"></span>
                            </router-link>
                        </div>
                        <span class="ac-gn-bagview-caret ac-gn-bagview-caret-large"></span>
                    </li>
                </ul>
            </div>
        </nav>

        <div class="ac-gn-blur"></div>
        <div id="ac-gn-curtain" class="ac-gn-curtain"></div>
        <div class="ac-nav-placeholder"></div>
    </div>
    <div>
        <div class="SignUpHeader">
            <p class="p">Apple ID</p>
            <div>
                <button class="buttons">Sign In</button> &nbsp;
                <button class="buttons">Create Your Apple ID</button>&nbsp;
                <button class="buttons">FAQ</button>
            </div>
        </div><hr class="hrforup"><br>

        <div>
            <h1 class="baslik1">
                Create Your Apple ID
            </h1>
            <pre class="pp">
One Apple ID is all you need to access all Apple services.
    Already have an Apple ID? <a href="#">Find it here > </a>
            </pre>
        </div>
        <div>
            <div class="texts">
                <input v-model="username" type="text" placeholder="First name">&nbsp;&nbsp;
                <input type="text" placeholder="Last name">
                <div v-if="error" class="error">{{error}}</div>
            </div><br><br>

            <h5 class="h4">COUNTRY/REGION</h5>
            <select class="options" name="Country/region">
            <option value="Afghanistan">Afghanistan</option>
            <option value="Albania">Albania</option>
            <option value="Algeria">Algeria</option>
            <option value="Bahamas">Bahamas</option>
            <option value="Colombia">Colombia</option>
            <option value="Dominica">Dominica</option>
            <option value="Egypt">Egypt</option>
            <option value="Guyana">Guyana</option>
            <option value="Haiti">Haiti</option>
            <option value="Italy">Italy</option>
            <option value="Japan">Japan</option>
            <option value="Kenya">Kenya</option>
            <option value="Libya">Libya</option>
            <option value="Mexico">Mexico</option>
            <option value="Nepal">Nepal</option>
            <option value="Oman">Oman</option>
            <option value="Peru">Peru</option>
            <option value="Russia">Russia</option>
            <option value="San Marino">San Marino</option>
            <option value="Turkey">Turkey</option>
            <option value="United States" selected>United States</option>
            <option value="Vietnam">Vietnam</option>
            <option value="Western Sahra">Western Sahra</option>
            <option value="Yemen">Yemen</option>
            <option value="Zambia">Zambia</option>
            </select><br><br>
            <div class="texts">
            <input style="width: 445px" type="datetime" placeholder="Birthday">
            </div>
        </div><hr class="hringeneral"><br>

        <div>
            <div class="inputs">
                <input id="registeremailarea" type="text" v-model="email" placeholder="name@example.com">
                <p>This will be your new Apple ID.</p><br>
                <input v-if="passwordError" type="password" v-model="password" placeholder="Password"><br>
                <input id="registerpasswordarea" style="margin-top:12px" type="password" placeholder="Confirm password">
            </div>
        </div><hr class="hringeneral"><br>
        <div>
            <div>
                <select class="options" name="Country/region">
                <option value="+93(Afghanistan)">+93 (Afghanistan)</option>
                <option value="+355(Albania)">+355 (Albania)</option>
                <option value="+213(Algeria)">+213 (Algeria)</option>
                <option value="+1(Bahamas)">+1 (Bahamas)</option>
                <option value="+57(Colombia)">+57 (Colombia)</option>
                <option value="+1(Dominica)">+1 (Dominica)</option>
                <option value="+20(Egypt)">+20 (Egypt)</option>
                <option value="+592(Guyana)">+592 (Guyana)</option>
                <option value="+509(Haiti)">+509 (Haiti)</option>
                <option value="+39(Italy)">+39 (Italy)</option>
                <option value="+81(Japan)">+81 (Japan)</option>
                <option value="+254(Kenya)">+254 (Kenya)</option>
                <option value="+218(Libya)">+218 (Libya)</option>
                <option value="+52(Mexico)">+52 (Mexico)</option>
                <option value="+977(Nepal)">+977 (Nepal)</option>
                <option value="+968(Oman)">+968 (Oman)</option>
                <option value="+51(Peru)">+51 (Peru)</option>
                <option value="+7(Russia)">+7 (Russia)</option>
                <option value="+378(San Marino)">+378 (San Marino)</option>
                <option value="+90(Turkey)">+90 (Turkey)</option>
                <option value="+1(United States)" selected>+1 (United States)</option>
                <option value="+84(Vietnam)">+84 (Vietnam)</option>
                <option value="+212(Western Sahra)">+212 (Western Sahra)</option>
                <option value="+967(Yemen)">+967 (Yemen)</option>
                <option value="+260(Zambia)">+260 (Zambia)</option>
                </select><br><br>
            </div>
            <div class="inputs">
                <input type="text" name="phoneNumber" min="0" maxlength="10" placeholder="Phone Number">
            </div><br>
            <div>
             <button class="buttonss" @click="registerWithFirebase()">Continue</button>
            </div>
        
        </div>
        
    </div>
</div>
</template>

<script>
import {initializeApp} from "firebase/app";
import {createUserWithEmailAndPassword,getAuth} from "firebase/auth";

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



export default{
    name:"CreateApple",
    data(){
        return{
            username:' '
        }
    },
    computed:{
        error(){
            return this.username.trim().length<4 ?'Please enter a longer username'
            :''
        }
    },
    methods:{
         registerWithFirebase: function(){
      const emailRegisterer = document.getElementById("registeremailarea").value;
      const passwordRegisterer = document.getElementById("registerpasswordarea").value;

      const auth = getAuth();
    createUserWithEmailAndPassword(auth, emailRegisterer, passwordRegisterer)
    .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    alert("Basarıyla kayıt olundu");
    console.log(user.email);
    // ...
  })
    .catch((error) => {
    const errorMessage = error.message;
    alert(errorMessage);
  });
    },
    }
}
</script>


<style scoped>
.buttonss{
  background-color: #0071e3;
    margin-left: 900px;
    border-radius: 10px;
    width: 130px;
    height: 2.3rem;
    color: white;
    font-family: 'Open Sans', sans-serif;
    font-size: 18px;
    border-color: #0071e3;
    padding-top: 5px;
    padding-bottom: 5px;
    margin-top: 10px;
    }
.inputs{
    font-family: 'Open Sans', sans-serif;
    margin-left:741px;
    
}
.inputs input{
    padding: 16px;
    width: 445px;
    font-size: 17px;
    border-radius:4px;
    border: 1px solid lightgrey;
}
.inputs p{
    margin-top: 5px;
    font-family: 'Open Sans', sans-serif;
    color:gray;
    font-size: 17px;
}
.inputs input:focus{
      border: 1px solid rgb(90, 113, 241);
      outline: 2px solid lightskyblue;
      

}
.hringeneral{
    width: 62%;
    border-top: 0.01px solid lightgrey;
    margin-top: 30px;
    margin-left: 370px;
    
}

.options{
    font-family: 'Open Sans', sans-serif;
    color: black;
    border-radius:4px;
    border: 1px solid lightgrey;
    margin-left: 741px;
    padding: 16px;
    width: 23.1%;
    font-size: 18px;
    margin-top: 3px;
    position: relative;
    
}

.options:focus{
      border: 1px solid rgb(90, 113, 241);
      outline: 2px solid lightskyblue;
      
}
.h4{
    font-size: 15px;
    font-family: 'Open Sans', sans-serif;
    color: darkgray;
    margin-left: 750px;
    position:relative;
}
.texts{
    font-family: 'Open Sans', sans-serif;
    margin-left:741px;
    position:relative;
    
}
.texts input{
    padding: 16px;
    width: 215px;
    font-size: 17px;
    border-radius:4px;
    border: 1px solid lightgrey;
    
}
.texts input:focus{
      border: 1px solid rgb(90, 113, 241);
      outline: 2px solid lightskyblue;
      

}
.baslik1{
    margin-top: 15px;
    text-align: center;
    font-size: 35px;
    font-family: 'Open Sans', sans-serif;
    position:relative;

}
.SignUpHeader{
    display: flex;
    width: 50%;
    justify-content: space-between;
    align-content: center;
    justify-items: center;
    margin:0 auto;
    margin-top: 55px;
    font-family: 'Open Sans', sans-serif;
    position:relative;
}
.buttons {
    color: black;
    font-family: 'Open Sans', sans-serif;
    border: none;
    background-color: white;
    font-size: 14px;
    font-family: 'Open Sans', sans-serif;
    margin-top: 12px;
    position:relative;
}
.buttons:hover{
    color: #0071e3 ;
    text-decoration: underline;
}
.p{
    margin-top: -2px;
    font-size: 25px;
    margin-left: -21px;
    font-family: 'Open Sans', sans-serif;
    position:relative;
}
.hrforup{
    
    width: 100%;
    border-top: 0.2px solid lightgray;
    margin-top: 10px;
    position:relative;
    
}
.pp{
    margin-top: 10px;
    font-family: 'Open Sans', sans-serif;
    font-size:16px;
    text-align: center;
    line-height: 1.6;
    position:relative;
}

.pp a{
    font-family: 'Open Sans', sans-serif;
    color:rgb(90, 113, 241) ;
}

</style>

