import React, { useState } from "react";
import { VButtonView } from "./VButton.view";

type Props = {
  onClick?: () => void;
  
};

export const VButton: React.FC<React.PropsWithChildren<Props>> = (
  props: React.PropsWithChildren<Props>
) => {
  return (
    <VButtonView toggle={props.onClick}>
      {props.children}
    </VButtonView>
  );
};
