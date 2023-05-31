/* eslint react/prop-types: off */

import type { Meta, Story } from "@storybook/react";
import { ThemeProvider } from "styled-components";
import theme from "../config/theme";
import { RvBox } from ".";
import { RvBoxFCType } from "../../types/components/Div";

export default {
	title: "Components/RvBox",
	component: RvBox,
	tags: ["autodocs"],
} as Meta<RvBoxFCType>;

const Template: Story<RvBoxFCType> = ({ children, ...props }) => {
	return (
		<ThemeProvider theme={theme}>
			<RvBox {...props}>{children}</RvBox>
		</ThemeProvider>
	);
};

export const Default = Template.bind({});
const DefaultProps: RvBoxFCType = {};

Default.args = { children: "Default", ...DefaultProps };
