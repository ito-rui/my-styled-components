/* eslint react/jsx-props-no-spreading: off */

import { useMemo } from "react";
import type { FC } from "react";
import { RvBox } from "../Box";
import type { RvSidebarContainerFCType, StyledSidebarContainerType } from "../../types";

const defaultProps: StyledSidebarContainerType = {
	width: "250px",
	display: {
		xs: "none",
		sm: "none",
		md: "none",
	},
	height: "100vh",
	borderRadius: 0.5,
};

const RvSidebarContainer: FC<RvSidebarContainerFCType> = ({ children, ...props }) => {
	const {
		width = props.width ?? defaultProps.width,
		height = props.height ?? defaultProps.height,
		display = props.display ?? defaultProps.display,
		borderRadius = props.borderRadius ?? defaultProps.borderRadius,
	} = useMemo(() => props, [props]);

	const newProps = useMemo(
		() => ({ ...props, width, height, display, borderRadius }),
		[props, width, height, display, borderRadius]
	);

	return useMemo(() => <RvBox {...newProps}>{children}</RvBox>, [newProps]);
};

export default RvSidebarContainer;
