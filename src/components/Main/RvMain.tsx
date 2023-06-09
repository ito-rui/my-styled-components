import { useMemo } from "react";
import type { FC } from "react";
import type { RvMainFCType, StyledMainType } from "../../types/components/Main";
import { StyledMain } from "./style";
import { RvFlex } from "../Box";
import type { StyledFlexType } from "../../types";

const rvMainDefaultProps: StyledMainType = {
	width: "100%",
	height: "100vh",
	marginRight: 5,
};

const rvFlexDefaultProps: StyledFlexType = {
	width: "100%",
	flexDirection: "column",
	alignItems: "center",
	justifyContent: "center",
	height: "100%",
};

const RvMain: FC<RvMainFCType> = ({ children, ...props }) => {
	const {
		width = props.width ?? rvMainDefaultProps.width,
		height = props.height ?? rvMainDefaultProps.height,
		marginRight = props.marginRight ?? rvMainDefaultProps.marginRight,
	} = useMemo(() => props, [props]);
	const newProps = useMemo(() => ({ ...props, width, height, marginRight }), [props, width, height, marginRight]);
	return useMemo(
		() => (
			<StyledMain {...newProps}>
				<RvFlex {...rvFlexDefaultProps}>{children}</RvFlex>
			</StyledMain>
		),
		[newProps]
	);
};

export default RvMain;
