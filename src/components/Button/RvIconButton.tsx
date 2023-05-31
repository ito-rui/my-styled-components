import type { FC } from "react";
import { StyledButton } from "./style";
import type { RvIconButtonFCType } from "../../types";

const RvIconButton: FC<RvIconButtonFCType> = ({ children, ...props }) => {
	const newProps = { ...props };
	return (
		<StyledButton {...newProps}>
			{newProps.icon}
			{children}
		</StyledButton>
	);
};

export default RvIconButton;
