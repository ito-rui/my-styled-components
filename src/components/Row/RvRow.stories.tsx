/* eslint react/prop-types: off */

import type { Meta, Story } from "@storybook/react";
import { ThemeProvider } from "styled-components";
import { theme, GlobalStyle } from "../config";
import { RvRow } from ".";
import { RvRowFCType } from "../../types/components/Row";
import { defaultProps as rvRowDefaultProps } from "./RvRow";
import { RvColumn } from "../Column";
import { RvStat } from "../Stat";

export default {
	title: "Components/Row/RvRow",
	component: RvRow,
	tags: ["autodocs"],
} as Meta<RvRowFCType>;

const Template: Story<RvRowFCType> = ({ children }) => {
	return (
		<ThemeProvider theme={theme}>
			<GlobalStyle />
			{children}
		</ThemeProvider>
	);
};

export const Default = Template.bind({});
const defaultProps: RvRowFCType = {
	...rvRowDefaultProps,
	justifyContent: "start",
	alignItems: "start",
};

Default.args = {
	children: (
		<RvRow {...defaultProps}>
			<RvColumn>
				<RvStat>Column Item1</RvStat>
				<RvStat>Column Item2</RvStat>
			</RvColumn>
			<RvColumn>
				<RvStat>Column Item3</RvStat>
				<RvStat>Column Item4</RvStat>
			</RvColumn>
		</RvRow>
	),
	...defaultProps,
};
