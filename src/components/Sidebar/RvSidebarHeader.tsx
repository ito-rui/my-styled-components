/* eslint react/jsx-props-no-spreading: off */

import { useMemo } from "react";
import type { FC } from "react";
import { RvHStack } from "../Box";
import type { RvSidebarHeaderFCType, StyledHStackType } from "../../types";

const defaultProps: StyledHStackType = {
	width: "100%",
	height: "100px",
	borderRadius: "0px",
	alignItems: "center",
	justifyContent: "center",
	bgColor: "black600",
};

/**
 * ------------------------------------------
 * @name - RvSidebar
 *
 * ------------------------------------------
 * @StyledComponents - none
 *
 * ------------------------------------------
 * @Components - Sidebar(react-pro-sidebar)
 *
 * ------------------------------------------
 * @defaultProps
 *
 * - `width`: "100%"
 * - `height`: "100px"
 * - `borderRadius`: "0px"
 * - `alignItems`: "center"
 * - `justifyContent`: "center"
 * - `bgColor`: "black600"
 *
 * ------------------------------------------
 * @ExpansionExample
 *
 * ```typescript
 *  import type { RvSidebarHeaderFCType, StyledHStackType } from 'rvi-system';
 *  import { RvSidebarHeader } from 'rvi-system';
 *
 *  const Component: FC<RvSidebarFCType> = ({children, ...props}) => {
 *
 *      // Style you want to set as default
 *      const defaultProps: StyledHStackType = {
 *          ... Your DefaultProps !!
 *      }
 *
 *      // Copy props and default values to newProps to preserve primitive values
 *      const newProps = {...props, ...defaultProps};
 *
 *      // Pass newProps to RvSidebarHeader(SidebarHeader)
 *      return <RvSidebarHeader {...newProps}>{children}</RvSidebarHeader>;
 *  }
 * ```
 */
const RvSidebarHeader: FC<RvSidebarHeaderFCType> = ({ children, ...props }) => {
	const {
		width = props.width ?? defaultProps.width,
		height = props.height ?? defaultProps.height,
		borderRadius = props.borderRadius ?? defaultProps.borderRadius,
		alignItems = props.alignItems ?? defaultProps.alignItems,
		justifyContent = props.justifyContent ?? defaultProps.justifyContent,
		bgColor = props.bgColor ?? defaultProps.bgColor,
	} = useMemo(() => props, [props]);

	const newProps = useMemo(
		() => ({ ...props, width, height, borderRadius, alignItems, justifyContent, bgColor }),
		[props, width, height, borderRadius, alignItems, justifyContent, bgColor]
	);

	return useMemo(() => <RvHStack {...newProps}>{children}</RvHStack>, [newProps, children]);
};

export default RvSidebarHeader;
