/* eslint react/jsx-props-no-spreading: off  */

import { useMemo } from "react";
import type { FC } from "react";
import { Sidebar } from "react-pro-sidebar";
import type { SidebarProps } from "react-pro-sidebar";
import type { RvSidebarFCType } from "../../types/components/Sidebar";

export const rvSidebarDefaultProps: SidebarProps = {
	width: "250px",
	rootStyles: {
		height: "100vh",
	},
};

const RvSidebar: FC<RvSidebarFCType> = ({ children, ...props }) => {
	const {
		width = props.width ?? rvSidebarDefaultProps.width,
		rootStyles = {
			height: props.rootStyles?.height ?? rvSidebarDefaultProps.rootStyles?.height,
		},
	} = useMemo(() => props, [props]);

	const newProps = useMemo(() => ({ ...props, width, rootStyles }), [props, width, rootStyles]);

	return useMemo(() => <Sidebar {...newProps}>{children}</Sidebar>, [newProps, children]);
};

export default RvSidebar;
