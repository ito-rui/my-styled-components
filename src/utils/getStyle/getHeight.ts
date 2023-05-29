import type { GetHeightType } from "../../types/utils/GetStyle";

const getHeight = (datas: GetHeightType) => {
	const { height, breakpoint } = datas;
	if (typeof height === "string") return height;
	if (typeof height === "number") return `${height}rem`;
	if (typeof height === "object") {
		if (!breakpoint) return undefined;
		const resposiveHeight = height[breakpoint];
		if (typeof resposiveHeight === "string") return resposiveHeight;
		if (typeof resposiveHeight === "number") return `${resposiveHeight}rem`;
	}
	return undefined;
};
export default getHeight;
