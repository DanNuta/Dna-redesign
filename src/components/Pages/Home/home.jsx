import React, { Component } from 'react';
import Slider from './Slider';
import "./Home.scss";
import { NavLink } from "react-router-dom";
import section1Img from "../../Pages/home_section1/right_img.png";
import section2Img from "../../Pages/home_section1/left_img.png";
import rightArrow from "../../Pages/icon/header_arrow/right_arrow.svg";
import yollowArrow from "../../Pages/icon/header_arrow/yollowArrow.svg";
import despre_noi_right from "../../Pages/home_section1/despre_noi_right.png";
import solare_img from "../../Pages/home_section1/solares_img.png";
import paratrasnet_pda from "../../Pages/home_section1/paratrasnet_pda.png";
import caliteate from "../../Pages/home_section1/calitate_png.png";
import star from "../../Pages/icon/star.svg";
import dolar from "../../Pages/icon/dolar.svg";
import group from "../../Pages/icon/group.svg";
import et1_1 from "../../Pages/instalarea/etapa1-1.png";
import et1_2 from "../../Pages/instalarea/etapa1-2.png";
import et1_3 from "../../Pages/instalarea/etapa1-3.png";
import et2_1 from "../../Pages/instalarea/etapa2-1.png";
import et2_2 from "../../Pages/instalarea/etapa2-2.png";
import et2_3 from "../../Pages/instalarea/etapa2-3.png";
import et3_1 from "../../Pages/instalarea/etapa3-1.png";
import et3_2 from "../../Pages/instalarea/etapa3-2.png";
import et3_3 from "../../Pages/instalarea/etapa3-3.png";
import et4_1 from "../../Pages/instalarea/etapa4-1.png";
import et4_2 from "../../Pages/instalarea/etapa4-2.png";
import et4_3 from "../../Pages/instalarea/etapa4-3.png";
import stangaArrow from "../../Pages/icon/header_arrow/left_arrow.svg";
import dreaptaArrow from "../../Pages/icon/header_arrow/right_arrow.svg";
import dreaptaArrowHover from "../../Pages/icon/header_arrow/right_arrow_hover.svg";
import stangaArrowHover from "../../Pages/icon/header_arrow/left_arrow_hover.svg";
import {ImagesArrowSvg, ImagesArrowSvg2} from "./ArrowSvg";




class Home extends Component {



    static defaultProps = {
       
        arrowCurent: [
            {img: stangaArrow, alt: "Left Arrow"},
            {img: dreaptaArrow, alt: "Right Arrow"},
            {img: stangaArrowHover, alt: "Left Arrow Hover"},
            {img: dreaptaArrowHover, alt: "Right Arrow Hover"}
        ],

        imgInstalare: [
            [
                {img: et1_1},
                {img: et1_2},
                {img: et1_3}
            ],
            [
                {img: et2_1},
                {img: et2_2},
                {img: et2_3}
            ],
            [
                {img: et3_1},
                {img: et3_2},
                {img: et3_3}
            ],
            [
                {img: et4_1},
                {img: et4_2},
                {img: et4_3}
            ]
        ],


    }






    state = {
        protectie: false,
        supratensiuni: false,
        impamantare: false,
        solare: false,
        click: 0, 
        leftArrow: this.props.arrowCurent[0],
        rightArrow: this.props.arrowCurent[1],
        instalareImg: this.props.imgInstalare[0],
        wishListElement: [],
    }


    protectie = () =>{
        this.setState({protectie: !this.state.protectie})
        this.setState({supratensiuni: false})
        this.setState({impamantare: false})
        this.setState({solare: false})

    }


    supratensiuni = () =>{
        this.setState({supratensiuni: !this.state.supratensiuni})
        this.setState({protectie: false})
        this.setState({impamantare: false})
        this.setState({solare: false})
    }


    impamantare = () => {
        this.setState({impamantare: !this.state.impamantare})
        this.setState({supratensiuni: false})
        this.setState({protectie: false})
        this.setState({solare: false})
    }


    solare = () => {
        this.setState({impamantare: false})
        this.setState({supratensiuni: false})
        this.setState({protectie: false})
        this.setState({solare: !this.state.solare})
    }



