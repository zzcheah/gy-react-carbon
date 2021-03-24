import {
  SideNav,
  SideNavDivider,
  SideNavItems,
  SideNavLink,
} from "carbon-components-react";

import { RequestQuote32, TableOfContents32 } from "@carbon/icons-react";
import { useHistory } from "react-router-dom";
import { useState } from "react";

const LeftPanel = ({ show }) => {
  const history = useHistory();
  const [index, setIndex] = useState(1);

  const myRequestLink = (active, i) => {
    return (
      <SideNavLink
        key={i}
        isActive={active}
        renderIcon={TableOfContents32}
        onClick={() => {
          setIndex(i);
          history.push("/");
        }}
      >
        My Requests
      </SideNavLink>
    );
  };

  const formLink = (active, i) => {
    return (
      <SideNavLink
        key={i}
        isActive={active}
        renderIcon={RequestQuote32}
        onClick={() => {
          setIndex(i);
          history.push("/requestForm");
        }}
      >
        Request Form
      </SideNavLink>
    );
  };

  const links = [myRequestLink, formLink];

  return (
    <SideNav aria-label="Side navigation" expanded={show}>
      <SideNavItems>
        {links.map((link, i) => {
          return link(i === index, i);
        })}
        <SideNavDivider />
      </SideNavItems>
    </SideNav>
  );
};

export default LeftPanel;
