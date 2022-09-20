import React, { PropsWithChildren } from "react";
import { Button } from "./VButton.model";

type Props = {
  toggle?: () => void;
  
};

export const VButtonView: React.FC<PropsWithChildren<Props>> = (
  props: PropsWithChildren<Props>
) => {
  return (
    <Button onClick={props.toggle}>
      {props.children}
    </Button>
  );
};
