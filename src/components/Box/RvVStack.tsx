/* eslint react/jsx-props-no-spreading: off */

import { useMemo } from "react";
import type { FC } from "react";
import { StyledVStack } from "./style";
import type { RvStackFCType, StyledVStackType } from "../../types";

export const rvVStackDefaultProps: StyledVStackType = {
	width: "100%",
	height: 20,
	borderRadius: 0.5,
	space: 5,
};

const RvVStack: FC<RvStackFCType> = ({ children, ...props }) => {
	const {
		width = props.width ?? rvVStackDefaultProps.width,
		borderRadius = props.borderRadius ?? rvVStackDefaultProps.borderRadius,
		space = props.space ?? rvVStackDefaultProps.space,
	} = useMemo(() => props, [props]);

	const newProps = useMemo(() => ({ ...props, width, borderRadius, space }), [props, width, borderRadius, space]);

	return useMemo(() => <StyledVStack {...newProps}>{children}</StyledVStack>, [newProps, children]);
};

export default RvVStack;
