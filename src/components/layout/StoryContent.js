import React, { useState } from "react";

import { Content } from "carbon-components-react";

import cx from "classnames";

const StoryContent = ({ useResponsiveOffset = true, children }) => {
  console.log(children);
  const [open, setOpen] = useState(false);
  const classNameFirstColumn = cx({
    "bx--col-lg-13": true,
    "bx--offset-lg-3": useResponsiveOffset,
  });

  const style = {
    height: "100%",
    paddingTop: "80px",
    marginRight: "100px",
  };
  if (useResponsiveOffset) {
    style.margin = "0";
    style.width = "100%";
  }
  //   console.log(props);
  return (
    <Content id="main-content" style={style}>
      <div className={classNameFirstColumn}>{children}</div>
    </Content>
  );
};

export default StoryContent;
