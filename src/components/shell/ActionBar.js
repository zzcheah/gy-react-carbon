import { HeaderGlobalAction, HeaderGlobalBar } from "carbon-components-react";
import { Notification20 } from "@carbon/icons-react";

const ActionBar = ({ expanded, setExpanded }) => {
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

  return <HeaderGlobalBar>{notification()}</HeaderGlobalBar>;
};

export default ActionBar;
