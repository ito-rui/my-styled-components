import type { GetFlexWrapType } from "../../types/utils/GetStyle";

const getFlexWrap = (datas: GetFlexWrapType) => {
	const { flexWrap, breakpoint } = datas;
	if (typeof flexWrap === "string") return flexWrap;
	if (typeof flexWrap === "object") {
		if (!breakpoint) return undefined;
		const resposiveFlexDirection = flexWrap[breakpoint];
		if (typeof resposiveFlexDirection === "string") return resposiveFlexDirection;
	}
	return undefined;
};
export default getFlexWrap;
