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
		lg: "30%",
		xl: "30%",
	},
	height: 8,
};

/**
 * ------------------------------------------
 * @name - RvStat
 *
 * ------------------------------------------
 * @StyledComponents - StyledFlex
 *
 * ------------------------------------------
 * @Components - RvCard
 *
 * ------------------------------------------
 * @defaultprops
 *
 * - `width`: {
 *      xs: "100%",
 *      sm: "45%",
 *      md: "45%",
 *      lg: "30%",
 *      xl: "30%"
 *   },
 * - `height`: 8
 *
 * ------------------------------------------
 * @expansionexample
 *
 * ```typescript
 *  import type { FC } from 'react';
 *  import type { RvStat } from 'rvi-system';
 *  import type { RvStatFCType, StyledFlexType } from 'rvi-system';
 *
 *  const component: FC<RvStatFCType> = ({children, ...props}) => {
 *
 *      // style you want to set as default
 *      const defaultprops: StyledFlexType = {
 *          ... your defaultprops !!
 *      }
 *
 *      // Copy props and default values to newProps to preserve primitive values
 *      const newProps = {...props, ...defaultProps};
 *
 *      // Pass newProps to RvStat(RvCard to StyledFlex)
 *      return <RvStat {...newProps}>{children}</RvStat>;
 *  }
 * ```
 */
const RvStat: FC<RvStatFCType> = ({ children, ...props }) => {
	const { width = props.width ?? defaultProps.width, height = props.height ?? defaultProps.height } = useMemo(
		() => props,
		[props]
	);

	const newProps = useMemo(() => ({ ...props, width, height }), [props, width, height]);

	return useMemo(() => <RvCard {...newProps}>{children}</RvCard>, [newProps, children]);
};

export default RvStat;
