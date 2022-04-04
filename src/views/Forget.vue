<template>
    
    <div><br>
        <div class="SignUpHeader">
        <button class="AppleId ">Apple ID</button>
        <div >
            <button class="buttons">Sign In</button>
            <button class="buttons">FAQ</button>
        </div>
        </div><hr class="hrforup">
        <div class="container">
            <div class="h " >
                <h1 style="padding-bottom:20px;">Having trouble signing in?</h1>
                <p style="padding-bottom:20px;">Enter your Apple ID to get started.</p>
                <input type="text" v-model="id" placeholder="Apple ID"><br>
                <div style="color:gray; margin-left:380px" v-if="error" class="error">{{error}}</div>
                <p style="padding-top:20px;" class="pmessage">If you forgot your Apple ID, you can <a href="#">look it up.</a></p><br>
                <button> Continue </button>
            </div>
            <div class="panel">
                <img src="../assets/kayit.png">
                <p>You’ve come to the right place<br>
                   to reset a forgotten password.<br>
                   For your security, we’ll ask you a<br> 
                   few questions to verify that<br>
                   you’re the owner of this account. </p>
            </div>
        </div>
       


    </div>

</template>
<script>
export default{
    name:"Forget",
    data(){
        return{
            id:' '
        }
    },
    computed:{
        error(){
            return this.id.trim().length<11 ?'Please enter a longer id'
            :''
        }
    }
}
</script>

<style scoped >
.panel{
    width: 50%;
    padding-left: 15px;
    border-left: 1px solid gray;
    height: 100%;
    display: flex;

}
.panel p{
  color: gray;
  text-align: left;
}
.panel img{
    width: 100px;
    height: 100px   ;
}
.container{
    display:flex;
    justify-content: space-between;
    align-items: center;

}

.hrforup{
    margin-left: 480px;
    width: 50%;
    color: lightgray;
}
.h{
    font-family: 'Open Sans', sans-serif;
    margin-top: 8px;
    margin-left: 0px;
    padding-right: 250px;
}
.h button{
     background-color: #0071e3;
    margin-left: 480px !important;
    border-radius: 10px;
    width: 130px;
    height: 2.3rem;
    color: white;
    font-family: 'Open Sans', sans-serif;
    font-size: 18px;
    border-color: #0071e3;
    padding-top: 5px;
    padding-bottom: 5px;
}
.pmessage{
    color: rgb(90, 86, 86);
    font-family: 'Open Sans', sans-serif;
    font-size: 15px !important;
    margin-left: 400px;
}
.h a{
    text-decoration: none;
    color:rgb(90, 113, 241) ;
}
.h a:hover{
    text-decoration: underline;
}
.h h1{
    font-size: 27px;
    font-weight: 0px;
    font-family:sans-serif;
    text-align:left;
    margin-left: 480px;
    margin-top: 90px;
    color: black;
}

.h input{
     font-size: 18px;
    border-radius: 10px;
    margin-left: 480px;
    border:none;
    border: 1px solid lightgray ;
    padding: 15px;
    width: 350px;
}
.h input:focus{
    border: 4px solid rgb(90, 113, 241);
}
.h p{
    color: gray;
    font-family: 'Open Sans', sans-serif;
    font-size: 20px;
    margin-left: 480px;
}

.AppleId{
     color: black;
    font-family: 'Open Sans', sans-serif;
    font-size: 20px;
    font-weight: 500;
    border: none;
    background-color: white;
    
}
.buttons {
    color: black;
    font-family: 'Open Sans', sans-serif;
    border: none;
    background-color: white;
}
.buttons:hover{
    text-decoration: underline;
    color: #0071e3 ;
}
.SignUpHeader{
    display: flex;
    width: 50%;
    justify-content: space-between;
    align-content: center;
    justify-items: center;
    margin:0 auto;
}

</style>