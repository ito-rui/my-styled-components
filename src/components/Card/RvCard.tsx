/* eslint react/jsx-props-no-spreading: off */

import { useMemo } from "react";
import type { FC } from "react";
import type { RvCardFCType, StyledCardType } from "../../types/components/Card";
import { RvFlex } from "../Box";

export const rvCardDefaultProps: StyledCardType = {
	width: {
		xs: "100%",
		sm: "100%",
		md: 30,
		lg: 30,
		xl: 30,
	},
	height: 20,
	borderRadius: 0.5,
	boxShadow: "md",
};

const RvCard: FC<RvCardFCType> = ({ children, ...props }) => {
	const {
		width = props.width ?? rvCardDefaultProps.width,
		height = props.height ?? rvCardDefaultProps.height,
		borderRadius = props.borderRadius ?? rvCardDefaultProps.borderRadius,
		boxShadow = props.boxShadow ?? rvCardDefaultProps.boxShadow,
	} = useMemo(() => props, [props]);

	const newProps = useMemo(
		() => ({ ...props, width, height, borderRadius, boxShadow }),
		[props, width, height, borderRadius, boxShadow]
	);

	return useMemo(() => <RvFlex {...newProps}>{children}</RvFlex>, [children, newProps]);
};

export default RvCard;
