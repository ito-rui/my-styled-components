import styled from "styled-components";
import { breakpoint } from "../../config/theme";
import StyledDiv from "./StyledDiv";
import type { StyledFlexType } from "../../../types/components/Div";
import { getDisplay, getFlexDirection, getFlexWrap, getJustifyContent, getAlignItems } from "../../../utils/getStyle";

const StyledFlex = styled(StyledDiv)<StyledFlexType>`
	display: ${({ display }) => getDisplay({ display }) ?? "flex"};
	flex-direction: ${({ flexDirection }) => getFlexDirection({ flexDirection }) ?? "row"};
	flex-wrap: ${({ flexWrap }) => getFlexWrap({ flexWrap }) ?? "nowrap"};
	justify-content: ${({ justifyContent }) => getJustifyContent({ justifyContent }) ?? "center"};
	align-items: ${({ alignItems }) => getAlignItems({ alignItems }) ?? "center"};
	${({ theme, ...props }) =>
		breakpoint.map((breakpoint) => {
			const { display, flexDirection, flexWrap, justifyContent, alignItems } = { ...props };
			return theme.breakpoint[breakpoint]`
                display: ${getDisplay({ display, breakpoint }) ?? "flex"};
	            flex-direction: ${getFlexDirection({ flexDirection, breakpoint }) ?? "row"};
                flex-wrap: ${getFlexWrap({ flexWrap, breakpoint }) ?? "wrap"};
	            justify-content: ${getJustifyContent({ justifyContent, breakpoint }) ?? "center"};
	            align-items: ${getAlignItems({ alignItems, breakpoint }) ?? "center"};
            `;
		})}
`;

export default StyledFlex;
