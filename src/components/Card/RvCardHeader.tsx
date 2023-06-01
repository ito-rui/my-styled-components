import type { FC } from "react";
import type { RvCardHeaderFCType, StyledCardHeaderType } from "../../types/components/Card";
import { RvFlex } from "../Box";
import { RvSpan } from "../Span";

export const rvCardHeaderDefaultProps: StyledCardHeaderType = {
	width: "100%",
};

const RvCardHeader: FC<RvCardHeaderFCType> = ({ children, ...props }) => {
	const newProps = { ...props };
	return (
		<RvFlex {...newProps}>
			{newProps.headerLabel && newProps.headerLabel}
			{children}
		</RvFlex>
	);
};

export default RvCardHeader;
