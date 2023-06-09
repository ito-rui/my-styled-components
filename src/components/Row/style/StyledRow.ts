import styled from "styled-components";
import { getHeight, getWidth, getMarginRight, getMarginBottom } from "../../../utils/getStyle";
import { StyledFlex } from "../../Box";
import type { StyledRowType } from "../../../types";

const StyledRow = styled(StyledFlex)<StyledRowType>`
	width: ${({ width }) => getWidth({ width }) ?? ""};
	height: ${({ height }) => getHeight({ height }) ?? ""};
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

export default StyledRow;
