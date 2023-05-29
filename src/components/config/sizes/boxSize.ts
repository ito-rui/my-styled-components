import isValidKey from "../../../utils/isKey";

const boxSizes = {
	0.5: "5rem",
	1: "10rem",
	2: "20rem",
	3: "30rem",
	4: "40rem",
	4.5: "48rem",
	5: "80rem",
	auto: "auto",
	full: "100%",
	screenHeight: "100vh",
	screenWidth: "100vw",
} as const;

export type BoxSizesKey = keyof typeof boxSizes;

export type BoxSizesValue = (typeof boxSizes)[BoxSizesKey];

export const isValidBoxSizesKey = (value: BoxSizesKey): value is BoxSizesKey => {
	return isValidKey<BoxSizesKey>(value, boxSizes);
};

export default boxSizes;
