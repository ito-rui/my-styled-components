import type { ReactNode } from "react";

export type BasePropsType<T> = {
	[props: string]: object | ReactNode | T;
	children?: ReactNode;
};
