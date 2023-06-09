/* eslint react/prop-types: off */

import type { Meta, Story } from "@storybook/react";
import { ThemeProvider } from "styled-components";
import { theme, GlobalStyle } from "../config";
import { RvStat } from ".";
import { RvStatFCType } from "../../types/components/Stat";
import { defaultProps } from "./RvStat";

export default {
	title: "Components/Stat/RvStat",
	component: RvStat,
	tags: ["autodocs"],
	parameters: {
		layout: "centered",
	},
} as Meta<RvStatFCType>;

const Template: Story<RvStatFCType> = ({ children, ...props }) => {
	return (
		<ThemeProvider theme={theme}>
			<GlobalStyle />
			<RvStat {...props}>{children}</RvStat>
		</ThemeProvider>
	);
};

export const Default = Template.bind({});
const DefaultProps: RvStatFCType = {
	...defaultProps,
};

Default.args = { children: "Default", ...DefaultProps };
