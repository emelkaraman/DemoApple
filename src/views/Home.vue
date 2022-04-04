<template>

    <nav>
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
                       <router-link class="ac-gn-link" to="/iPhone">
                            <span>iPhone</span>
                       </router-link>                           
                        
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
                            <div class="dropdown">
                                <!--<a class="ac-gn-link" href="#" >-->
                                    <a class="dropbtn"><img style="height: 44px;" src="https://www.apple.com/ac/globalnav/7/en_US/images/be15095f-5a20-57d0-ad14-cf4c638e223a/globalnav_bag_image__yzte50i47ciu_large.svg"></a>
                                        <div class="dropdown-content ">
                                            <p class="p">Your Bag is empty. </p><br><hr class="hr">
                                            <div class="li-item"> <img src="https://www.apple.com/ac/globalnav/7/en_US/assets/ac-store/bag.svg" alt="bag.png"> <router-link to="/Bag">Bag</router-link></div><hr class="hr">
                                            <div class="li-item"> <img src="https://www.apple.com/ac/globalnav/7/en_US/assets/ac-store/savedbyyou.svg" alt="favorites.png"> <a href="#">Saved Items</a></div><hr class="hr">
                                            <div class="li-item"> <img src="https://www.apple.com/ac/globalnav/7/en_US/assets/ac-store/orders.svg" alt="orders.png"> <a href="#">Orders</a></div><hr class="hr">
                                            <div class="li-item"> <img src="https://www.apple.com/ac/globalnav/7/en_US/assets/ac-store/account.svg" alt="account.png"> <router-link to="/Account">Account</router-link></div><hr class="hr">
                                            <div class="li-item"> <img src="https://www.apple.com/ac/globalnav/7/en_US/assets/ac-store/signIn.svg" alt="signin.png"> <router-link to="/Signin">Sign in</router-link></div><br>
                                        </div>
                               <!-- </a>-->
                                
                            </div>
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
        <main class="main">
            <section class="collection-module" >
                <div>
                    <span  class="shop-ribbon-copy">
                        Shop early for the best selection of holiday favorites. <a> Shop now > </a>
                    </span>
                </div>
            </section>

            <section data-module-template="heroes">
                <div style="padding-top: 4px;background-color:#fbfbfd;">
                    

                    <div class="container">
                        <a  href="#" >
                            <span ><img src="https://firebasestorage.googleapis.com/v0/b/demoapple-53a3f.appspot.com/o/1.jpg?alt=media&token=8e1bb2f2-7ff1-4926-8c83-e01a0daa5116"></span>
                        </a>
                        <div class="unit-copy-wrapper centered">
                                        
                            <h2 class="headline" style="color: black;">iPhone 13 Pro</h2>
                            <h3 class="subhead"  role="presentation" >Oh. So. Pro.</h3>
                            <div class="cta-links">
                                     <a  style="margin-left:-4px;" href="#" >Learn more ></a>
                                    <a style="margin-left:35px;" class="icon icon-after icon-chevronright" href="#" >Buy</a>
                                        
                            </div>
                            
                        </div>
                    </div>

                    <div class="container" v-for="gorsel of result.gorseller" :key="gorsel.id">
                        <a  href="#" >
                            <span ><img  :src="gorsel.url"></span>
                        </a>
                        <div class="unit-copy-wrapper centered">
                                        
                            <h2 class="headline" style="color: rgb(255, 255, 255);">iPhone 13</h2>
                            <h3 class="subhead" style="color: #fec2eb;" >Your new superpower.</h3>
                            <div class="cta-links">
                                     <a style="margin-left:-4px;" href="#" >Learn more ></a>
                                    <a style="margin-left:35px;" href="#" >Buy</a>
                                        
                            </div>
                            
                        </div>
                    </div>  
                    

                    <div class="container">
                        <a  href="#" >
                            <span ><img src="https://www.apple.com//v/home/ag/images/heroes/macbook-pro/hero_macbookpro__eatonjfwvuc2_medium.jpg">></span>
                        </a>
                        <div class="unit-copy-wrapper centered">
                                        
                            <h2 class="headline" style="color: black;">MacBook Pro</h2>
                            <h3 class="subhead" >Supercharged for pros.</h3>
                            <div class="cta-links">
                                     <a style="margin-left:-4px;" href="#" >Learn more ></a>
                                    <a style="margin-left:35px;" href="#">Buy</a>
                                        
                            </div>    
                        </div>
                    </div>  

                    

                    <div class="unit-copy-wrapper ">
                        <div style="box-sizing: border-box;">                           
                            <div class="mainrow">
                                
                                <div class="maincolumn" style="background-color:#fff;">
                                    <a href="#">
                                    <div  class="homepod-mini containertext" >
                                           <div class="container-homepod">
                                                <h2>HomePod mini</h2>   
                                                 <div class="container-links">
                                                    <a style="margin-left:-4px;" href="#" >Learn more ></a>
                                                    <a style="margin-left:35px;" href="#">Buy</a>
                                        
                                                 </div>                                                
                                            </div>                                           
                                    </div>    
                                    </a>                         
                                </div>

                                <div class="maincolumn" style="background-color:#fff;" >
                                    <a href="#" >
                                        <div class="airpods-image containertext">
                                            <div class="container-airpods">
                                                <h2>AirPods</h2>
                                                <h3>All-new with Spatial Audio</h3>
                                                 <div class="container-links">
                                                    <a style="margin-left:-4px;" href="#" >Learn more ></a>
                                                    <a style="margin-left:35px;" href="#">Buy</a>
                                                 </div>                                                
                                            </div> 
                                        </div>
                                    </a>
                                </div>
                            </div>
                        </div>

                        <div style="box-sizing: border-box;">                           
                            <div class="mainrow">
                                 <div class="maincolumn" style="background-color:#fff;">
                                    <a href="#"> 
                                        <div  class="watch-image containertext">  
                                            <div class="container-watch">
                                                <span class="watch-new">New</span>
                                                <h2> <img src="https://www.apple.com/v/home/ag/images/logos/watch-series-7/tile_watch_logo_lte__h7snssb7mqq2_large.png"></h2>
                                                <h3>Introducing our largest display yet.</h3>
                                                 <div class="container-links">
                                                    <a style="margin-left:-4px;" href="#" >Learn more ></a>
                                                    <a style="margin-left:35px;" href="#">Buy</a>
                                                 </div>                                                
                                            </div>
                                                                                   
                                        </div>
                                    </a>
                                </div>

                                <div class="maincolumn" style="background-color:#fff;">
                                     <a href="#"> 
                                        <div  class="ipad-mini containertext">  
                                            <div class="container-watch">                                         
                                                <h2><img src="https://www.apple.com/v/home/ag/images/logos/arcade/logo__dcojfwkzna2q_large.png"></h2>
                                                <h3 style="font-size:20px;">Get 3 months free when you buy a new iPhone,iPad,iPod touch,Apple TV,or Mac.</h3>
                                                 <div class="container-links">
                                                    <a style="margin-left:-4px;" href="#" >Learn more ></a>
                                                    <a style="margin-left:35px;" href="#">Try it free<sup>1</sup></a>
                                                 </div>                                                
                                            </div>
                                                                                   
                                        </div>
                                    </a>
                                </div>
                            </div>
                        </div>

                        <div style="box-sizing: border-box;">                           
                            <div class="mainrow" style="padding-bottom:22px;">
                                <div class="maincolumn" style="background-color:#fff;">
                                      <a href="#"> 
                                        <div  class="apple-card containertext">  
                                            <div class="container-card">
                                                <h2><img src="https://www.apple.com/v/home/ag/images/logos/apple-card/logo__dcojfwkzna2q_large.png"></h2>
                                                <h3>Get up to 3% Daily Cash back <br> with every purchase.</h3>
                                                 <div class="container-links">
                                                    <a style="margin-left:-4px;" href="#" >Learn more ></a>
                                                    <a style="margin-left:35px;" href="#">Buy</a>
                                                 </div>                                                
                                            </div>
                                                                                   
                                        </div>
                                    </a>
                                </div>
                                <div class="maincolumn" style="background-color:#fff;">
                                     <a href="#"> 
                                        <div  class="tv-plus-charlie-brown-halloween-tile-charliebrown containertext">  
                                            <div class="container-swagger">
                                                <h2 style="color:white">TV+</h2>
                                                <h3 style="color:#ffd700; font-size:40px;font-weight:800;">SWAGGER</h3>
                                                 <div class="container-links">
                                                    <a style="margin-left:-4px;" href="#" >Learn more ></a>
                                                    <a style="margin-left:35px;" href="#">watch</a>
                                                 </div>                                                
                                            </div>
                                                                                   
                                        </div>
                                    </a>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
                

            </section>
        </main>

        <footer
        class="no-js"
        lang="en-US"
        id="ac-globalfooter">
            <div class="ac-gf-content">
                
                <div class="directorycontent">
                    <div class="row">
                        <div class="column" >
                            <h3>Shop and Learn</h3>
                                <li> <a href="#">Store </a></li>
                                <li> <a href="#" >Mac</a></li>
                                <li> <a href="#" >iPad</a></li>
                                <li> <a href="#" >iPhone</a></li>
                                <li> <a href="#" >Watch</a></li>
                                <li> <a href="#" >AirPods</a></li>
                                <li> <a href="#" >TV &amp; Home</a></li>
                                <li> <a href="#" >iPod touch</a></li>
                                <li> <a href="#" >AirTag</a></li>
                                <li> <a href="#" >Accessories</a></li>
                                <li> <a href="#" >Gift Cards</a></li>
                        </div>
                    
                        <div class="column">
                            <h3>Services</h3>
                            <li> <a href="#">Apple Music </a></li>
                            <li> <a href="#" >Apple TV+</a></li>
                            <li> <a href="#" >Apple Fitness+</a></li>
                            <li> <a href="#" >Apple News+</a></li>
                            <li> <a href="#" >Apple Arcade</a></li>
                            <li> <a href="#" >iCloud</a></li>
                            <li> <a href="#" >Apple One</a></li>
                            <li> <a href="#" >Apple Card</a></li>
                            <li> <a href="#" >Apple Books</a></li>
                            <li> <a href="#" >Apple Podcasts</a></li>
                            <li> <a href="https://www.apple.com/app-store/" >App Store</a></li>
                            <h3 style="padding-top: 24px;">Account</h3>
                            
                            <li> <a href="https://appleid.apple.com/us/">Manage your Apple ID</a></li>
                            <li> <a href="https://www.apple.com/us/shop/goto/account">Apple Store Account</a></li>
                            <li> <a href="https://www.icloud.com/">iCloud.com</a></li>
                        </div> 

                        <div class="column" >
                        <h3>Apple Store</h3>
                        
                            <li> <a href="https://www.apple.com/retail/">Find a Store </a></li>
                            <li> <a href="https://www.apple.com/retail/geniusbar/" >Genius Bar</a></li>
                            <li> <a href="https://www.apple.com/retail/learn/" >Today at Apple</a></li>
                            <li> <a href="https://www.apple.com/retail/learn/youth/" >Youth Programs</a></li>
                            <li> <a href="https://itunes.apple.com/us/app/apple-store/id375380948?mt=8" >Apple Store App</a></li>
                            <li> <a href="https://www.apple.com/shop/refurbished" >Refurbished and Clearance</a></li>
                            <li> <a href="https://www.apple.com/shop/browse/finance/PaypalFinancingLandingPage" >Financing</a></li>
                            <li>  <a href="https://www.apple.com/shop/trade-in" >Apple Trade In</a></li>
                            <li> <a href="https://secure.store.apple.com/shop/order/list" >Order Status</a></li>
                            <li> <a href="https://www.apple.com/shop/help" >Shopping Help</a></li>
                     
                        </div>

                        <div class="column" >
                        <h3 >For Business </h3>
                            <li> <a href="https://www.apple.com/business/">Apple and Business</a></li>
                            <li> <a href="https://www.apple.com/retail/business/">Apple and Business</a></li>    
                        <h3 style="padding-top: 24px;" >For Education</h3>
                            <li> <a href="https://www.apple.com/education/">Apple and Education</a></li>
                            <li> <a href="https://www.apple.com/education/k12/how-to-buy/">Shop for K-12</a></li>
                            <li> <a href="https://www.apple.com/us/shop/goto/educationrouting">Shop for College</a></li>                    
                        <h3 style="padding-top: 24px;" >For Healthcare</h3>
                            <li> <a href="https://www.apple.com/education/">Apple in Healthcare</a></li>
                            <li> <a href="https://www.apple.com/education/k12/how-to-buy/">Health on Apple Watch</a></li>
                            <li> <a href="https://www.apple.com/us/shop/goto/educationrouting">Health Records in iPhone</a></li>    
                        <h3 style="padding-top: 24px;" >For Government</h3>
                            <li> <a href="https://www.apple.com/education/">Shop for gove</a></li>
                            <li> <a href="https://www.apple.com/education/k12/how-to-buy/">Health on Apple Watch</a></li>
                            <li> <a href="https://www.apple.com/us/shop/goto/educationrouting">Health Records in iPhone</a></li>    
                        </div>

                        <div class="column">
                            <h3>Apple Values</h3>
                                <li> <a href="https://www.apple.com/accessibility/">Accessibility</a></li>
                                <li> <a href="https://www.apple.com/education/connectED/">Education</a></li>
                                <li> <a href="https://www.apple.com/environment/">Environment</a></li>     
                                <li> <a href="https://www.apple.com/diversity/">Inclusion and Diversity</a></li>
                                <li> <a href="https://www.apple.com/privacy/">Privacy</a></li>
                                <li> <a href="https://www.apple.com/racial-equity-justice-initiative/">Racial Equity and Justice</a></li>  
                                <li> <a href="https://www.apple.com/supplier-responsibility/">Supplier Responsibility</a></li>                     

                            <h3 style="padding-top: 24px;" >About Apple</h3>
                            <li> <a href="https://www.apple.com/newsroom/">Newsroom</a></li>
                            <li> <a href="https://www.apple.com/leadership/">Apple Leadership</a></li>
                            <li> <a href="https://www.apple.com/careers/us/">Career Opportunities</a></li>     
                            <li> <a href="https://investor.apple.com/">Investors</a></li>
                            <li> <a href="https://www.apple.com/compliance/">Ethics & Compliance</a></li>
                            <li> <a href="https://www.apple.com/apple-events/">Events</a></li>  
                            <li> <a href="https://www.apple.com/contact/">Contact Apple</a></li> 
                        </div>
                     </div>
                </div>

                <section class="ac-gf-footer">
                    <div style="font-weight: 500;" class="ac-gf-footer-shop">
                        More ways to shop:<a href="https://www.apple.com/retail/"> Find an Apple Store</a> or <a href="https://locate.apple.com/">other retailer</a> near you.<span class="no wrap"> Or call 1-800-MY-APPLE.</span>
                    </div>
                    <div style="text-decoration: none;" class="ac-gf-footer-locale">
                        <a class="ac-gf-footer-locale-link" href="https://www.apple.com/choose-country-region/">United States</a>
                    </div>
                    <div class="ac-gf-footer-legal">
                        <div class="ac-gf-footer-legal-copyright">Copyright © 2021 Apple Inc. All rights reserved.</div>
                            <div  class="ac-gf-footer-legal-links">
                                <a class="ac-gf-footer-legal-link" href="https://www.apple.com/legal/privacy/" data-analytics-title="privacy policy">Privacy Policy</a>
                                <a class="ac-gf-footer-legal-link" href="https://www.apple.com/legal/internet-services/terms/site.html" data-analytics-title="terms of use">Terms of Use</a>
                                <a class="ac-gf-footer-legal-link" href="https://www.apple.com/shop/browse/open/salespolicies" data-analytics-title="sales and refunds">Sales and Refunds</a>
                                <a class="ac-gf-footer-legal-link" href="https://www.apple.com/legal/" data-analytics-title="legal">Legal</a>
                                <a class="ac-gf-footer-legal-link" href="https://www.apple.com/sitemap/" data-analytics-title="site map">Site Map</a>
                            </div>
                    </div>
                </section>
                </div>

        </footer> 
    </nav>
