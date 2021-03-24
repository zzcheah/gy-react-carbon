import { HeaderPanel, InlineNotification } from "carbon-components-react";

const notificationProps = () => ({
  kind: "info",
  title: "Notification title",
  subtitle: "Subtitle text goes here.",
  //   iconDescription: text(
  //     "Icon description (iconDescription)",
  //     "describes the close button"
  //   ),
  //   statusIconDescription: text(
  //     "Status icon description (statusIconDescription)",
  //     "describes the status icon"
  //   ),
  hideCloseButton: true,
});

const RightPanel = ({ show }) => {
  return (
    <HeaderPanel aria-label="Header Panel" expanded={show}>
      <InlineNotification {...notificationProps()}></InlineNotification>;
    </HeaderPanel>
  );
};

export default RightPanel;
