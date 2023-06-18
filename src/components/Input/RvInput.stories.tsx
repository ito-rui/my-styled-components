/* eslint react/prop-types: off */

import type { Meta, Story } from "@storybook/react";
import { ThemeProvider } from "styled-components";
import { theme, GlobalStyle } from "../config";
import { RvInput } from ".";
import type { RvInputFCType } from "../../types/components/Input";
import { defaultProps as rvDefaultProps } from "./RvInput";

export default {
	title: "Components/Input/RvInput",
	component: RvInput,
	tags: ["autodocs"],
	parameters: {
		layout: "centered",
	},
} as Meta<RvInputFCType>;

const Template: Story<RvInputFCType> = ({ children, ...args }) => (
	<ThemeProvider theme={theme}>
		<GlobalStyle />
		<RvInput {...args}>{children}</RvInput>
	</ThemeProvider>
);

/**
 * Base Input
 */
export const Default = Template.bind({});

const defaultProps: RvInputFCType = {
	...rvDefaultProps,
	placeholder: "placeholder",
};
Default.args = {
	children: "Default",
	...defaultProps,
};
