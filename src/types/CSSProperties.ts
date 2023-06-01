import type { CSSProperties } from "styled-components";
import {
	SystemColorsKey,
	TransitionKey,
	ShadowKey,
	FontSizesKey,
	FontWeightsKey,
	LineHeightsKey,
	FontsKey,
} from "../components/config/theme";

export type MediaType = "xs" | "sm" | "md" | "lg" | "xl";

export type ResponsiveType<T> = {
	xs?: T;
	sm?: T;
	md?: T;
	lg?: T;
	xl?: T;
};

export type WidthType = CSSProperties["width"] | ResponsiveType<CSSProperties["width"]>;

export type HeightType = CSSProperties["height"] | ResponsiveType<CSSProperties["height"]>;

export type PositionType = CSSProperties["position"] | ResponsiveType<CSSProperties["position"]>;

export type BoxShadowType = (CSSProperties["boxShadow"] | ShadowKey) | ResponsiveType<ShadowKey | CSSProperties["boxShadow"]>;

export type BorderRadiusType = CSSProperties["borderRadius"] | ResponsiveType<CSSProperties["borderRadius"]>;

export type BorderColorType =
	| (CSSProperties["borderColor"] | SystemColorsKey)
	| ResponsiveType<SystemColorsKey | CSSProperties["borderColor"]>;

export type BorderWidthType = CSSProperties["borderWidth"] | ResponsiveType<CSSProperties["borderWidth"]>;

export type ColorType = CSSProperties["color"] | SystemColorsKey | ResponsiveType<SystemColorsKey | CSSProperties["color"]>;

export type BgColorType =
	| (CSSProperties["backgroundColor"] | SystemColorsKey)
	| ResponsiveType<SystemColorsKey | CSSProperties["backgroundColor"]>;

export type PaddingType = CSSProperties["padding"] | ResponsiveType<CSSProperties["padding"]>;

export type PaddingTopType = CSSProperties["paddingTop"] | ResponsiveType<CSSProperties["padding"]>;

export type paddingLeftType = CSSProperties["paddingLeft"] | ResponsiveType<CSSProperties["paddingLeft"]>;

export type PaddingRightType = CSSProperties["paddingRight"] | ResponsiveType<CSSProperties["paddingRight"]>;

export type PaddingBottomType = CSSProperties["paddingBottom"] | ResponsiveType<CSSProperties["paddingBottom"]>;

export type MarginType = CSSProperties["margin"] | ResponsiveType<CSSProperties["margin"]>;

export type MarginTopType = CSSProperties["marginTop"] | ResponsiveType<CSSProperties["marginTop"]>;

export type MarginRightType = CSSProperties["marginRight"] | ResponsiveType<CSSProperties["marginRight"]>;

export type MarginBottomType = CSSProperties["marginBottom"] | ResponsiveType<CSSProperties["marginBottom"]>;

export type MarginLeftType = CSSProperties["marginLeft"] | ResponsiveType<CSSProperties["marginLeft"]>;

export type TransitionType =
	| (CSSProperties["transition"] | TransitionKey)
	| ResponsiveType<CSSProperties["transition"] | TransitionKey>;

export type DisplayType = CSSProperties["display"] | ResponsiveType<CSSProperties["display"]>;

export type FlexDirectionType = CSSProperties["flexDirection"] | ResponsiveType<CSSProperties["flexDirection"]>;

export type JustifyContentType = CSSProperties["justifyContent"] | ResponsiveType<CSSProperties["justifyContent"]>;

export type AlignItemsType = CSSProperties["alignItems"] | ResponsiveType<CSSProperties["alignItems"]>;

export type FontSizeType = (CSSProperties["fontSize"] | FontSizesKey) | ResponsiveType<CSSProperties["fontSize"] | FontSizesKey>;

export type FontWeightType =
	| CSSProperties["fontWeight"]
	| FontWeightsKey
	| ResponsiveType<CSSProperties["fontWeight"] | FontWeightsKey>;

export type LineHeightType =
	| (CSSProperties["lineHeight"] | LineHeightsKey)
	| ResponsiveType<CSSProperties["lineHeight"] | LineHeightsKey>;

export type CursorType = CSSProperties["cursor"] | ResponsiveType<CSSProperties["cursor"]>;

export type TextDecorationType = CSSProperties["textDecoration"] | ResponsiveType<CSSProperties["textDecoration"]>;

export type FontStyleType = CSSProperties["fontStyle"] | ResponsiveType<CSSProperties["fontStyle"]>;

export type FontFamilyType = CSSProperties["fontFamily"] | FontsKey;

export type BaseWidthType = {
	width?: WidthType;
};

export type BaseHeightType = {
	height?: HeightType;
	lineHeight?: LineHeightType;
};

export type BaseDisplayType = {
	display?: DisplayType;
};

export type BasePositionType = {
	position?: PositionType;
};

export type BaseBoxShadowType = {
	boxShadow?: BoxShadowType;
};

export type BaseColorType = {
	borderColor?: BorderColorType;
	textColor?: ColorType;
	bgColor?: BgColorType;
};

export type BaseBorderType = {
	borderColor?: BorderColorType;
	borderWidth?: BorderWidthType;
	borderRadius?: BorderRadiusType;
};

export type BaseMarginType = {
	margin?: MarginType;
	marginTop?: MarginTopType;
	marginRight?: MarginRightType;
	marginBottom?: MarginBottomType;
	marginLeft?: MarginLeftType;
};

export type BasePaddingType = {
	padding?: PaddingType;
	paddingTop?: PaddingTopType;
	paddingRight?: PaddingRightType;
	paddingBottom?: PaddingBottomType;
	paddingLeft?: paddingLeftType;
};

export type BaseFontType = {
	fontFamily?: FontFamilyType;
	fontSize?: FontSizeType;
	fontWeight?: FontWeightType;
	fontStyle?: FontStyleType;
};

export type BaseTransitionType = {
	transition?: TransitionType;
};

export type BaseCursorType = {
	cursor?: CursorType;
};

export type BaseTextType = {
	textDecoration?: TextDecorationType;
};

export type BaseCSSDivType = BaseWidthType &
	BaseHeightType &
	BaseDisplayType &
	BasePositionType &
	BaseBorderType &
	BaseBoxShadowType &
	BaseColorType &
	BaseMarginType &
	BasePaddingType &
	BaseFontType &
	BaseTransitionType;

export type BaseCSSButtonType = BaseCSSDivType & BaseCursorType;

export type BaseCSSInputType = BaseCSSDivType;

export type BaseCSSSpanType = BaseColorType &
	BaseFontType &
	BaseMarginType &
	BasePaddingType &
	BaseBorderType &
	BaseTextType &
	BaseTransitionType;
