/* eslint react/jsx-props-no-spreading: off */

import { useMemo } from "react";
import type { FC } from "react";
import { RvButtonFCType } from "../../types/components/Button";
import { StyledButton } from "./style";

export const defaultProps: RvButtonFCType = {
	width: 5,
	height: 2.5,
	borderRadius: 0.4,
	borderWidth: "0px",
};

/**
 * ------------------------------------------
 * @name - RvButton
 *
 * ------------------------------------------
 * @StyledComponents - StyledButton
 *
 * ------------------------------------------
 * @defaultProps
 *
 * - `width`: 5
 * - `height`: 2.5
 * - `borderRadius`: 0.4
 * - `borderWidth`: 0px
 * - `iconStyle`: left
 *
 * ------------------------------------------
 * @example
 *
 * ```typescript
 *  import type { FC, ReactNode } from 'react';
 *  import { RvBox, RvButton } from 'rvi-system';
 *  import type { RvBoxFCType, StyledButtonType } from 'rvi-system';
 *
 *  const buttonProps: StyledButtonType = {
 *      width: 5,
 *      height: 2.5,
 *      bgColor: "red500"
 *  }
 *
 *  const Components: FC<RvBoxFCType> = ({ children, ...props }) => {
 *      const newProps = {...props};
 *      return (
 *          <RvBox {...newProps}>
 *              <RvButton {...buttonProps}>Button</RvButton>
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
 *  import type { RvButtonFCType, StyledButtonProps } from 'rvi-system';
 *  import { RvButton } from 'rvi-system';
 *
 *  const Component: FC<RvButtonFCType> = ({children, ...props}) => {
 *
 *      // Style you want to set as default
 *      const defaultProps: StyledButtonType = {
 *          ... Your DefaultProps !!
 *      }
 *
 *      // Copy props and default values to newProps to preserve primitive values
 *      const newProps = {...props, ...defaultProps};
 *
 *      // Pass newProps to RvButton(StyledButton)
 *      return <RvButton {...newProps}>{children}</RvButton>;
 *  };
 *
 *  ```
 */
const RvButton: FC<RvButtonFCType> = ({ children, ...props }) => {
	const {
		width = props.width ?? defaultProps.width,
		height = props.height ?? defaultProps.height,
		borderRadius = props.borderRadius ?? defaultProps.borderRadius,
		borderWidth = props.borderWidth ?? defaultProps.borderWidth,
		iconStyle = props.iconStyle ?? "left",
	} = useMemo(() => props, [props]);

	const newProps = useMemo(
		() => ({ ...props, width, height, borderRadius, borderWidth }),
		[props, width, height, borderRadius, borderWidth]
	);

	return useMemo(
		() => (
			<StyledButton {...newProps}>
				{newProps.icon && iconStyle === "left" && newProps.icon}
				{children}
				{newProps.icon && iconStyle === "right" && newProps.icon}
			</StyledButton>
		),
		[children, newProps]
	);
};

export default RvButton;
