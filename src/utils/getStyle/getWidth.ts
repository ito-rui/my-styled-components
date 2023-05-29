import type { GetWidthType } from "../../types/utils/GetStyle";

const getWidth = (datas: GetWidthType) => {
	const { width, breakpoint } = datas;
	if (typeof width === "string") return width;
	if (typeof width === "number") return `${width}rem`;
	if (typeof width === "object") {
		if (!breakpoint) return undefined;
		const resposiveWidth = width[breakpoint];
		if (typeof resposiveWidth === "string") return resposiveWidth;
		if (typeof resposiveWidth === "number") return `${resposiveWidth}rem`;
	}
	return undefined;
};
export default getWidth;
