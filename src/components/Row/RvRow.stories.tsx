/* eslint react/prop-types: off */

import type { Meta, Story } from "@storybook/react";
import { ThemeProvider } from "styled-components";
import { theme, GlobalStyle } from "../config";
import { RvRow } from ".";
import { RvRowFCType } from "../../types/components/Row";
import { defaultProps } from "./RvRow";
import { RvColumn } from "../Column";
import { RvStat } from "../Stat";

export default {
	title: "Components/Row/RvRow",
	component: RvRow,
	tags: ["autodocs"],
} as Meta<RvRowFCType>;

const Template: Story<RvRowFCType> = ({ children, ...props }) => {
	return (
		<ThemeProvider theme={theme}>
			<GlobalStyle />
			<RvRow {...props}>{children}</RvRow>
		</ThemeProvider>
	);
};

export const Default = Template.bind({});
const DefaultProps: RvRowFCType = {
	...defaultProps,
	bgColor: "red500",
};

Default.args = {
	children: (
		<>
			<RvColumn>
				<RvStat>Column Item1</RvStat>
				<RvStat>Column Item1</RvStat>
				<RvStat>Column Item3</RvStat>
				<RvStat>Column Item1</RvStat>
				<RvStat>Column Item1</RvStat>
				<RvStat>Column Item3</RvStat>
			</RvColumn>
		</>
	),
	...DefaultProps,
};
