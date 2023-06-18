import styled from "styled-components";
import { getHeight, getWidth, getMarginRight, getMarginBottom, getBgColor } from "../../../utils/getStyle";
import { StyledFlex } from "../../Box";
import type { StyledColumnType } from "../../../types";

const StyledColumn = styled(StyledFlex)<StyledColumnType>`
	width: ${({ width }) => getWidth({ width }) ?? ""};
	height: ${({ height }) => getHeight({ height }) ?? ""};
	background-color: ${({ theme, bgColor }) => getBgColor({ bgColor }) ?? theme.colors.systemColors.black600};
	flex-direction: row;

	${({ theme, space }) => theme.breakpoint.xs`
        & > *:not(:last-child) {
    		margin-bottom: ${getMarginBottom({ marginBottom: space, breakpoint: "xs" }) ?? ""};
	    }
    `}

	${({ theme, space }) => theme.breakpoint.sm`
        & > *:not(:last-child): nth-child(odd) {
            margin-right: ${getMarginRight({ marginRight: space, breakpoint: "sm" }) ?? ""};
	    }
    `}

	${({ theme, space }) => theme.breakpoint.md`
        & > *:not(:last-child): nth-child(odd) {
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

export default StyledColumn;
