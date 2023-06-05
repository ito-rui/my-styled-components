/* eslint react/jsx-props-no-spreading: off */

import { useMemo } from "react";
import type { FC } from "react";
import { Menu } from "react-pro-sidebar";
import type { MenuProps } from "react-pro-sidebar";
import type { RvMenuFCType } from "../../types/components/Sidebar";
import systemColors from "../config/colors/systemColor";

export const rvMenuDefaultProps: MenuProps = {
	rootStyles: {},
	menuItemStyles: {
		root: {
			backgroundColor: systemColors.black600,
			color: systemColors.black200,
		},
		button: {
			":hover": {
				backgroundColor: systemColors.black200,
				color: systemColors.black600,
			},
		},
	},
};

const RvMenu: FC<RvMenuFCType> = ({ children, ...props }) => {
	const {
		rootStyles = props.rootStyles ?? rvMenuDefaultProps.rootStyles,
		menuItemStyles = props.menuItemStyles ?? rvMenuDefaultProps.menuItemStyles,
	} = useMemo(() => props, [props]);

	const newProps = useMemo(() => ({ ...props, rootStyles, menuItemStyles }), [props, rootStyles, menuItemStyles]);

	return useMemo(() => <Menu {...newProps}>{children}</Menu>, [newProps]);
};

export default RvMenu;
