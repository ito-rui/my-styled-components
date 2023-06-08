import { css, CSSObject, FlattenSimpleInterpolation, SimpleInterpolation } from "styled-components";
import type { MediaType } from "../../../types/CSSProperties";

export const breakpoint: MediaType[] = ["xs", "sm", "md", "lg", "xl"];

export const breakpointValue = {
	xs: "428px",
	sm: "428px",
	md: "840px",
	lg: "1025px",
	xl: "1280px",
};

/**
 * max-width`428px`（iPhone12Pro）
 */
export const xs = (
	first: CSSObject | TemplateStringsArray,
	...interpolations: SimpleInterpolation[]
): FlattenSimpleInterpolation => css`
	@media (max-width: 428px) {
		${css(first, ...interpolations)}
	}
`;

/**
 * max-width`600px`（iPadPro）
 */
export const sm = (
	first: CSSObject | TemplateStringsArray,
	...interpolations: SimpleInterpolation[]
): FlattenSimpleInterpolation => css`
	@media (min-width: 428px) and (max-width: 600px) {
		${css(first, ...interpolations)}
	}
`;

/**
 * max-width`840px`（iPhone12Pro 横向き）
 */
export const md = (
	first: CSSObject | TemplateStringsArray,
	...interpolations: SimpleInterpolation[]
): FlattenSimpleInterpolation => css`
	@media (min-width: 600px) and (max-width: 1025px) {
		${css(first, ...interpolations)}
	}
`;

/**
 * max-width`1025px`（ノートPC）
 */
export const lg = (
	first: CSSObject | TemplateStringsArray,
	...interpolations: SimpleInterpolation[]
): FlattenSimpleInterpolation => css`
	@media (min-width: 1025px) and (max-width: 1280px) {
		${css(first, ...interpolations)}
	}
`;

/**
 * max-width`1280px`（デスクトップPC）
 */
export const xl = (
	first: CSSObject | TemplateStringsArray,
	...interpolations: SimpleInterpolation[]
): FlattenSimpleInterpolation => css`
	@media (min-width: 1280px) {
		${css(first, ...interpolations)}
	}
`;
