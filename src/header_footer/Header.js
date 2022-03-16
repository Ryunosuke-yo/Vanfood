import React from "react";

export default function(){

    return (
        <header className="header" id="header">
    <div className="headerWrap">
      <div className="logo">
        <img src="images/logo.png" />
      </div>
      <div className="rightHeader">
        <ul>
          <li className="active"><a href="#">Home</a></li>
          <li><a href="#">Check Eligibility</a></li>
          <li><a href="#">Contact Us</a></li>
        </ul>
        <div className="search-container">
          <form action="/action_page.php">
            <input type="text" placeholder="Search.." name="search" />
            <button type="submit"><i className="fa fa-search"></i></button>
          </form>
        </div>
        <div className="loginUser">
          <a href="#"><img src="images/user.png" /></a>
        </div>
      </div>
    </div>
  </header>
    )
}




