import type { HTMLAttributes, FormEventHandler } from "react";
import type { BasePropsType } from "./Props";
import type { BaseCSSInputType } from "../CSSProperties";

type StyledInputHoverType = {
	hover?: BaseCSSInputType;
};

type StyledInputFocusType = {
	focus?: BaseCSSInputType;
};

type StyledInputPlaceholderType = {
	placeholders?: BaseCSSInputType & {
		opacity?: number;
	};
};

export type StyledInputType = BaseCSSInputType & StyledInputHoverType & StyledInputFocusType & StyledInputPlaceholderType;

export type RvInputFCType = StyledInputType &
	BasePropsType<HTMLAttributes<HTMLInputElement> | FormEventHandler<HTMLInputElement>> & {};
