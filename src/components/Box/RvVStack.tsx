import type { FC } from "react";
import { StyledVStack } from "./style";
import type { RvStackFCType, StyledVStackType } from "../../types";

export const rvVStackDefaultProps: StyledVStackType = {
	width: "100%",
	height: 20,
	borderRadius: 0.5,
	marginBottom: 5,
};

const RvVStack: FC<RvStackFCType> = ({ children, ...props }) => {
	const width = { ...props }.width ?? { ...rvVStackDefaultProps }.width;
	const borderRadius = { ...props }.borderRadius ?? { ...rvVStackDefaultProps }.borderRadius;
	const marginBottom = { ...props }.space ?? { ...rvVStackDefaultProps }.marginBottom;
	const newProps = { ...props, width, borderRadius, marginBottom };
	return <StyledVStack {...newProps}>{children}</StyledVStack>;
};

export default RvVStack;
