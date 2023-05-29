/* eslint react/jsx-props-no-spreading: off */

import { FC } from "react";
import { DivType } from "../../types/components/Div";
import { StyledDiv } from "./style";

const Div: FC<DivType> = ({ children, ...props }) => {
	return <StyledDiv {...props}>{children}</StyledDiv>;
};

export default Div;
