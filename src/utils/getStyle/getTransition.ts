import type { GetTransitionType } from "../../types/utils/GetStyle";
import theme from "../../components/config/theme";
import { isValidTransitionKey } from "../../components/config/theme";

const getTransition = (datas: GetTransitionType) => {
	const { transition, breakpoint } = datas;
	if (typeof transition === "string") {
		const isKey = isValidTransitionKey(transition);
		if (isKey) return theme.transition[transition];
		if (!isKey) return transition;
	}
	if (typeof transition === "object") {
		if (!breakpoint) return undefined;
		const resposiveTransition = transition[breakpoint];
		if (typeof resposiveTransition === "string") {
			const isKey = isValidTransitionKey(resposiveTransition);
			if (isKey) return theme.transition[resposiveTransition];
			if (!isKey) return resposiveTransition;
		}
	}
	return undefined;
};
export default getTransition;
