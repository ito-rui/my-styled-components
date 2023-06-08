import styled from "styled-components";
import { breakpoint } from "../../config/theme";
import StyledDiv from "./StyledDiv";
import type { StyledCenterType, StyledShadowCenterType } from "../../../types/components/Div";
import { getBoxShadow } from "../../../utils/getStyle";

export const StyledCenter = styled(StyledDiv)<StyledCenterType>`
	position: ${({ position }) => position ?? " absolute"};
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
	${({ theme, ...props }) =>
		breakpoint.map((breakpoint) => {
			const {} = { ...props };
			return theme.breakpoint[breakpoint]`
                top: 50%;
                left: 50%;
                transform: translate(-50%, -50%);
            `;
		})}
`;

export const StyledShadowCenter = styled(StyledCenter)<StyledShadowCenterType>`
	box-shadow: ${({ theme, boxShadow }) => getBoxShadow({ boxShadow }) ?? theme.shadow.xl};
	${({ theme, ...props }) =>
		breakpoint.map((breakpoint) => {
			const { boxShadow } = { ...props };
			return theme.breakpoint[breakpoint]`
                box-shadow: ${getBoxShadow({ boxShadow, breakpoint }) ?? theme.shadow.lg};
            `;
		})}
`;
