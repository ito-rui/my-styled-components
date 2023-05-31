import { FC } from "react";
import type { FlexFCType } from "../../types/components/Div";
import { StyledFlex } from "./style";

const Flex: FC<FlexFCType> = ({ children, ...props }) => {
	return <StyledFlex {...props}>{children}</StyledFlex>;
};

export default Flex;
