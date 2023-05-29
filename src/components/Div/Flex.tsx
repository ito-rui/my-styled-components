import { FC } from "react";
import type { DivType } from "../../types/components/Div";
import { StyledFlex } from "./style";

const Flex: FC<DivType> = ({ children, ...props }) => {
	return <StyledFlex {...props}>{children}</StyledFlex>;
};

export default Flex;
