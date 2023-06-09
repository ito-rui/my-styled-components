import type { HTMLAttributes } from "react";
import type { BasePropsType } from "./Props";
import type * as CSSCustomProperties from "../CSSProperties";

export type StyledDivHoverType = {
	hover?: CSSCustomProperties.BaseCSSDivType & {};
};

export type StyledDivType = CSSCustomProperties.BaseCSSDivType & StyledDivHoverType;

export type StyledFlexType = StyledDivType & {
	flexDirection?: CSSCustomProperties.FlexDirectionType;
	flexWrap?: CSSCustomProperties.FlexWrapType;
	justifyContent?: CSSCustomProperties.JustifyContentType;
	alignItems?: CSSCustomProperties.AlignItemsType;
};

export type StyledVStackType = StyledFlexType & {
	space?: CSSCustomProperties.MarginBottomType;
};

export type StyledHStackType = StyledFlexType & {
	space?: CSSCustomProperties.MarginRightType;
};

export type StyledStackType = StyledFlexType & {
	space?: CSSCustomProperties.MarginRightType | CSSCustomProperties.MarginBottomType;
};

export type StyledCenterType = StyledDivType;

export type StyledShadowCenterType = StyledCenterType;

export type StyledSidebarContainerType = StyledDivType;

export type StyledSidebarHeaderType = StyledFlexType;

export type RvBoxFCType = StyledDivType & BasePropsType<HTMLAttributes<HTMLDivElement>>;

export type RvFlexFCType = StyledFlexType & BasePropsType<HTMLAttributes<HTMLDivElement>>;

export type RvHStackFCType = StyledHStackType & BasePropsType<HTMLAttributes<HTMLDivElement>>;

export type RvVStackFCType = StyledVStackType & BasePropsType<HTMLAttributes<HTMLDivElement>>;
