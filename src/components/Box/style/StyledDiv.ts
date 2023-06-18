/* eslint no-nested-ternary: off */

import styled from "styled-components";
import { breakpoint } from "../../config/theme";
import type { StyledDivType } from "../../../types/components/Div";
import {
	getWidth,
	getHeight,
	getDisplay,
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
} from "../../../utils/getStyle";

const StyledDiv = styled.div<StyledDivType>`
	width: ${({ theme, width }) => getWidth({ width }) ?? theme.sizes.widths.auto};
	height: ${({ theme, height }) => getHeight({ height }) ?? theme.sizes.heights.auto};
	display: ${({ display }) => getDisplay({ display }) ?? "block"};
	position: ${({ position }) => getPosition({ position }) ?? " none"};
	box-shadow: ${({ theme, boxShadow }) => getBoxShadow({ boxShadow }) ?? theme.shadow.none};
	border-radius: ${({ theme, borderRadius }) => getBorderRadius({ borderRadius }) ?? theme.sizes.radius.sx};
	border-color: ${({ borderColor }) => getBorderColor({ borderColor }) ?? "none"};
	background-color: ${({ theme, bgColor }) => getBgColor({ bgColor }) ?? theme.colors.systemColors.black500};
	color: ${({ theme, textColor }) => getColor({ textColor }) ?? theme.colors.systemColors.white500};
	border-width: ${({ borderWidth }) => getBorderWidth({ borderWidth }) ?? ""};
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
		color: ${({ hover }) => getColor({ textColor: hover?.textColor }) ?? ""};
		background-color: ${({ hover }) => getBgColor({ bgColor: hover?.bgColor }) ?? ""};
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
			} = { ...props };
			return theme.breakpoint[breakpoint]`
                width: ${getWidth({ width, breakpoint }) ?? theme.sizes.widths.auto};
                height: ${getHeight({ height, breakpoint }) ?? theme.sizes.heights.auto};
                display: ${getDisplay({ display, breakpoint }) ?? "block"};
		        position: ${getPosition({ position, breakpoint }) ?? "none"};
                border-radius: ${getBorderRadius({ borderRadius, breakpoint }) ?? theme.sizes.radius.sx};
                border-color: ${getBorderColor({ borderColor, breakpoint }) ?? theme.colors.systemColors.white200};
                border-width: ${getBorderWidth({ borderWidth, breakpoint }) ?? ""};
                box-shadow: ${getBoxShadow({ boxShadow, breakpoint }) ?? theme.shadow.none};
                background-color: ${getBgColor({ bgColor, breakpoint }) ?? theme.colors.systemColors.black500};
                color: ${getColor({ textColor, breakpoint }) ?? theme.colors.systemColors.white500};
                padding: ${getPadding({ padding, breakpoint }) ?? ""};
                padding-top: ${getPaddingTop({ paddingTop, breakpoint }) ?? ""};
                padding-right: ${getPaddingRight({ paddingRight, breakpoint }) ?? ""};
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
                    color: ${getColor({ textColor: hover?.textColor, breakpoint }) ?? ""};
                    background-color: ${getBgColor({ bgColor: hover?.bgColor, breakpoint }) ?? ""};
                };
            `;
		})}
`;

export default StyledDiv;
