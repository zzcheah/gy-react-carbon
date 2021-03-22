import { AccordionItem, Button } from "carbon-components-react";
import {
  ArrowRight32,
  Checkmark32,
  Unknown32,
  InProgress32,
} from "@carbon/icons-react";

const RequestAccordion = (props) => {
  const style = {
    grid: {
      marginRight: "10px",
      display: "flex",
      marginLeft: "20px",
    },
    detail: {
      //   backgroundColor: "green",
      flex: "0 0 100%",
    },
    button: {
      //   backgroundColor: "yellow",
      flex: "0 0 20%",
      alignSelf: "center",
      //   right: "0",
    },
  };
  const { req } = props;
  var icon;
  switch (req.status) {
    case "COMPLETED":
      icon = <Checkmark32 />;
      break;
    case "PROCESSING":
      icon = <InProgress32 />;
      break;
    default:
      icon = <Unknown32 />;
  }

  return (
    <AccordionItem
      title={
        <div>
          <pre>
            {icon}
            <span>{req.status + ": \t" + req._id}</span>
          </pre>
        </div>
      }
    >
      <div style={style.grid}>
        <div style={style.detail}></div>
        <div style={style.button}>
          <Button renderIcon={ArrowRight32} kind="ghost">
            Detail
          </Button>
        </div>
      </div>
    </AccordionItem>
  );
};

export default RequestAccordion;
