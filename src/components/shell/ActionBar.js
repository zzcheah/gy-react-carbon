import { HeaderGlobalAction, HeaderGlobalBar } from "carbon-components-react";
import { Search20, Notification20, AppSwitcher20 } from "@carbon/icons-react";

const ActionBar = () => {
  return (
    <HeaderGlobalBar>
      <HeaderGlobalAction aria-label="Search">
        <Search20 />
      </HeaderGlobalAction>
      <HeaderGlobalAction aria-label="Notifications">
        <Notification20 />
      </HeaderGlobalAction>
      <HeaderGlobalAction aria-label="App Switcher" tooltipAlignment="end">
        <AppSwitcher20 />
      </HeaderGlobalAction>
    </HeaderGlobalBar>
  );
};

export default ActionBar;
