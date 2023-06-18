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
	border-color: ${({ borderColor }) => getBorderColor({ borderColor }) ?? "none"};
	background-color: ${({ bgColor }) => getBgColor({ bgColor }) ?? "none"};
	color: ${({ theme, textColor }) => getColor({ textColor }) ?? theme.colors.systemColors.black200};
	border-width: ${({ theme, borderWidth }) => getBorderWidth({ borderWidth }) ?? theme.sizes.radius.sx};
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
	&:hover {
		color: ${({ theme, hover }) => getColor({ textColor: hover?.textColor }) ?? theme.colors.systemColors.black200};
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
                border-color: ${getBorderColor({ borderColor, breakpoint }) ?? "none"};
                border-width: ${getBorderWidth({ borderWidth, breakpoint }) ?? theme.sizes.radius.sx};
                background-color: ${getBgColor({ bgColor, breakpoint }) ?? "noen"};
                color: ${getColor({ textColor, breakpoint }) ?? theme.colors.systemColors.black200};
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
                &:hover {
                    color: ${getColor({ textColor: hover?.textColor, breakpoint }) ?? theme.colors.systemColors.black200};
                };
            `;
		})}
`;

export default StyledSpan;
