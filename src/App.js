import React, { Component } from 'react';
import NavBar from './Components/NavBar';
import { BrowserRouter as Router, Routes, Route, NavLink } from 'react-router-dom';
import "./App.scss";
import Home from './Components/Pages/Home/home';
import Footer from './Components/Footer';
import coockie from "../src/Components/Pages/icon/cookies.svg";
import Products from './Components/Pages/Products/Products';

import axios from "axios";



import Shop from './Components/Pages/Shop/Shop';
import Contacte from './Components/Pages/Home/Contacte';
import NewProducts from './NewProducts';
import ProductsItem from './Components/Pages/Products/ProdusctItem';
import Pages from './Pages';
import Politica from './PoliticaDeConfidentialitate';
import NotFound from './NotFound';







class App extends Component {


    

    state = {
        coockie: JSON.parse(localStorage.getItem('coockie')),
        elementAded: [], 
        dataShop: [],
        dataItem: "",
        elementWishListShop: [],
        firstPages: [],
        localStorageElement: [],
        itemSection: "",
        produse: [],

    }


  
 async componentDidMount(){
    let products = await axios.get("http://localhost:1337/api/products?populate=*");
    let dataItem = await products.data.data;

    for(let item of dataItem){
        this.setState({produse: [...this.state.produse, item.attributes] }) 
        console.log("Item inside mount", item)

    }


    console.log("Produse_API",dataItem)

   
    
 }

    

    

    exportDataFromHome = (dataHome) =>{
        let elementAded = this.state.elementAded.map(el => el.id_produs);

        if(elementAded.includes(dataHome.id_produs)){
            return;
        }else{
            this.setState({elementAded: [...this.state.elementAded, dataHome]})
        }
    }




    elementFromProducts = (dataItem) =>{
        

        let elementAded = this.state.elementAded.map(el => el.id_produs);

        if(elementAded.includes(dataItem.id_produs)){
            return;
        }else{
            this.setState({elementAded: [...this.state.elementAded, dataItem]})
        }
        
    }


    delete = (deleteItem) =>{

       
    }


   


    deleteItemFromShop = (data) =>{
        let idShop = data.id_produs;
        let newArray = this.state.dataShop.filter(el => el.id_produs !== idShop);
        
        this.setState({dataShop: newArray})

    }


    deleteElementFromWishList = (data) =>{
        let idElement = data.id_produs;
        let newArray = this.state.elementAded.filter(el => el.id_produs !== idElement)

        this.setState({elementAded: newArray})

    }



    addNewPrice = (data, idShop) =>{

        //this.setState({dataShop:  item.map(el => (el.id_produs === idShop) ? {...el, price: el.curentPrice * data, counter: el.counter+1} : el)})

        this.setState({dataShop: this.state.dataShop.map(el => el.id_produs == idShop ? {...el, price: Number(el.curentPrice * data), counter: el.counter + 1} : el)})
    
       
    }


    solicitaApel = (data) =>{
        this.setState({dataShop:  data})   
    }


    searchItem = (data) =>{
       this.setState({firstPages: [...this.state.firstPages, data]})
    }



    cos = (data) =>{
        let elementAded = this.state.elementAded.map(el => el.id_produs);

        if(elementAded.includes(data.id_produs)){
            return;
        }else{
            this.setState({elementAded: [...this.state.elementAded, data]})
        }

        
    }





    shop = (data) =>{

        let elementAded = this.state.dataShop.map(el => el.id_produs);

        if(elementAded.includes(data.id_produs)){
            return;
        }else{
            this.setState({dataShop: [...this.state.dataShop, data]})
        }

        

    }



    deleteAllWishList = () =>{
        this.setState({elementAded: []})
    }



    newProducts = (data) =>{
        this.props.produse.push(data)
  
    }


    desactiveCoockie = () =>{
        this.setState({coockie: false})
    }


    


    


   
    



    render() { 




        return ( 
            <div className={this.state.coockie ? "react_project" : ""}>
                <Router>


                    <NavBar dataItem={this.state.dataItem}
                            wishList={this.state.elementAded}  
                            onDelete={this.delete}
                            onShoping={this.state.dataShop}
                            selectElementFromWishList={this.solicitaApel}
                            onDeleteElementFromWishList={this.deleteElementFromWishList}
                            onDeleteAllArray={this.deleteAllWishList}/>
                            
                    <Routes>

                        <Route exact path='/' element={<Home 
                               onExportData={this.exportDataFromHome}
                               onSearchItem={this.searchItem}
                               products={this.state.produse}
                               elementAded={this.state.elementAded}
                              />}>

                        </Route>


                        <Route exact path="/products" element={<Products
                               onelementFromProducts={this.elementFromProducts} 
                               products={this.state.produse}
                               onProductShop={this.shop}
                               elementAded={this.state.elementAded}
                               dataShop={this.state.dataShop}
                               
                               />}>    
                        </Route>



                        <Route exact path="/shop"
                            element={<Shop 
                                shop={this.state.dataShop}
                                deleteItemFromShop={this.deleteItemFromShop}
                                expenseElement={this.addNewPrice}
                                onElementWislist={this.state.elementWishListShop}
                                products={this.state.produse}
                                onCos={this.cos}
                                onShop={this.shop}
                                elementAded={this.state.elementAded}
                                dataShop={this.state.dataShop}/>
                                }>

                        </Route>


                        <Route exact path="/contact" element={<Contacte/>}>

                        </Route>



                        


                        

                        


                        <Route path="/d" element={<NewProducts
                                                   onAddNewProducts={this.newProducts}/>}>

                        </Route>




                            
                            <Route   path="/produse/:slug" element={<Pages element={this.state.produse}
                                                                          onCos={this.cos}
                                                                          onShop={this.shop}
                                                                          elementAded={this.state.elementAded}
                                                                          dataShop={this.state.dataShop}
                                                                          
                                                                          />}>

                            </Route>

                            <Route path="Privacy" element={<Politica/>}></Route>


                            <Route path="*" element={<NotFound/>}></Route>
                        



                        


                        



                        </Routes>


                    

                    {
                        this.state.coockie && 
                        <div className="cookie">
                            <div className="inside">
                                <img src={coockie}></img>
                                <h1>Noi utilizam cookies</h1>
                                <p>Utilizand acest site sunteti de acord cu folosirea cookie-urilor. <span onClick={this.desactiveCoockie}><NavLink className="confidentialitate" to="/Privacy"> Conusltati politica noastra privind modulele cookie si privacy policy.</NavLink></span></p>
                                <button onClick={this.coockies}>Accepta</button>
                            </div>
                        </div>
                    }



                    <Footer/>
                    
                </Router>


            </div>
         );
    }
}
 
export default App;