    leftArrow = () =>{

        
        this.setState({instalareImg: this.props.imgInstalare[this.state.click]})
        this.setState({click: this.state.click - 1})
        this.setState({leftArrow: this.props.arrowCurent[2]})
        this.setState({rightArrow: this.props.arrowCurent[1]})
        


        if(this.state.click <= 0){
            this.setState({click: 3})
            
        }
    
    }



     rightArrow = () =>{

    
    
    this.setState({instalareImg: this.props.imgInstalare[this.state.click]})
    this.setState({click: this.state.click + 1})
    this.setState({rightArrow: this.props.arrowCurent[3]})
    this.setState({leftArrow: this.props.arrowCurent[0]})


    if(this.state.click >= this.props.imgInstalare.length -1){
        this.setState({click: 0})
        
    }
}


    exportDate = (data) =>{

        this.props.onExportData(data)

    }


   searchItem = (data) =>{

    this.props.onSearchItem(data)
   }








   componentDidMount() {
    window.scrollTo(0, 0)
  }


    render() { 

    
        return ( 
            <div>


                <div className="center">


                
        <Slider
            onExportDate={this.exportDate}
            onSearchItem={this.searchItem}
            produse={this.props.products}
            wishList={this.props.elementAded}
            />
                </div>





           





               


                




                <section  className=" section-center1 ">


                    <div className="dns-paratrasnet center">

                    <div className="text-images">
                            <span><h3>Paratrasnet PDA –</h3>produs de ultimă generație</span>
                    </div>

                        <div className="left-part">
                            <img src={section2Img} alt="" />
                        </div>

                        <h1 className='mobile_h1_center'>Fii în siguranță împreună
                                cu DNA electric</h1>





                        <div className="right-part">
                            
                            <div className="right-text">
                                <h1 onClick={this.exportDate}>Fii în siguranță împreună
                                cu DNA electric</h1>

                                <p className='p'>Aducem ani de experienta reală și un proces de inginerie științifică pentru a proiecta sisteme de protecție împotriva trăsnetului.</p>

                                <button><NavLink className="btn-link" to="/contact"><h2>Solicită oferta!</h2> <img src={yollowArrow}  alt="Right Arrow"/></NavLink></button>

                            </div>

                               <div className="img-right">
                                   <img src={section1Img} />

                                   <div className="text-images-top">
                                       <span><h3>Paratrasnet PDA –</h3>produs de ultimă generație</span>
                                   </div>
                               </div>
                        </div>
                    </div>



                </section>




                



                <section className="despre_noi  center">
                         <h1 className='h1'>Despre noi</h1>

                         <div className="despre_noi_right">
                             
                             <div className="h1_bg">
                                 <h1>2500+</h1>
                             </div>
                             <p className="p">Cu peste 2500 de proiecte de protecție împotriva trăsnetului cu paratrasnet PDA, echipa noastră oferă expertiză de neegalat în toate aspectele protecției împotriva trăsnetului pentru investitia și instalațiile dvs.</p>
                         </div>

                         <div className="despre_noi_left">
                             <p className="p">Oferim soluții și dispozitive de protecție împotriva supratensiunii TVSS pentru o varietate de aplicatii si industrii. De la infrastructura medicală pana la aplicatii militare, oferim protecție industrială împotriva supratensiunii. Asigurarea protecției cu paratrasnet PDA împotriva trăsnetelor pentru case, biserici, scoli, facilități, infrastructură și companii.</p>

                             <img src={despre_noi_right} />
                         </div>
                </section>





     
                <section className="ce_oferim center" id="ce_oferim">
                    <h1 className='h1'>CE OFERIM</h1>

                    <div className="propectie_supratensiuni">
                        <div className="protectie">

                            <div onClick={this.protectie} className="protectie_h1">
                                <h2>Protecție împotriva trăsnetului</h2>

                                
                                {this.state.protectie && <div className="supratensiuni_hover"><p className="p">Testarea este, de asemenea, importantă în timp, deoarece rezistența se schimbă în timp. După cum afirmă Fluke în raportul lor, „solurile corozive cu un conținut ridicat de umiditate, conținut ridicat de sare și temperaturi ridicate pot degrada tijele de impamantare și conexiunile lor”.

                                Acest lucru va duce la o creștere a rezistenței în timp. Pe măsură impamantare dvs. devine mai puțin fiabila, creste riscul de zgomot electric, deteriorarea echipamentelor și accidente din electrocutari. Este important să aveți o procedură anuală de testare pentru a vă asigura că instalatia  dvs. funcționează conform așteptărilor și că angajații dvs. rămân în siguranță.</p></div>
                                 }

                            </div>

                        </div>


                        <div className="supratensiuni">

                            <div onClick={this.supratensiuni} className="protectie_h1">
                                <h2>Protecție la supratensiuni</h2>

                                {this.state.supratensiuni && <div className="supratensiuni_hover"><p className="p">Testarea este, de asemenea, importantă în timp, deoarece rezistența se schimbă în timp. După cum afirmă Fluke în raportul lor, „solurile corozive cu un conținut ridicat de umiditate, conținut ridicat de sare și temperaturi ridicate pot degrada tijele de impamantare și conexiunile lor”.

                                Acest lucru va duce la o creștere a rezistenței în timp. Pe măsură impamantare dvs. devine mai puțin fiabila, creste riscul de zgomot electric, deteriorarea echipamentelor și accidente din electrocutari. Este important să aveți o procedură anuală de testare pentru a vă asigura că instalatia  dvs. funcționează conform așteptărilor și că angajații dvs. rămân în siguranță.</p></div>
                            }
                            </div>

                            
                        </div> 


                    </div>









                    <div className="impamantare_solare">

                      <div className="protectie">

                                <div onClick={this.impamantare} className="protectie_h1">
                                    <h2>Împământare</h2>


                                    {this.state.impamantare && <div className="supratensiuni_hover"><p className="p">Testarea este, de asemenea, importantă în timp, deoarece rezistența se schimbă în timp. După cum afirmă Fluke în raportul lor, „solurile corozive cu un conținut ridicat de umiditate, conținut ridicat de sare și temperaturi ridicate pot degrada tijele de impamantare și conexiunile lor”.

                                    Acest lucru va duce la o creștere a rezistenței în timp. Pe măsură impamantare dvs. devine mai puțin fiabila, creste riscul de zgomot electric, deteriorarea echipamentelor și accidente din electrocutari. Este important să aveți o procedură anuală de testare pentru a vă asigura că instalatia  dvs. funcționează conform așteptărilor și că angajații dvs. rămân în siguranță.</p></div>
                                    }
                                </div>

                               
                      </div>


                       <div className="supratensiuni">

                                <div onClick={this.solare} className="protectie_h1">
                                    <h2>Balize solare</h2>

                                    {this.state.solare && <div className="supratensiuni_hover"><p className="p">Testarea este, de asemenea, importantă în timp, deoarece rezistența se schimbă în timp. După cum afirmă Fluke în raportul lor, „solurile corozive cu un conținut ridicat de umiditate, conținut ridicat de sare și temperaturi ridicate pot degrada tijele de impamantare și conexiunile lor”.

                                    Acest lucru va duce la o creștere a rezistenței în timp. Pe măsură impamantare dvs. devine mai puțin fiabila, creste riscul de zgomot electric, deteriorarea echipamentelor și accidente din electrocutari. Este important să aveți o procedură anuală de testare pentru a vă asigura că instalatia  dvs. funcționează conform așteptărilor și că angajații dvs. rămân în siguranță.</p></div>
                                }
                                </div>

                                
                        </div> 
                    </div>




                    <div className="img">
                        <div className="img_right"></div>

                        <div className="img_right_photo">
                            <img src={solare_img} alt="solare" />
                        </div>
                    </div>




                    {this.state.protectie && 
                                     <div className="protectie_hover" onClick={this.protectie}>

                                         <div className="protectie_inside">
                                            <h1>Protecție împotriva trăsnetului</h1>
                                            <p className="p">Testarea este, de asemenea, importantă în timp, deoarece rezistența se schimbă în
                                                timp. După cum afirmă Fluke în raportul lor, „solurile corozive cu un conținut ridicat de
                                                umiditate, conținut ridicat de sare și temperaturi ridicate pot degrada tijele de impamantare
                                                și conexiunile lor”.
                                                <br /> <br />
                                                Acest lucru va duce la o creștere a rezistenței în timp. Pe măsură impamantare dvs. 
                                                devine mai puțin fiabila, creste riscul de zgomot electric, deteriorarea echipamentelor și 
                                                accidente din electrocutari. Este important să aveți o procedură anuală de testare pentru a 
                                                vă asigura că instalatia  dvs. funcționează conform așteptărilor și că angajații dvs. rămân
                                                    în siguranță.</p>

                                                <NavLink className="btn-link" to="/contact"><button>Contacteaza-ne</button></NavLink>
                                    
                                         </div>
                                     </div>
                            }



                               {this.state.supratensiuni && 
                                     <div className="protectie_hover" onClick={this.supratensiuni}>

                                         <div className="protectie_inside">
                                            <h1>Protecție la supratensiuni</h1>
                                            <p className="p">Testarea este, de asemenea, importantă în timp, deoarece rezistența se schimbă în
                                                timp. După cum afirmă Fluke în raportul lor, „solurile corozive cu un conținut ridicat de
                                                umiditate, conținut ridicat de sare și temperaturi ridicate pot degrada tijele de impamantare
                                                și conexiunile lor”.
                                                <br /> <br />
                                                Acest lucru va duce la o creștere a rezistenței în timp. Pe măsură impamantare dvs. 
                                                devine mai puțin fiabila, creste riscul de zgomot electric, deteriorarea echipamentelor și 
                                                accidente din electrocutari. Este important să aveți o procedură anuală de testare pentru a 
                                                vă asigura că instalatia  dvs. funcționează conform așteptărilor și că angajații dvs. rămân
                                                    în siguranță.</p>

                                                <NavLink className="btn-link" to="/contact"><button>Contacteaza-ne</button></NavLink>
                                    
                                         </div>
                                     </div>
                            }




                          {this.state.impamantare && 
                                     <div className="protectie_hover" onClick={this.impamantare} >

                                         <div className="protectie_inside">
                                            <h1>Împământare</h1>
                                            <p className="p">Testarea este, de asemenea, importantă în timp, deoarece rezistența se schimbă în
                                                timp. După cum afirmă Fluke în raportul lor, „solurile corozive cu un conținut ridicat de
                                                umiditate, conținut ridicat de sare și temperaturi ridicate pot degrada tijele de impamantare
                                                și conexiunile lor”.
                                                <br /> <br />
                                                Acest lucru va duce la o creștere a rezistenței în timp. Pe măsură impamantare dvs. 
                                                devine mai puțin fiabila, creste riscul de zgomot electric, deteriorarea echipamentelor și 
                                                accidente din electrocutari. Este important să aveți o procedură anuală de testare pentru a 
                                                vă asigura că instalatia  dvs. funcționează conform așteptărilor și că angajații dvs. rămân
                                                    în siguranță.</p>

                                                <NavLink className="btn-link" to="/contact"><button>Contacteaza-ne</button></NavLink>
                                    
                                         </div>
                                     </div>
                              }



                               {this.state.solare && 
                                     <div className="protectie_hover" onClick={this.solare}>

                                         <div className="protectie_inside">
                                            <h1>Balize solare</h1>
                                            <p className="p">Testarea este, de asemenea, importantă în timp, deoarece rezistența se schimbă în
                                                timp. După cum afirmă Fluke în raportul lor, „solurile corozive cu un conținut ridicat de
                                                umiditate, conținut ridicat de sare și temperaturi ridicate pot degrada tijele de impamantare
                                                și conexiunile lor”.
                                                <br /> <br />
                                                Acest lucru va duce la o creștere a rezistenței în timp. Pe măsură impamantare dvs. 
                                                devine mai puțin fiabila, creste riscul de zgomot electric, deteriorarea echipamentelor și 
                                                accidente din electrocutari. Este important să aveți o procedură anuală de testare pentru a 
                                                vă asigura că instalatia  dvs. funcționează conform așteptărilor și că angajații dvs. rămân
                                                    în siguranță.</p>

                                                <NavLink className="btn-link" to="/contact"><button>Contacteaza-ne</button></NavLink>
                                    
                                         </div>
                                     </div>
                              }










                    


                </section>

                







                <section className=" paratrasnet_pda center">

                    <h1 className='h1'>PARATRASNET PDA</h1>

 
                    <div className="paratrasnet_pda_img">
                        <div className="paratrasnet_photo">
                            <img src={paratrasnet_pda} alt="" />
                            <div className="background_paratrasnet"></div>
                        </div>
                    </div>

                    <div className="paratrasnet_pda_paragraph">
                        <p className="p">Produsele de ultimă generație sunt utilizate pentru a implementa sisteme de protecție împotriva trăsnetului, sisteme specifice de impamantare, sisteme de monitorizare care fac mentenanta usoara, oferindu-vă siguranta că instalația și operațiunile dvs. vor fi protejate în cazul evenimentelor meteorologice viitoare. Produsele noastre  de protecție împotriva trăsnetului sunt eligibile pentru certificarea UL și LPI, îndeplinind cerințele pentru următoarele standarde de calitate: NFPA 780, UL 96A, IEEE, NEC, LPI, IEC, EN și NFC.</p>

                        <h2>De ce am nevoie de el</h2>

                        <p className="p">Un fulger este un fenomen rar, dar periculos. Ajungand la 100 de milioane de volți de energie electrică, aceasta este o forță naturală distructivă asupra căreia avem relativ puțin control. Deoarece clădirile noastre dețin acum mai multe bunuri importante, este extrem de important să ne asigurăm că suntem protejați împotriva trăsnetelor. În zilele noastre, protecția împotriva trăsnetului este indinspensabila pentru orice sistem de protectie. Sistemele moderne funcționează într-un mod similar cu sistemele conventionale, fulgerul fiind interceptat și energia fiind transmisă în siguranță prin tije de impământare.</p>
                    </div>
                </section>





                <section className="calitate center">

                    <div className="calitate_img_left">
                        <img src={caliteate} alt="calitate" />
                    </div>

                    <div className="calitate_right_elements">

                        <div className="element_inside">

                           <div className="element_inside_right">
                                <div className="element_items">
                                        <img src={star} alt="Star" />
                                        <h2>Calitate</h2>
                                        <p className="p">Oferim soluții și dispozitive de protecție împotriva trasnetului de tip paratrasnet PDA pentru o varietate de aplicatii si industrii</p>

                                    </div>



                                    <div className="element_items">
                                        <img src={dolar} alt="Star" />
                                        <h2>Accesibilitate</h2>
                                        <p className="p">Oferim soluții și dispozitive de protecție împotriva trasnetului de tip paratrasnet PDA pentru o varietate de aplicatii si industrii</p>

                                    </div>
                           </div>



                           <div className="element_inside_right2">

                                <div className="element_items">
                                        
                               <NavLink className="btn-link" to="/contact"><button>Contacteaza-ne</button></NavLink>

                                </div>



                                    <div className="element_items">
                                        <img src={group} alt="Star" />
                                        <h2>Personal</h2>
                                        <p className="p">Oferim soluții și dispozitive de protecție împotriva trasnetului de tip paratrasnet PDA pentru o varietate de aplicatii si industrii</p>

                                    </div>
                           </div>


                            



                            

                        </div>
                    </div>
                </section>





                <section className="etapele_de_lucru center">

                    <h1 className='h1'>ETAPELE DE LUCRU</h1>


                    <div className="indicator">
                            <button className='slider_btn_prev' onClick={this.leftArrow}><span className='slider__button-inner'><ImagesArrowSvg/></span></button>
                            <button className='slider_btn_next' onClick={this.rightArrow}><span className='slider__button-inner'><ImagesArrowSvg2/></span></button>
                    </div>





                    

                        <div className="etapa_text">
                            <h1>1</h1>
                            <h2>CONSULTANTA</h2>
                        </div>



                        <div className="etapa_img">
                            <img src={this.state.instalareImg[0].img} alt="instalare1" />
                       </div>


                       <div className="etapa_text">
                            <h1>2</h1>
                            <h2>PROIECTAREA</h2>
                        </div>

                        

                        <div className="etapa_img">
                            <img src={this.state.instalareImg[1].img} alt="instalare2" />
                       </div>



                       <div className="etapa_text">
                            <h1>3</h1>
                            <h2>IMPLEMENTARE</h2>
                        </div>



                        <div className="etapa_img">
                            <img src={this.state.instalareImg[2].img} alt="instalare3" />
                       </div>


                       

                        

                        





                    
                </section>



                <section className=" contacteaza-ne">
                     <NavLink className="btn-link" to="/contact"><button>Contacteaza-ne</button></NavLink>
                </section>




                



               
            </div>
         );
    }
}
 
export default Home;