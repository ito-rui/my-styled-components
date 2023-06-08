/* eslint react/prop-types: off */

import type { Meta, Story } from "@storybook/react";
import { ThemeProvider } from "styled-components";
import { theme, GlobalStyle } from "../config";
import { RvVStack } from ".";
import { RvButton } from "../Button";
import { RvVStackFCType } from "../../types/components/Div";
import { rvVStackDefaultProps } from "./RvVStack";

export default {
	title: "Components/Box/RvVStack",
	component: RvVStack,
	tags: ["autodocs"],
} as Meta<RvVStackFCType>;

const Template: Story<RvVStackFCType> = ({ children, ...props }) => {
	return (
		<ThemeProvider theme={theme}>
			<GlobalStyle />
			<RvVStack {...props}>{children}</RvVStack>
		</ThemeProvider>
	);
};

export const Default = Template.bind({});
const DefaultProps: RvVStackFCType = {
	...rvVStackDefaultProps,
};

Default.args = {
	children: (
		<>
			<RvButton>Children</RvButton>
			<RvButton>Children</RvButton>
		</>
	),
	...DefaultProps,
};
