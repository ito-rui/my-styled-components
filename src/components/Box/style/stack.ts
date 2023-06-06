import styled from "styled-components";
import { breakpoint } from "../../config/theme";
import StyledFlex from "./flex";
import type { StyledHStackType, StyledVStackType } from "../../../types/components/Div";
import { getMarginRight, getMarginBottom } from "../../../utils/getStyle";

export const StyledHStack = styled(StyledFlex)<StyledHStackType>`
	flex-direction: row;
	& > *:not(:last-child) {
		margin-right: ${({ theme, space }) => getMarginRight({ marginRight: space }) ?? theme.sizes.spaces[2]};
	}
	${({ theme, ...props }) =>
		breakpoint.map((breakpoint) => {
			const { space } = { ...props };
			return theme.breakpoint[breakpoint]`
                flex-direction: row;
	            & > *:not(:last-child) {
		            margin-right: ${getMarginRight({ marginRight: space, breakpoint }) ?? theme.sizes.spaces[2]};
            `;
		})}
`;

export const StyledVStack = styled(StyledFlex)<StyledVStackType>`
	flex-direction: column;
	& > *:not(:last-child) {
		margin-bottom: ${({ theme, space }) => getMarginBottom({ marginBottom: space }) ?? theme.sizes.spaces[2]};
	}
	${({ theme, ...props }) =>
		breakpoint.map((breakpoint) => {
			const { space } = { ...props };
			return theme.breakpoint[breakpoint]`
                flex-direction: column;
	            & > *:not(:last-child) {
		            margin-bottom: ${getMarginBottom({ marginBottom: space, breakpoint }) ?? theme.sizes.spaces[2]};
            `;
		})}
`;
