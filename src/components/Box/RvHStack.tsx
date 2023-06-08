/* eslint react/jsx-props-no-spreading: off */

import { useMemo } from "react";
import type { FC } from "react";
import type { RvHStackFCType, StyledHStackType } from "../../types";
import { StyledHStack } from "./style";

export const rvHStackDefaultProps: StyledHStackType = {
	width: "100%",
	height: 20,
	borderRadius: 0.5,
	space: {
		xs: 1,
		sm: 2,
		md: 5,
		lg: 5,
		xl: 5,
	},
};

const RvHStack: FC<RvHStackFCType> = ({ children, ...props }) => {
	const {
		width = props.width ?? rvHStackDefaultProps.width,
		borderRadius = props.borderRadius ?? rvHStackDefaultProps.borderRadius,
		space = props.space ?? rvHStackDefaultProps.space,
	} = useMemo(() => props, [props]);

	const newProps = useMemo(() => ({ ...props, width, borderRadius, space }), [props, width, borderRadius, space]);

	return useMemo(() => <StyledHStack {...newProps}>{children}</StyledHStack>, [newProps]);
};

export default RvHStack;
