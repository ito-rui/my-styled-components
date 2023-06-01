/* eslint react/jsx-props-no-spreading: off */

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
	const width = { ...props }.width ?? { ...rvButtonDefaultProps }.width;
	const height = { ...props }.height ?? { ...rvButtonDefaultProps }.height;
	const borderColor = { ...props }.borderColor ?? { ...props }.bgColor ?? { ...rvButtonDefaultProps }.borderColor;
	const borderRadius = { ...props }.borderRadius ?? { ...rvButtonDefaultProps }.borderRadius;
	const borderWidth = { ...props }.borderWidth ?? { ...rvButtonDefaultProps }.borderWidth;
	const bgColor = { ...props }.bgColor ?? { ...rvButtonDefaultProps }.bgColor;
	const textColor = { ...props }.textColor ?? { ...rvButtonDefaultProps }.textColor;
	const hover = {
		bgColor: { ...props }.hover?.bgColor ?? { ...rvButtonDefaultProps }.hover?.bgColor,
		borderColor: { ...props }.hover?.borderColor ?? { ...rvButtonDefaultProps }.hover?.borderColor,
	};
	const iconStyle = { ...props }.iconStyle ?? "left";
	const newProps = { ...props, width, bgColor, height, borderColor, borderRadius, borderWidth, textColor, hover };
	return (
		<StyledButton {...newProps}>
			{newProps.icon && iconStyle === "left" && newProps.icon}
			{children}
			{newProps.icon && iconStyle === "right" && newProps.icon}
		</StyledButton>
	);
};

export default RvButton;
