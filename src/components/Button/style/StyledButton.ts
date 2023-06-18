/* eslint no-nested-ternary: off */

import styled from "styled-components";
import { breakpoint } from "../../config/theme";
import type { StyledButtonType } from "../../../types/components/Button";
import {
	getWidth,
	getHeight,
	getPosition,
	getBgColor,
	getColor,
	getBoxShadow,
	getBorderRadius,
	getBorderColor,
	getBorderWidth,
	getPadding,
	getPaddingTop,
	getPaddingRight,
	getPaddingBottom,
	getPaddingLeft,
	getMargin,
	getMarginTop,
	getMarginRight,
	getMarginBottom,
	getMarginLeft,
	getTransition,
	getFontSize,
	getFontWeight,
	getLineHeight,
	getDisplay,
} from "../../../utils/getStyle";

const StyledButton = styled.button<StyledButtonType>`
	width: ${({ theme, width }) => getWidth({ width }) ?? theme.sizes.widths.auto};
	height: ${({ theme, height }) => getHeight({ height }) ?? theme.sizes.heights.auto};
	display: ${({ display }) => getDisplay({ display }) ?? "block"};
	position: ${({ position }) => getPosition({ position }) ?? " none"};
	box-shadow: ${({ theme, boxShadow }) => getBoxShadow({ boxShadow }) ?? theme.shadow.none};
	border-radius: ${({ theme, borderRadius }) => getBorderRadius({ borderRadius }) ?? theme.sizes.radius.sx};
	border-color: ${({ theme, borderColor }) => getBorderColor({ borderColor }) ?? theme.colors.systemColors.white200};
	background-color: ${({ theme, bgColor }) => getBgColor({ bgColor }) ?? theme.colors.systemColors.black500};
	color: ${({ theme, textColor }) => getColor({ textColor }) ?? theme.colors.systemColors.white500};
	border-width: ${({ theme, borderWidth }) => getBorderWidth({ borderWidth }) ?? theme.sizes.radius.none};
	padding: ${({ padding }) => getPadding({ padding }) ?? ""};
	padding-top: ${({ paddingTop }) => getPaddingTop({ paddingTop }) ?? ""};
	padding-right: ${({ paddingRight }) => getPaddingRight({ paddingRight }) ?? ""};
	padding-bottom: ${({ paddingBottom }) => getPaddingBottom({ paddingBottom }) ?? ""};
	padding-left: ${({ paddingLeft }) => getPaddingLeft({ paddingLeft }) ?? ""};
	margin: ${({ margin }) => getMargin({ margin }) ?? ""};
	margin-top: ${({ marginTop }) => getMarginTop({ marginTop }) ?? ""};
	margin-right: ${({ marginRight }) => getMarginRight({ marginRight }) ?? ""};
	margin-bottom: ${({ marginBottom }) => getMarginBottom({ marginBottom }) ?? ""};
	margin-left: ${({ marginLeft }) => getMarginLeft({ marginLeft }) ?? ""};
	transition: ${({ theme, transition }) => getTransition({ transition }) ?? theme.transition.box.base};
	font-size: ${({ theme, fontSize }) => getFontSize({ fontSize }) ?? theme.fonts.fontSizes.base};
	font-weight: ${({ theme, fontWeight }) => getFontWeight({ fontWeight }) ?? theme.fonts.fontWeights.normal};
	line-height: ${({ theme, lineHeight }) => getLineHeight({ lineHeight }) ?? theme.sizes.lineHeights.normal};
	&:hover {
		color: ${({ theme, hover }) => getColor({ textColor: hover?.textColor }) ?? theme.colors.systemColors.white400};
		background-color: ${({ theme, hover }) => getBgColor({ bgColor: hover?.bgColor }) ?? theme.colors.systemColors.black400};
		cursor: ${({ hover }) => hover?.cursor ?? "pointer"};
	}

	&:disabled {
		color: ${({ theme, disableds }) => getColor({ textColor: disableds?.textColor }) ?? theme.colors.systemColors.white500};
		background-color: ${({ theme, disableds }) =>
			getBgColor({ bgColor: disableds?.bgColor }) ?? theme.colors.systemColors.black100};
		cursor: ${({ disableds }) => disableds?.cursor ?? "not-allowed"};
	}

	${({ theme, ...props }) =>
		breakpoint.map((breakpoint) => {
			const {
				width,
				height,
				display,
				position,
				borderRadius,
				borderColor,
				borderWidth,
				boxShadow,
				bgColor,
				textColor,
				padding,
				paddingTop,
				paddingRight,
				paddingBottom,
				paddingLeft,
				margin,
				marginTop,
				marginRight,
				marginBottom,
				marginLeft,
				transition,
				fontSize,
				fontWeight,
				lineHeight,
				hover,
				disableds,
			} = { ...props };
			return theme.breakpoint[breakpoint]`
                width: ${getWidth({ width, breakpoint }) ?? theme.sizes.widths.auto};
                height: ${getHeight({ height, breakpoint }) ?? theme.sizes.heights.auto};
                display: ${getDisplay({ display }) ?? "block"};
		        position: ${getPosition({ position, breakpoint }) ?? "none"};
                border-radius: ${getBorderRadius({ borderRadius, breakpoint }) ?? theme.sizes.radius.sx};
                border-color: ${getBorderColor({ borderColor, breakpoint }) ?? theme.colors.systemColors.white200};
                border-width: ${getBorderWidth({ borderWidth, breakpoint }) ?? theme.sizes.radius.sx};
                box-shadow: ${getBoxShadow({ boxShadow, breakpoint }) ?? theme.shadow.none};
                background-color: ${getBgColor({ bgColor, breakpoint }) ?? theme.colors.systemColors.black500};
                color: ${getColor({ textColor, breakpoint }) ?? theme.colors.systemColors.white500};
                padding: ${getPadding({ padding, breakpoint }) ?? ""};
                padding-right: ${getPaddingRight({ paddingRight, breakpoint }) ?? ""};
                padding-top: ${getPaddingTop({ paddingTop, breakpoint }) ?? ""};
                padding-bottom: ${getPaddingBottom({ paddingBottom, breakpoint }) ?? ""};
                padding-left: ${getPaddingLeft({ paddingLeft, breakpoint }) ?? ""};
				margin: ${getMargin({ margin, breakpoint }) ?? ""};
                margin-top: ${getMarginTop({ marginTop, breakpoint }) ?? ""};
                margin-right: ${getMarginRight({ marginRight, breakpoint }) ?? ""};
                margin-bottom: ${getMarginBottom({ marginBottom, breakpoint }) ?? ""};
                margin-left: ${getMarginLeft({ marginLeft, breakpoint }) ?? ""};
                transition: ${getTransition({ transition, breakpoint }) ?? theme.transition.box.base};
                font-size: ${getFontSize({ fontSize, breakpoint }) ?? theme.fonts.fontSizes.base};
                font-weight: ${getFontWeight({ fontWeight, breakpoint }) ?? theme.fonts.fontWeights.normal};
                line-height: ${getLineHeight({ lineHeight, breakpoint }) ?? theme.sizes.lineHeights.normal};

                &:hover {
                    color: ${getColor({ textColor: hover?.textColor, breakpoint }) ?? theme.colors.systemColors.white400};
                    background-color: ${
						getBgColor({ bgColor: hover?.bgColor, breakpoint }) ?? theme.colors.systemColors.black400
					};
                    cursor: ${hover?.cursor ?? "pointer"};
                };

                &:disabled {
		            color: ${getColor({ textColor: disableds?.textColor }) ?? theme.colors.systemColors.white500};
		            background-color: ${getBgColor({ bgColor: disableds?.bgColor }) ?? theme.colors.systemColors.black100};
		            cursor: ${disableds?.cursor ?? "not-allowed"};
	            }
            `;
		})}
`;

export default StyledButton;
