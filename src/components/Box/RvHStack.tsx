import type { FC } from "react";
import type { RvStackFCType, StyledHStackType } from "../../types";
import { StyledHStack } from "./style";

export const rvHStackDefaultProps: StyledHStackType = {
	width: "100%",
	height: 20,
	borderRadius: 0.5,
	marginRight: 5,
};

const RvHStack: FC<RvStackFCType> = ({ children, ...props }) => {
	const width = { ...props }.width ?? { ...rvHStackDefaultProps }.width;
	const borderRadius = { ...props }.borderRadius ?? { ...rvHStackDefaultProps }.borderRadius;
	const marginRight = { ...props }.space ?? { ...rvHStackDefaultProps }.marginBottom;
	const newProps = { ...props, width, borderRadius, marginRight };
	return <StyledHStack {...newProps}>{children}</StyledHStack>;
};

export default RvHStack;
