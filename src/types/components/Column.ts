import type { HTMLAttributes } from "react";
import type { BasePropsType } from "./Props";
import type { StyledFlexType } from "./Div";
import type { MarginRightType, MarginBottomType } from "../CSSProperties";

export type StyledColumnType = StyledFlexType & {
	space?: MarginRightType | MarginBottomType;
};

export type RvColumnFCType = StyledColumnType & BasePropsType<HTMLAttributes<HTMLDivElement>>;
