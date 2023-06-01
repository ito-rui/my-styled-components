/* eslint react/prop-types: off */

import type { Meta, Story } from "@storybook/react";
import { ThemeProvider } from "styled-components";
import { theme, GlobalStyle } from "../config";
import { RvSpan } from "../Span";
import { RvCard, RvCardHeader } from ".";
import { RvCardHeaderFCType } from "../../types/components/Card";
import { rvCardHeaderDefaultProps } from "./RvCardHeader";

export default {
	title: "Components/Card/RvCardHeader",
	component: RvCardHeader,
	tags: ["autodocs"],
} as Meta<RvCardHeaderFCType>;

const Template: Story<RvCardHeaderFCType> = ({ children, ...props }) => {
	return (
		<ThemeProvider theme={theme}>
			<GlobalStyle />
			<RvCard width="300px" height="100px" alignItems="start" paddingTop={10}>
				<RvCardHeader {...props}>{children}</RvCardHeader>
			</RvCard>
		</ThemeProvider>
	);
};

export const Default = Template.bind({});
const DefaultProps: RvCardHeaderFCType = {
	...rvCardHeaderDefaultProps,
	headerLabel: <RvSpan>RvCardHeader</RvSpan>,
};

Default.args = { ...DefaultProps };
