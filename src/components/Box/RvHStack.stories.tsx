/* eslint react/prop-types: off */

import type { Meta, Story } from "@storybook/react";
import { ThemeProvider } from "styled-components";
import { theme, GlobalStyle } from "../config";
import { RvHStack } from ".";
import { RvButton } from "../Button";
import { RvStackFCType } from "../../types/components/Div";
import { rvHStackDefaultProps } from "./RvHStack";

export default {
	title: "Components/Box/RvHStack",
	component: RvHStack,
	tags: ["autodocs"],
} as Meta<RvStackFCType>;

const Template: Story<RvStackFCType> = ({ children, ...props }) => {
	return (
		<ThemeProvider theme={theme}>
			<GlobalStyle />
			<RvHStack {...props}>{children}</RvHStack>
		</ThemeProvider>
	);
};

export const Default = Template.bind({});
const DefaultProps: RvStackFCType = {
	...rvHStackDefaultProps,
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
