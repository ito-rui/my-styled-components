/* eslint react/prop-types: off */

import type { Meta, Story } from "@storybook/react";
import { ThemeProvider } from "styled-components";
import { theme, GlobalStyle } from "../config";
import { RvColumn } from ".";
import { RvColumnFCType } from "../../types/components/Column";
import { defaultProps } from "./RvColumn";
import { RvStat } from "../Stat";

export default {
	title: "Components/Column/RvColumn",
	component: RvColumn,
	tags: ["autodocs"],
} as Meta<RvColumnFCType>;

const Template: Story<RvColumnFCType> = ({ children, ...props }) => {
	return (
		<ThemeProvider theme={theme}>
			<GlobalStyle />
			<RvColumn {...props}>{children}</RvColumn>
		</ThemeProvider>
	);
};

export const Default = Template.bind({});
const DefaultProps: RvColumnFCType = {
	...defaultProps,
};

Default.args = {
	children: (
		<>
			<RvStat>Column Item1</RvStat>
			<RvStat>Column Item1</RvStat>
			<RvStat>Column Item3</RvStat>
		</>
	),
	...DefaultProps,
};
