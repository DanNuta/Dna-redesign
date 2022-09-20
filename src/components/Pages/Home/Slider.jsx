import React, { Component } from 'react';
import "./Slider.scss"; 
import {  NavLink } from "react-router-dom";
import Fist_Img from "../../Pages/section_images/first.png";
import images_instrument1 from "../../Pages/section_images/instruments_img/first_img.png";
import search from "../../Pages/icon/search.svg";
import heart from "../../Pages/icon/heart.svg";
import leftArrow from "../../Pages/icon/header_arrow/left_arrow.svg";
import rightArrow from "../../Pages/icon/header_arrow/right_arrow.svg";
import rightArrowHover from "../../Pages/icon/header_arrow/right_arrow_hover.svg";
import leftArrowHover from "../../Pages/icon/header_arrow/left_arrow_hover.svg";
import {ImagesArrowSvg, ImagesArrowSvg2,  ImagesArrowSvg3, ImagesArrowSvg4} from "./ArrowSvg";
import AnimatePhoto from "../../Pages/home_section1/home_animation.png";
import AnimatePhoto2 from "../../Pages/home_section1/home_animation2.png";
import AnimatePhoto3 from "../../Pages/home_section1/home_animation3.png";
import AnimatePhoto4 from "../../Pages/home_section1/home_animation4.png";
import axios from "axios";





class Slider extends Component {


    static defaultProps = {
        images: [
            {img: Fist_Img},
            
        ],
        
    }




    state = {
        curentSlide: this.props.images[0],
        click: 1, 
        products: this.props.produse,
        dateBack: [], 
        dataBD: false
    }






    async componentDidMount(){
        let rez = await axios.get("http://localhost:1337/api/home-sections?populate=*");
        this.setState({dateBack: rez.data.data})

        rez.data.data.map(el =>{
            el.attributes.images_section.data.map((item, index) =>{
                this.props.images.push({id: index, img: item.attributes.url})
            })
        })




        //     setTimeout(() => {
        //         let item  = this.props.produse.map(el => el);
        //         console.log("ElITEMS")

        // }, 1000);
    }



    componentDidUpdate(previousProps, previousState) {
        
        if (previousProps.produse !== this.props.produse) {
            
            this.setState({products: this.props.produse})

            console.log("CompoNENTDIDUPDATE")
        }else{
            console.log("CompoNENTDIDUPDATE___Else")
        }
    }
     






    leftArrow = () =>{
        this.setState({click: this.state.click ===  1 ? this.state.click = this.props.images.length -1 : this.state.click -1 })
        this.setState({curentSlide: this.props.images[this.state.click]})  
        console.log(this.state.click)
    }



    rightArrow = () =>{
            this.setState({click: this.state.click == this.props.images.length -1 ? 1 : this.state.click +1})
            this.setState({curentSlide: this.props.images[this.state.click]})
            console.log(this.state.click)

    }



    selectFirstItem = () =>{
        this.props.onExportDate(this.state.products[0])
    }





    selectFirstItem2 = () =>{
        this.props.onExportDate(this.state.products[1])
    }



    selectFirstItem3 = () =>{
        this.props.onExportDate(this.state.products[2])
    }


