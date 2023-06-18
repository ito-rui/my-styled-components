/* eslint react/jsx-props-no-spreading: off  */

import { useEffect, useLayoutEffect, useMemo, useState } from "react";
import type { FC } from "react";
import { Sidebar } from "react-pro-sidebar";
import type { SidebarProps } from "react-pro-sidebar";
import type { RvSidebarFCType } from "../../types/components/Sidebar";
import { breakpointValue } from "../config/breakpoints/breakpoint";

export const defaultProps: SidebarProps = {
	width: "250px",
	customBreakPoint: breakpointValue.sm.max,
	collapsedWidth: "80px",
	rootStyles: {},
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
 * - `width`: "250px"
 * - `customBreakPoint`: `breakpointValue.sm.max`
 * - `collapsedWidth`: "80px"
 *
 * ------------------------------------------
 * @ExpansionExample
 *
 * ```typescript
 *  import type { RvSidebarFCType } from 'rvi-system';
 *  import { RvSidebar } from 'rvi-system';
 *  import type { SidebarProps } from 'react-pro-sidebar';
 *
 *  const Component: FC<RvSidebarFCType> = ({children, ...props}) => {
 *
 *      // Style you want to set as default
 *      const defaultProps: SidebarProps = {
 *          ... Your DefaultProps !!
 *      }
 *
 *      // Copy props and default values to newProps to preserve primitive values
 *      const newProps = {...props, ...defaultProps};
 *
 *      // Pass newProps to RvSidebar(Sidebar)
 *      return <RvSidebar {...newProps}>{children}</RvSidebar>;
 *  }
 * ```
 */
const RvSidebar: FC<RvSidebarFCType> = ({ children, ...props }) => {
	const [localCollapsed, setCollapsed] = useState<boolean>(false);

	const handleResize = () => {
		const windowWidth = window.innerWidth;
		const collapsedBreakpoint = Number(breakpointValue.md.max.replace("px", ""));
		if (windowWidth <= collapsedBreakpoint) {
			setCollapsed(true);
		} else {
			setCollapsed(false);
		}
	};

	useLayoutEffect(() => {
		handleResize();
	}, []);

	useEffect(() => {
		window.addEventListener("resize", handleResize);
		return () => {
			window.removeEventListener("resize", handleResize);
		};
	}, []);

	const {
		width = props.width ?? defaultProps.width,
		customBreakPoint = props.customBreakPoint ?? defaultProps.customBreakPoint,
		collapsedWidth = props.collapsedWidth ?? defaultProps.collapsedWidth,
		collapsed = props.collapsed ?? localCollapsed,
	} = useMemo(() => props, [props]);

	const newProps = useMemo(
		() => ({ ...props, width, customBreakPoint, collapsedWidth, collapsed }),
		[props, width, customBreakPoint, collapsedWidth, collapsed]
	);

	return useMemo(() => <Sidebar {...newProps}>{children}</Sidebar>, [newProps, children]);
};

export default RvSidebar;
