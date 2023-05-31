## README（Bata）

### ReactCompoennts created with styled-components.

### It is also a template for customizing and deploying to npm, not a CSS framework.

### Ideal for StoryBook-based development and sharing developed components within the company and elsewhere

## How to install rvi-system in your project

```bash
npm install rvi-system

```

### or

```bash
yarn add rvi-system
```

## Add rui-system

### Load the proprietor in App.tsx

```typescript
import { ThemeProvider } from "styled-components";
import { theme } from 'rvi-system';

export default function App() {
    return (
        <ThemeProvider theme={theme}>
            ... </ Your App Components> ...
        </ThemeProvider>
    )
}

```

## Extend and develop rvi-sysytem

### First

```bash
git clone https://github.com/ito-rui/rvi-system.git rvi-system
```

### Second

```bash
yarn install
```

### three

```bash
yarn storybook
```
