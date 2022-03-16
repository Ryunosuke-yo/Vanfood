import React, { useEffect } from "react";
import ImageGallery from 'react-image-gallery';
import { Link } from "react-router-dom";


export default function(){

    const carouselArray = [
        {
            original : "images/1.jpg",
            originalWidth : "500px",
            originalHeight : "500px"
        
        },
        {
            original : "images/2.jpg",
            originalWidth : "500px",
            originalHeight : "500px"
        },
        {
            original : "images/3.jpg",
            originalWidth : "500px",
            originalHeight : "500px"
        },
    ]

    return (
    <main>
        <Link to="/login">
        <a>test login page</a>
        </Link>
        <Link to="/signup">
        <a>test signup page</a>
        </Link>
        <section className="hero-section">
        <div>
        <ImageGallery items={carouselArray} showFullscreenButton={false} showPlayButton={false} autoPlay={true} showBullets={true}/> 
        </div>
        </section>
        <section className="about-sec">
        <div className="container">
            <p>Vancouver has many free and low-cost food programs, including grocery hampers, food bank programs, and
            lowcost groceries for those facing food insecurity.</p>
            <a href="#" className="btn-primary">Join Today !</a>
        </div>
        </section>
        
    </main>
    )
}