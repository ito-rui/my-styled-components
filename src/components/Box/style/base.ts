/* eslint no-nested-ternary: off */

import styled from "styled-components";
import { breakpoint } from "../../config/theme";
import type { StyledDivType } from "../../../types/components/Div";
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
} from "../../../utils/getStyle";

const StyledDiv = styled.div<StyledDivType>`
	width: ${({ theme, width }) => getWidth({ width }) ?? theme.sizes.widths.full};
	height: ${({ theme, height }) => getHeight({ height }) ?? theme.sizes.heights.auto};
	display: ${({ display }) => display ?? "block"};
	position: ${({ position }) => getPosition({ position }) ?? " none"};
	box-shadow: ${({ theme, boxShadow }) => getBoxShadow({ boxShadow }) ?? theme.shadow.none};
	border-radius: ${({ theme, borderRadius }) => getBorderRadius({ borderRadius }) ?? theme.sizes.radius.sx};
	border-color: ${({ theme, borderColor }) => getBorderColor({ borderColor }) ?? theme.colors.systemColors.white500};
	background-color: ${({ theme, bgColor }) => getBgColor({ bgColor }) ?? theme.colors.systemColors.white500};
	color: ${({ theme, textColor }) => getColor({ textColor }) ?? theme.colors.systemColors.black500};
	border-width: ${({ theme, borderWidth }) => getBorderWidth({ borderWidth }) ?? theme.sizes.radius.sx};
	padding: ${({ theme, padding }) => getPadding({ padding }) ?? theme.sizes.spaces[0]};
	padding-top: ${({ theme, paddingTop }) => getPaddingTop({ paddingTop }) ?? theme.sizes.spaces[0]};
	padding-right: ${({ theme, paddingRight }) => getPaddingRight({ paddingRight }) ?? theme.sizes.spaces[0]};
	padding-bottom: ${({ theme, paddingBottom }) => getPaddingBottom({ paddingBottom }) ?? theme.sizes.spaces[0]};
	padding-left: ${({ theme, paddingLeft }) => getPaddingLeft({ paddingLeft }) ?? theme.sizes.spaces[0]};
	margin: ${({ theme, margin }) => getMargin({ margin }) ?? theme.sizes.spaces[0]};
	margin-top: ${({ theme, marginTop }) => getMarginTop({ marginTop }) ?? theme.sizes.spaces[0]};
	margin-right: ${({ theme, marginRight }) => getMarginRight({ marginRight }) ?? theme.sizes.spaces[0]};
	margin-bottom: ${({ theme, marginBottom }) => getMarginBottom({ marginBottom }) ?? theme.sizes.spaces[0]};
	margin-left: ${({ theme, marginLeft }) => getMarginLeft({ marginLeft }) ?? theme.sizes.spaces[0]};
	transition: ${({ theme, transition }) => getTransition({ transition }) ?? theme.transition.box.base};
	font-size: ${({ theme, fontSize }) => getFontSize({ fontSize }) ?? theme.fonts.fontSizes.base};
	font-weight: ${({ theme, fontWeight }) => getFontWeight({ fontWeight }) ?? theme.fonts.fontWeights.normal};
	line-height: ${({ theme, lineHeight }) => getLineHeight({ lineHeight }) ?? theme.sizes.lineHeights.normal};
	&:hover {
		color: ${({ theme, hover }) => getColor({ textColor: hover?.textColor }) ?? theme.colors.systemColors.black500};
		background-color: ${({ theme, hover }) => getBgColor({ bgColor: hover?.bgColor }) ?? theme.colors.systemColors.white500};
	}

	${({ theme, ...props }) =>
		breakpoint.map((breakpoint) => {
			const {
				width,
				height,
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
		        position: ${getPosition({ position, breakpoint }) ?? "none"};
                border-radius: ${getBorderRadius({ borderRadius, breakpoint }) ?? theme.sizes.radius.sx};
                border-color: ${getBorderColor({ borderColor, breakpoint }) ?? theme.colors.systemColors.white500};
                border-width: ${getBorderWidth({ borderWidth, breakpoint }) ?? theme.sizes.radius.sx};
                box-shadow: ${getBoxShadow({ boxShadow, breakpoint }) ?? theme.shadow.none};
                background-color: ${getBgColor({ bgColor, breakpoint }) ?? theme.colors.systemColors.white500};
                color: ${getColor({ textColor, breakpoint }) ?? theme.colors.systemColors.black500};
                padding: ${getPadding({ padding, breakpoint }) ?? theme.sizes.spaces[0]};
                padding-right: ${getPaddingRight({ paddingRight, breakpoint }) ?? theme.sizes.spaces[0]};
                padding-top: ${getPaddingTop({ paddingTop, breakpoint }) ?? theme.sizes.spaces[0]};
                padding-bottom: ${getPaddingBottom({ paddingBottom, breakpoint }) ?? theme.sizes.spaces[0]};
                padding-left: ${getPaddingLeft({ paddingLeft, breakpoint }) ?? theme.sizes.spaces[0]};
				margin: ${getMargin({ margin, breakpoint }) ?? theme.sizes.spaces[0]};
                margin-top: ${getMarginTop({ marginTop, breakpoint }) ?? theme.sizes.spaces[0]};
                margin-right: ${getMarginRight({ marginRight, breakpoint }) ?? theme.sizes.spaces[0]};
                margin-bottom: ${getMarginBottom({ marginBottom, breakpoint }) ?? theme.sizes.spaces[0]};
                margin-left: ${getMarginLeft({ marginLeft, breakpoint }) ?? theme.sizes.spaces[0]};
                transition: ${getTransition({ transition, breakpoint }) ?? theme.transition.box.base};
                font-size: ${getFontSize({ fontSize, breakpoint }) ?? theme.fonts.fontSizes.base};
                font-weight: ${getFontWeight({ fontWeight, breakpoint }) ?? theme.fonts.fontWeights.normal};
                line-height: ${getLineHeight({ lineHeight, breakpoint }) ?? theme.sizes.lineHeights.normal};
                &:hover {
                    color: ${getColor({ textColor: hover?.textColor, breakpoint }) ?? theme.colors.systemColors.black500};
                    background-color: ${getBgColor({ bgColor: hover?.bgColor, breakpoint }) ?? "none"};
                };
            `;
		})}
`;

export default StyledDiv;
