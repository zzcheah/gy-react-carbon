import {
  Header,
  HeaderMenuButton,
  HeaderName,
  SkipToContent,
  HeaderContainer,
} from "carbon-components-react";
import { useState } from "react";
import { useHistory } from "react-router-dom";

import ActionBar from "../shell/ActionBar.js";
import LeftPanel from "../shell/LeftPanel.js";
import RightPanel from "../shell/RightPanel.js";

const AppHeader = ({ auth }) => {
  const [expanded, setExpanded] = useState(false);
  const history = useHistory();

  return (
    <HeaderContainer
      render={({ isSideNavExpanded, onClickSideNavExpand }) => (
        <>
          <Header aria-label="IBM Platform Name">
            <SkipToContent />
            <HeaderMenuButton
              aria-label="Open menu"
              onClick={onClickSideNavExpand}
              isActive={isSideNavExpanded}
            />
            <HeaderName prefix="" onClick={() => history.push("/")}>
              GPU Yard
            </HeaderName>
            {auth ? (
              <>
                <ActionBar expanded={expanded} setExpanded={setExpanded} />
                <LeftPanel show={isSideNavExpanded} />
                <RightPanel show={expanded} />
              </>
            ) : null}
          </Header>
        </>
      )}
    />
  );
};

export default AppHeader;