</template>

<script>
/* apollo */
import { useQuery } from '@vue/apollo-composable'
import gql from 'graphql-tag'
// import { watch } from 'vue'


export default {
  name: "Home",
/* apollo */
  setup () {
    const { result } = useQuery(gql`
      query getHome{
        gorseller {
          id,
          url,
          
         
        }
      }
    `)
    return {
      result,
    }

  
  }
};
</script>

<style>
.li-item{
    padding:11px;
    display: flex;
    flex-direction: row;
    color:#0071e3;
}
.li-item img{
    margin-top: 12px;
    width: 22px;
    height: 22px;
    margin-left: 23px;
}
.p{
    font-family: 'Open Sans', sans-serif;
    padding: 5px;
    text-align: center;
    color: darkgrey;
    font-size: 15px;
    margin-top: 45px;
}
.hr{
    margin-top: 3px;
    border:none;
    border-top: 0.1px solid lightgray;
    width: 80%;
    margin-left: 30px;
}
.dropbtn {
  background-color: none;
  color: #0071e3;
  padding: 10px;
  font-size: 16px;
  border: none;
  
}

.dropdown {
  position:relative;
  display: inline-block;
  border-radius: 50px;
  margin: 0 auto;
  min-height: 90px;
  padding: 0 20px;
  z-index: 2;
  
}

.dropdown-content {
  font-family: 'Open Sans', sans-serif;
  display:none;
  position: absolute;
  background-color: white;
  min-width: 200px;
  z-index: 1;
  border-radius: 10px;
  padding: 10px;
  width: 300px;
  color:#0071e3;

}

.dropdown-content a {
 font-family: 'Open Sans', sans-serif;
  color:#0071e3;
  padding: 15px 20px;
  text-decoration: none;
  display: block;
  margin:6px;
  margin-top: 15px;
  font-size: 14px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.dropdown-content a:hover {color: #0071e3 !important; text-decoration: underline;}

.dropdown:hover .dropdown-content {color:#0071e3; display: block;}

.dropdown:hover .dropbtn {color:#0071e3;background-color:none;}
</style>
