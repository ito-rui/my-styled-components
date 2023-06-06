/* eslint react/jsx-props-no-spreading: off */

import { useMemo } from "react";
import type { FC } from "react";
import { RvFlex } from "../Box";
import type { RvSidebarHeaderFCType, StyledSidebarHeaderType } from "../../types";

const rvSidebarHeaderDefaultProps: StyledSidebarHeaderType = {
	width: "",
	height: "50px",
	alignItems: "center",
	justifyContent: "center",
	textColor: "black300",
	bgColor: "black600",
};

const RvSidebarHeader: FC<RvSidebarHeaderFCType> = ({ children, ...props }) => {
	const {
		width = props.width ?? rvSidebarHeaderDefaultProps.width,
		height = props.height ?? rvSidebarHeaderDefaultProps.height,
		alignItems = props.alignItems ?? rvSidebarHeaderDefaultProps.alignItems,
		justifyContent = props.justifyContent ?? rvSidebarHeaderDefaultProps.justifyContent,
		textColor = props.textColor ?? rvSidebarHeaderDefaultProps.textColor,
		bgColor = props.bgColor ?? rvSidebarHeaderDefaultProps.bgColor,
	} = useMemo(() => props, [props]);

	const newProps = useMemo(
		() => ({ ...props, width, height, alignItems, justifyContent, bgColor, textColor }),
		[props, width, height, alignItems, justifyContent, bgColor, textColor]
	);

	return useMemo(() => <RvFlex {...newProps}>{children}</RvFlex>, [newProps]);
};

export default RvSidebarHeader;
