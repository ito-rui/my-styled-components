/* eslint react/jsx-props-no-spreading: off */

import { useMemo } from "react";
import type { FC } from "react";
import type { RvCardHeaderFCType, StyledCardHeaderType } from "../../types/components/Card";
import { RvFlex } from "../Box";

export const rvCardHeaderDefaultProps: StyledCardHeaderType = {
	width: "100%",
};

const RvCardHeader: FC<RvCardHeaderFCType> = ({ children, ...props }) => {
	const newProps = useMemo(() => ({ ...props }), [props]);
	return useMemo(
		() => (
			<RvFlex {...newProps}>
				{newProps.headerLabel && newProps.headerLabel}
				{children}
			</RvFlex>
		),
		[newProps, children]
	);
};

export default RvCardHeader;
