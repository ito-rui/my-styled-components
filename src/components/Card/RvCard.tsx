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
	const width = { ...props }.width ?? { ...rvCardDefaultProps }.width;
	const height = { ...props }.height ?? { ...rvCardDefaultProps }.height;
	const borderRadius = { ...props }.borderRadius ?? { ...rvCardDefaultProps }.borderRadius;
	const boxShadow = { ...props }.boxShadow ?? { ...rvCardDefaultProps }.boxShadow;
	const newProps = { ...props, width, height, borderRadius, boxShadow };
	return <RvFlex {...newProps}>{children}</RvFlex>;
};

export default RvCard;
