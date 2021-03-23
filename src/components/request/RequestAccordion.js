import { AccordionItem, Button } from "carbon-components-react";
import {
  ArrowRight32,
  Checkmark16,
  Unknown16,
  InProgress16,
} from "@carbon/icons-react";

const RequestAccordion = (props) => {
  const style = {
    grid: {
      marginRight: "10px",
      display: "flex",
      marginLeft: "20px",
      alignItems: "center",
    },
    detail: {
      // backgroundColor: "green",
      flex: "0 0 100%",
      paddingLeft: "10px",
    },
    button: {
      // backgroundColor: "yellow",
      flex: "0 0 20%",
    },
  };
  const { req } = props;
  var icon;
  switch (req.status) {
    case "COMPLETED":
      icon = <Checkmark16 />;
      break;
    case "PROCESSING":
      icon = <InProgress16 />;
      break;
    default:
      icon = <Unknown16 />;
  }

  return (
    <AccordionItem
      title={
        <h5>
          <pre>
            {icon}
            {"  " + req.status + ": \t" + req.name}
          </pre>
        </h5>
      }
    >
      <div style={style.grid}>
        <pre style={style.detail}>
          {"Docker Image \t: "}
          {req.image}
          <br />
          <br />
          {"Created At \t\t: "}
          {req.createdAt}
        </pre>
        <div style={style.button}>
          <Button renderIcon={ArrowRight32} kind="tertiary" size="small">
            Detail
          </Button>
        </div>
      </div>
    </AccordionItem>
  );
};

export default RequestAccordion;
