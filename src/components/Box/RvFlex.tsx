/* eslint react/jsx-props-no-spreading: off */

import { useMemo } from "react";
import type { FC } from "react";
import type { RvFlexFCType } from "../../types/components/Div";
import { StyledFlex } from "./style";

/**
 * ------------------------------------------
 * @name - RvFlex
 *
 * ------------------------------------------
 * @StyledComponents - StyledFlex
 *
 * ------------------------------------------
 * @defaultProps
 *
 * - `none`
 *
 * ------------------------------------------
 * @example
 *
 * ```typescript
 *  import type { FC, ReactNode } from 'react';
 *  import { RvBox, RvButton, RvFlex } from 'rvi-system';
 *  import type { RvBoxFCType, StyledButtonType, StyledFlexType } from 'rvi-system';
 *
 *  const buttonProps: StyledButtonType = {
 *      width: 5,
 *      height: 2.5,
 *  };
 *
 *  const flexProps: StyledFlexType = {
 *      width: '100%',
 *      height: '100%',
 *      justifyContent: 'center',
 *  };
 *
 *  const Components: FC<RvBoxFCType> = ({ children, ...props }) => {
 *      const newProps = {...props};
 *      return (
 *          <RvBox {...newProps}>
 *              <RvFlex {...flexProps}>
 *                  <RvButton {...buttonProps}>Button1</RvButton>
 *                  <RvButton {...buttonProps}>Button2</RvButton>
 *              </RvFlex>
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
 *  import type { RvFlexFCType, StyledFlexType } from 'rvi-system';
 *  import { RvFlex } from 'rvi-system';
 *
 *  const Component: FC<RvFlexFCType> = ({children, ...props}) => {
 *
 *      // Style you want to set as default
 *      const defaultProps: StyledFlexType = {
 *          ... Your DefaultProps !!
 *      }
 *
 *      // Copy props and default values to newProps to preserve primitive values
 *      const newProps = {...props, ...defaultProps};
 *
 *      // Pass newProps to RvFlex(StyledFlex)
 *      return <RvFlex {...newProps}>{children}</RvFlex>;
 *  };
 *
 *  ```
 */
const RvFlex: FC<RvFlexFCType> = ({ children, ...props }) => {
	const newProps = useMemo(() => ({ ...props }), [props]);
	return useMemo(() => <StyledFlex {...newProps}>{children}</StyledFlex>, [newProps]);
};

export default RvFlex;
