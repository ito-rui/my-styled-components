/* eslint react/jsx-props-no-spreading: off */

import { useMemo } from "react";
import type { FC } from "react";
import type { RvCardFCType, StyledCardType } from "../../types/components/Card";
import { RvFlex } from "../Box";

export const defaultProps: StyledCardType = {
	width: {
		xs: "100%",
		sm: "300px",
		md: "300px",
		lg: "300px",
		xl: "300px",
	},
	height: "400px",
	borderRadius: 0.5,
	alignItems: "start",
	boxShadow: "md",
};

/**
 * ------------------------------------------
 * @name - RvCard
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
 * - `width`: {
 *      `xs`: "100%",
 *      `sm`: "300px",
 *      `md`: "300px",
 *      `lg`: "300px",
 *      `xl`: "400px",
 *  }
 * - `height`: "400px"
 * - `borderRadius`: 0.5
 * - `alignItems`: "start"
 * - `boxShadow`: "md"
 *
 * ------------------------------------------
 * @example
 *
 * ```typescript
 *  import type { FC, ReactNode } from 'react';
 *  import { RvBox, RvCard, RvButton } from 'rvi-system';
 *  import type { RvBoxFCType, RvCardFCType, StyledFlexType, StyledButtonType } from 'rvi-system';
 *
 *  const buttonProps: StyledButtonType = {
 *      width: 5,
 *      height: 2.5,
 *  };
 *
 *  const cardProps: StyledFlexType = {
 *      bgColor: "white500",
 *      boxShadow: "lg"
 *  }
 *
 *  const Components: FC<RvBoxFCType> = ({ children, ...props }) => {
 *      const newProps = {...props};
 *      return (
 *          <RvBox {...newProps}>
 *              {children}
 *              <RvCard {...cardProps}>
 *                  <RvButton {...buttonProps}>Button1</RvButton>
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
 *  import { RvCard } from 'rvi-system';
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
 *      // Pass newProps to RvCard(RvFlex to StyedFlex)
 *      return <RvCard {...newProps}>{children}</RvCard>;
 *  };
 *
 *  ```
 */
const RvCard: FC<RvCardFCType> = ({ children, ...props }) => {
	const {
		width = props.width ?? defaultProps.width,
		height = props.height ?? defaultProps.height,
		borderRadius = props.borderRadius ?? defaultProps.borderRadius,
		alignItems = props.alignItems ?? defaultProps.alignItems,
		boxShadow = props.boxShadow ?? defaultProps.boxShadow,
	} = useMemo(() => props, [props]);

	const newProps = useMemo(
		() => ({ ...props, width, height, borderRadius, alignItems, boxShadow }),
		[props, width, height, borderRadius, alignItems, boxShadow]
	);

	return useMemo(() => <RvFlex {...newProps}>{children}</RvFlex>, [children, newProps]);
};

export default RvCard;
