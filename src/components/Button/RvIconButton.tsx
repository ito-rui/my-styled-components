/* eslint react/jsx-props-no-spreading: off */

import { useMemo } from "react";
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
	const { width = props.width ?? rvIconButtonDefaultProps.width, height = props.height ?? rvIconButtonDefaultProps.height } =
		useMemo(() => props, [props]);
	const newProps = useMemo(() => ({ ...props, width, height }), [props, width, height]);
	return useMemo(() => <StyledButton {...newProps}>{children}</StyledButton>, [newProps]);
};

export default RvIconButton;
