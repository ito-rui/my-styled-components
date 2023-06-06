/* eslint react/jsx-props-no-spreading: off */

import { useMemo } from "react";
import type { FC } from "react";
import { RvBox } from "../Box";
import type { RvSidebarContainerFCType, StyledSidebarContainerType } from "../../types";

const rvSidebarContainerDefaultProps: StyledSidebarContainerType = {
	width: "250px",
	height: "100vh",
	borderRadius: 0.5,
};

const RvSidebarContainer: FC<RvSidebarContainerFCType> = ({ children, ...props }) => {
	const {
		width = props.width ?? rvSidebarContainerDefaultProps.width,
		height = props.height ?? rvSidebarContainerDefaultProps.height,
		borderRadius = props.borderRadius ?? rvSidebarContainerDefaultProps.borderRadius,
	} = useMemo(() => props, [props]);

	const newProps = useMemo(() => ({ ...props, width, height, borderRadius }), [props, width, height, borderRadius]);

	return useMemo(() => <RvBox {...newProps}>{children}</RvBox>, [newProps]);
};

export default RvSidebarContainer;
