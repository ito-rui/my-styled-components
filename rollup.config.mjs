import commonjs from "@rollup/plugin-commonjs";
import typescript from "@rollup/plugin-typescript";
import dts from "rollup-plugin-dts";

const pkg = {
	main: "dist/cjs/index.js",
	module: "dist/esm/index.js",
};

export default [
	{
		input: "src/index.ts",
		output: [
			{
				file: pkg.main,
				format: "cjs",
				sourcemap: false,
			},
			{
				file: pkg.module,
				format: "esm",
				sourcemap: false,
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
