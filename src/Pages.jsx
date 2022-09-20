import React, { Component, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, NavLink, Outlet, useParams, useHistory  } from 'react-router-dom';
import start from "../src/Components/Pages/icon/star1.svg";
import buy from "../src/Components/Pages/icon/buy.svg";
import startNeselected from "../src/Components/Pages/icon/starNone.svg";
import verify from "../src/Components/Pages/icon/verify.svg";
import heartBlack from "../src/Components/Pages/icon/heartBlack.svg";
import { useState } from "react";
import { send } from 'emailjs-com';
import heart from "../src/Components/Pages/icon/header_icon/heart.svg";
import "./Pages.scss";
import calitate from "../src/Components/Pages/icon/calitate.svg";
import like from "../src/Components/Pages/icon/like.svg";
import garantie from "../src/Components/Pages/icon/garantie.svg";
import {ImagesCalitateSVG, ImagesCalitateSVG2, ImagesCalitateSVG3, ImagesCalitateSVGHeart, ImagesCalitateSVGHeartHover, ImagesCalitateSVGShop, ImagesCalitateSVGShopHover, ImagesInPreferinteSVG, ImagesInPreferinteSVGHover} from "./CalitateLikeSVG";




const Pages = (props) => {

    const { slug } = useParams();
    
    
    
    const [nume, setNume] = useState("");
    const [email, setEmail] = useState("");
    const [telefon, setTelefon] = useState("");
    const [valueElement, setValueElement] = useState("1");
    const [achitaOnline, setAchitaOnline] = useState(false);
    const [btnClick, setBtnClick] = useState(true);
    const [products, setProducts] = useState(props.element)
    
    let curentItem = products.find(item => item.id_produs === slug);

    const elementForm = {
        nume: nume,
        email: email,
        telefon: telefon

    }

    useEffect(() =>{
        setProducts(props.element)
    }, [props.element])


   


    



    


   
    


    const numeChange = (e) =>{
        setNume(e.target.value)
    }

    const emailChange = (e) =>{
        setEmail(e.target.value)
    }

    const telefonChange = (e) =>{
        setTelefon(e.target.value)
    }


    const adaugaInCos = () => {
           props.onCos(curentItem)
     }


     const adaugaInCosPreferate = (element) =>{
        props.onCos(element)
     }



     const adaugaLaFavorite = () => {
           props.onShop(curentItem)

           
     }


     const inputNumber = (e) => {
        setValueElement(e.target.value)

  }

  
  


     
          
  

 

  
 

 



  const achitaOnlineForm = () => {
    setAchitaOnline(true)
}


 const cancel = () =>{
    setAchitaOnline(false)
 }







    let wishList = props.elementAded.map(el => el.id_produs);
    let shopList = props.dataShop.map(el => el.id_produs);


 



 const sendEmail = (e) =>{

    e.preventDefault();

    if(nume.length === 0){
        alert("Introdu un nume")
        return
    }


    if (!email){
        alert("Introdu o adresa de mail corecta")
        return
    }

    if(isNaN(telefon) || telefon.length < 9 || telefon.length >= 10 ){
        alert("Introdu un un nr de telefon valid")
        return
    }


    send(
        'service_v186ofd',
        'template_m0n6104',
        elementForm,
        'user_HhwPsdYuSdseFT3DDVWkC'
      )
        .then((response) => {
          console.log('SUCCESS!', response.status, response.text);
        })
        .catch((err) => {
          console.log('FAILED...', err);
        });

      e.target.reset();



      
        setTimeout(() => {
          setAchitaOnline(false)
        }, 200);


        setBtnClick(false)
    
      
   }



  
    window.scrollTo(0, 0)



useEffect(() => {
    window.scrollTo(0, 0)

  }, []);



  




   


  
    return (

        <div className='center'>

            


            <div className="element_top_item">
                <div className="item_id">
                    <p><a className="links-a" href="/#ce_oferim">Servicii</a></p>
                    <p>|</p>
                    <p><NavLink to="/products">produse si accesorii</NavLink></p>
                    <p>|</p>
                    <p>{curentItem.title_product}</p>
                </div>
            </div>
                


        <div className="item">

            
                <div className='card_items'>

                <h4 className='title_responsive'>{curentItem.title_product}</h4>


                <div className="left_images">
                <img className='img' src={`http://localhost:1337${curentItem.img_product.data.attributes.url}`} alt="Sfredel"  />
                </div>

                <div className="right_text">
                    <h4>{curentItem.title_product}</h4>

                    <div className="element_about_products">

                        <div className="adauga_recenzie">
                            <div className="recenzii">
                                <span><img src={start} alt="" /></span>
                                <span><img src={start} alt="" /></span>
                                <span><img src={start} alt="" /></span>
                                <span><img src={start} alt="" /></span>
                                <span><img src={startNeselected} alt="" /></span>
                            </div>

                            <div className="nr_of_recenzie">
                                <p>(6) Recenzii</p>
                            </div>

                            <div className="space">
                                <p>|</p>
                            </div>

                            <div className="adauga_o_recenzie">
                                <p>Adauga o recenzie</p>
                            </div>
                        </div>


                        <div className="verify_element_stock">
                            <span><img src={verify} alt="" /> In stoc</span>
                            <p>Cod: <span> {curentItem.id_produs}</span></p>
                        </div>


                        <div className="price">
                            <span><h1 className='price_id'>{curentItem.price} lei</h1> <sup>{curentItem.price} lei</sup></span>
                        </div>

                    </div>


                    <div className="description">
                        <hr />
                        <h2>Description:</h2>
                        <p>{curentItem.description}</p>
                    </div>


                    <div className="counter_price">
                        <hr />
                          <h2>Cantitate:</h2>
                            
                            <div className="input_contacteaza">
                                        <input type="number"  onChange={inputNumber} min={1}  value={valueElement} />
                                        <button disabled={!btnClick} className="btn_cos" onClick={achitaOnlineForm}>Achita online</button>
                            </div>
                                
                            

                        
                    </div>


                    <div className="add_to_cart">

                       
                            <li onClick={adaugaLaFavorite}>{shopList.includes(curentItem.id_produs) ? <ImagesCalitateSVGShopHover/> : <ImagesCalitateSVGShop/>} Adauga in cos</li>
                            <li onClick={adaugaInCos}>{wishList.includes(curentItem.id_produs) ? <ImagesCalitateSVGHeartHover/> : <ImagesCalitateSVGHeart/>}Adauga la favorite</li>
                       

                    </div>
                </div>
            </div>

                
            

        </div>

















        <div className="prosude_similare">
            <h4>PRODUSE SIMILARE</h4>


            <div className='item_sililar'>
            {products.filter((item, index) => (index < 4) && (item.filter === curentItem.filter))
                     .map((item) => {
                         return (
                             
                             
                        
                                 <div className="item_p">
                                 <NavLink to={`/produse/${item.id_produs}`}>
                                     <div className="products_el">
                                         <div className="images_products">
                                         <img className='img' src={`http://localhost:1337${item.img_product.data.attributes.url}`} alt="Sfredel"  />
                                         </div>
                                         <p className='description_i'>{item.title_product}</p>
                                     </div>
                                     </NavLink>

                                     <div onClick={() => adaugaInCosPreferate(item)} className="hover_preferinte">
                                       <li>{wishList.includes(item.id_produs) ? <ImagesInPreferinteSVGHover/> : <ImagesInPreferinteSVG/>}</li>
                                        <p className='preferinte'>In preferinte</p>
                                     </div>
                                 </div>
                            
                                
                            
                         )
                     })
            }
            </div>

        </div>


        <div className="calitate_garantie">

            <div className="calitate calitate_gr">
                <ImagesCalitateSVG2/>
                <h2>Calitate inalta</h2>
            </div>
            <div className="like calitate_gr">
                <ImagesCalitateSVG/>
                <h2>Protectie exceptionala</h2>
                            </div>

            <div className="garantie calitate_gr">
            <ImagesCalitateSVG3/>
                <h2>Garantie de lunga durata</h2>
            </div>
        </div>

        








        {achitaOnline && <div className="form">
            <form onSubmit={sendEmail} className=' form_item' action="">

        <h2>COMPLETEAZA  DATELE PENTRU A FI CONTACTAT</h2>

        <div className="form_element">
            <div className="nume div">
                <label htmlFor="nume">Nume</label>
                <input onChange={numeChange} type="text" name='nume' id='nume' placeholder='Ignatiuc Anastasia' />
            </div>

            <div className="email div">
                <label htmlFor="email">Email</label>
                <input onChange={emailChange} type="email" name="email" id='email' placeholder='ignatiucanastasia@gmail.com' />
            </div>

            <div className="tel div">
                <label htmlFor="tel">Telefon</label>
                <input onChange={telefonChange} type="tel" name="valueElement"  id='tel' placeholder='+37369640087' />
            </div>
        </div>    

           <div className="button">
                <input  className="input_btn" type="submit" value="Achita online" />
                <button onClick={cancel}>Cancel</button>
            </div>

        
           </form>
        </div>
        }

       </div>

       
    
        
        
    )

}
 
export default Pages;