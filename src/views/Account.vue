<template>
<div>
<div >
        <nav id="ac-globalnav"   dir="ltr">
            <div class="ac-gn-content">
                <ul class="ac-gn-list">
                    <li class="ac-gn-item">
                        <a class="ac-gn-link"  id="ac-gn-firstfocus"
                        href="file:///C:/Users/Zeynep/Documents/Apple/header.html"><img style="height: 44px;" src="https://www.apple.com/ac/globalnav/6/en_US/images/be15095f-5a20-57d0-ad14-cf4c638e223a/globalnav_apple_image__cxwwnrj0urau_large.svg"></a>
                            <span></span>
                    </li>
                    <li class="ac-gn-item">
                        <a class="ac-gn-link" href="https://www.apple.com/store" >
                            <span >Store</span>
                        </a>
                    </li>
                    <li class="ac-gn-item">
                        <a class="ac-gn-link" href="https://www.apple.com/mac/" >
                            <span >Mac</span>
                        </a>
                    </li>
                    <li class="ac-gn-item">
                        <a class="ac-gn-link" href="https://www.apple.com/ipad/" >
                            <span >iPad</span>
                        </a>
                    </li>
                    <li class="ac-gn-item">
                        <a class="ac-gn-link" href="file:///C:/Users/Zeynep/Documents/Apple/iPhone.html" >
                            <span >iPhone</span>
                        </a>
                    </li>
                    <li class="ac-gn-item">
                        <a class="ac-gn-link" href="https://www.apple.com/watch/" >
                            <span >Watch</span>
                        </a>
                    </li>
                    <li class="ac-gn-item">
                        <a class="ac-gn-link" href="https://www.apple.com/airpods/" >
                            <span >AirPods</span>
                        </a>
                    </li>
                    <li class="ac-gn-item">
                        <a class="ac-gn-link" href="https://www.apple.com/tv-home/">
                            <span >TV &amp; Home</span>
                        </a>
                    </li>
                    <li class="ac-gn-item">
                        <a class="ac-gn-link" href="https://www.apple.com/services/" >
                            <span >Only on Apple</span>
                        </a>
                    </li>
                    <li class="ac-gn-item">
                        <a class="ac-gn-link" href="https://www.apple.com/shop/accessories/all" >
                            <span >Accessories</span>
                        </a>
                    </li>
                    <li class="ac-gn-item">
                        <a class="ac-gn-link" href="https://support.apple.com" >
                            <span >Support</span>
                        </a>
                    </li>
                    <li class="ac-gn-item">
                        <a id="ac-gn-link-search" class="ac-gn-link  ac-gn-link-search"  href="https://support.apple.com/us/search" ></a>
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
        <br><br><br><br><br><br><br>
        <h1 class="h1" >Sign in to Apple Store</h1><br>
        <input class="vtext" type="text" placeholder=" Apple ID"><br><br><br><br>
        <input class="checkbox" type="checkbox" name="RememberMe" id="remember"><label style="color:light-grey; font-family: 'Open Sans', sans-serif;" for="remember" > Remember Me</label><br><br>
        <hr class="hrforthem"><br>
        <a class="a" href="https://iforgot.apple.com/password/verify/appleid">Forgot Apple ID or password?</a> <br>
<pre class="pmessage"> Don’t have an Apple ID? <a class="a2" href="https://appleid.apple.com/account">Create yours now</a></pre><br>
    </div>
    </div>
</template>
<style scoped>
.pmessage{
    color: rgb(90, 86, 86);
    font-family: 'Open Sans', sans-serif;
    font-size: 15px ;
    margin-left: 810px;
}
.a2:hover{
    text-decoration: underline;
}
.a2{

    text-decoration: none;
    color:rgb(95, 119, 250) ;
    
}
.a{

    text-decoration: none;
    color:rgb(95, 119, 250) ;
    margin-left: 860px;
}
.a:hover{
    text-decoration: underline;
}
.hrforthem{
    width: 12%;
    margin-left: 850px;
}
.checkbox{
    margin-left: 900px;
}
h1{
    text-align:center;
    font-family: 'Open Sans', sans-serif;
    font-size: 25px;
    
}
.vtext {
    font-size: 18px;
    border-radius: 10px;
    margin-left: 780px;
    border:none;
    border: 1px solid lightgray ;
    padding: 10px;
    width: 380px;
}
.vtext:focus{
      border: 1px solid rgb(90, 113, 241);
      outline: 2px solid lightskyblue;

}
</style>
