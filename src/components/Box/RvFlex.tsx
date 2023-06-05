/* eslint react/jsx-props-no-spreading: off */

import { useMemo } from "react";
import type { FC } from "react";
import type { RvFlexFCType } from "../../types/components/Div";
import { StyledFlex } from "./style";

const RvFlex: FC<RvFlexFCType> = ({ children, ...props }) => {
	const newProps = useMemo(() => ({ ...props }), [props]);
	return useMemo(() => <StyledFlex {...newProps}>{children}</StyledFlex>, [newProps]);
};

export default RvFlex;
