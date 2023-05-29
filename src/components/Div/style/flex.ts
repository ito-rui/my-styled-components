import styled from "styled-components";
import { breakpoint } from "../../config/theme";
import StyledDiv from "./base";
import type { FlexType } from "../../../types/components/Div";
import { getDisplay, getFlexDirection, getJustifyContent, getAlignItems } from "../../../utils/getStyle";

const StyledFlex = styled(StyledDiv)<FlexType>`
	display: ${({ display }) => getDisplay({ display }) ?? "flex"};
	flex-direction: ${({ flexDirection }) => getFlexDirection({ flexDirection }) ?? "row"};
	justify-content: ${({ justifyContent }) => getJustifyContent({ justifyContent }) ?? "center"};
	align-items: ${({ alignItems }) => getAlignItems({ alignItems }) ?? "center"};
	${({ theme, ...props }) =>
		breakpoint.map((breakpoint) => {
			const { display, flexDirection, justifyContent, alignItems } = { ...props };
			return theme.breakpoint[breakpoint]`
                display: ${getDisplay({ display, breakpoint }) ?? "flex"};
	            flex-direction: ${getFlexDirection({ flexDirection, breakpoint }) ?? "row"};
	            justify-content: ${getJustifyContent({ justifyContent, breakpoint }) ?? "center"};
	            align-items: ${getAlignItems({ alignItems, breakpoint }) ?? "center"};
            `;
		})}
`;

export default StyledFlex;
