/* eslint react/prop-types: off */

import type { Meta, Story } from "@storybook/react";
import { ThemeProvider } from "styled-components";
import { theme, GlobalStyle } from "../config";
import { RvSidebar, RvMenu, RvMenuItem } from ".";
import { RvMenuItemFCType } from "../../types/components/Sidebar";
import { defaultProps } from "./RvMenuItem";

export default {
	title: "Components/Sidebar/RvMenuItem",
	component: RvMenuItem,
	tags: ["autodocs"],
} as Meta<RvMenuItemFCType>;

const Template: Story<RvMenuItemFCType> = ({ children }) => {
	return (
		<ThemeProvider theme={theme}>
			<GlobalStyle />
			<RvSidebar>
				<RvMenu>{children}</RvMenu>
			</RvSidebar>
		</ThemeProvider>
	);
};

export const Default = Template.bind({});
const DefaultProps: RvMenuItemFCType = {
	...defaultProps,
};

Default.args = {
	children: (
		<>
			<RvMenuItem {...DefaultProps}>MenuItem1</RvMenuItem>
			<RvMenuItem {...DefaultProps}>MenuItem2</RvMenuItem>
			<RvMenuItem {...DefaultProps}>MenuItem3</RvMenuItem>
			<RvMenuItem {...DefaultProps}>MenuItem4</RvMenuItem>
		</>
	),
};
