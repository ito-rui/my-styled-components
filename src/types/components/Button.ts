import type { ReactNode, MouseEventHandler, HTMLAttributes } from "react";
import type { BaseCSSButtonType } from "../CSSProperties";
import type { AlignItemsType, JustifyContentType } from "../CSSProperties";

export type StyledButtonHoverType = {
	hover?: BaseCSSButtonType & {};
};

export type StyledButtonDisabledType = {
	disableds?: BaseCSSButtonType & {};
};

export type StyledButtonType = BaseCSSButtonType & StyledButtonHoverType & StyledButtonDisabledType;

export type StyledIconButtonType = BaseCSSButtonType &
	StyledButtonHoverType &
	StyledButtonDisabledType & {
		alignItems?: AlignItemsType;
		justifyContent?: JustifyContentType;
	};

type StylesType = StyledButtonType;

type BasePropsType = {
	[props: string]:
		| string
		| object
		| ReactNode
		| MouseEventHandler<HTMLButtonElement>
		| HTMLAttributes<HTMLButtonElement>
		| StylesType;
	children?: ReactNode;
	onClick?: MouseEventHandler<HTMLButtonElement>;
};

export type RvButtonFCType = BasePropsType &
	StyledButtonType & {
		icon?: ReactNode;
		iconStyle?: "left" | "right";
	};

export type RvIconButtonFCType = BasePropsType & StyledButtonType;
