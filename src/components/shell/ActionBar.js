import { HeaderGlobalAction, HeaderGlobalBar } from "carbon-components-react";
import { User20, Notification20 } from "@carbon/icons-react";

const ActionBar = ({ auth, expanded, setExpanded }) => {
  const notification = () => {
    return (
      <HeaderGlobalAction
        aria-label="Notifications"
        tooltipAlignment="end"
        isActive={expanded}
        onClick={() => setExpanded(!expanded)}
      >
        <Notification20 />
      </HeaderGlobalAction>
    );
  };

  const userManagement = () => {
    return (
      <HeaderGlobalAction
        aria-label="User Management"
        tooltipAlignment="end"
        isActive={expanded}
        onClick={() => {
          setExpanded(!expanded);
        }}
      >
        <User20 />
      </HeaderGlobalAction>
    );
  };

  return (
    <HeaderGlobalBar>
      {auth ? notification() : userManagement()}
    </HeaderGlobalBar>
  );
};

export default ActionBar;
