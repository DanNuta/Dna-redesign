import React, { PropsWithChildren } from "react";
import * as Styled from "./Mobile.module";
import * as StyledNavbar from "../../Navbar/Navbar.module";
import facebook from "../../../icons/social_media_icon/facebook.svg";
import youtube from "../../../icons/social_media_icon/youtube.svg";
import wishlist from "../../../icons/social_media_icon/wish_list.svg";
import { NavbarType } from "../../../models/navbar.model";


type Props = {
    data: NavbarType,
    toggleState: boolean
}

export const MobileNavView: React.FC<PropsWithChildren<Props>> = (props: PropsWithChildren<Props>) =>{
    console.log(props)
    return <Styled.MobileNav>

            

                <Styled.UlNav mobile="mob">
                    <StyledNavbar.NavLi><a href="/">{props.data.Despre}</a></StyledNavbar.NavLi>
                    <StyledNavbar.NavLi><a href={props.data.impamantare}>{props.data.impamantare}</a></StyledNavbar.NavLi>
                    <StyledNavbar.NavLi><a href={props.data.paratrasnet}>{props.data.paratrasnet}</a></StyledNavbar.NavLi>
                    <StyledNavbar.NavLi><a href={props.data.supratensiune}>{props.data.supratensiune}</a></StyledNavbar.NavLi>
                </Styled.UlNav>

                <Styled.UlNav>

                    <Styled.UlNav inline={true}>
                        <StyledNavbar.NavLi><a href={props.data.Link_facebook}><img src={facebook} /></a></StyledNavbar.NavLi>
                        <StyledNavbar.NavLi><a href={props.data.Link_youtube}><img src={youtube} /></a></StyledNavbar.NavLi>
                        <StyledNavbar.NavLi><img src={wishlist}/></StyledNavbar.NavLi>
                    </Styled.UlNav>

                   
                    <StyledNavbar.NavLi>Program: 9:00 AM - 19:00 PM</StyledNavbar.NavLi>
                    <StyledNavbar.NavLi><a href={props.data.Nr_telefon}>{props.data.Nr_telefon}</a></StyledNavbar.NavLi>
                </Styled.UlNav>

            


         </Styled.MobileNav>
}