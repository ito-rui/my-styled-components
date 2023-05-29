import type { GetPositionType } from "../../types/utils/GetStyle";

const getPosition = (datas: GetPositionType) => {
	const { position, breakpoint } = datas;
	if (typeof position === "string") return position;
	if (typeof position === "object") {
		if (!breakpoint) return undefined;
		const resposivePosition = position[breakpoint];
		if (typeof resposivePosition === "string") return resposivePosition;
	}
	return undefined;
};
export default getPosition;
