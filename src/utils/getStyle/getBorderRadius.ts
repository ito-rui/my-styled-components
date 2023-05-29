import type { GetBorderRadiusType } from "../../types/utils/GetStyle";

const getBorderRadius = (datas: GetBorderRadiusType) => {
	const { borderRadius, breakpoint } = datas;
	if (typeof borderRadius === "string") return borderRadius;
	if (typeof borderRadius === "number") return `${borderRadius}rem`;
	if (typeof borderRadius === "object") {
		if (!breakpoint) return undefined;
		const resposiveBorderRadius = borderRadius[breakpoint];
		if (typeof resposiveBorderRadius === "string") return resposiveBorderRadius;
		if (typeof resposiveBorderRadius === "number") return `${resposiveBorderRadius}rem`;
	}
	return undefined;
};
export default getBorderRadius;
