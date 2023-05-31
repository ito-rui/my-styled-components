import type { ReactNode, MouseEventHandler, HTMLAttributes } from "react";
import type { BaseCSSButtonType } from "../CSSProperties";

export type BaseButtonHoverType = {
	hover?: BaseCSSButtonType & {};
};
export type BaseButtonDisabledType = {
	disableds?: BaseCSSButtonType & {};
};

export type BaseButtonType = BaseCSSButtonType & BaseButtonHoverType & BaseButtonDisabledType;

type StylesType = BaseButtonType;

type BasePropsType = {
	[props: string]:
		| string
		| object
		| ReactNode
		| MouseEventHandler<HTMLButtonElement>
		| HTMLAttributes<HTMLButtonElement>
		| StylesType;
	children?: ReactNode;
};

export type RvButtonType = BasePropsType & BaseButtonType;
