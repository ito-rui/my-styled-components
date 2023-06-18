import styled from "styled-components";
import { breakpoint } from "../../config/theme";
import type { StyledInputType } from "../../../types";
import {
	getWidth,
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
	getHeight,
} from "../../../utils/getStyle";

const StyledInput = styled.input<StyledInputType>`
	width: ${({ width }) => getWidth({ width }) ?? ""};
	height: ${({ height }) => getHeight({ height }) ?? ""};
	border-radius: ${({ theme, borderRadius }) => getBorderRadius({ borderRadius }) ?? theme.sizes.radius.sx};
	border-color: ${({ theme, borderColor }) => getBorderColor({ borderColor }) ?? theme.colors.systemColors.white500};
	background-color: ${({ theme, bgColor }) => getBgColor({ bgColor }) ?? theme.colors.systemColors.black500};
	color: ${({ theme, textColor }) => getColor({ textColor }) ?? theme.colors.systemColors.white500};
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
		color: ${({ theme, hover }) => getColor({ textColor: hover?.textColor }) ?? theme.colors.systemColors.black500};
	}

	&:focus {
		background-color: ${({ theme, focus }) => getBgColor({ bgColor: focus?.bgColor }) ?? theme.colors.systemColors.black500};
		outline-color: ${({ theme, borderColor }) => getBorderColor({ borderColor }) ?? theme.colors.systemColors.black400};
	}

	&::placeholder {
		color: ${({ theme, placeholders }) =>
			getColor({ textColor: placeholders?.textColor }) ?? theme.colors.systemColors.black100};
		opacity: ${({ placeholders }) => placeholders?.opacity ?? 1};
	}

	${({ theme, ...props }) =>
		breakpoint.map((breakpoint) => {
			const {
				width,
				height,
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
				focus,
				placeholders,
			} = { ...props };
			return theme.breakpoint[breakpoint]`
                width: ${getWidth({ width }) ?? ""};
	            height: ${getHeight({ height }) ?? ""};
                border-radius: ${getBorderRadius({ borderRadius, breakpoint }) ?? theme.sizes.radius.sx};
                border-color: ${getBorderColor({ borderColor, breakpoint }) ?? theme.colors.systemColors.white400};
                border-width: ${getBorderWidth({ borderWidth, breakpoint }) ?? theme.sizes.radius.sx};
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

                &:hover {
                    color: ${getColor({ textColor: hover?.textColor, breakpoint }) ?? theme.colors.systemColors.white500};
                };

                &:focus {
		            background-color: ${getBgColor({ bgColor: focus?.bgColor }) ?? theme.colors.systemColors.black500};
                    border-color: ${
						getBorderColor({ borderColor: focus?.borderColor, breakpoint }) ?? theme.colors.systemColors.black400
					};
                    outline-color: ${
						getBorderColor({ borderColor: focus?.borderColor, breakpoint }) ?? theme.colors.systemColors.black400
					};
	            };

	            &::placeholder {
		            color: ${getColor({ textColor: placeholders?.textColor }) ?? theme.colors.systemColors.white200};
		            opacity: ${placeholders?.opacity ?? 1};
	            };
            `;
		})}
`;

export default StyledInput;
