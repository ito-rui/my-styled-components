import styled from "styled-components";
import StyledFlex from "./StyledFlex";
import type { StyledHStackType, StyledVStackType } from "../../../types/components/Div";
import { getMarginRight, getMarginBottom } from "../../../utils/getStyle";

export const StyledHStack = styled(StyledFlex)<StyledHStackType>`
	flex-direction: row;

	${({ theme, space }) => theme.breakpoint.xs`
        & > *:not(:last-child) {
    		margin-right: ${getMarginRight({ marginRight: space, breakpoint: "xs" }) ?? ""};
	    }
    `}

	${({ theme, space }) => theme.breakpoint.sm`
        & > *:not(:last-child) {
    		margin-right: ${getMarginRight({ marginRight: space, breakpoint: "sm" }) ?? ""};
	    }
    `}
	   ${({ theme, space }) => theme.breakpoint.md`
        & > *:not(:last-child) {
            margin-right: ${getMarginRight({ marginRight: space, breakpoint: "md" }) ?? ""};
	    }
    `}

	${({ theme, space }) => theme.breakpoint.lg`
        & > *:not(:last-child) {
    		margin-right: ${getMarginRight({ marginRight: space, breakpoint: "lg" }) ?? ""};
	    }
    `}

	${({ theme, space }) => theme.breakpoint.xl`
        & > *:not(:last-child) {
    		margin-right: ${getMarginRight({ marginRight: space, breakpoint: "xl" }) ?? ""};
	    }
    `}
`;

export const StyledVStack = styled(StyledFlex)<StyledVStackType>`
	flex-direction: column;

	${({ theme, space }) => theme.breakpoint.xs`
        & > *:not(:last-child) {
    		margin-bottom: ${getMarginBottom({ marginBottom: space, breakpoint: "xs" }) ?? ""};
	    }
    `}

	${({ theme, space }) => theme.breakpoint.sm`
        & > *:not(:last-child) {
    		margin-bottom: ${getMarginBottom({ marginBottom: space, breakpoint: "sm" }) ?? ""};
	    }
    `}
	${({ theme, space }) => theme.breakpoint.md`
        & > *:not(:last-child) {
            margin-bottom: ${getMarginBottom({ marginBottom: space, breakpoint: "md" }) ?? ""};
	    }
    `}

	${({ theme, space }) => theme.breakpoint.lg`
        & > *:not(:last-child) {
    		margin-bottom: ${getMarginBottom({ marginBottom: space, breakpoint: "lg" }) ?? ""};
	    }
    `}

	${({ theme, space }) => theme.breakpoint.xl`
        & > *:not(:last-child) {
    		margin-bottom: ${getMarginBottom({ marginBottom: space, breakpoint: "xl" }) ?? ""};
	    }
    `}
`;
