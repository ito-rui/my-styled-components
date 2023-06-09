/* eslint react/jsx-props-no-spreading: off */

import { useMemo } from "react";
import type { FC } from "react";
import type { RvColumnFCType, StyledColumnType } from "../../types/components/Column";
import { StyledColumn } from "./style";

export const defaultProps: StyledColumnType = {
	width: "100%",
	height: "100vh",
	space: {
		xs: 5,
		sm: 5,
		md: 5,
		lg: 5,
		xl: 5,
	},
	bgColor: "none",
	flexWrap: "wrap",
	hover: { bgColor: "none" },
};

const RvColumn: FC<RvColumnFCType> = ({ children, ...props }) => {
	const {
		width = props.width ?? defaultProps.width,
		height = props.height ?? defaultProps.height,
		flexWrap = props.flexWrap ?? defaultProps.flexWrap,
		space = props.space ?? defaultProps.space,
		bgColor = props.bgColor ?? defaultProps.bgColor,
		hover = props.hover ?? defaultProps.hover,
	} = useMemo(() => props, [props]);
	const newProps = useMemo(
		() => ({ ...props, width, height, space, flexWrap, bgColor, hover }),
		[props, width, height, space, flexWrap, bgColor, hover]
	);
	return useMemo(() => <StyledColumn {...newProps}>{children}</StyledColumn>, [newProps]);
};

export default RvColumn;
