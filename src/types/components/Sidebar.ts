import type { ReactNode, HTMLAttributes } from "react";
import type { MenuItemProps, MenuProps, SidebarProps, SubMenuProps } from "react-pro-sidebar";
import type { StyledDivType, StyledDivHoverType, StyledFlexType } from "./Div";

type BasePropsType = {
	[props: string]: object | ReactNode | HTMLAttributes<HTMLDivElement>;
	children?: ReactNode;
};

export type RvSidebarFCType = SidebarProps & BasePropsType;

export type RvMenuFCType = MenuProps & BasePropsType;

export type RvMenuItemFCType = MenuItemProps & BasePropsType;

export type RvSubMenuFCType = SubMenuProps & BasePropsType;

export type RvSidebarContainerFCType = StyledDivType & StyledDivHoverType & BasePropsType;

export type RvSidebarHeaderFCType = StyledFlexType & StyledDivHoverType & BasePropsType;
