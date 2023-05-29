/* eslint react/prop-types: off */

import type { Meta, Story } from "@storybook/react";
import { ThemeProvider } from "styled-components";
import theme from "../config/theme";
import { Div } from "./index";
import { DivType, BaseDivType } from "../../types/components/Div";

export default {
	title: "Components/Box",
	component: Div,
} as Meta<DivType>;

const Template: Story<DivType> = ({ children, ...props }) => {
	return (
		<ThemeProvider theme={theme}>
			<Div {...props}>{children}</Div>
		</ThemeProvider>
	);
};

export const Default = Template.bind({});
const defaultProps: BaseDivType = {
	height: {
		xs: 20,
		sm: 20,
		md: 20,
		lg: 20,
		xl: 20,
	},
	borderRadius: {
		xs: 0.5,
		sm: 0.5,
		md: 0.5,
		lg: 0.5,
		xl: 0.5,
	},
	borderColor: {
		xs: "red500",
		sm: "blue500",
		md: "green500",
		lg: "yellow500",
		xl: "gray500",
	},
	bgColor: {
		xs: "red500",
		sm: "blue500",
		md: "green500",
		lg: "yellow500",
		xl: "gray500",
	},
	boxShadow: {
		xs: "md",
		sm: "md",
		md: "md",
		lg: "md",
		xl: "md",
	},
	padding: {
		xs: 1,
		sm: 2,
		md: 3,
		lg: 4,
		xl: 5,
	},
	paddingTop: {
		xs: 1,
		sm: 2,
		md: 3,
		lg: 4,
		xl: 5,
	},
	paddingRight: {
		xs: 1,
		sm: 2,
		md: 3,
		lg: 4,
		xl: 5,
	},
	paddingBottom: {
		xs: 1,
		sm: 2,
		md: 3,
		lg: 4,
		xl: 5,
	},
	paddingLeft: {
		xs: 1,
		sm: 2,
		md: 3,
		lg: 4,
		xl: 5,
	},
	margin: {
		xs: 1,
		sm: 2,
		md: 3,
		lg: 4,
		xl: 5,
	},
	marginTop: {
		xs: 1,
		sm: 2,
		md: 3,
		lg: 4,
		xl: 5,
	},
	marginRight: {
		xs: 1,
		sm: 2,
		md: 3,
		lg: 4,
		xl: 5,
	},
	marginBottom: {
		xs: 1,
		sm: 2,
		md: 3,
		lg: 4,
		xl: 5,
	},
	marginLeft: {
		xs: 1,
		sm: 2,
		md: 3,
		lg: 4,
		xl: 5,
	},
	transition: {
		xs: "box",
		sm: "box",
		md: "box",
		lg: "box",
		xl: "box",
	},
	fontSize: {
		xs: "xs",
		sm: "sm",
		md: "md",
		lg: "lg",
		xl: "xl",
	},
	hover: {
		textColor: {
			xs: "red500",
			sm: "blue500",
			md: "green500",
			lg: "yellow500",
			xl: "gray500",
		},
		bgColor: {
			xs: "gray500",
			sm: "green500",
			md: "yellow500",
			lg: "red500",
			xl: "blue500",
		},
	},
};

Default.args = { children: "Default", ...defaultProps };
