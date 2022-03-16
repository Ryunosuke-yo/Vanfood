import React from "react";


export default function(){

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
                <form className="userloginform">
                        <label>Email : </label>   
                        <input type="email" name="username" required />  
                        <label>Password : </label>   
                        <input type="password"  name="password" required />  
                        <button type="submit" className="btn-default">Log In</button> 
                </form>
                <p>Don’t have account? <a href="signup.html">Create Account</a></p>
            </div>
        </div>

    )
}