/* eslint react/prop-types: off */

import type { Meta, Story } from "@storybook/react";
import { within, userEvent } from "@storybook/testing-library";
import { ThemeProvider } from "styled-components";
import theme from "../config/theme";
import { RvIconButton } from "./index";
import type { RvIconButtonFCType } from "../../types/components/Button";
import { rvButtonProps } from "./RvButton";
import { MdSavedSearch } from "react-icons/md";

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
		<RvIconButton {...args}>{children}</RvIconButton>
	</ThemeProvider>
);

/**
 * Base Button
 */
export const Default = Template.bind({});

const defaultProps: RvIconButtonFCType = {
	...rvButtonProps,
};
Default.args = {
	children: "Default",
	...defaultProps,
	width: 8,
	icon: <MdSavedSearch />,
};
Default.play = async ({ canvasElement }) => {
	const canvas = within(canvasElement);
	const button = canvas.getByRole("button");
	userEvent.click(button);
};
