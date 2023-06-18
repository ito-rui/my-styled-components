import { useMemo } from "react";
import type { FC } from "react";
import type { RvMainFCType, StyledMainType } from "../../types/components/Main";
import { StyledMain } from "./style";

export const mainDefaultProps: StyledMainType = {
	width: "100%",
	height: "100vh",
	display: "flex",
	flexDirection: "column",
	alignItems: "center",
	justifyContent: "center",
};

/**
 * ------------------------------------------
 * @name - RvMain
 *
 * ------------------------------------------
 * @StyledComponents - StyledMain
 *
 * ------------------------------------------
 * @Components - none
 *
 * ------------------------------------------
 * @defaultprops
 *
 * - `width`: "100%"
 * - `height`: "100vh"
 * - `display`: "flex"
 * - `flexDirection`: "column"
 * - `alignItems`: "center"
 * - `justifyContent`: "center"
 *
 * ------------------------------------------
 * @expansionexample
 *
 * ```typescript
 *  import type { FC } from 'react';
 *  import type { RvMain } from 'rvi-system';
 *  import type { RvMainFCType, StyledMainType } from 'rvi-system';
 *
 *  const component: FC<RvMainFCType> = ({children, ...props}) => {
 *
 *      // style you want to set as default
 *      const defaultprops: StyledMainType = {
 *          ... your defaultprops !!
 *      }
 *
 *      // Copy props and default values to newProps to preserve primitive values
 *      const newProps = {...props, ...defaultProps};
 *
 *      // Pass newProps to RvMain(StyledMain)
 *      return <RvMain {...newProps}>{children}</RvMain>;
 *  }
 * ```
 */
const RvMain: FC<RvMainFCType> = ({ children, ...props }) => {
	const { width = props.width ?? mainDefaultProps.width, height = props.height ?? mainDefaultProps.height } = useMemo(
		() => props,
		[props]
	);
	const newProps = useMemo(() => ({ ...props, width, height }), [props, width, height]);
	return useMemo(() => <StyledMain {...newProps}>{children}</StyledMain>, [newProps]);
};

export default RvMain;
