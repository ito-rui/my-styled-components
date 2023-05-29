import type { GetBorderWidthType } from "../../types/utils/GetStyle";

const getBorderWidth = (datas: GetBorderWidthType) => {
	const { borderWidth, breakpoint } = datas;
	if (typeof borderWidth === "string") return borderWidth;
	if (typeof borderWidth === "object") {
		if (!breakpoint) return undefined;
		const resposiveBorderWidth = borderWidth[breakpoint];
		if (typeof resposiveBorderWidth === "string") return resposiveBorderWidth;
	}
	return undefined;
};
export default getBorderWidth;
