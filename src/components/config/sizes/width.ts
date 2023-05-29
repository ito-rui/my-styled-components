import isValidKey from "../../../utils/isKey";
import boxSizes from "./boxSize";

const widths = {
	sm: boxSizes[2],
	md: boxSizes[3],
	lg: boxSizes["4.5"],
	xl: boxSizes[5],
	auto: "auto",
	full: "100%",
	screenWidth: "100vw",
} as const;

export type WidthsKey = keyof typeof widths;

export type WidthsValue = (typeof widths)[WidthsKey];

export const isValidWidthsKey = (value: string): value is WidthsKey => {
	return isValidKey<WidthsKey>(value, widths);
};

export default widths;
