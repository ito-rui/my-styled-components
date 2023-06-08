/* eslint react/jsx-props-no-spreading: off */

import { useMemo } from "react";
import type { FC } from "react";
import { SubMenu } from "react-pro-sidebar";
import type { SubMenuProps } from "react-pro-sidebar";
import type { RvSubMenuFCType } from "../../types/components/Sidebar";

export const defaultProps: SubMenuProps = {};

const RvSubMenu: FC<RvSubMenuFCType> = ({ children, ...props }) => {
	const newProps = useMemo(() => ({ ...props }), [props]);
	return useMemo(() => <SubMenu {...newProps}>{children}</SubMenu>, [newProps]);
};

export default RvSubMenu;
