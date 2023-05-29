import isValidKey from "../../../utils/isKey";
import boxSizes from "./boxSize";

const heights = {
	sm: boxSizes[2],
	md: boxSizes[3],
	lg: boxSizes["4.5"],
	xl: boxSizes[5],
	auto: "auto",
	full: "100%",
	screenWidth: "100vh",
} as const;

export type HeightsKey = keyof typeof heights;

export type HeightsValue = (typeof heights)[HeightsKey];

export const isValidHeightsKey = (value: string): value is HeightsKey => {
	return isValidKey<HeightsKey>(value, heights);
};

export default heights;
