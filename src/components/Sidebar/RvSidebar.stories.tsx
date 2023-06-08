/* eslint react/prop-types: off */

import type { Meta, Story } from "@storybook/react";
import { ThemeProvider } from "styled-components";
import { theme, GlobalStyle } from "../config";
import { RvSidebar, RvSidebarContainer, RvSidebarHeader, RvMenu, RvMenuItem, RvSubMenu } from ".";
import { RvSidebarFCType } from "../../types/components/Sidebar";
import { defaultProps } from "./RvSidebar";

export default {
	title: "Components/Sidebar/RvSidebar",
	component: RvSidebar,
	tags: ["autodocs"],
} as Meta<RvSidebarFCType>;

const Template: Story<RvSidebarFCType> = ({ children, ...props }) => {
	return (
		<ThemeProvider theme={theme}>
			<GlobalStyle />
			<RvSidebarContainer>
				<RvSidebar {...props}>
					<RvSidebarHeader>SidebarHeader</RvSidebarHeader>
					{children}
				</RvSidebar>
			</RvSidebarContainer>
		</ThemeProvider>
	);
};

export const Default = Template.bind({});
const DefaultProps: RvSidebarFCType = {
	...defaultProps,
};

Default.args = {
	children: (
		<RvMenu>
			<RvMenuItem>MenuItem1</RvMenuItem>
			<RvSubMenu label="SubMenu1">
				<RvMenuItem>MenuItem2</RvMenuItem>
				<RvMenuItem>MenuItem3</RvMenuItem>
				<RvSubMenu label="SubMenu2">
					<RvMenuItem>MenuItem4</RvMenuItem>
				</RvSubMenu>
			</RvSubMenu>
			<RvSubMenu label="SubMenu3">
				<RvSubMenu label="SubMenu4">
					<RvMenuItem>MenuItem5</RvMenuItem>
				</RvSubMenu>
			</RvSubMenu>
		</RvMenu>
	),
	...DefaultProps,
};
