import type { ReactNode, HTMLAttributes } from "react";
import type * as CSSCustomProperties from "../CSSProperties";
import type { BaseCSSDivType } from "../CSSProperties";

export type BaseDivHoverType = {
	hover?: BaseCSSDivType & {};
};

export type BaseDivType = BaseCSSDivType & BaseDivHoverType;

export type FlexType = BaseDivType & {
	flexDirection?: CSSCustomProperties.FlexDirectionType;
	justifyContent?: CSSCustomProperties.JustifyContentType;
	alignItems?: CSSCustomProperties.AlignItemsType;
};

export type VStackType = FlexType;

export type HStackType = FlexType;

export type CenterType = BaseDivType;

export type ShadowCenterType = CenterType;

export type SidebarType = BaseDivType;

export type SidebarHeaderType = FlexType;

type StylesType =
	| BaseDivType
	| FlexType
	| VStackType
	| HStackType
	| CenterType
	| ShadowCenterType
	| SidebarType
	| SidebarHeaderType;

export type BasePropsType = {
	[props: string]: object | ReactNode | HTMLAttributes<HTMLDivElement> | StylesType;
	children?: ReactNode;
};

export type RvBoxFCType = BaseDivType & BasePropsType;

export type RvFlexFCType = FlexType & BasePropsType;