    searchItem1 = () =>{
        this.props.onSearchItem(this.state.products[0])
    }



    



    
    render() {
        
        let wishList = this.props.wishList.map(el => el.id_produs);
        let a = [];
        let items = this.state.products.map(el =>  el.id_produs);
        let produse = this.props.produse.map(el => el);


        

       


       


       

        return ( 

            <React.Fragment>




<div className="img_out_grid">
                    <div className={this.state.curentSlide.id == 3 ? "animated" : "photo"}>


                            

                            {this.props.images.map((el, index) =>{
                                
                                   return (
                                       <div className={index == this.state.click ? "img_right active" : "img_right"} key={index}>
                                           {index === this.state.click && <img src={el.img}/>}
                                       </div>
                                   )


                                   

                                   
                               
                            })
                             }

                        

                        {this.state.curentSlide.id == 3 && 
                                    <div className='animated_photo'>
                                        <div className="animation_top">
                                            <div className="circle_animation">
                                               <div className="line_animation"></div>
                                            </div>
                                            
                                            <div className="text_animation">
                                                <p>Paratrasnet PDA Sensor</p>
                                            </div>
                                        </div>


                                        <div className="animation_bottom animation_delay_button">
                                            <div className="circle_animation">
                                                <div className="line_animation"></div>
                                                </div>
                                                
                                                <div className="text_animation_bottom">
                                                    <p>Catarg fixare Paratrasnet PDA</p>
                                                </div>
                                        </div>

                                    </div>
                        }






                        {this.state.curentSlide.id === 4 && 
                                    <div className='animated_photo2'>
                                        <div className="animation_top2">
                                            <div className="circle_animation2">
                                               <div className="line_animation2"></div>
                                            </div>
                                            
                                            <div className="text_animation2">
                                                <p>Paratrasnet PDA Sensor</p>
                                            </div>
                                        </div>


                                        <div className="fii_in_siguranta">
                                            <div className="circle_animation2">
                                                <div className="line_animation2"></div>
                                            </div>

                                                <div className="text_animation_bottom2">
                                                    <p>Fii in suguranta cu DNA</p>
                                                </div>

                                        </div>


                                        <div className="animation_bottom2 animation_delay_button2">
                                                <div className="circle_animation2">
                                                   <div className="line_animation2"></div>
                                                </div>
                                                
                                                <div className="text_animation_bottom2">
                                                    <p>Catarg fixare Paratrasnet PDA</p>
                                                </div>
                                        </div>

                                    </div>
                        }







                      {this.state.curentSlide.id === 5 && 
                                    <div className='animated_photo4'>
                                        <div className="animation_top4">
                                            <div className="circle_animation4">
                                               <div className="line_animation4"></div>
                                            </div>
                                            
                                            <div className="text_animation4">
                                                <p>Garantie de lunga durata</p>
                                            </div>
                                        </div>


                                        <div className="fii_in_siguranta4">
                                            <div className="circle_animation4">
                                                <div className="line_animation4"></div>
                                            </div>

                                                <div className="text_animation_bottom4">
                                                    <p>Calitate inalta</p>
                                                </div>

                                        </div>


                                        <div className="animation_bottom4 animation_delay_button4">
                                                <div className="circle_animation4">
                                                   <div className="line_animation4"></div>
                                                </div>
                                                
                                                <div className="text_animation_bottom4">
                                                    <p>Protectie exceptionala</p>
                                                </div>
                                        </div>

                                    </div>
                        }


                    </div>

                   
                </div>

























            
               <section className="section_slider ">



                    








                <div className="center_slider ">
                    <div className="right">
                        <h1>Sudara exotermica CADWELD</h1>
                        <p>Accesorii, interconexiuni, consumabile
                            Suduri impamantare durabile, garantie pe viata, durata de viata 100 ani.</p>
                            <NavLink className="btn" to="/contact"><button>Contacteaza-ne</button></NavLink>

                        <div className="indicator">
                            <button className='slider_btn_prev' onClick={this.leftArrow}><span className='slider__button-inner'><ImagesArrowSvg/></span></button>
                            <button className='slider_btn_next' onClick={this.rightArrow}><span className='slider__button-inner'><ImagesArrowSvg2/></span></button>
                        </div>

                    </div>
                </div>










                <div className="right_img">
                    <div className={this.state.curentSlide.id === 3 ? "animated" : "photo"}>

                            <div className="img_right">
                                <img  src={this.state.curentSlide.img} />
                            </div>
                        

                        {this.state.curentSlide.id === 3 && 
                                    <div className='animated_photo'>
                                        <div className="animation_top">
                                            <div className="circle_animation">
                                               <div className="line_animation"></div>
                                            </div>
                                            
                                            <div className="text_animation">
                                                <p>Paratrasnet PDA Sensor</p>
                                            </div>
                                        </div>


                                        <div className="animation_bottom animation_delay_button">
                                            <div className="circle_animation">
                                                <div className="line_animation"></div>
                                                </div>
                                                
                                                <div className="text_animation_bottom">
                                                    <p>Catarg fixare Paratrasnet PDA</p>
                                                </div>
                                        </div>

                                    </div>
                        }






                        {this.state.curentSlide.id === 4 && 
                                    <div className='animated_photo2'>
                                        <div className="animation_top2">
                                            <div className="circle_animation2">
                                               <div className="line_animation2"></div>
                                            </div>
                                            
                                            <div className="text_animation2">
                                                <p>Paratrasnet PDA Sensor</p>
                                            </div>
                                        </div>


                                        <div className="fii_in_siguranta">
                                            <div className="circle_animation2">
                                                <div className="line_animation2"></div>
                                            </div>

                                                <div className="text_animation_bottom2">
                                                    <p>Fii in suguranta cu DNA</p>
                                                </div>

                                        </div>


                                        <div className="animation_bottom2 animation_delay_button2">
                                                <div className="circle_animation2">
                                                   <div className="line_animation2"></div>
                                                </div>
                                                
                                                <div className="text_animation_bottom2">
                                                    <p>Catarg fixare Paratrasnet PDA</p>
                                                </div>
                                        </div>

                                    </div>
                        }







                      {this.state.curentSlide.id === 5 && 
                                    <div className='animated_photo4'>
                                        <div className="animation_top4">
                                            <div className="circle_animation4">
                                               <div className="line_animation4"></div>
                                            </div>
                                            
                                            <div className="text_animation4">
                                                <p>Garantie de lunga durata</p>
                                            </div>
                                        </div>


                                        <div className="fii_in_siguranta4">
                                            <div className="circle_animation4">
                                                <div className="line_animation4"></div>
                                            </div>

                                                <div className="text_animation_bottom4">
                                                    <p>Calitate inalta</p>
                                                </div>

                                        </div>


                                        <div className="animation_bottom4 animation_delay_button4">
                                                <div className="circle_animation4">
                                                   <div className="line_animation4"></div>
                                                </div>
                                                
                                                <div className="text_animation_bottom4">
                                                    <p>Protectie exceptionala</p>
                                                </div>
                                        </div>

                                    </div>
                        }


                    </div>

                   
                </div>





                










                <div className="section_instruments_bottom ">

                    <div className="first_item">
                        <img className='img' src={`http://localhost:1337${this.state.products[0].img_product.data.attributes.url}`}/>
                        <div className="hover_item">

                             <img className="img" src={`http://localhost:1337${this.state.products[0].img_product.data.attributes.url}`}  />
                            <ul>
                                <li onClick={this.searchItem1}><NavLink to={`/produse/${this.state.products[0].img_product}`}><img src={search} alt="search"/></NavLink></li>
                                <li onClick={this.selectFirstItem}>{wishList.includes(this.state.products[0].img_product) ?  <ImagesArrowSvg4/> : <ImagesArrowSvg3/>}</li>
                            </ul>
                            
                        </div>
                    </div>


                    <div className="first_item">
                        <img className='img' src={this.state.products[1].img} alt="Sfredel"  />
                        <div className="hover_item">

                             <img className="img" src={this.state.products[1].img} alt="Sfredel"  />
                            <ul>
                                <li><NavLink to={`/produse/${this.state.products[1].img_product}`}><img src={search} alt="search"/></NavLink></li>
                                <li onClick={this.selectFirstItem2}>{wishList.includes(this.state.products[1].img_product) ?  <ImagesArrowSvg4/> : <ImagesArrowSvg3/>}</li>
                            </ul>
                            
                        </div>
                    </div>




                    <div className="first_item">
                        <img className='img' src={this.state.products[2].img} alt="Sfredel"  />
                        <div className="hover_item">

                              <img className="img" src={this.state.products[2].img} alt="Sfredel"  />
                            <ul>
                                <li ><NavLink to={`/produse/${this.state.products[2].id}`}><img src={search} alt="search"/></NavLink></li>
                                <li onClick={this.selectFirstItem3}>{wishList.includes(this.state.products[2].img_product) ?  <ImagesArrowSvg4/> : <ImagesArrowSvg3/>}</li>
                            </ul>
                            
                        </div>

                        
                    </div>



                   


                    
                    
                </div>


                <NavLink className="btn-link" to="/contact"><button>Contacteaza-ne</button></NavLink>

            </section>






            
               


            </React.Fragment>
         );
    }
}
 
export default Slider;