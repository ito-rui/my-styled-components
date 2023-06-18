/* eslint react/jsx-props-no-spreading: off */

import { useMemo } from "react";
import type { FC } from "react";
import type { RvSpanFCType, StyledSpanType } from "../../types";
import { StyledSpan } from "./style";

export const rvSpanDefaultProps: StyledSpanType = {
	fontSize: {
		xs: 1.1,
		sm: 1.2,
		md: 1.3,
		lg: 1.4,
		xl: 1.5,
	},
};

/**
 * ------------------------------------------
 * @name - RvSpan
 *
 * ------------------------------------------
 * @StyledComponents - RvSpan
 *
 * ------------------------------------------
 * @Components - StyledSpan
 *
 * ------------------------------------------
 * @defaultprops
 *
 * - `fontSize`: {
 *      xs: 1.1,
 *      sm: 1.2,
 *      md: 1.3,
 *      lg: 1.4,
 *      xl: 1.5
 *   }
 *
 * ------------------------------------------
 * @expansionexample
 *
 * ```typescript
 *  import type { FC } from 'react';
 *  import type { RvSpan } from 'rvi-system';
 *  import type { RvSpanFCType, StyledSpanType } from 'rvi-system';
 *
 *  const component: FC<RvSpanFCType> = ({children, ...props}) => {
 *
 *      // style you want to set as default
 *      const defaultprops: StyledSpanType = {
 *          ... your defaultprops !!
 *      }
 *
 *      // Copy props and default values to newProps to preserve primitive values
 *      const newProps = {...props, ...defaultProps};
 *
 *      // Pass newProps to RvSpan(StyledSpan)
 *      return <RvSpan {...newProps}>{children}</RvSpan>;
 *  }
 * ```
 */

const RvSpan: FC<RvSpanFCType> = ({ children, ...props }) => {
	const { fontSize = props.fontSize ?? rvSpanDefaultProps.fontSize } = useMemo(() => ({ ...props }), [props]);
	const newProps = useMemo(() => ({ ...props, fontSize }), [props, fontSize]);
	return useMemo(() => <StyledSpan {...newProps}>{children}</StyledSpan>, [newProps, children]);
};

export default RvSpan;
