import { createGlobalStyle } from "styled-components";
import theme from "./theme";

const GlobalStyle = createGlobalStyle`
    body {
        background: ${theme.colors.systemColors.white800};
        margin: 0
    }
`;

export default GlobalStyle;
