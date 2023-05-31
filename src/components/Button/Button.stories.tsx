/* eslint react/prop-types: off */

import type { Meta, Story } from "@storybook/react";
import { ThemeProvider } from "styled-components";
import theme from "../config/theme";
import { Button } from "./index";
import { ButtonType, BaseButtonType } from "../../types/components/Button";

export default {
	title: "Components/Button",
	component: Button,
	parameters: {
		layout: "centered",
	},
} as Meta<ButtonType>;

const Template: Story<ButtonType> = ({ children, ...args }) => (
	<ThemeProvider theme={theme}>
		<Button {...args}>{children}</Button>
	</ThemeProvider>
);

export const Default = Template.bind({});

const defaultProps: BaseButtonType = {
	width: 5,
	height: 2,
	borderRadius: 0.5,
	textColor: "black500",
	bgColor: "blue500",
	boxShadow: "sm",
	borderWidth: "0",
};

Default.args = { children: "Default", ...defaultProps };
