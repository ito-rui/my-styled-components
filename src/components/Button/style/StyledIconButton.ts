import styled from "styled-components";
import type { StyledIconButtonType } from "../../../types";
import { breakpoint } from "../../config";
import StyledButton from "./StyledButton";
import { getDisplay, getAlignItems, getJustifyContent } from "../../../utils";

const StyledIconButton = styled(StyledButton)<StyledIconButtonType>`
	display: ${({ display }) => getDisplay({ display }) ?? "inline-flex"};
	align-items: ${({ alignItems }) => getAlignItems({ alignItems }) ?? "center"};
	justify-content: ${({ justifyContent }) => getJustifyContent({ justifyContent }) ?? "center"};

	${({ theme, ...props }) =>
		breakpoint.map((breakpoint) => {
			const { display, alignItems, justifyContent } = { ...props };
			return theme.breakpoint[breakpoint]`
                display: ${getDisplay({ display, breakpoint }) ?? "inline-flex"};
                align-items: ${getAlignItems({ alignItems, breakpoint }) ?? "center"};
                justify-content: ${getJustifyContent({ justifyContent, breakpoint }) ?? "center"};
            `;
		})}
`;

export default StyledIconButton;
