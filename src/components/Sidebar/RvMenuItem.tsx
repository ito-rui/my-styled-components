/* eslint react/jsx-props-no-spreading: off */

import { useMemo } from "react";
import type { FC } from "react";
import { MenuItem } from "react-pro-sidebar";
import type { MenuItemProps } from "react-pro-sidebar";
import type { RvMenuItemFCType } from "../../types/components/Sidebar";

export const defaultProps: MenuItemProps = {};

/**
 * ------------------------------------------
 * @name - RvMenuItem
 *
 * ------------------------------------------
 * @StyledComponents - none
 *
 * ------------------------------------------
 * @Components - MenuItem(react-pro-sidebar)
 *
 * ------------------------------------------
 * @defaultProps - none
 *
 * ------------------------------------------
 * @example
 *
 * ```typescript
 *  import { RvSidebarContainer, RvSidebar, RvSidebarMenu, RvMenuitem } from 'rvi-system';
 *
 *  const Conponents: FC = () => {
 *      return (
 *          <RvSidebarContainer>
 *              <RvSidebar>
 *                  <RvSidebarHeader>
 *                      SidebaeHeader
 *                  </RvSidebarHeader>
 *                  <RvMenu>
 *                      <RvMenuItem>
 *                          MenuItem1
 *                      </RvMenuItem>
 *                      <RvMenuItem>
 *                          MenuItem2
 *                      </RvMenuItem>
 *                  <RvMenu>
 *              </RvSidebar>
 *          </RvSidebarContainer>
 *      )
 *  };
 *
 * ```
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
 *      // Pass newProps to RvMenuItem(MenuItem)
 *      return <RvMenuItem {...newProps}>{children}</RvMenuItem>;
 *  }
 * ```
 */
const RvMenuItem: FC<RvMenuItemFCType> = ({ children, ...props }) => {
	const newProps = useMemo(() => ({ ...props }), [props]);
	return useMemo(() => <MenuItem {...newProps}>{children}</MenuItem>, [newProps]);
};

export default RvMenuItem;
