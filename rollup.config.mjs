import commonjs from "@rollup/plugin-commonjs";
import typescript from "@rollup/plugin-typescript";
import dts from "rollup-plugin-dts";
import * as path from "path";
import camelCase from "lodash.camelcase";
import upperFirst from "lodash.upperfirst";

const pkg = {
	name: "rvi-system",
	main: "dist/cjs/index.js",
	module: "dist/esm/index.es.js",
	browser: "dist/rvi-system.js",
};

const moduleName = upperFirst(camelCase(pkg.name.replace(/^\@.*\//, "")));

export default [
	{
		input: "src/index.ts",
		output: [
			{
				file: pkg.main,
				format: "cjs",
				sourcemap: "inline",
			},
			{
				file: pkg.module,
				format: "es",
				sourcemap: "inline",
			},
			{
				name: moduleName,
				file: pkg.browser,
				format: "iife",
				sourcemap: "inline",
			},
		],
		plugins: [
			commonjs({
				include: ["node_modules/**"],
			}),
			typescript({
				tsconfig: "./tsconfig.json",
				exclude: ["**/__tests__/**"],
			}),
		],
		external: ["react", "react-dom", "styled-components", "react-pro-sidebar"],
	},
	{
		input: "dist/cjs/types/index.d.ts",
		output: [{ file: "dist/cjs/index.d.ts", format: "cjs" }],
		plugins: [dts()],
	},
	{
		input: "dist/esm/types/index.d.ts",
		output: [{ file: "dist/esm/index.d.ts", format: "esm" }],
		plugins: [dts()],
	},
];
