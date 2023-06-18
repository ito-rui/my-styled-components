/* eslint react/jsx-props-no-spreading: off */

import { useMemo } from "react";
import type { FC } from "react";
import { RvBox } from "../Box";
import type { RvSidebarContainerFCType, StyledDivType } from "../../types";

const defaultProps: StyledDivType = {
	width: {
		md: "80px",
		lg: "250px",
		xl: "250px",
	},
	display: {
		xs: "none",
		sm: "none",
	},
	height: "100vh",
};

/**
 * ------------------------------------------
 * @name - RvSidebarContainer
 *
 * ------------------------------------------
 * @StyledComponents - StyledDiv
 *
 * ------------------------------------------
 * @Components - RvBox
 *
 * ------------------------------------------
 * @defaultProps
 *
 * - `width`: {
 *      md: "80px" // Collapsed Default Width
 *      lg: "250px",
 *      xl: "250px"
 *   }
 *
 * - `display`: {
 *      xs: "none",
 *      sm: "none"
 *   }
 *
 * - `height`: "100vh"
 *
 * ------------------------------------------
 * @ExpansionExample
 *
 * ```typescript
 *  import type { RvSidebarContainerFCType, StyledDivType } from 'rvi-system';
 *  import { RvSidebarContainer } from 'rvi-system';
 *
 *  const Component: FC<RvSidebarContainerFCType> = ({children, ...props}) => {
 *
 *      // Style you want to set as default
 *      const defaultProps: StyledDivType = {
 *          ... Your DefaultProps !!
 *      }
 *
 *      // Copy props and default values to newProps to preserve primitive values
 *      const newProps = {...props, ...defaultProps};
 *
 *      // Pass newProps to RvSidebarContainer
 *      return <RvSidebarContainer {...newProps}>{children}</RvSidebarContainer>;
 *  }
 * ```
 */
const RvSidebarContainer: FC<RvSidebarContainerFCType> = ({ children, ...props }) => {
	const {
		width = props.width ?? defaultProps.width,
		height = props.height ?? defaultProps.height,
		display = props.display ?? defaultProps.display,
	} = useMemo(() => props, [props]);

	const newProps = useMemo(() => ({ ...props, width, height, display }), [props, width, height, display]);

	return useMemo(() => <RvBox {...newProps}>{children}</RvBox>, [newProps]);
};

export default RvSidebarContainer;
