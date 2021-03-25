import { InlineNotification } from "carbon-components-react";

const ToastStatus = ({ toast }) => {
  return toast ? (
    <div
      style={{
        position: "absolute",
        top: "55px",
        right: "25px",
      }}
    >
      <InlineNotification
        title={""}
        subtitle={toast.title}
        kind={toast.kind}
        lowContrast
        hideCloseButton
      />
    </div>
  ) : null;
};

export default ToastStatus;
