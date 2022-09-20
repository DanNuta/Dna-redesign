import React, { Component } from 'react';
import tel from "../../Pages/icon/telefon.svg";
import "./Contacte.scss";
import email from "../../Pages/icon/email.svg";
import adress from "../../Pages/icon/adress.svg";
import { NavLink } from "react-router-dom";
import { send } from 'emailjs-com';







class Contacte extends Component {


    state = {
            nume: "",
            email: "",
            telefon: "",
            mesage: ""
        

    }

    nume = (e) =>{
        let value = e.target.value;
        this.setState({nume: value})
    }

    email = (e) =>{
        let value = e.target.value;
        this.setState({email: value})
    }

    telefon = (e) =>{
        let value = e.target.value;
        this.setState({telefon: value})
    }

    mesage = (e) =>{
        let value = e.target.value;
        this.setState({mesage: value})
    }




   sendEmail = (e) =>{

    e.preventDefault();

    if(this.state.nume.length === 0){
        alert("Introdu un nume")
        return
    }


    var emailRegex = /^[-!#$%&'*+\/0-9=?A-Z^_a-z{|}~](\.?[-!#$%&'*+\/0-9=?A-Z^_a-z`{|}~])*@[a-zA-Z0-9](-*\.?[a-zA-Z0-9])*\.[a-zA-Z](-?[a-zA-Z0-9])+$/;


    if (!this.state.email){
        alert("Introdu o adresa de mail corecta")
        return
    }

    if(isNaN(this.state.telefon) || this.state.telefon.length < 9 || this.state.telefon.length >= 10 ){
        alert("Introdu un un nr de telefon valid")
        return
    }

    if(this.state.mesage.length === 0){
        alert("Introdu un mesaj")
        return
    }

    

    
    
    send(
        'service_v186ofd',
        'template_m0n6104',
        this.state,
        'user_HhwPsdYuSdseFT3DDVWkC'
      )
        .then((response) => {
          console.log('SUCCESS!', response.status, response.text);
        })
        .catch((err) => {
          console.log('FAILED...', err);
        });

      e.target.reset();
      
      this.setState({nume: "", email: "", telefon: "", mesage: ""})

   }
   
   



   componentDidMount() {
    window.scrollTo(0, 0)
  }


    render() { 
        return ( 

            <div className='centru'>
                <h1 className='contact_mobile'>CONTACTE</h1>
                <p>Simțiți-vă liber să ne contactați oricând. Vom reveni cu un mesaj cât mai curând posibil!</p>

                <form onSubmit={this.sendEmail}>
                    <h2>Trimite-ne un mesaj</h2>

                    <div className="form_element">

                       
                        <div className="nume_email">
                                
                                <div className="div">
                                    <label htmlFor="nume">Nume</label>
                                    <input onChange={this.nume} type="text" name='nume' id="nume" placeholder='Ignatiuc Anastasia' />
                                </div>

                                <div className="div">
                                    <label className='email' htmlFor="email">Email</label>
                                    <input onChange={this.email} type="email" name="email" id="email" placeholder='ignatiucanastasia@gmail.com' />

                                </div>

                               <div className="div">
                                 <label htmlFor="tel">Telefon</label>
                                 <input onChange={this.telefon} type="tel" name="telefon" id="tel" placeholder='+37369640087' />
                               </div> 

                            </div>

                            <div className="center_message">
                                <label htmlFor="mesasge">Mesaj</label>
                                <textarea  onChange={this.mesage} name="mesage" id="" cols="30" rows="10" placeholder='Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen'></textarea>
                            </div>

                            


                        

                           <div className="despre_noi">

                           <input className='submit_btn_despre' type="submit" value="Contactează-ne" />



                               <div className="despre_noi_content">


                                   <h2>Despre noi</h2>

                                   <div className="despre_noi_info">

                                       <div className="tel despre">
                                           <img src={tel} alt=""  />
                                           <p>0767216161</p>
                                       </div>

                                       <div className="adress despre">
                                           <img src={adress} alt="" />
                                           <p>Strada Marta 22A Iasi</p>
                                       </div>

                                       <div className="email despre">
                                           <img src={email} alt="" />
                                           <p>office@dna-electric.ro</p>
                                       </div>
                                   </div>

                               </div>

                           
                           </div>


                           <div className="background_yollow"></div>



                           <input className='submit_btn' type="submit" value="Contactează-ne" />


                           


                    </div>


                    



                   
                </form>


                <div className="map">
                     <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d21755.118692880522!2d28.7832248!3d47.0325807!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sro!2s!4v1641307860396!5m2!1sro!2s" loading="lazy"></iframe>
                </div>

                
            </div>

         );
    }
}
 
export default Contacte;