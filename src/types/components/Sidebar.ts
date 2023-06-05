import type { ReactNode, HTMLAttributes } from "react";
import type { MenuItemProps, MenuProps, SidebarProps, SubMenuProps } from "react-pro-sidebar";

type BasePropsType = {
	[props: string]: object | ReactNode | HTMLAttributes<HTMLDivElement>;
	children?: ReactNode;
};

export type RvSidebarFCType = SidebarProps & BasePropsType;

export type RvMenuFCType = MenuProps & BasePropsType;

export type RvMenuItemFCType = MenuItemProps & BasePropsType;

export type RvSubMenuFCType = SubMenuProps & BasePropsType;
