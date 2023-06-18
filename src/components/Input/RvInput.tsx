/* eslint react/jsx-props-no-spreading: off */

import { useMemo } from "react";
import type { FC } from "react";
import { StyledInput } from "./style";
import type { RvInputFCType, StyledInputType } from "../../types";

export const defaultProps: StyledInputType = {
	width: "100%",
	height: "30px",
	borderRadius: 0.3,
	borderWidth: "0px",
	padding: "10px",
	placeholders: {
		textColor: "gray500",
	},
};

/**
 * ------------------------------------------
 * @name - RvInput
 *
 * ------------------------------------------
 * @StyledComponents - StyledInput
 *
 * ------------------------------------------
 * @Components - none
 *
 * ------------------------------------------
 * @defaultProps
 *
 * - `width`: "100%"
 * - `height`: "100%"
 *
 * ------------------------------------------
 * @example
 *
 * ```typescript
 *  import type { FC, ReactNode } from 'react';
 *  import { RvBox, RvRow, RvStat, RvStatHeader } from 'rvi-system';
 *  import type { RvBoxFCType, RvRowFCType, StyledColumnType } from 'rvi-system';
 *
 *  const rowProps: StyledRowType = {
 *      width: "100%",
 *      height: "100%"
 *  }
 *
 *  const Components: FC<RvBoxFCType> = ({ children, ...props }) => {
 *      const newProps = {...props};
 *      return (
 *          <RvBox {...newProps}>
 *              <RvRow {...rowProps}>
 *                  <RvStat>
 *                      <RvStatHeader>StatHeader1</RvStatHeader>
 *                  </RvStat>
 *                  <RvStat>
 *                      <RvStatHeader>StatHeader2</RvStatHeader>
 *                  </RvStat>
 *                  <RvStat>
 *                      <RvStatHeader>StatHeader3</RvStatHeader>
 *                  </RvStat>
 *              </RvRow>
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
 *  import type { RvRowFCType, StyledRowType } from 'rvi-system';
 *  import { RvRow } from 'rvi-system';
 *
 *  const Component: FC<RvRowFCType> = ({children, ...props}) => {
 *
 *      // Style you want to set as default
 *      const defaultProps: StyledRowType = {
 *          ... Your DefaultProps !!
 *      }
 *
 *      // Copy props and default values to newProps to preserve primitive values
 *      const newProps = {...props, ...defaultProps};
 *
 *      // Pass newProps to RvRow(StyedRow)
 *      return <RvRow {...newProps}>{children}</RvRow>;
 *  }
 *  ```
 */
const RvInput: FC<RvInputFCType> = ({ children, ...props }) => {
	const {
		width = props.width ?? defaultProps.width,
		height = props.height ?? defaultProps.height,
		borderRadius = props.borderRadius ?? defaultProps.borderRadius,
		borderWidth = props.borderWidth ?? defaultProps.borderWidth,
		padding = props.padding ?? defaultProps.padding,
	} = useMemo(() => props, [props]);

	const newProps = useMemo(
		() => ({ ...props, width, height, borderRadius, borderWidth, padding }),
		[props, width, height, borderRadius, borderWidth, padding]
	);

	return useMemo(() => <StyledInput {...newProps} />, [newProps]);
};

export default RvInput;
