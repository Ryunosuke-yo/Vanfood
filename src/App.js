import React, {useEffect, useState} from "react"
import ContactUs from "./bodyComponent/ContactUs"
import UpperBody from "./bodyComponent/upperBody"
import Footer from "./header_footer/Footer"
import Header from "./header_footer/Header"
import { authFirebase, initFirebase } from "./lib/firebase"
import LoginForm from "./login_signup/LoginForm"
import SignUpForm from "./login_signup/SignUpForm"
import Search from "./search/Search"
import axios from "axios"
import Cookies from "js-cookie"
import { getAuth, signInWithEmailAndPassword } from "firebase/auth"

export default function(){
  const [user, setUser] = useState()

  useEffect(()=>{
      const nameCookie = Cookies.get("username");
      const passwordCookie = Cookies.get("password");
        
        initFirebase
        signInWithEmailAndPassword(authFirebase, nameCookie, passwordCookie)
        .then((userCredential) => {
            // Signed in
            const user = userCredential.user;
            console.log(user)
          })
          .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(error)
          });
          const url = `/login/user?username=${nameCookie.replace("@", "%40")}&password=${passwordCookie}`
          console.log(url)
          axios.get(url)
          .then(res=>setUser(res.data))
          .catch(error=>console.log(error))

          // "/login/user?username=login%40login.jp&password=123456"
        // const getUser = async ()=>{
        //     const res = await axios.get("/login/user", {params : {
        //         username : nameCookie,
        //         password : passwordCookie
        //     }})
            
        //     console.log(res.data)
        // }
        // getUser()
      
    },[])

    return(
        <>
        <Header />
        {`signed in as ${user?.name}`}
        <UpperBody />
        <Search />
        <ContactUs />
        <Footer />
        </>
    )
}