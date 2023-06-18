/* eslint react/jsx-props-no-spreading: off */

import { useMemo } from "react";
import type { FC } from "react";
import type { RvBoxFCType, StyledDivType } from "../../types/components/Div";
import { StyledDiv } from "./style";

export const defaultProps: StyledDivType = {
	borderRadius: 0.5,
};

/**
 * ------------------------------------------
 * @name - RvBox
 *
 * ------------------------------------------
 * @StyledComponents - StyledDiv
 *
 * ------------------------------------------
 * @defaultProps
 *
 * - `borderRadius`: 0.5
 *
 * ------------------------------------------
 * @example
 *
 * ```typescript
 *  import type { FC, ReactNode } from 'react';
 *  import { RvBox, RvButton } from 'rvi-system';
 *  import type { RvBoxFCType, StyledButtonType } from 'rvi-system';
 *
 *  type PropsType = {
 *      [props: string]: object | ReactNode;
 *      children: ReactNode;
 *  }
 *
 *  const buttonProps: StyledButtonType = {
 *      width: 5,
 *      height: 2.5,
 *  };
 *
 *  const boxProps: StyledDivType = {
 *      width: {
 *          xs: '80%',
 *          sm: '80%',
 *          md: '40%',
 *          lg: '25%',
 *          xl: '25%'
 *      },
 *      margin: {
 *          xs: '10%',
 *          sm: '10%',
 *          md: '10%',
 *          lg: '5%',
 *          xl: '5%'
 *      }
 *  }
 *
 *  const Components: FC<PropsType> = ({ children, ...props }) => {
 *      const newProps = {...props};
 *      return (
 *          <RvBox {...boxProps}>
 *              <RvButton {...buttonProps}>Button1</RvButton>
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
 *  import type { RvBoxFCType, StyledDivType } from 'rvi-system';
 *  import { RvBox } from 'rvi-system';
 *
 *  const Component: FC<RvBoxFCType> = ({children, ...props}) => {
 *
 *      // Style you want to set as default
 *      const defaultProps: StyledDivType = {
 *          ... Your DefaultProps !!
 *      }
 *
 *      // Copy props and default values to newProps to preserve primitive values
 *      const newProps = {...props, ...defaultProps};
 *
 *      // Pass newProps to RvBox(StyledDiv)
 *      return <RvBox {...newProps}>{children}</RvBox>;
 *  };
 *
 *  ```
 */
const RvBox: FC<RvBoxFCType> = ({ children, ...props }) => {
	const { borderRadius = props.borderRadius ?? defaultProps.borderRadius } = useMemo(() => props, [props]);
	const newProps = useMemo(() => ({ ...props, borderRadius }), [props, borderRadius]);
	return useMemo(() => <StyledDiv {...newProps}>{children}</StyledDiv>, [newProps]);
};

export default RvBox;
