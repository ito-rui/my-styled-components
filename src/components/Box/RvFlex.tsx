import type { FC } from "react";
import type { RvFlexFCType } from "../../types/components/Div";
import { StyledFlex } from "./style";

const RvFlex: FC<RvFlexFCType> = ({ children, ...props }) => {
	return <StyledFlex {...props}>{children}</StyledFlex>;
};

export default RvFlex;
