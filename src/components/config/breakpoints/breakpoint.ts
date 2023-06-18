import { css, CSSObject, FlattenSimpleInterpolation, SimpleInterpolation } from "styled-components";
import type { MediaType } from "../../../types/CSSProperties";

export const breakpoint: MediaType[] = ["xs", "sm", "md", "lg", "xl"];

export const breakpointValue = {
	xs: {
		min: "",
		max: "480px",
	},
	sm: {
		min: "481px",
		max: "767px",
	},
	md: {
		min: "768px",
		max: "1024px",
	},
	lg: {
		min: "1025px",
		max: "1279px",
	},
	xl: {
		min: "1280px",
		max: "",
	},
} as const;

/**
 * iPhone and Mobile
 */
export const xs = (
	first: CSSObject | TemplateStringsArray,
	...interpolations: SimpleInterpolation[]
): FlattenSimpleInterpolation => css`
	@media (max-width: ${breakpointValue.xs.max}) {
		${css(first, ...interpolations)}
	}
`;

/**
 * Mobile with large screen
 */
export const sm = (
	first: CSSObject | TemplateStringsArray,
	...interpolations: SimpleInterpolation[]
): FlattenSimpleInterpolation => css`
	@media (min-width: ${breakpointValue.sm.min}) and (max-width: ${breakpointValue.sm.max}) {
		${css(first, ...interpolations)}
	}
`;

/**
 * iPads and tablets
 */
export const md = (
	first: CSSObject | TemplateStringsArray,
	...interpolations: SimpleInterpolation[]
): FlattenSimpleInterpolation => css`
	@media (min-width: ${breakpointValue.md.min}) and (max-width: ${breakpointValue.md.max}) {
		${css(first, ...interpolations)}
	}
`;

/**
 * MacbookPro 13-inch to notebook PCs in general
 */
export const lg = (
	first: CSSObject | TemplateStringsArray,
	...interpolations: SimpleInterpolation[]
): FlattenSimpleInterpolation => css`
	@media (min-width: ${breakpointValue.lg.min}) and (max-width: ${breakpointValue.lg.max}) {
		${css(first, ...interpolations)}
	}
`;

/**
 * Desktop PCs in general
 */
export const xl = (
	first: CSSObject | TemplateStringsArray,
	...interpolations: SimpleInterpolation[]
): FlattenSimpleInterpolation => css`
	@media (min-width: ${breakpointValue.xl.min}) {
		${css(first, ...interpolations)}
	}
`;
