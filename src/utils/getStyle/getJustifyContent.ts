import type { GetJustifyContentType } from "../../types/utils/GetStyle";

const getJustifyContent = (datas: GetJustifyContentType) => {
	const { justifyContent, breakpoint } = datas;
	if (typeof justifyContent === "string") return justifyContent;
	if (typeof justifyContent === "object") {
		if (!breakpoint) return undefined;
		const resposiveJustifyContent = justifyContent[breakpoint];
		if (typeof resposiveJustifyContent === "string") return resposiveJustifyContent;
	}
	return undefined;
};
export default getJustifyContent;
