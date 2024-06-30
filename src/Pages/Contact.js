import React from 'react';
import './Contact.css';
import { FacebookOutlined, TwitterOutlined, LinkedinOutlined, YoutubeOutlined, PinterestOutlined,  GoogleOutlined, WeiboOutlined } from '@ant-design/icons';

const Contact = () => {
    return (
        <div>
            <div className="map-container">
                <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.188693106687!2d78.44950137441277!3d17.426992104859565!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb97080c74644b%3A0x8eb2c8d96d1212f4!2sPanjagutta%2C%20Hyderabad%2C%20Telangana%2C%20India!5e0!3m2!1sen!2sus!4v1622703332730!5m2!1sen!2sus" 
                    width="100%" 
                    height="100%" 
                    style={{ border: 0 }} 
                    allowFullScreen="" 
                    loading="lazy">
                </iframe>
            </div>

            <div className="container">
                <div className="contact-info">
                    <h3>Contact Info</h3>
                    <p><strong>Address:</strong> Panjagutta, Hyderabad, Telangana, India</p>
                    <p><strong>Phone:</strong> +91 81200 81200</p>
                    <p><strong>Email:</strong> finpoint@example.com</p>
                </div>
                <div className="contact-form">
                    <h3>Get in Touch with Us</h3>
                    <form>
                        <input type="text" name="name" placeholder="Your Name" required />
                        <input type="email" name="email" placeholder="Your Email" required />
                        <textarea name="message" placeholder="Your Message" required></textarea>
                        <button type="submit">SEND MESSAGE</button>
                    </form>
                </div>
                <div className="social-icons">
                    <h3>Get Social</h3>
                    <a href="#"><FacebookOutlined /></a>
                    <a href="#"><TwitterOutlined /></a>
                    <a href="#"><GoogleOutlined /></a>
                    <a href="#"><LinkedinOutlined /></a>
                    <a href="#"><YoutubeOutlined /></a>
                    <a href="#"><PinterestOutlined /></a>
                    <a href="#"><WeiboOutlined /></a>
                </div>
            </div>
        </div>
    );
}

export default Contact;
