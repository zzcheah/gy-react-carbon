import {
  SideNav,
  SideNavDivider,
  SideNavItems,
  SideNavLink,
  SideNavMenu,
  SideNavMenuItem,
} from "carbon-components-react";

import { AddAlt32 } from "@carbon/icons-react";

const LeftPanel = (props) => {
  return (
    <SideNav aria-label="Side navigation" expanded={props.show}>
      <SideNavItems>
        <SideNavMenu
          renderIcon={AddAlt32}
          title="Add Request Node"
          isActive={true}
        >
          <SideNavMenuItem href="javascript:void(0)">Link</SideNavMenuItem>
          <SideNavMenuItem isActive href="javascript:void(0)">
            Link
          </SideNavMenuItem>
          <SideNavMenuItem href="javascript:void(0)">Link</SideNavMenuItem>
        </SideNavMenu>
        <SideNavLink
          renderIcon={AddAlt32}
          onClick={() => {
            alert("haha");
          }}
        >
          Add Request
        </SideNavLink>
      </SideNavItems>
    </SideNav>
  );
};

export default LeftPanel;
