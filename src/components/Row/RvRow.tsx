/* eslint react/jsx-props-no-spreading: off */

import { useMemo } from "react";
import type { FC } from "react";
import { StyledRow } from "./style";
import type { RvRowFCType } from "../../types/components/Row";
import type { StyledRowType } from "../../types";

export const defaultProps: StyledRowType = {
	width: "100%",
	height: "100%",
	bgColor: "none",
	justifyContent: "start",
	alignItems: "start",
	hover: {
		bgColor: "none",
	},
};

const RvRow: FC<RvRowFCType> = ({ children, ...props }) => {
	const {
		width = props.width ?? defaultProps.width,
		height = props.height ?? defaultProps.height,
		bgColor = props.bgColor ?? defaultProps.bgColor,
		hover = props.hover ?? defaultProps.hover,
	} = useMemo(() => props, [props]);

	const newProps = useMemo(() => ({ ...props, width, height, bgColor, hover }), [props, width, height, bgColor, hover]);

	return useMemo(() => <StyledRow {...newProps}>{children}</StyledRow>, [newProps]);
};

export default RvRow;
