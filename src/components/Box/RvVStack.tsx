/* eslint react/jsx-props-no-spreading: off */

import { memo, useMemo } from "react";
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
	const {
		width = props.width ?? rvVStackDefaultProps.width,
		borderRadius = props.borderRadius ?? rvVStackDefaultProps.borderRadius,
		marginBottom = props.space ?? rvVStackDefaultProps.marginBottom,
	} = useMemo(() => props, [props]);

	const newProps = useMemo(() => ({ ...props, width, borderRadius, marginBottom }), [props, width, borderRadius, marginBottom]);

	return useMemo(() => <StyledVStack {...newProps}>{children}</StyledVStack>, [newProps, children]);
};

export default RvVStack;
