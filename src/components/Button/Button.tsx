/* eslint react/jsx-props-no-spreading: off */

import { FC } from "react";
import { ButtonType } from "../../types/components/Button";
import StyledButton from "./style";

const Button: FC<ButtonType> = ({ children, ...props }) => {
	return <StyledButton {...props}>{children}</StyledButton>;
};

export default Button;
