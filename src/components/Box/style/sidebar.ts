/* eslint no-nested-ternary: off */

import styled from "styled-components";
import { SidebarType, SidebarHeaderType } from "../../../types/components/Div";
import StyledDiv from "./base";
import StyledFlex from "./flex";
import { isValidSystemColorsKey } from "../../config/theme";

export const StyledSidebar = styled(StyledDiv)<SidebarType>`
	width: ${({ width }) => width ?? "250px"};
	background-color: ${({ theme, bgColor }) =>
		bgColor
			? typeof bgColor !== "object"
				? isValidSystemColorsKey(bgColor)
					? theme.colors.systemColors[bgColor]
					: bgColor
				: bgColor.md
			: theme.colors.systemColors.black600};
	height: 100vh;
	position: fixed;
	top: 0;
	left: 0;
	${({ theme, width }) => theme.breakpoint.xs`
        width: ${width} ?? '250px'}
    `};
	${({ theme, width }) => theme.breakpoint.sm`
        width: ${width} ?? '250px'}
    `};
	${({ theme, width }) => theme.breakpoint.md`
        width: ${width} ?? '250px'}
    `};
	${({ theme, width }) => theme.breakpoint.lg`
        width: ${width} ?? '250px'}
    `};
	${({ theme, width }) => theme.breakpoint.xl`
        width: ${width} ?? '250px'}
    `};
`;

export const StyledSidebarHeader = styled(StyledFlex)<SidebarHeaderType>`
	width: ${({ theme, width }) => width ?? theme.sizes.boxSizes.full};
	height: 50px;
	display: flex;
	align-items: center;
	justify-content: center;
	background-color: ${({ theme, bgColor }) =>
		bgColor
			? typeof bgColor !== "object"
				? isValidSystemColorsKey(bgColor)
					? theme.colors.systemColors[bgColor]
					: bgColor
				: bgColor.md
			: theme.colors.systemColors.black600};
	color: ${({ theme, color }) =>
		color ? (isValidSystemColorsKey(color) ? theme.colors.systemColors[color] : color) : theme.colors.systemColors.white500};
	border-bottom: ${({ theme, borderColor }) => `1px solid ${borderColor ?? theme.colors.systemColors.black500}`};
	${({ theme }) => theme.breakpoint.xs``};
	${({ theme }) => theme.breakpoint.sm``};
	${({ theme }) => theme.breakpoint.md``};
	${({ theme }) => theme.breakpoint.lg``};
	${({ theme }) => theme.breakpoint.xl``};
`;
