/* eslint react/jsx-props-no-spreading: off */

import { useMemo } from "react";
import type { FC } from "react";
import { RvHStack } from "../Box";
import type { RvSidebarHeaderFCType, StyledSidebarHeaderType } from "../../types";

const defaultProps: StyledSidebarHeaderType = {
	width: "100%",
	height: "50px",
	borderRadius: 0,
	alignItems: "center",
	justifyContent: "center",
	textColor: "black300",
	bgColor: "black600",
	hover: {
		bgColor: "none",
		textColor: "none",
	},
};

const RvSidebarHeader: FC<RvSidebarHeaderFCType> = ({ children, ...props }) => {
	const {
		width = props.width ?? defaultProps.width,
		height = props.height ?? defaultProps.height,
		borderRadius = props.borderRadius ?? defaultProps.borderRadius,
		alignItems = props.alignItems ?? defaultProps.alignItems,
		justifyContent = props.justifyContent ?? defaultProps.justifyContent,
		textColor = props.textColor ?? defaultProps.textColor,
		bgColor = props.bgColor ?? defaultProps.bgColor,
		hover = props.hover ?? defaultProps.hover,
	} = useMemo(() => props, [props]);

	const newProps = useMemo(
		() => ({ ...props, width, height, borderRadius, alignItems, justifyContent, bgColor, textColor, hover }),
		[props, width, height, borderRadius, alignItems, justifyContent, bgColor, textColor, hover]
	);

	return useMemo(() => <RvHStack {...newProps}>{children}</RvHStack>, [newProps]);
};

export default RvSidebarHeader;
