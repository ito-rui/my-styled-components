/* eslint react/prop-types: off */

import type { Meta, Story } from "@storybook/react";
import { ThemeProvider } from "styled-components";
import { theme, GlobalStyle } from "../config";
import { RvMain } from ".";
import { RvMainFCType } from "../../types/components/Main";
import { mainDefaultProps } from "./RvMain";
import { RvHStack } from "../Box";
import { RvRow } from "../Row";
import { RvColumn } from "../Column";

export default {
	title: "Components/Main/RvMain",
	component: RvMain,
	tags: ["autodocs"],
} as Meta<RvMainFCType>;

const Template: Story<RvMainFCType> = ({ children, ...props }) => {
	return (
		<ThemeProvider theme={theme}>
			<GlobalStyle />
			<RvMain {...props}>{children}</RvMain>
		</ThemeProvider>
	);
};

export const Default = Template.bind({});
const defaultProps: RvMainFCType = {
	...mainDefaultProps,
};

Default.args = {
	children: (
		<>
			<RvHStack bgColor="red500" width={{ xs: 0, sm: 0, md: "80px", lg: "25%", xl: "25%" }}></RvHStack>
			<RvColumn
				bgColor="pink500"
				width={{ xs: "100%", sm: "100%", md: "100%", lg: "75%", xl: "75%" }}
				alignItems="start"
				space={0}
			>
				<RvRow bgColor="blue500" height={{ xs: "10%", sm: "10%", md: "15%", lg: "20%", xl: "20%" }}>
					MainHeader
				</RvRow>
				<RvRow bgColor="black400" height={{ xs: "80%", sm: "80%", md: "70%", lg: "60%", xl: "60%" }}>
					MainBody
				</RvRow>
				<RvRow bgColor="green500" height={{ xs: "10%", sm: "10%", md: "15%", lg: "20%", xl: "20%" }}>
					MainFooter
				</RvRow>
			</RvColumn>
		</>
	),
	...defaultProps,
};
