import styled from "styled-components";
import { getHeight, getWidth, getMarginBottom, getBgColor } from "../../../utils/getStyle";
import { StyledFlex } from "../../Box";
import type { StyledRowType } from "../../../types";

const StyledRow = styled(StyledFlex)<StyledRowType>`
	width: ${({ width }) => getWidth({ width }) ?? ""};
	height: ${({ height }) => getHeight({ height }) ?? ""};
	background-color: ${({ theme, bgColor }) => getBgColor({ bgColor }) ?? theme.colors.systemColors.black600};
	flex-direction: column;

	${({ theme, space, bgColor }) => theme.breakpoint.xs`
        background-color: ${getBgColor({ bgColor, breakpoint: "xs" }) ?? theme.colors.systemColors.black600};
        & > *:not(:last-child) {
    		margin-bottom: ${getMarginBottom({ marginBottom: space, breakpoint: "xs" }) ?? ""};
	    }
    `}

	${({ theme, space, bgColor }) => theme.breakpoint.sm`
        background-color: ${getBgColor({ bgColor, breakpoint: "sm" }) ?? theme.colors.systemColors.black600};
        & > *:not(:last-child) {
    		margin-bottom: ${getMarginBottom({ marginBottom: space, breakpoint: "sm" }) ?? ""};
	    }
    `}
	${({ theme, space, bgColor }) => theme.breakpoint.md`
        background-color: ${getBgColor({ bgColor, breakpoint: "md" }) ?? theme.colors.systemColors.black600};
        & > *:not(:last-child) {
            margin-bottom: ${getMarginBottom({ marginBottom: space, breakpoint: "md" }) ?? ""};
	    }
    `}

	${({ theme, space, bgColor }) => theme.breakpoint.lg`
        background-color: ${getBgColor({ bgColor, breakpoint: "lg" }) ?? theme.colors.systemColors.black600};
        & > *:not(:last-child) {
    		margin-bottom: ${getMarginBottom({ marginBottom: space, breakpoint: "lg" }) ?? ""};
	    }
    `}

	${({ theme, space, bgColor }) => theme.breakpoint.xl`
        background-color: ${getBgColor({ bgColor, breakpoint: "xl" }) ?? theme.colors.systemColors.black600};
        & > *:not(:last-child) {
    		margin-bottom: ${getMarginBottom({ marginBottom: space, breakpoint: "xl" }) ?? ""};
	    }
    `}
`;

export default StyledRow;
