/* eslint react/prop-types: off */

import type { Meta, Story } from "@storybook/react";
import { ThemeProvider } from "styled-components";
import { theme, GlobalStyle } from "../config";
import { RvCard, RvCardHeader } from ".";
import { RvCardHeaderFCType } from "../../types/components/Card";
import { defaultProps as rvCardHeaderDefaultProps } from "./RvCardHeader";

export default {
	title: "Components/Card/RvCardHeader",
	component: RvCardHeader,
	tags: ["autodocs"],
} as Meta<RvCardHeaderFCType>;

const Template: Story<RvCardHeaderFCType> = ({ children, ...props }) => {
	return (
		<ThemeProvider theme={theme}>
			<GlobalStyle />
			<RvCard>
				<RvCardHeader {...props}>{children}</RvCardHeader>
			</RvCard>
		</ThemeProvider>
	);
};

export const Default = Template.bind({});
const defaultProps: RvCardHeaderFCType = {
	...rvCardHeaderDefaultProps,
	label: "RvCardHeader",
};

Default.args = { ...defaultProps };
