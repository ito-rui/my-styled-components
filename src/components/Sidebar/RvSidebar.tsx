/* eslint react/jsx-props-no-spreading: off  */

import { useMemo } from "react";
import type { FC } from "react";
import { Sidebar } from "react-pro-sidebar";
import type { SidebarProps } from "react-pro-sidebar";
import type { RvSidebarFCType } from "../../types/components/Sidebar";
import { breakpointValue } from "../config/breakpoints/breakpoint";

export const defaultProps: SidebarProps = {
	width: "250px",
	customBreakPoint: breakpointValue.md,
	rootStyles: {},
};

const RvSidebar: FC<RvSidebarFCType> = ({ children, ...props }) => {
	const {
		width = props.width ?? defaultProps.width,
		customBreakPoint = props.customBreakPoint ?? defaultProps.customBreakPoint,
		rootStyles = {
			height: props.rootStyles?.height ?? defaultProps.rootStyles?.height,
		},
	} = useMemo(() => props, [props]);

	const newProps = useMemo(
		() => ({ ...props, width, customBreakPoint, rootStyles }),
		[props, width, customBreakPoint, rootStyles]
	);

	return useMemo(() => <Sidebar {...newProps}>{children}</Sidebar>, [newProps, children]);
};

export default RvSidebar;
