/* eslint react/prop-types: off */

import type { Meta, Story } from "@storybook/react";
import { ThemeProvider } from "styled-components";
import theme from "../config/theme";
import { RvButton } from "./index";
import type { RvButtonType } from "../../types/components/Button";
import { rvButtonProps } from "./RvButton";

export default {
	title: "Components/Button",
	component: RvButton,
	tags: ["autodocs"],
	parameters: {
		layout: "centered",
	},
} as Meta<RvButtonType>;

const Template: Story<RvButtonType> = ({ children, ...args }) => (
	<ThemeProvider theme={theme}>
		<RvButton {...args}>{children}</RvButton>
	</ThemeProvider>
);

/**
 * Base Button
 */
export const Default = Template.bind({});

const defaultProps: RvButtonType = {
	...rvButtonProps,
	/* ... add props ... */
};
Default.args = { children: "Default", ...defaultProps };
