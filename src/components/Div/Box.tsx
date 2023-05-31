/* eslint react/jsx-props-no-spreading: off */

import { FC } from "react";
import type { BaseDivType, BoxFCType } from "../../types/components/Div";
import { StyledDiv } from "./style";

const style: BaseDivType = {};

const Box: FC<BoxFCType> = ({ children, ...props }) => {
	return <StyledDiv {...props}>{children}</StyledDiv>;
};

export default Box;
