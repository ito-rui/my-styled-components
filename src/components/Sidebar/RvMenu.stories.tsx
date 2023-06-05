/* eslint react/prop-types: off */

import type { Meta, Story } from "@storybook/react";
import { ThemeProvider } from "styled-components";
import { theme, GlobalStyle } from "../config";
import { RvMenu } from ".";
import { RvMenuFCType } from "../../types/components/Sidebar";
import { rvMenuDefaultProps } from "./RvMenu";

export default {
	title: "Components/Sidebar/RvMenu",
	component: RvMenu,
	tags: ["autodocs"],
} as Meta<RvMenuFCType>;

const Template: Story<RvMenuFCType> = ({ children, ...props }) => {
	return (
		<ThemeProvider theme={theme}>
			<GlobalStyle />
			<RvMenu {...props}>{children}</RvMenu>
		</ThemeProvider>
	);
};

export const Default = Template.bind({});
const DefaultProps: RvMenuFCType = {
	...rvMenuDefaultProps,
};

Default.args = { children: "Default", ...DefaultProps };
