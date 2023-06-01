import styled from "styled-components";
import type { StyledSpanType } from "../../../types";
import { breakpoint } from "../../config";
import {
	getBgColor,
	getColor,
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
} from "../../../utils/getStyle";

const StyledSpan = styled.span<StyledSpanType>`
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
	&:hover: {
		color: ${({ theme, hover }) => getColor({ textColor: hover?.textColor }) ?? theme.colors.systemColors.black500};
	}

	${({ theme, ...props }) =>
		breakpoint.map((breakpoint) => {
			const {
				borderRadius,
				borderColor,
				borderWidth,
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
				hover,
			} = { ...props };
			return theme.breakpoint[breakpoint]`
                border-radius: ${getBorderRadius({ borderRadius, breakpoint }) ?? theme.sizes.radius.sx};
                border-color: ${getBorderColor({ borderColor, breakpoint }) ?? theme.colors.systemColors.white500};
                border-width: ${getBorderWidth({ borderWidth, breakpoint }) ?? theme.sizes.radius.sx};
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
                &:hover {
                    color: ${getColor({ textColor: hover?.textColor, breakpoint }) ?? theme.colors.systemColors.black500};
                };
            `;
		})}
`;

export default StyledSpan;
