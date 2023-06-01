/* eslint react/prop-types: off */

import type { Meta, Story } from "@storybook/react";
import { ThemeProvider } from "styled-components";
import { theme, GlobalStyle } from "../config";
import { RvCard } from ".";
import { RvCardFCType } from "../../types/components/Card";
import { rvCardDefaultProps } from "./RvCard";

export default {
	title: "Components/Card/RvCard",
	component: RvCard,
	tags: ["autodocs"],
} as Meta<RvCardFCType>;

const Template: Story<RvCardFCType> = ({ children, ...props }) => {
	return (
		<ThemeProvider theme={theme}>
			<GlobalStyle />
			<RvCard {...props}>{children}</RvCard>
		</ThemeProvider>
	);
};

export const Default = Template.bind({});
const DefaultProps: RvCardFCType = {
	...rvCardDefaultProps,
};

Default.args = { children: "Default", ...DefaultProps };
