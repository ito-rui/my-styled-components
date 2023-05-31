/* eslint react/jsx-props-no-spreading: off */

import type { FC } from "react";
import type { RvBoxFCType } from "../../types/components/Div";
import { StyledDiv } from "./style";

const RvBox: FC<RvBoxFCType> = ({ children, ...props }) => {
	const newProps = { ...props };
	return <StyledDiv {...newProps}>{children}</StyledDiv>;
};

export default RvBox;
