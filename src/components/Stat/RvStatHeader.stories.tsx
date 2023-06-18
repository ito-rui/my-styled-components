/* eslint react/prop-types: off */

import type { Meta, Story } from "@storybook/react";
import { ThemeProvider } from "styled-components";
import { theme, GlobalStyle } from "../config";
import { RvStat, RvStatHeader } from ".";
import { RvStatHeaderFCType } from "../../types/components/Stat";
import { defaultProps as statHeaderDefaultProps } from "./RvStatHeader";

export default {
	title: "Components/Stat/RvStatHeader",
	component: RvStatHeader,
	tags: ["autodocs"],
	parameters: {
		layout: "centered",
	},
} as Meta<RvStatHeaderFCType>;

const Template: Story<RvStatHeaderFCType> = ({ children, ...props }) => {
	return (
		<ThemeProvider theme={theme}>
			<GlobalStyle />
			<RvStat width="300px">
				<RvStatHeader {...props}>{children}</RvStatHeader>
			</RvStat>
		</ThemeProvider>
	);
};

export const Default = Template.bind({});
const defaultProps: RvStatHeaderFCType = {
	...statHeaderDefaultProps,
};

Default.args = { children: "Default", ...defaultProps };
