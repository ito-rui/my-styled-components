/* eslint react/jsx-props-no-spreading: off */

import { useMemo } from "react";
import type { FC } from "react";
import { StyledIconButton } from "./style";
import type { RvIconButtonFCType, StyledIconButtonType } from "../../types";

export const defaultProps: StyledIconButtonType = {
	width: "40px",
	height: "40px",
	borderRadius: 0.4,
	borderWidth: "0px",
};

/**
 * ------------------------------------------
 * @name - RvIconButton
 *
 * ------------------------------------------
 * @StyledComponents - StyledIconButton
 *
 * ------------------------------------------
 * @defaultProps
 *
 * - `width`: 40px
 * - `height`: 40px
 * - `borderRadius`: 0.4
 * - `borderWidth`: 0px
 *
 * ------------------------------------------
 * @example
 *
 * ```typescript
 *  import type { FC, ReactNode } from 'react';
 *  import { MdBarChart } from "react-icons/md";
 *  import { RvBox, RvIconButton } from 'rvi-system';
 *  import type { RvBoxFCType, StyledIconButtonType } from 'rvi-system';
 *
 *  const iconButtonProps: StyledIconButtonType = {
 *      width: 80px,
 *      height: 80px,
 *  }
 *
 *  const Components: FC<RvBoxFCType> = ({ children, ...props }) => {
 *      const newProps = {...props};
 *      return (
 *          <RvBox {...newProps}>
 *              <RvIconButton {...iconButtonProps}>
 *                  <MdBarChart size={24} />
 *              </RvIconButton>
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
 *  import type { RvIconButtonFCType, StyledIconButtonProps } from 'rvi-system';
 *  import { RvIconButton } from 'rvi-system';
 *
 *  const Component: FC<RvButtonIconFCType> = ({children, ...props}) => {
 *
 *      // Style you want to set as default
 *      const defaultProps: StyledIconButtonType = {
 *          ... Your DefaultProps !!
 *      }
 *
 *      // Copy props and default values to newProps to preserve primitive values
 *      const newProps = {...props, ...defaultProps};
 *
 *      // Pass newProps to RvIconButton(StyledIconButton)
 *      return <RvIconButton {...newProps}>{children}</RvIconButton>;
 *  };
 *
 *  ```
 */

const RvIconButton: FC<RvIconButtonFCType> = ({ children, ...props }) => {
	const {
		width = props.width ?? defaultProps.width,
		height = props.height ?? defaultProps.height,
		borderRadius = props.borderRadius ?? defaultProps.borderRadius,
		borderWidth = props.borderWidth ?? defaultProps.borderWidth,
	} = useMemo(() => props, [props]);

	const newProps = useMemo(
		() => ({ ...props, width, height, borderRadius, borderWidth }),
		[props, width, height, borderRadius, borderWidth]
	);

	return useMemo(() => <StyledIconButton {...newProps}>{children}</StyledIconButton>, [newProps]);
};

export default RvIconButton;
