import React, { Component } from 'react';
import "./ElementWishList.scss";
import close from "../../src/Components/Pages/icon/close.svg";

class ElementWishList extends Component {



    elementDelete = () =>{
        this.props.delete(this.props.item)

        console.log("el")

    }

    

    
    
    render() { 
        return ( 
            <React.Fragment>
                
                    <div className= "elementWish">
                        <div className="img">
                           <img src={`http://localhost:1337${this.props.item.img_product.data.attributes.url}`} alt="" />
                        </div>

                        <div className="description">
                            <p>{this.props.item.title_product }</p>
                            <h2>{this.props.item.curentPrice} lei</h2>
                        </div>

                        <img onClick={this.elementDelete} className="close" src={close} alt="" />
                        
                    </div>
               
            </React.Fragment>
         );
    }
}
 
export default ElementWishList;