/* eslint react/prop-types: off */

import type { Meta, Story } from "@storybook/react";
import { ThemeProvider } from "styled-components";
import { theme, GlobalStyle } from "../config";
import { RvSpan } from "./index";
import type { RvSpanFCType } from "../../types/components/Span";
import { rvSpanDefaultProps } from "./RvSpan";

export default {
	title: "Components/Span/RvSpan",
	component: RvSpan,
	tags: ["autodocs"],
	parameters: {
		layout: "centered",
	},
} as Meta<RvSpanFCType>;

const Template: Story<RvSpanFCType> = ({ children, ...args }) => (
	<ThemeProvider theme={theme}>
		<GlobalStyle />
		<RvSpan {...args}>{children}</RvSpan>
	</ThemeProvider>
);

/**
 * Base Span
 */
export const Default = Template.bind({
	...rvSpanDefaultProps,
});

const defaultProps: RvSpanFCType = {};
Default.args = {
	children: "Default",
	...defaultProps,
};
Default.play = async ({ canvasElement }) => {};
