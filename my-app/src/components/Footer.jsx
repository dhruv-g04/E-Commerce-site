import React from "react";
import { BiCopyright } from "react-icons/bi";
import { TfiTwitter } from "react-icons/tfi";
import { AiOutlineYoutube } from "react-icons/ai";
import { BsGlobe, BsInstagram,BsFacebook, BsFillTelephoneFill} from "react-icons/bs";
import {GrMapLocation} from "react-icons/gr";
import {MdEmail} from "react-icons/md";
function Footer() {
    const year = new Date().getFullYear();
    return (
        <section id="footer">
            <div id="contact">
                <div className="section-p1">
                    <h4>Contact Us</h4>
                    <p><strong><GrMapLocation/> </strong> 117, Cecil Clementi St, Model Town, Sarvodaya Nagar, Kanpur, Uttar Pradesh 208005</p>
                    <p><strong><BsFillTelephoneFill/> </strong> +91 XXXXXXXXXX</p>
                    <p><strong><MdEmail/> </strong>example@knp.jagran.in</p>
                </div>
                <div className="section-p1 follow">
                    <h4>Follow Us</h4>
                    <div className="icon">
                        <a href="https://www.jagran.com/"><BsGlobe /></a>
                        <a href="https://www.youtube.com/channel/UCSKgOW8Pg_eZymYJyJc432g"><AiOutlineYoutube /></a>
                        <a href="https://www.instagram.com/dainikjagrannews/?hl=en"><BsInstagram /></a>
                        <a href="https://www.facebook.com/dainikjagran/"><BsFacebook /></a>
                        <a href="https://twitter.com/JagranNews?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor"><TfiTwitter /></a>
                    </div>
                </div>
            </div>
            <h3 className="section-p1"><BiCopyright /> {year} Dainik Jagran</h3>
        </section>
    )
}

export default Footer;