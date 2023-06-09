import { useMemo } from "react";
import type { FC } from "react";
import { RvCard } from "../Card";
import type { RvStatFCType } from "../../types/components/Stat";
import { StyledCardType } from "../../types";

export const defaultProps: StyledCardType = {
	width: {
		xs: "100%",
		sm: "45%",
		md: "45%",
		lg: 18,
		xl: 18,
	},
	height: {
		xs: 8,
		sm: 8,
		md: 8,
		lg: 8,
		xl: 8,
	},
};

const RvStat: FC<RvStatFCType> = ({ children, ...props }) => {
	const { width: cardWidth = props.width ?? defaultProps.width, height: cardHeight = props.height ?? defaultProps.height } =
		useMemo(() => props, [props]);

	const newProps = useMemo(() => ({ ...props, width: cardWidth, height: cardHeight }), [props, cardWidth, cardHeight]);

	return useMemo(() => <RvCard {...newProps}>{children}</RvCard>, [newProps]);
};

export default RvStat;
