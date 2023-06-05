/* eslint react/prop-types: off */

import type { Meta, Story } from "@storybook/react";
import { ThemeProvider } from "styled-components";
import { theme, GlobalStyle } from "../config";
import { RvSidebar } from ".";
import { RvSidebarFCType } from "../../types/components/Sidebar";
import { rvSidebarDefaultProps } from "./RvSidebar";

export default {
	title: "Components/Sidebar/RvSidebar",
	component: RvSidebar,
	tags: ["autodocs"],
} as Meta<RvSidebarFCType>;

const Template: Story<RvSidebarFCType> = ({ children, ...props }) => {
	return (
		<ThemeProvider theme={theme}>
			<GlobalStyle />
			<RvSidebar {...props}>{children}</RvSidebar>
		</ThemeProvider>
	);
};

export const Default = Template.bind({});
const DefaultProps: RvSidebarFCType = {
	...rvSidebarDefaultProps,
};

Default.args = { children: "Default", ...DefaultProps };
