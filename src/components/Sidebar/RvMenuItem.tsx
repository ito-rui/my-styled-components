/* eslint react/jsx-props-no-spreading: off */

import { useMemo } from "react";
import type { FC } from "react";
import { MenuItem } from "react-pro-sidebar";
import type { MenuItemProps } from "react-pro-sidebar";
import type { RvMenuItemFCType } from "../../types/components/Sidebar";

export const defaultProps: MenuItemProps = {};

const RvMenuItem: FC<RvMenuItemFCType> = ({ children, ...props }) => {
	const newProps = useMemo(() => ({ ...props }), [props]);
	return useMemo(() => <MenuItem {...newProps}>{children}</MenuItem>, [newProps]);
};

export default RvMenuItem;
