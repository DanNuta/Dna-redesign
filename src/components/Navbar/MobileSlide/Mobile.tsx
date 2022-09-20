import {MobileNavView} from "../MobileSlide/Mobile.view";
import React, { PropsWithChildren } from "react";
import { NavbarType } from "../../../models/navbar.model";

type Props = {
    data: NavbarType
}

export const NavMibile: React.FC<PropsWithChildren<Props>> = (props: PropsWithChildren<Props>) =>{

    return <MobileNavView data={props.data}>
              {props.children}
          </MobileNavView>
}