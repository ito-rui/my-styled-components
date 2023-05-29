import isValidKey from "../../../utils/isKey";

const transition = {
	box: {
		base: "all 0.3s ease",
	},
	input: {
		base: "border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out",
	},
};

export type TransitionKey = keyof typeof transition;

export type TransitionValue = (typeof transition)[TransitionKey];

export const isValidTransitionKey = (value: string): value is TransitionKey => {
	return isValidKey<TransitionKey>(value, transition);
};

export default transition;
