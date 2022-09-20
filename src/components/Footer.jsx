import React, { Component } from 'react';
import "./Footer.scss";
import {  NavLink } from "react-router-dom";
import telefon_img from "../../src/images/footer_icon/telefon.svg";
import adress_img from "../../src/images/footer_icon/adress.svg";
import arrow_img from "../../src/images/footer_icon/arrow_top.svg";
import email_img from "../../src/images/footer_icon/email.svg";
import logo from "../../src/images/Logo/logo.svg";
import facebook from "../../src/Components/Pages/icon/header_icon/facebook.svg";
import youtube from "../../src/Components/Pages/icon/header_icon/youtube.svg";
import HashLink from "react-router-hash-link";
import {Link , animation as scroll} from "react-scroll";




class Footer extends Component { 


    


    scrollToTop = () =>{
        

        window.scrollTo({
            top: 0,
            left: 0,
            behavior: "smooth"
        });
    }
     

    render() { 
        return ( 
            <footer>
                <div className="footer_div center">

                    <div className="left_footer">
                        <ul>
                            <li><NavLink to="/"><img src={logo} alt="" srcset="" /></NavLink></li>
                            <li>Program: 9:00 AM - 19:00 PM</li>
                            <li><a href="tel:+1123-456-7890"><span><img src={telefon_img}/></span>0767216161</a></li>
                            <li><span><img src={adress_img}/></span>Strada Marta 22A Iasi, Romania</li>
                            <li><span><img src={email_img}/></span>office@dna-electric.ro</li>
                        </ul>
                    </div>


                    <div className="right_footer">

                        <nav className='nav_footer'>
                            <ul className="links_active">
                                <li><NavLink  activeclassname="links_click" className="links" to="/">Despre</NavLink></li>
                                <li><NavLink activeclassname="links_click" className="links" to="/products">Produse</NavLink></li>
                                <li> <a className="links-a" href="/#ce_oferim">Servicii</a></li>
                                <li><NavLink activeclassname="links_click" className="links" to="/contact">Contacte</NavLink></li>
                            </ul>
                           


                            <ul className="links_icon">
                                <li><a href="https://www.facebook.com/"  target="_blank" ><img src={facebook} alt="" /></a></li>
                                <li><a href="https://www.youtube.com/" target="_blank"><img src={youtube} alt="" /></a></li>
                            </ul>
                        </nav>


                        <div className="map">
                            <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d21755.119895422107!2d28.783206899999996!3d47.032577749999994!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sro!2s!4v1639481897609!5m2!1sro!2s" ></iframe>
                        </div>


                        

                    </div>


                    <div className="arrow_right">
                            <img onClick={this.scrollToTop} src={arrow_img}  />
                    </div>



                        <div className="footer_text">
                            <p>© DNA Electric 2021. All rights reserved</p>
                            <p className="created">Created by <span><a href="https://web.metics.md/" target="_blank">WebMetics</a></span></p>
                        </div>

                </div>

            </footer>
         );
    }
}
 
export default Footer;