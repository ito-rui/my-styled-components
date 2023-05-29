import type { GetPaddingRightType } from "../../types/utils/GetStyle";
import theme, { isValidSpacesKey } from "../../components/config/theme";

const getPaddingRight = (datas: GetPaddingRightType) => {
	const { paddingRight, breakpoint } = datas;
	if (typeof paddingRight === "string") {
		const isKey = isValidSpacesKey(paddingRight);
		if (isKey) return theme.sizes.spaces[paddingRight];
		return paddingRight;
	}
	if (typeof paddingRight === "number") {
		const isKey = isValidSpacesKey(paddingRight);
		if (isKey) return theme.sizes.spaces[paddingRight];
		return `${paddingRight}rem`;
	}
	if (typeof paddingRight === "object") {
		if (!breakpoint) return undefined;
		const resposivePaddingRight = paddingRight[breakpoint];
		if (typeof resposivePaddingRight === "string") {
			const isKey = isValidSpacesKey(resposivePaddingRight);
			if (isKey) return theme.sizes.spaces[resposivePaddingRight];
			return resposivePaddingRight;
		}
		if (typeof resposivePaddingRight === "number") {
			const isKey = isValidSpacesKey(resposivePaddingRight);
			if (isKey) return theme.sizes.spaces[resposivePaddingRight];
			return `${resposivePaddingRight}rem`;
		}
	}
	return undefined;
};
export default getPaddingRight;
