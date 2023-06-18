/* eslint react/jsx-props-no-spreading: off */

import { useMemo } from "react";
import type { FC } from "react";
import { Menu } from "react-pro-sidebar";
import type { MenuProps } from "react-pro-sidebar";
import type { RvMenuFCType } from "../../types/components/Sidebar";
import systemColors from "../config/colors/systemColor";

export const defaultProps: MenuProps = {
	rootStyles: {},
	menuItemStyles: {
		root: {
			backgroundColor: systemColors.black600,
			color: systemColors.black200,
		},
		button: {
			":hover": {
				backgroundColor: systemColors.black500,
				color: systemColors.white200,
			},
		},
	},
};

/**
 * ------------------------------------------
 * @name - RvMenu
 *
 * ------------------------------------------
 * @StyledComponents - none
 *
 * ------------------------------------------
 * @Components - Menu(react-pro-sidebar)
 *
 * ------------------------------------------
 * @defaultProps
 *
 * - `menuItemStyles`: {
 *		root: {
 *			backgroundColor: systemColors.black600,
 *			color: systemColors.black200,
 *		},
 *		button: {
 *			":hover": {
 *				backgroundColor: systemColors.black500,
 *				color: systemColors.white200,
 *			}
 *		}
 *	}
 *
 * ------------------------------------------
 * @ExpansionExample
 *
 * ```typescript
 *  import type { RvMenuFCType } from 'rvi-system';
 *  import { RvMenu } from 'rvi-system';
 *  import type { MenuProps } from 'react-pro-sidebar';
 *
 *  const Component: FC<RvMenuFCType> = ({children, ...props}) => {
 *
 *      // Style you want to set as default
 *      const defaultProps: MenuProps = {
 *          ... Your DefaultProps !!
 *      }
 *
 *      // Copy props and default values to newProps to preserve primitive values
 *      const newProps = {...props, ...defaultProps};
 *
 *      // Pass newProps to RvMenu(Menu)
 *      return <RvMenu {...newProps}>{children}</RvMenu>;
 *  }
 * ```
 */
const RvMenu: FC<RvMenuFCType> = ({ children, ...props }) => {
	const {
		rootStyles = props.rootStyles ?? defaultProps.rootStyles,
		menuItemStyles = props.menuItemStyles ?? defaultProps.menuItemStyles,
	} = useMemo(() => props, [props]);

	const newProps = useMemo(() => ({ ...props, rootStyles, menuItemStyles }), [props, rootStyles, menuItemStyles]);

	return useMemo(() => <Menu {...newProps}>{children}</Menu>, [newProps]);
};

export default RvMenu;
