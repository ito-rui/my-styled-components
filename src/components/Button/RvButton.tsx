/* eslint react/jsx-props-no-spreading: off */

import { useMemo } from "react";
import type { FC } from "react";
import { RvButtonFCType } from "../../types/components/Button";
import { StyledButton } from "./style";

export const rvButtonDefaultProps: RvButtonFCType = {
	width: {
		xs: 5,
		sm: 5,
		md: 5,
		lg: 5,
		xl: 5,
	},
	height: {
		xs: 2.5,
		sm: 2.5,
		md: 2.5,
		lg: 2.5,
		xl: 2.5,
	},
	borderRadius: 0.4,
	borderWidth: "0px",
	borderColor: "gray500",
	bgColor: "gray500",
	textColor: "black500",
	hover: {
		bgColor: "gray300",
		borderColor: "gray300",
	},
};

const RvButton: FC<RvButtonFCType> = ({ children, ...props }) => {
	const {
		width = props.width ?? rvButtonDefaultProps.width,
		height = props.height ?? rvButtonDefaultProps.height,
		borderColor = props.borderColor ?? props.bgColor ?? rvButtonDefaultProps.borderColor,
		borderRadius = props.borderRadius ?? rvButtonDefaultProps.borderRadius,
		borderWidth = props.borderWidth ?? rvButtonDefaultProps.borderWidth,
		bgColor = props.bgColor ?? rvButtonDefaultProps.bgColor,
		textColor = props.textColor ?? rvButtonDefaultProps.textColor,
		hover = {
			bgColor: props.hover?.bgColor ?? rvButtonDefaultProps.hover?.bgColor,
			borderColor: props.hover?.borderColor ?? rvButtonDefaultProps.hover?.borderColor,
		},
		iconStyle = props.iconStyle ?? "left",
	} = useMemo(() => props, [props]);

	const newProps = useMemo(
		() => ({ ...props, width, bgColor, height, borderColor, borderRadius, borderWidth, textColor, hover }),
		[props, width, bgColor, height, borderColor, borderRadius, borderWidth, textColor, hover]
	);

	return useMemo(
		() => (
			<StyledButton {...newProps}>
				{newProps.icon && iconStyle === "left" && newProps.icon}
				{children}
				{newProps.icon && iconStyle === "right" && newProps.icon}
			</StyledButton>
		),
		[children, newProps]
	);
};

export default RvButton;
