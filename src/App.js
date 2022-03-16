import React, {useEffect} from "react"
import ContactUs from "./bodyComponent/ContactUs"
import UpperBody from "./bodyComponent/upperBody"
import Footer from "./header_footer/Footer"
import Header from "./header_footer/Header"
import LoginForm from "./login_signup/LoginForm"
import SignUpForm from "./login_signup/SignUpForm"
import Search from "./search/Search"
import $ from "jquery"

export default function(){

    useEffect(()=>{
        const jq = ()=>{ 
            $(document).ready(function(){
            $('.slick-carousel').slick({
              infinite: true,
              autoplay:true,
              autoplaySpeed:1500,
              slidesToShow: 1, // Shows a three slides at a time
              slidesToScroll: 1, // When you click an arrow, it scrolls 1 slide at a time
              arrows: false, // Adds arrows to sides of slider
              dots: true // Adds the dots on the bottom
            });
            $(".backtotop a").click(function() {
              $('html, body').animate({
                  scrollTop: $("#header").offset().top
              }, 2000);
          });
        });
        console.log("a")
        }
        jq()
    }, [])

    return(
        <>
        <Header />
        <UpperBody />
        <Search />
        <ContactUs />
        <Footer />
        </>
    )
}