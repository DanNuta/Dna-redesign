import React, { Component } from 'react';
import "./Shop.scss";
import ItemShopItself from './ShopItemsItself';
import { send } from 'emailjs-com';
import heart from "../../Pages/icon/heart.svg";
import { BrowserRouter as Router, Routes, Route, NavLink, Outlet, useParams, useHistory  } from 'react-router-dom';
import {ImagesCalitateSVG, ImagesCalitateSVG2, ImagesCalitateSVG3, ImagesCalitateSVGHeart, ImagesCalitateSVGHeartHover, ImagesCalitateSVGShop, ImagesCalitateSVGShopHover, ImagesInPreferinteSVG, ImagesInPreferinteSVGHover} from "../../../CalitateLikeSVG";


class Shop extends Component {


    state = {
        nume: "",
        email: "",
        telefon: "",
        id: this.props.shop.map(el =>el.id_produs),
        
    }


    adaugaInCosPreferate = (products) =>{
        this.props.onCos(products)

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



    
    sendEmail = (e) =>{

        e.preventDefault();

        if(this.state.nume.length === 0){
            alert("Introdu un nume")
            return
        }


        if (!this.state.email){
            alert("Introdu o adresa de mail corecta")
            return
        }
    
        if(isNaN(this.state.telefon) || this.state.telefon.length < 9 || this.state.telefon.length >= 10 ){
            alert("Introdu un un nr de telefon valid")
            return
        }

        if(this.state.id.length === 0){
            alert("Trebuie sa ai minin 1 produs in cos")
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
          
          this.setState({nume: "", email: "", telefon: ""})
    
       }


    deleteItem = (data) =>{
        this.props.deleteItemFromShop(data)
    }

    addNewCost = (data, id) =>{
        
        this.props.expenseElement(data, id)
    }



    componentDidMount() {
        window.scrollTo(0, 0)
      }




   

    render() {

        let counter = 0;
        let counterPrice = this.props.shop.map(el => el.price);


       for(let item of counterPrice){
           counter = counter + Number(item)
       }




       let wishList = this.props.elementAded.map(el => el.id_produs);
       let shopList = this.props.dataShop.map(el => el.id_produs);



       

        return ( 
                <div className="centru">

                    <h1>CUMPARATURI</h1>


                    <div className="shopItems">

                        <div className="element_header_shop">
                            <span>Produsul</span>
                            <span>Pret</span>
                            <span>Cantitate</span>
                            <span>Total</span>
                        </div>

                    </div>


                    <div className="element_products_shop">
                            {
                                this.props.shop.map(el => (
                                <ItemShopItself element={el}
                                                deleteItem={this.deleteItem}
                                                changeEl={this.addNewCost}/>
                                ))
                            }


                             {
                                this.props.onElementWislist.map(el => (
                                <ItemShopItself element={el}
                                                deleteItem={this.deleteItem}
                                                changeEl={this.addNewCost}/>
                                ))
                            }
                    </div>


                    <div className="spre_achitare">
                        <hr/>

                        <div className="spre_achitare_counter">
                            <h2>Spre achitare:</h2>
                            <h3>{counter} lei</h3>
                        </div>

                        </div>




                        <form onSubmit={this.sendEmail} className='formular' action="">

                            <h2>COMPLETEAZA  DATELE PENTRU A FI CONTACTAT</h2>

                            <div className="form_element">
                                <div className="nume div">
                                    <label htmlFor="nume">Nume</label>
                                    <input onChange={this.nume} type="text" name='nume' id='nume' placeholder='Ignatiuc Anastasia' />
                                </div>

                                <div className="email div">
                                    <label htmlFor="email">Email</label>
                                    <input onChange={this.email} type="email" name="email" id='email' placeholder='ignatiucanastasia@gmail.com' />
                                </div>

                                <div className="tel div">
                                    <label htmlFor="tel">Telefon</label>
                                    <input onChange={this.telefon} type="tel" name="id" id='tel' placeholder='+37369640087' />
                                </div>
                            </div>

                              <input className='input_btn' type="submit" value="Achita online" />
                        </form>















         <div className="prosude_similare">
              <h4>RECOMANDARI</h4>


          <div className='item_sililar'>
            {this.props.products.filter((item, index) => (index < 4))
                     .map((item) => {
                         return (
                             
                            
                                 <div key={item} className="item_p">
                                 <NavLink to={`/produse/${item.id_produs}`}>
                                     <div className="products_el">
                                         <div className="images_products">
                                         <img className='img' src={`http://localhost:1337${item.img_product.data.attributes.url}`} alt="Sfredel"  />
                                         </div>
                                         <p className='description_i'>{item.title_product}</p>
                                     </div>
                                     </NavLink>

                                     <div onClick={() => this.adaugaInCosPreferate(item)} className="hover_preferinte">
                                     <li>{wishList.includes(item.id_produs) ? <ImagesInPreferinteSVGHover/> : <ImagesInPreferinteSVG/>}</li>
                                        <p className='preferinte'>In preferinte</p>
                                     </div>
                                 </div>
                            
                                
                            
                         )
                     })
            }
        </div>

        </div>







          




                        



                

                
  </div> 
        );
    }
}
 
export default Shop;