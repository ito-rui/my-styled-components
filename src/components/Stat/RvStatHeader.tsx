import { useMemo } from "react";
import type { FC } from "react";
import { RvCardHeader } from "../Card";
import { RvStatHeaderFCType, StyledCardHeaderType } from "../../types";

const defaultProps: StyledCardHeaderType = {
	width: "100%",
	height: "20%",
};

const RvStatHeader: FC<RvStatHeaderFCType> = ({ children, ...props }) => {
	const { width = props.width ?? defaultProps.width } = useMemo(() => props, [props]);
	const newProps = useMemo(() => ({ ...props, width }), [props, width]);
	return useMemo(() => <RvCardHeader {...newProps}>{children}</RvCardHeader>, [newProps]);
};

export default RvStatHeader;
