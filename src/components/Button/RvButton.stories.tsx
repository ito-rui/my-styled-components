/* eslint react/prop-types: off */

import type { Meta, Story } from "@storybook/react";
import { within, userEvent } from "@storybook/testing-library";
import { ThemeProvider } from "styled-components";
import { theme, GlobalStyle } from "../config";
import { RvButton } from "./index";
import type { RvButtonFCType } from "../../types/components/Button";
import { rvButtonDefaultProps } from "./RvButton";
import { MdSavedSearch } from "react-icons/md";

export default {
	title: "Components/Button/RvButton",
	component: RvButton,
	tags: ["autodocs"],
	parameters: {
		layout: "centered",
	},
} as Meta<RvButtonFCType>;

const Template: Story<RvButtonFCType> = ({ children, ...args }) => (
	<ThemeProvider theme={theme}>
		<GlobalStyle />
		<RvButton {...args}>{children}</RvButton>
	</ThemeProvider>
);

/**
 * Base Button
 */
export const Default = Template.bind({});

const defaultProps: RvButtonFCType = {
	...rvButtonDefaultProps,
};
Default.args = {
	children: "Default",
	...defaultProps,
};
Default.play = async ({ canvasElement }) => {
	const canvas = within(canvasElement);
	const button = canvas.getByRole("button");
	userEvent.click(button);
};

/**
 * OutLine Button
 */
export const OutLine = Template.bind({});
const outLineProps: RvButtonFCType = {
	...rvButtonDefaultProps,
	bgColor: "white500",
	borderWidth: "1px",
	borderColor: "black500",
	hover: {
		bgColor: "black50",
		textColor: "white50",
	},
};
OutLine.args = {
	children: "OutLine",
	...outLineProps,
};
