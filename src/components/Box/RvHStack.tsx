/* eslint react/jsx-props-no-spreading: off */

import { useMemo } from "react";
import type { FC } from "react";
import type { RvHStackFCType, StyledHStackType } from "../../types";
import { StyledHStack } from "./style";

export const defaultProps: StyledHStackType = {
	borderRadius: 0.5,
	space: 5,
};

/**
 * ------------------------------------------
 * @name - RvHStack
 *
 * ------------------------------------------
 * @StyledComponents - StyledHStack
 *
 * ------------------------------------------
 * @defaultProps
 *
 * - `borderRadius`: 0.5
 * - `space`: 5
 *
 * ------------------------------------------
 * @example
 *
 * ```typescript
 *  import type { FC, ReactNode } from 'react';
 *  import { RvBox, RvButton, RvHStack } from 'rvi-system';
 *  import type { RvBoxFCType, StyledButtonType, StyledHStackType } from 'rvi-system';
 *
 *  const buttonProps: StyledButtonType = {
 *      width: 5,
 *      height: 2.5,
 *  };
 *
 *  const hstackProps: StyledHStackType = {
 *      space: {
 *          xs: 0,
 *          sm: 0,
 *          md: 5,
 *          lg: 5,
 *          xl: 5
 *      }
 *  };
 *
 *  const Components: FC<RvBoxFCType> = ({ children, ...props }) => {
 *      const newProps = {...props};
 *      return (
 *          <RvBox {...newProps}>
 *              <RvHStack {...hstackProps}>
 *                  <RvButton {...buttonProps}>Button1</RvButton>
 *                  <RvButton {...buttonProps}>Button2</RvButton>
 *              </RvHstack>
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
 *  import type { RvHStackFCType, StyledHStackType } from 'rvi-system';
 *  import { RvHStack } from 'rvi-system';
 *
 *  const Component: FC<RvHStackFCType> = ({children, ...props}) => {
 *
 *      // Style you want to set as default
 *      const defaultProps: StyledHStackType = {
 *          ... Your DefaultProps !!
 *      }
 *
 *      // Copy props and default values to newProps to preserve primitive values
 *      const newProps = {...props, ...defaultProps};
 *
 *      // Pass newProps to RvHStack(StyledHStack)
 *      return <RvHStack {...newProps}>{children}</RvHStack>;
 *  };
 *
 *  ```
 */
const RvHStack: FC<RvHStackFCType> = ({ children, ...props }) => {
	const { borderRadius = props.borderRadius ?? defaultProps.borderRadius, space = props.space ?? defaultProps.space } = useMemo(
		() => props,
		[props]
	);

	const newProps = useMemo(() => ({ ...props, borderRadius, space }), [props, borderRadius, space]);

	return useMemo(() => <StyledHStack {...newProps}>{children}</StyledHStack>, [newProps]);
};

export default RvHStack;
