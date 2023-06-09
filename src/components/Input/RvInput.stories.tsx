/* eslint react/prop-types: off */

import type { Meta, Story } from "@storybook/react";
import { within, userEvent } from "@storybook/testing-library";
import { ThemeProvider } from "styled-components";
import { theme, GlobalStyle } from "../config";
import { RvInput } from ".";
import type { RvInputFCType } from "../../types/components/Input";
import { defaultProps } from "./RvInput";

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

const DefaultProps: RvInputFCType = {
	...defaultProps,
};
Default.args = {
	children: "Default",
	...DefaultProps,
};
