import type { GetDisplayType } from "../../types/utils/GetStyle";

const getDisplay = (datas: GetDisplayType) => {
	const { display, breakpoint } = datas;
	if (typeof display === "string") return display;
	if (typeof display === "object") {
		if (!breakpoint) return undefined;
		const resposiveDisplay = display[breakpoint];
		if (typeof resposiveDisplay === "string") return resposiveDisplay;
	}
	return undefined;
};
export default getDisplay;
