/* eslint react/prop-types: off */

import type { Meta, Story } from "@storybook/react";
import { ThemeProvider } from "styled-components";
import { theme, GlobalStyle } from "../config";
import { RvSidebar, RvMenu, RvMenuItem, RvSubMenu } from ".";
import { RvMenuItemFCType, RvSubMenuFCType } from "../../types/components/Sidebar";
import { rvMenuItemDefaultProps } from "./RvMenuItem";
import { rvSubMenuDefaultProps } from "./RvSubMenu";

export default {
	title: "Components/Sidebar/RvSubMenu",
	component: RvSubMenu,
	tags: ["autodocs"],
} as Meta<RvMenuItemFCType>;

const Template: Story<RvMenuItemFCType> = ({ children }) => {
	return (
		<ThemeProvider theme={theme}>
			<GlobalStyle />
			<RvSidebar rootStyles={{ height: "auto" }}>
				<RvMenu>{children}</RvMenu>
			</RvSidebar>
		</ThemeProvider>
	);
};

export const Default = Template.bind({});
const defaultProps: RvSubMenuFCType = {
	...rvSubMenuDefaultProps,
};

Default.args = {
	children: (
		<RvSubMenu label="SubMenu1" {...defaultProps}>
			<RvMenuItem {...rvMenuItemDefaultProps}>MenuItem1</RvMenuItem>
		</RvSubMenu>
	),
};

export const Nest = Template.bind({});
Nest.args = {
	children: (
		<>
			<RvSubMenu label="SubMenu1">
				<RvMenuItem {...rvMenuItemDefaultProps}>MenuItem1</RvMenuItem>
				<RvSubMenu label="SubMenu2">
					<RvMenuItem {...rvMenuItemDefaultProps}>MenuItem1</RvMenuItem>
					<RvMenuItem {...rvMenuItemDefaultProps}>MenuItem2</RvMenuItem>
				</RvSubMenu>
			</RvSubMenu>
		</>
	),
};
