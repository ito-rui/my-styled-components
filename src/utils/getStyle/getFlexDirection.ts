import type { GetFlexDirectionType } from "../../types/utils/GetStyle";

const getFlexDirection = (datas: GetFlexDirectionType) => {
	const { flexDirection, breakpoint } = datas;
	if (typeof flexDirection === "string") return flexDirection;
	if (typeof flexDirection === "object") {
		if (!breakpoint) return undefined;
		const resposiveFlexDirection = flexDirection[breakpoint];
		if (typeof resposiveFlexDirection === "string") return resposiveFlexDirection;
	}
	return undefined;
};
export default getFlexDirection;
