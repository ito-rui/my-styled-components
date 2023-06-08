import styled from "styled-components";
import { breakpoint } from "../../config/theme";
import StyledFlex from "./StyledFlex";
import type { StyledHStackType, StyledVStackType } from "../../../types/components/Div";
import { getMarginRight, getMarginBottom } from "../../../utils/getStyle";

export const StyledHStack = styled(StyledFlex)<StyledHStackType>`
	flex-direction: row;
	& > *:not(:last-child) {
		margin-right: ${({ space }) => getMarginRight({ marginRight: space }) ?? ""};
	}

	${({ theme, ...props }) =>
		breakpoint.map((breakpoint) => {
			const { space } = { ...props };
			return theme.breakpoint[breakpoint]`
               flex-direction: row;
	            & > *:not(:last-child) {
		            margin-right: ${getMarginRight({ marginRight: space, breakpoint }) ?? ""};
            `;
		})}
`;

export const StyledVStack = styled(StyledFlex)<StyledVStackType>`
	flex-direction: column;
	& > *:not(:last-child) {
		margin-bottom: ${({ space }) => getMarginBottom({ marginBottom: space }) ?? ""};
	}

	${({ theme, ...props }) =>
		breakpoint.map((breakpoint) => {
			const { space } = { ...props };
			return theme.breakpoint[breakpoint]`
                flex-direction: column;
	            & > *:not(:last-child) {
		            margin-bottom: ${getMarginBottom({ marginBottom: space, breakpoint }) ?? ""};
            `;
		})}
`;
