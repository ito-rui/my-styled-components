/* eslint react/prop-types: off */

import type { Meta, Story } from "@storybook/react";
import { within, userEvent } from "@storybook/testing-library";
import { ThemeProvider } from "styled-components";
import { theme, GlobalStyle } from "../config";
import { RvIconButton } from "./index";
import type { RvIconButtonFCType } from "../../types/components/Button";
import { rvIconButtonDefaultProps } from "./RvIconButton";
import { MdBarChart } from "react-icons/md";

export default {
	title: "Components/Button/RvIconButton",
	component: RvIconButton,
	tags: ["autodocs"],
	parameters: {
		layout: "centered",
	},
} as Meta<RvIconButtonFCType>;

const Template: Story<RvIconButtonFCType> = ({ children, ...args }) => (
	<ThemeProvider theme={theme}>
		<GlobalStyle />
		<RvIconButton {...args}>{children}</RvIconButton>
	</ThemeProvider>
);

/**
 * Base Button
 */
export const Default = Template.bind({});

const defaultProps: RvIconButtonFCType = {
	...rvIconButtonDefaultProps,
};
Default.args = {
	children: <MdBarChart size={24} />,
	...defaultProps,
};
Default.play = async ({ canvasElement }) => {
	const canvas = within(canvasElement);
	const button = canvas.getByRole("button");
	userEvent.click(button);
};
