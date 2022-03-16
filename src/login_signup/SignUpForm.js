import React from "react";

export default function(){

    return (
        <div className="loginPage">
            <div className="loginText">
            <img src="../images/loginlogo.png" />
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
            <h3>Sign Up as a new user</h3>
            <form className="userloginform" action="/postuser" method="post">
                    <label>Email : </label>   
                    <input type="email" name="username" required className="signUp_email" />  
                    <label>Password : </label>   
                    <input type="password"  name="password" required className="signUp_password" />  
                    <button type="submit" class="btn-default">Sign Up</button> 
            </form>
            <p>Already have an account? <a href="login.html">Login</a></p>
            </div>
        </div>
    )
}