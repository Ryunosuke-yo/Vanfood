import React from "react";

export default function(){

    return (
        <section className="contact-section">
        <div className="container">
            <div className="contactWrap">
            <div className="contactInfo">

                <h3>Contact Us</h3>
                <p>Lets make something new, different and more meaningful to make this world a better place to live.</p>

                <div className="singleInfo">
                <div className="infoIcon">
                    <img src="images/phone.png" />
                </div>
                <div className="infoText">
                    <h4>Call</h4>
                    <p><a href="tel:+1 7783170000">+1 778 317 XXXX</a></p>
                </div>
                </div>
                <div className="singleInfo">
                <div className="infoIcon">
                    <img src="images/email.png" />
                </div>
                <div className="infoText">
                    <h4>Email</h4>
                    <p><a href="mailto:Vanfood@gmail.com">Vanfood@gmail.com</a></p>
                </div>
                </div>
                <div className="singleInfo">
                <div className="infoIcon">
                    <img src="images/address.png" />
                </div>
                <div className="infoText">
                    <h4>Address</h4>
                    <p>#xxxx E Broadway, Vancouver</p>
                </div>
                </div>
            </div>
            <div className="contactform">
                <form>
                <div className="contactInputWrap">
                    <div className="inputfield">
                    <label>Name</label>
                    <input type="name" name="name" />
                    </div>
                    <div className="inputfield">
                    <label>Email</label>
                    <input type="email" name="email" />
                    </div>
                    <div className="inputfield">
                    <label>Phone</label>
                    <input type="tel" name="phone" />
                    </div>
                </div>
                <div className="inputfield">
                    <label>Message</label>
                    <textarea rows="4"></textarea>
                </div>
                <button type="submit" className="btn-primary">Submit</button>

                </form>
            </div>
            </div>
        </div>
        </section>
    )
}