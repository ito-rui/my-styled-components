import { xs, sm, md, lg, xl, breakpoint } from "./breakpoints/breakpoint";
import boxSizes, { isValidBoxSizesKey, BoxSizesKey, BoxSizesValue } from "./sizes/boxSize";
import widths, { isValidWidthsKey, WidthsKey, WidthsValue } from "./sizes/width";
import heights, { isValidHeightsKey, HeightsKey, HeightsValue } from "./sizes/height";
import spaces, { isValidSpacesKey, SpacesKey, SpacesValue } from "./sizes/space";
import radius, { isValidRadiusKey, RadiusKey, RadiusValue } from "./sizes/radii";
import lineHeights, { isValidLineHeightsKey, LineHeightsKey, LineHeightsValue } from "./sizes/lineHeights";
import fontSizes, { isValidFontSizesKey, FontSizesKey, FontSizesValue } from "./fonts/fontSize";
import fontWeights, { isValidFontWeightsKey, FontWeightsKey, FontWeightsValue } from "./fonts/fontWeight";
import systemColors, { isValidSystemColorsKey, SystemColorsKey, SystemColorsValue } from "./colors/systemColor";
import fonts, { isValidFontsKey, FontsKey, FontsValue } from "./fonts/font";
import shadow, { isValidShadowKey, ShadowKey, ShadowValue } from "./shadows/shadow";
import zindex, { isValidZindexKey, ZindexKey, ZindexValue } from "./zindexs/zindex";
import transition, { isValidTransitionKey, TransitionKey, TransitionValue } from "./transitions/transiton";

const theme = {
	breakpoint: { xs, sm, md, lg, xl },
	sizes: {
		boxSizes,
		widths,
		heights,
		radius,
		spaces,
		lineHeights,
	},
	colors: {
		systemColors,
	},
	fonts: {
		fonts,
		fontSizes,
		fontWeights,
	},
	shadow,
	transition,
	zindex,
};

export { breakpoint };

export type {
	BoxSizesKey,
	WidthsKey,
	HeightsKey,
	SpacesKey,
	RadiusKey,
	LineHeightsKey,
	FontSizesKey,
	FontWeightsKey,
	SystemColorsKey,
	FontsKey,
	ShadowKey,
	TransitionKey,
	ZindexKey,
};

export type {
	BoxSizesValue,
	WidthsValue,
	HeightsValue,
	SpacesValue,
	RadiusValue,
	LineHeightsValue,
	FontSizesValue,
	FontWeightsValue,
	SystemColorsValue,
	FontsValue,
	ShadowValue,
	TransitionValue,
	ZindexValue,
};

export {
	isValidBoxSizesKey,
	isValidWidthsKey,
	isValidHeightsKey,
	isValidSpacesKey,
	isValidRadiusKey,
	isValidLineHeightsKey,
	isValidFontSizesKey,
	isValidFontWeightsKey,
	isValidSystemColorsKey,
	isValidFontsKey,
	isValidShadowKey,
	isValidTransitionKey,
	isValidZindexKey,
};

export default theme;
