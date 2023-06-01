import type { FC } from "react";
import { StyledButton } from "./style";
import type { RvIconButtonFCType, StyledIconButtonType } from "../../types";
import { rvButtonDefaultProps } from "./RvButton";

export const rvIconButtonDefaultProps: StyledIconButtonType = {
	...rvButtonDefaultProps,
	width: "40px",
	height: "40px",
};

const RvIconButton: FC<RvIconButtonFCType> = ({ children, ...props }) => {
	const width = { ...props }.width ?? { ...rvIconButtonDefaultProps }.width;
	const height = { ...props }.height ?? { ...rvIconButtonDefaultProps }.height;
	const newProps = { ...props, width, height };
	return <StyledButton {...newProps}>{children}</StyledButton>;
};

export default RvIconButton;
