import isValidKey from "../../../utils/isKey";

const zindex = {
	modal: 100,
	drawer: 50,
	floating: 40,
	header: 30,
	footer: 20,
	front: 10,
	defalt: 1,
	background: -10,
} as const;

export type ZindexKey = keyof typeof zindex;

export type ZindexValue = (typeof zindex)[ZindexKey];

export const isValidZindexKey = (value: string): value is ZindexKey => {
	return isValidKey<ZindexKey>(value, zindex);
};

export default zindex;
