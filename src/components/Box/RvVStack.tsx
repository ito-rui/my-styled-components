/* eslint react/jsx-props-no-spreading: off */

import { useMemo } from "react";
import type { FC } from "react";
import { StyledVStack } from "./style";
import type { RvVStackFCType, StyledVStackType } from "../../types";

export const defaultProps: StyledVStackType = {
	borderRadius: 0.5,
	space: 5,
};

/**
 * ------------------------------------------
 * @name - RvVStack
 *
 * ------------------------------------------
 * @StyledComponents - StyledVStack
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
 *  import { RvBox, RvButton, RvVStack } from 'rvi-system';
 *  import type { RvBoxFCType, StyledButtonType, StyledVStackType } from 'rvi-system';
 *
 *  const buttonProps: StyledButtonType = {
 *      width: 5,
 *      height: 2.5,
 *  };
 *
 *  const vstackProps: StyledVStackType = {
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
 *              <RvVStack {...vstackProps}>
 *                  <RvButton {...buttonProps}>Button1</RvButton>
 *                  <RvButton {...buttonProps}>Button2</RvButton>
 *              </RvVstack>
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
 *  import type { RvVStackFCType, StyledVStackType } from 'rvi-system';
 *  import { RvVStack } from 'rvi-system';
 *
 *  const Component: FC<RvVStackFCType> = ({children, ...props}) => {
 *
 *      // Style you want to set as default
 *      const defaultProps: StyledVStackType = {
 *          ... Your DefaultProps !!
 *      }
 *
 *      // Copy props and default values to newProps to preserve primitive values
 *      const newProps = {...props, ...defaultProps};
 *
 *      // Pass newProps to RvVStack(StyledVStack)
 *      return <RvVStack {...newProps}>{children}</RvVStack>;
 *  };
 *
 *  ```
 */
const RvVStack: FC<RvVStackFCType> = ({ children, ...props }) => {
	const { borderRadius = props.borderRadius ?? defaultProps.borderRadius, space = props.space ?? defaultProps.space } = useMemo(
		() => props,
		[props]
	);

	const newProps = useMemo(() => ({ ...props, borderRadius, space }), [props, borderRadius, space]);

	return useMemo(() => <StyledVStack {...newProps}>{children}</StyledVStack>, [newProps, children]);
};

export default RvVStack;
