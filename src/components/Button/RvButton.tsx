/* eslint react/jsx-props-no-spreading: off */

import type { FC } from "react";
import { RvButtonType } from "../../types/components/Button";
import StyledButton from "./style";

export const rvButtonProps: RvButtonType = {
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
	borderRadius: 0.5,
	borderWidth: "1",
	borderColor: "black500",
	bgColor: "white500",
	textColor: "black500",
	hover: {
		bgColor: "gray200",
		borderColor: "gray200",
	},
};

const RvButton: FC<RvButtonType> = ({ children, ...props }) => {
	const width = { ...props }.width ?? { ...rvButtonProps }.width;
	const height = { ...props }.height ?? { ...rvButtonProps }.height;
	const borderColor = { ...props }.borderColor ?? { ...rvButtonProps }.borderColor;
	const borderRadius = { ...props }.borderRadius ?? { ...rvButtonProps }.borderRadius;
	const borderWidth = { ...props }.borderWidth ?? { ...rvButtonProps }.borderWidth;
	const bgColor = { ...props }.bgColor ?? { ...rvButtonProps }.bgColor;
	const textColor = { ...props }.textColor ?? { ...rvButtonProps }.textColor;
	const hover = {
		bgColor: { ...props }.hover?.bgColor ?? { ...rvButtonProps }.hover?.bgColor,
		borderColor: { ...props }.hover?.borderColor ?? { ...rvButtonProps }.hover?.borderColor,
	};
	const newProps = { ...props, width, bgColor, height, borderColor, borderRadius, borderWidth, textColor, hover };
	return <StyledButton {...newProps}>{children}</StyledButton>;
};

export default RvButton;
