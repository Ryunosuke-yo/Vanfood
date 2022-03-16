import React, {useEffect} from "react"
import ContactUs from "./bodyComponent/ContactUs"
import UpperBody from "./bodyComponent/upperBody"
import Footer from "./header_footer/Footer"
import Header from "./header_footer/Header"
import { initFirebase } from "./lib/firebase"
import LoginForm from "./login_signup/LoginForm"
import SignUpForm from "./login_signup/SignUpForm"
import Search from "./search/Search"

export default function(){

    initFirebase

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