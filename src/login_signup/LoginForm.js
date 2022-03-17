import React from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import axios from "axios"
import Cookies from "js-cookie";
import { signInWithEmailAndPassword } from "firebase/auth";
import { authFirebase } from "../lib/firebase";

export default function(){
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const navigateTo = useNavigate()

    const onSubmit = data => {
        axios.get("/login/user", {params : data})
        Cookies.set("username", data.username)
        Cookies.set("password", data.password)
        navigateTo("/")
    }

    return (
    <div className="loginPage">
            <div className="loginText">
                <img src="images/loginlogo.png" />
                <h3>Welcome to <span> Vanfood Paradise </span></h3>
                <p>Vancouver has many free and low-cost food programs, including grocery hampers, food bank programs, and lowcost groceries for those facing food insecurity. </p>
                <ul>
                    <li><a href="#"><i className="fa fa-long-arrow-right" aria-hidden="true"></i>Free Groceries </a></li>
                    <li><a href="#"><i className="fa fa-long-arrow-right" aria-hidden="true"></i>Take-out Meals</a></li>
                    <li><a href="#"><i className="fa fa-long-arrow-right" aria-hidden="true"></i>Hampers</a></li>
                </ul>
            </div>
            <div className="loginForm">
                <h6>Welcome</h6>
                <h3>Join The Community</h3>
                <form className="userloginform" onSubmit={handleSubmit(onSubmit)}>
                        <label>Email : </label>   
                        <input type="email" name="username" required {...register("username")}/>  
                        <label>Password : </label>   
                        <input type="password"  name="password" required {...register("password")}/>  
                        <button type="submit" className="btn-default">Log In</button> 
                </form>
                <p>Don’t have account? <a href="signup.html">Create Account</a></p>
            </div>
        </div>

    )
}