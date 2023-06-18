/* eslint react/jsx-props-no-spreading: off */

import { useMemo } from "react";
import type { FC } from "react";
import type { RvCardHeaderFCType, StyledCardHeaderType } from "../../types/components/Card";
import { RvFlex } from "../Box";

export const defaultProps: StyledCardHeaderType = {
	width: "100%",
	height: "80px",
	marginTop: 10,
};

/**
 * ------------------------------------------
 * @name - RvCardHeader
 *
 * ------------------------------------------
 * @StyledComponents - StyledFlex
 *
 * ------------------------------------------
 * @Components - RvFlex
 *
 * ------------------------------------------
 * @defaultProps
 *
 * - `width`: "100%"
 * - `height`: "80px"
 * - `marginTop`: 10
 *
 * ------------------------------------------
 * @example
 *
 * ```typescript
 *  import type { FC, ReactNode } from 'react';
 *  import { RvBox, RvCard, RvCardHeader } from 'rvi-system';
 *  import type { RvBoxFCType, RvCardFCType, StyledFlexType, RvCardHeaderFCType } from 'rvi-system';
 *
 *  const cardProps: StyledFlexType = {
 *      bgColor: "white500",
 *      boxShadow: "lg"
 *  }
 *
 *  const cardHeaderProps: StyledFlexType = {
 *      marginTop: 0
 *  }
 *
 *  const Components: FC<RvBoxFCType> = ({ children, ...props }) => {
 *      const newProps = {...props};
 *      return (
 *          <RvBox {...newProps}>
 *              <RvCard {...cardProps}>
 *                  <RvCardHeader label="Card Header" {...cardHeaderProps}>
 *                      <RvButton>Button</RvButton>
 *                  </RvCardHeader>
 *              </RvCard>
 *          </RvBox>
 *      );
 *  };
 *
 * ```
 *
 * ------------------------------------------
 * @ExpansionExample
 *
 * ```typescript
 *  import type { RvCardFCType, StyledFlexType } from 'rvi-system';
 *  import { RvCardHeader } from 'rvi-system';
 *
 *  const Component: FC<RvCardFCType> = ({children, ...props}) => {
 *
 *      // Style you want to set as default
 *      const defaultProps: StyledFlexType = {
 *          ... Your DefaultProps !!
 *      }
 *
 *      // Copy props and default values to newProps to preserve primitive values
 *      const newProps = {...props, ...defaultProps};
 *
 *      // Pass newProps to RvCardHeader(RvFlex to StyedFlex)
 *      return <RvCardHeader {...newProps}>{children}</RvCardHeader>;
 *  };
 *
 *  ```
 */
const RvCardHeader: FC<RvCardHeaderFCType> = ({ children, ...props }) => {
	const newProps = useMemo(() => ({ ...props }), [props]);
	return useMemo(
		() => (
			<RvFlex {...newProps}>
				{newProps.label && newProps.label}
				{children}
			</RvFlex>
		),
		[newProps, children]
	);
};

export default RvCardHeader;
