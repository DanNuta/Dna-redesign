import React, { Component } from 'react';
import ProductsItem from './ProdusctItem';
import "./Products.scss";
import descriereProdus from "../../Pages/instalarea/despre_produse.png";
import axios from "axios";
import { BrowserRouter as Router, Routes, Route, NavLink, Outlet, useParams } from 'react-router-dom';

class Products extends Component {


    state = {
        produse: this.props.products,
        filterData: this.props.products,
        dataItems: [],
        radioBtnCheck: "",
        dataBack: [], 
        idProducts: []
        
    }



     async componentDidMount(){
         let category = await axios.get("http://localhost:1337/api/categories?populate=*");
         this.setState({dataBack: category.data.data});
     }


     componentDidUpdate(previousProps, previousState) {
        if (previousProps.products !== this.props.products) {
            this.setState({filterData: this.props.products})
        }

        if (previousProps.products !== this.props.products) {
            this.setState({produse: this.props.products})
        }
    }


  








    elementFromItems = (dataItem) =>{
        this.props.onelementFromProducts(dataItem)

    }


    filterProducts = (elFilter) =>{
        let pda = this.state.produse.filter(el => el.filter === elFilter);
        this.setState({filterData: pda})
        this.setState({radioBtnCheck: elFilter})
    }




    elementShop = (data) =>{
        this.props.onProductShop(data)
    }



    filter = (idF) =>{

        let elementFilter = this.state.produse.filter(el => el.filter == idF);
        this.setState({filterData: elementFilter})

        
       // let products = this.state.dataBack.filter(el => el.id === idF);
        //let elementProducts =  products.map(el => el.attributes.products.data);
        //this.setState({produse: elementProducts})
       // console.log(elementProducts)



    }



   
    render() {

        let newArray = [];

        {this.state.produse.filter(el => {
            if(newArray.includes(el.filter)){
                return
            }else{
                newArray.push(el.filter)
            }

        })}


        

       
        
        
        



        return ( 

           



            <div className="produse  center">

                


                <div className="text_top">
                    <div className="section_nav">
                        <p><a className="links-a" href="/#ce_oferim">Servicii</a></p>
                        <p>|</p>
                        <p><NavLink to="/products">produse si accesorii</NavLink></p>
                    </div>



                    <h1>PRODUSE SI ACCESORII</h1>
                </div>


               

                    <div className="filter">
                        <h2>Categorie</h2>

                        <div className="products_element">
                            <h3>Paratrasnet PDA</h3>
                            <div className="radion_btn">
                               
                               <ul>

                                   {newArray.map(el =>(
                                       <li onClick={() =>this.filterProducts(el)}>
                                           <div className='border_li'>
                                               <div className={this.state.radioBtnCheck === el ? "check_inside_li" : ""}></div>

                                           </div>
                                           <p className='paragraph'>{el}</p>
                                     
                                       </li>
                                   ))}


                                   
                                   
                                    

 


                                    
                               </ul>
                               


                            </div>
                            
                        </div>
                        
                    </div>




                    <div className="products_filters">

                        {this.state.filterData.map(el => (

                          

                                <ProductsItem 
                                    element={el}
                                    onDataItems={this.elementFromItems}
                                    onElementShop={this.elementShop}
                                    elementAded={this.props.elementAded}
                                    dataShop={this.props.dataShop}
                                />

                           
                        ))}
                    </div>



                    



                    
            </div>
         );
    }
}
 
export default Products;