import React, { Component } from 'react';
import close from "../../Pages/icon/close.svg";
import "./ShopItemsItself.scss";

class ItemShopItself extends Component {


    close = () =>{
        this.props.deleteItem(this.props.element)
    }



    changeCantity = (e) =>{

        let value = e.target.value;
        this.props.changeEl(value, this.props.element.id_produs);


       

       

        


    }




    render() { 

        
        return ( 
            <div className="elementAded">

                <hr/>

                <div className="element_itself">

                    <div className="element_products">
                        <div className="img_left">
                            <img src={`http://localhost:1337${this.props.element.img_product.data.attributes.url}`} alt="" />
                        </div>
                        <div className="text_right">
                            <h2>{this.props.element.title_product}</h2>
                            <p>Cod: <span>{this.props.element.id_produs}</span></p>
                            <p><h3>Descriere:</h3>{this.props.element.description.substring(0, 300)}...</p>
                        </div>
                    </div>


                    <div className="price_total_counter">

                        <div className="price">
                            
                            <p>{this.props.element.curentPrice}lei</p>
                        </div>
                        <div className="counter">
                            <h3>Cantitate:</h3>
                            <input min="1"
                                   type="number" placeholder='1'
                                   
                                   onChange={this.changeCantity}
                                   />
                        </div>

                        <div className="price_total">
                            <h3>Pret:</h3>
                            <p>{this.props.element.price} lei</p>
                        </div>

                        <div className="cancel_products">
                            <img onClick={this.close} src={close} alt="" />
                        </div>


                    </div>

                </div>
            </div>
         );
    }
}
 
export default ItemShopItself;