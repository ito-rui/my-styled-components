import type { FC } from "react";
import type { RvSpanFCType, StyledSpanType } from "../../types";
import { StyledSpan } from "./style";

export const rvSpanDefaultProps: StyledSpanType = {
	fontSize: {
		xs: 1.1,
		sm: 1.2,
		md: 1.3,
		lg: 1.4,
		xl: 1.5,
	},
	textColor: "black400",
};

const RvSpan: FC<RvSpanFCType> = ({ children, ...props }) => {
	const fontSize = { ...props }.fontSize ?? { ...rvSpanDefaultProps }.fontSize;
	const textColor = { ...props }.textColor ?? { ...rvSpanDefaultProps }.textColor;
	const hover = {
		textColor: { ...props }.hover?.textColor ?? { ...props }.textColor ?? { ...rvSpanDefaultProps }.textColor,
	};
	const newProps = { ...props, fontSize, textColor, hover };
	return <StyledSpan {...newProps}>{children}</StyledSpan>;
};

export default RvSpan;
