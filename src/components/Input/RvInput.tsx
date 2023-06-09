/* eslint react/jsx-props-no-spreading: off */

import { useMemo } from "react";
import type { FC } from "react";
import { StyledInput } from "./style";
import type { RvInputFCType, StyledInputType } from "../../types";

export const defaultProps: StyledInputType = {
	width: "100%",
	height: "30px",
	borderRadius: 0.3,
	borderWidth: "0px",
	padding: "10px",
	hover: {},
	placeholders: {
		textColor: "gray500",
	},
	focus: {
		borderColor: "blue500",
	},
};

const RvInput: FC<RvInputFCType> = ({ children, ...props }) => {
	const {
		width = props.width ?? defaultProps.width,
		height = props.height ?? defaultProps.height,
		borderRadius = props.borderRadius ?? defaultProps.borderRadius,
		borderWidth = props.borderWidth ?? defaultProps.borderWidth,
		padding = props.padding ?? defaultProps.padding,
		hover = props.hover ?? defaultProps.hover,
		placeholders = props.placeholders ?? defaultProps.placeholders,
		focus = props.focus ?? defaultProps.focus,
	} = useMemo(() => props, [props]);

	const newProps = useMemo(
		() => ({ ...props, width, height, borderRadius, borderWidth, padding, hover, placeholders, focus }),
		[props, width, height, borderRadius, borderWidth, padding, hover, placeholders, focus]
	);

	return useMemo(() => <StyledInput {...newProps} />, [newProps]);
};

export default RvInput;
