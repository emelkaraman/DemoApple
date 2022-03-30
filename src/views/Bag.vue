<template>
    <div><br><br>
      <div class="container">
        <div class="bag">
          <h1>Your bag is empty.</h1>
          <p>Sign in to see if you have any saved items. Or continue shopping.</p>
          
            <div style="float:left" class="buttons">
              <button class="signinBtn">Sign In</button> 
            </div>
            <div class="buttons">
              <button class="continueBtn">Continue Shopping</button>
            </div>
          
      </div>
      <div class=" help">
        <hr /> ><br>
        <p>
          Need some help?
          <span class="chatLink">
            <a href="#" target="_blank">Chat now</a> </span
          >or call 1‑800‑MY‑APPLE.
        </p>
        <br>
        <hr />
      </div>
    </div>
    </div>
</template>

<style scoped >
@import url("https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300;0,400;0,500;0,600;1,300;1,400;1,500&display=swap");
* {
  font-family: "Open Sans", sans-serif;
}

.bag {
  margin-left: 300px !important;
}
.bag h1 {
  font-size: 40px;
  line-height: 1.1;
  font-weight: 600;
  padding-bottom: 10px;
  color: #1d1d1f;
  margin-left: -960px !important
  
}
.bag p {
  color: gray;
  margin-left: -830px !important
  
}

.buttons {
  display: flex;
  flex-direction: column;
  margin-top: 32px;
  width: 50%;
  margin-bottom: 100px;
  
}
.buttons button {
  font-size: 17px;
  color: white;
  width: 45%;
  padding: 18px 31px;
  border-radius: 10px;
  border: none;
  font-weight: 500;
  

}
.signinBtn {
  background-color: #0071e3;
  padding-bottom: 20px;
  margin-left: 9.5rem;

}
.continueBtn {
  color: #1d1d1f !important;
  margin-left: -17rem;
  

}

.help {
  margin-left: 0 !important;
  text-align: left;
}
.help p {
  color: gray;
  margin-left: 300px;
}
.chatLink a {
  color: #06c;
  text-decoration: none;
}
.chatLink a:hover {
  text-decoration: underline #06c;
}
</style>
