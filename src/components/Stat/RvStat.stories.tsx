/* eslint react/prop-types: off */

import type { Meta, Story } from "@storybook/react";
import { ThemeProvider } from "styled-components";
import { theme, GlobalStyle } from "../config";
import { RvStat } from ".";
import { RvStatFCType } from "../../types/components/Stat";
import { defaultProps as statDefaultProps } from "./RvStat";

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
const defaultProps: RvStatFCType = {
	...statDefaultProps,
	width: {
		xs: "350px",
		sm: "300px",
		md: "300px",
		lg: "300px",
		xl: "300px",
	},
};

Default.args = { children: "Default", ...defaultProps };
