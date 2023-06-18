import { useMemo } from "react";
import type { FC } from "react";
import { RvCardHeader } from "../Card";
import { RvStatHeaderFCType, StyledCardHeaderType } from "../../types";

export const defaultProps: StyledCardHeaderType = {
	width: "100%",
	height: "20px",
	marginTop: 3,
};

/**
 * ------------------------------------------
 * @name - RvStatHeader
 *
 * ------------------------------------------
 * @StyledComponents - StyledFlex
 *
 * ------------------------------------------
 * @Components - RvCardHeader
 *
 * ------------------------------------------
 * @defaultprops
 *
 * - `width`: "100%"
 * - `height`: "20px"
 * - `marginTop`: 3
 *
 * ------------------------------------------
 * @expansionexample
 *
 * ```typescript
 *  import type { FC } from 'react';
 *  import type { RvStatHeader } from 'rvi-system';
 *  import type { RvStatHeaderFCType, StyledFlexType } from 'rvi-system';
 *
 *  const component: FC<RvCardHeaderFCType> = ({children, ...props}) => {
 *
 *      // style you want to set as default
 *      const defaultprops: StyledFlexType = {
 *          ... your defaultprops !!
 *      }
 *
 *      // Copy props and default values to newProps to preserve primitive values
 *      const newProps = {...props, ...defaultProps};
 *
 *      // Pass newProps to RvStatHeader(RvCardHeader to StyledFlex)
 *      return <RvStatHeader {...newProps}>{children}</RvStatHeader>;
 *  }
 * ```
 */
const RvStatHeader: FC<RvStatHeaderFCType> = ({ children, ...props }) => {
	const { width = props.width ?? defaultProps.width } = useMemo(() => props, [props]);
	const newProps = useMemo(() => ({ ...props, width }), [props, width]);
	return useMemo(() => <RvCardHeader {...newProps}>{children}</RvCardHeader>, [newProps]);
};

export default RvStatHeader;
