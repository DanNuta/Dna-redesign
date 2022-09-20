import React, { Component } from 'react';
import "./NavBar.scss";
import {  NavLink } from "react-router-dom";
import logo from "../../src/images/Logo/logo.svg";
import shop from "../../src/Components/Pages/icon/header_icon/shop.svg";
import heart from "../../src/Components/Pages/icon/header_icon/heart.svg";
import facebook from "../../src/Components/Pages/icon/header_icon/facebook.svg";
import youtube from "../../src/Components/Pages/icon/header_icon/youtube.svg";
import Home from './Pages/Home/home';
import ElementWishList from './ElementWishList';
import menu from "../../src/Components/Pages/icon/menu.svg";
import cancel from "../../src/Components/Pages/icon/cancel.svg";
import axios from 'axios';


class NavBar extends Component {

    state = {
        wishListHeader: false,
        shopItems: false,
        item: [],
        shop: [],
        burgerMenu: false,
        screen: window.innerWidth,
        backNav: []
       
    }



    async componentDidMount(){
        let res = await axios.get("http://localhost:1337/api/navbars?populate=*");
        this.setState({backNav: res.data.data})

      

    }



   


    

    wishList = () =>{
        this.setState({wishListHeader: !this.state.wishListHeader})
        
    }

   

    deleteItem = (idElemet) =>{
        this.props.onDeleteElementFromWishList(idElemet)


       
        
    }


    solicitaOferta = () =>{
        this.props.selectElementFromWishList(this.props.wishList)
        this.setState({wishListHeader: !this.state.wishListHeader})
    }



    deleteAllItems = () =>{
        this.props.onDeleteAllArray([])
        this.setState({wishListHeader: false})
    }

    


    returnElementsWishList = () =>{

        return (



            this.state.wishListHeader && 
                          
                          <div>
                              {this.props.wishList.length === 0 ?
                              <div className="wishListCards"><h1>Nu exista nici un produs</h1></div>:

                              <div className="wishListCards">
                                      <div className="elementWishList">
                                              <h3>Preferinte</h3>
                                              <button onClick={this.deleteAllItems}>Sterge</button>
                                      </div>
                                          {this.props.wishList.map(el =>(           
                                              <ElementWishList delete={this.deleteItem} item={el}/>
                                          ))}

                                <button onClick={this.solicitaOferta} className="btn_bottom">Solicită oferta!</button>
                             
                          </div>
                             
                              
                            }
                        </div>
            
        )

    }









    bars = () =>{
        this.setState({burgerMenu: !this.state.burgerMenu})
    }






 
    render() {
        
        
        let data = this.state.backNav.map(el => el);

        let element = data.map(el => el.attributes)

        


        

        

        
       
        


        

        return ( 


            <header className="header">



                      {this.returnElementsWishList()}


                      {
                          this.state.wishListHeader && 
                          
                          <div>
                              {this.props.wishList.length === 0 ?
                              <div className="wishListCards"><h1>Nu exista nici un produs</h1></div>:

                              <div className="wishListCards">
                                      <div className="elementWishList">
                                              <h3>Preferinte</h3>
                                              <button onClick={this.deleteAllItems}>Sterge</button>
                                      </div>
                                          {this.props.wishList.map(el =>(           
                                              <ElementWishList delete={this.deleteItem} item={el}/>
                                          ))}

                                <button onClick={this.solicitaOferta} className="btn_bottom">Solicită oferta!</button>
                             
                          </div>
                             
                              
                            }
                          </div>
                      }




                          {this.state.backNav.map(el =>(
                              <React.Fragment>
                                   <div key={el} className="mobile_elements">

                                    <ul className="mobile_logo">
                                            <li><NavLink to="/"><img src={logo} alt="Logo"/></NavLink></li>
                                    </ul>

                                    <ul className='bars_shop'>
                                            <li className='li'><img onClick={this.bars} src={menu}  /></li>
                                            <li>9:00 AM - 19:00 PM</li>
                                            <li><NavLink to="/shop"><img src={shop} alt="shop" /></NavLink></li>
                                    </ul>
                                    </div>





                                    <nav  className={this.state.burgerMenu ? "active_mobile nav_bar" : "nav_bar"}>
                                    



                                    <ul className="logo">
                                    <li><NavLink to="/"><img src={`http://localhost:1337${el.attributes.Logo.data.attributes.url}`} alt="Logo"/></NavLink></li>
                                    <li>9:00-19:00</li>
                                    </ul>

                                    <div onClick={this.bars} className="cancel">
                                    <img src={cancel} />
                                    </div>

                                    <ul onClick={this.bars} className="nav_bar_links">
                                    <li><NavLink activelcassname="active" className="links-a" to="/">{el.attributes.despre}</NavLink></li>
                                    <li><NavLink activeclassname="active" className="links-a" to="/products">{el.attributes.produse}</NavLink></li>
                                    <li> <a className="links-a" href="/#ce_oferim">Servicii</a></li>
                                    <li><NavLink activeclassname="active" className="links-a" to="/contact">{el.attributes.contacte}</NavLink></li>
                                    </ul>

                                    <ul onClick={this.bars} className="nav_bar_icons">
                                    {data.map(el => (
                                        <li>{el.attributes.tel}</li>
                                    ))}
                                    <li><NavLink to="/shop"><img src={shop} alt="shop" /></NavLink></li>
                                    <li className="wishList" onClick={this.wishList}><img src={heart} alt="wishList" /></li>
                                    <li><a href={el.attributes.link_facebook} target="_blank" ><img src={facebook}  alt="facebook" /></a></li>
                                    <li><a href={el.attributes.link_youtube} target="_blank" ><img src={youtube} alt="facebook"/></a></li>



                                    </ul>

                                    <ul className='program'>
                                    <li>Program: 9:00 AM - 19:00 PM</li>
                                    <li>{el.attributes.tel}</li>

                                    </ul>



                                    </nav>
                              </React.Fragment>
                          ))}


                        
                
            </header>
         );
    }
}
 
export default NavBar;