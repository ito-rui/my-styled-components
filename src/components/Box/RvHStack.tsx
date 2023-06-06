/* eslint react/jsx-props-no-spreading: off */

import { useMemo } from "react";
import type { FC } from "react";
import type { RvStackFCType, StyledHStackType } from "../../types";
import { StyledHStack } from "./style";

export const rvHStackDefaultProps: StyledHStackType = {
	width: "100%",
	height: 20,
	borderRadius: 0.5,
	space: 5,
};

const RvHStack: FC<RvStackFCType> = ({ children, ...props }) => {
	const {
		width = props.width ?? rvHStackDefaultProps.width,
		borderRadius = props.borderRadius ?? rvHStackDefaultProps.borderRadius,
		space = props.space ?? rvHStackDefaultProps.space,
	} = useMemo(() => props, [props]);

	const newProps = useMemo(() => ({ ...props, width, borderRadius, space }), [props, width, borderRadius, space]);

	return useMemo(() => <StyledHStack {...newProps}>{children}</StyledHStack>, [newProps]);
};

export default RvHStack;
