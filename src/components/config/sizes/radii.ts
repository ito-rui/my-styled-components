import isValidKey from "../../../utils/isKey";
import spaces from "./space";

const radius = {
	none: spaces[0],
	sx: spaces.px,
	sm: spaces["0.5"],
	md: spaces[1],
	lg: spaces[2],
	xl: spaces[3],
	"2xl": spaces[4],
	"3xl": spaces[6],
	full: "9999px",
} as const;

export type RadiusKey = keyof typeof radius;

export type RadiusValue = (typeof radius)[RadiusKey];

export const isValidRadiusKey = (value: RadiusKey | string | number): value is RadiusKey => {
	return isValidKey<RadiusKey>(value, radius);
};

export default radius;
