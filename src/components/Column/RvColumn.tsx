/* eslint react/jsx-props-no-spreading: off */

import { useMemo } from "react";
import type { FC } from "react";
import type { RvColumnFCType, StyledColumnType } from "../../types/components/Column";
import { StyledColumn } from "./style";

export const defaultProps: StyledColumnType = {
	width: "100%",
	height: "100%",
	space: 5,
	flexWrap: "wrap",
};

/**
 * ------------------------------------------
 * @name - RvColumn
 *
 * ------------------------------------------
 * @StyledComponents - StyledColumn
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
 * - `flexWrap`: "wrap"
 *
 * ------------------------------------------
 * @example
 *
 * ```typescript
 *  import type { FC, ReactNode } from 'react';
 *  import { RvBox, RvColumn, RvStat, RvStatHeader } from 'rvi-system';
 *  import type { RvBoxFCType, RvColumnFCType, StyledColumnType } from 'rvi-system';
 *
 *  const columnProps: StyledColumnType = {
 *      width: "100%"
 *  }
 *
 *  const Components: FC<RvBoxFCType> = ({ children, ...props }) => {
 *      const newProps = {...props};
 *      return (
 *          <RvBox {...newProps}>
 *              <RvColumn {...cardProps}>
 *                  <RvStat>
 *                      <RvStatHeader>StatHeader1</RvStatHeader>
 *                  </RvStat>
 *                  <RvStat>
 *                      <RvStatHeader>StatHeader2</RvStatHeader>
 *                  </RvStat>
 *                  <RvStat>
 *                      <RvStatHeader>StatHeader3</RvStatHeader>
 *                  </RvStat>
 *              </RvColumn>
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
 *  import type { RvColumnFCType, StyledColumnType } from 'rvi-system';
 *  import { RvColumn } from 'rvi-system';
 *
 *  const Component: FC<RvColumnFCType> = ({children, ...props}) => {
 *
 *      // Style you want to set as default
 *      const defaultProps: StyledFlexType = {
 *          ... Your DefaultProps !!
 *      }
 *
 *      // Copy props and default values to newProps to preserve primitive values
 *      const newProps = {...props, ...defaultProps};
 *
 *      // Pass newProps to RvColumn(StyedColumn)
 *      return <RvColumn {...newProps}>{children}</RvColumn>;
 *  };
 *  ```
 */
const RvColumn: FC<RvColumnFCType> = ({ children, ...props }) => {
	const {
		width = props.width ?? defaultProps.width,
		height = props.height ?? defaultProps.height,
		flexWrap = props.flexWrap ?? defaultProps.flexWrap,
		space = props.space ?? defaultProps.space,
	} = useMemo(() => props, [props]);
	const newProps = useMemo(() => ({ ...props, width, height, space, flexWrap }), [props, width, height, space, flexWrap]);
	return useMemo(() => <StyledColumn {...newProps}>{children}</StyledColumn>, [newProps]);
};

export default RvColumn;
