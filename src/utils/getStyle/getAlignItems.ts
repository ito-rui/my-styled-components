import type { GetAlignItemsType } from "../../types/utils/GetStyle";

const getAlignItems = (datas: GetAlignItemsType) => {
	const { alignItems, breakpoint } = datas;
	if (typeof alignItems === "string") return alignItems;
	if (typeof alignItems === "object") {
		if (!breakpoint) return undefined;
		const resposiveAlignItems = alignItems[breakpoint];
		if (typeof resposiveAlignItems === "string") return resposiveAlignItems;
	}
	return undefined;
};
export default getAlignItems;
