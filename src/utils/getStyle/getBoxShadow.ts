import theme from "../../components/config/theme";
import type { GetBoxShadowType } from "../../types/utils/GetStyle";
import { isValidShadowKey } from "../../components/config/theme";

const getBoxShadow = (datas: GetBoxShadowType) => {
	const { boxShadow, breakpoint } = datas;
	if (typeof boxShadow === "string") {
		const isKey = isValidShadowKey(boxShadow);
		if (isKey) return theme.shadow[boxShadow];
		if (!isKey) return boxShadow;
	}
	if (typeof boxShadow === "object") {
		if (!breakpoint) return undefined;
		const resposiveShadow = boxShadow[breakpoint];
		if (typeof resposiveShadow === "string") {
			const isKey = isValidShadowKey(resposiveShadow);
			if (isKey) return theme.shadow[resposiveShadow];
			if (!isKey) return resposiveShadow;
		}
	}
	return undefined;
};
export default getBoxShadow;
