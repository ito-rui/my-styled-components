/* eslint react/jsx-props-no-spreading: off */

import { useMemo } from "react";
import type { FC } from "react";
import { StyledRow } from "./style";
import type { RvRowFCType } from "../../types/components/Row";
import type { StyledRowType } from "../../types";

export const defaultProps: StyledRowType = {
	width: "100%",
	height: "100%",
	space: 5,
};

/**
 * ------------------------------------------
 * @name - RvRow
 *
 * ------------------------------------------
 * @StyledComponents - StyledRow
 *
 * ------------------------------------------
 * @Components - none
 *
 * ------------------------------------------
 * @defaultProps
 *
 * - `width`: "100%"
 * - `height`: "100%"
 * - `space`: 5
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
const RvRow: FC<RvRowFCType> = ({ children, ...props }) => {
	const {
		width = props.width ?? defaultProps.width,
		height = props.height ?? defaultProps.height,
		space = props.space ?? defaultProps.space,
	} = useMemo(() => props, [props]);

	const newProps = useMemo(() => ({ ...props, width, height, space }), [props, width, height, space]);

	return useMemo(() => <StyledRow {...newProps}>{children}</StyledRow>, [newProps]);
};

export default RvRow;
