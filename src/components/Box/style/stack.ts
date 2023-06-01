import styled from "styled-components";
import { breakpoint } from "../../config/theme";
import StyledFlex from "./flex";
import type { StyledHStackType, StyledVStackType } from "../../../types/components/Div";
import { getMarginRight, getMarginBottom } from "../../../utils/getStyle";

export const StyledHStack = styled(StyledFlex)<StyledHStackType>`
	flex-direction: row;
	& > *:not(:last-child) {
		margin-right: ${({ theme, marginRight }) => getMarginRight({ marginRight }) ?? theme.sizes.spaces[2]};
	}
	${({ theme, ...props }) =>
		breakpoint.map((breakpoint) => {
			const { marginRight } = { ...props };
			return theme.breakpoint[breakpoint]`
                flex-direction: row;
	            & > *:not(:last-child) {
		            margin-right: ${getMarginRight({ marginRight, breakpoint }) ?? theme.sizes.spaces[2]};
            `;
		})}
`;

export const StyledVStack = styled(StyledFlex)<StyledVStackType>`
	flex-direction: column;
	& > * {
		margin-bottom: ${({ theme, marginBottom }) => getMarginBottom({ marginBottom }) ?? theme.sizes.spaces[2]};
	}
	${({ theme, ...props }) =>
		breakpoint.map((breakpoint) => {
			const { marginBottom } = { ...props };
			return theme.breakpoint[breakpoint]`
                flex-direction: row;
	            & > *:not(:last-child) {
		            margin-right: ${getMarginBottom({ marginBottom, breakpoint }) ?? theme.sizes.spaces[2]};
            `;
		})}
`;
