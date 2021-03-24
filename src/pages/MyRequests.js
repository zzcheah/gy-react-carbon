import { Accordion, AccordionSkeleton } from "carbon-components-react";
import RequestAccordion from "../components/request/RequestAccordion";

const requests = [
  {
    name: "Request 1",
    _id: "60452f5172351430a1f74860",
    status: "PROCESSING",
    userID: "user2",
    createdAt: "30-10-2022 10:25:16",
    title: "Month",
    image: "zz:proto2",
    encodedParam:
      "ewogICJiYXRjaF9zaXplIjogMzIsCiAgImVwb2NocyI6IDEwLAogICJzZWVkIjogNDIsCiAgInZhbGlkYXRpb25fc3BsaXQiOiAwLjIsCiAgIm1heF9mZWF0dXJlcyI6IDEwMDAwLAogICJzZXF1ZW5jZV9sZW5ndGgiOiAyNTAsCiAgImVtYmVkZGluZ19kaW0iOiAxNiwKICAibG9zcyI6ICJiaW5hcnlfY3Jvc3NlbnRyb3B5IiwKICAib3B0aW1pemVyIjogImFkYW0iCn0=",
    inputFiles: ["603fe0cd0407ac653c0d0900"],
    _class: "fyp.gy.common.model.Request",
  },

  /* 2 */
  {
    name: "Request 2",
    _id: "60452ffa72351430a1f74862",
    status: "PROCESSING",
    userID: "zzcheah",
    createdAt: "02-12-2022 10:25:16",
    title: "Month",
    image: "zz:proto2",
    encodedParam:
      "ewogICJiYXRjaF9zaXplIjogMzIsCiAgImVwb2NocyI6IDEwLAogICJzZWVkIjogNDIsCiAgInZhbGlkYXRpb25fc3BsaXQiOiAwLjIsCiAgIm1heF9mZWF0dXJlcyI6IDEwMDAwLAogICJzZXF1ZW5jZV9sZW5ndGgiOiAyNTAsCiAgImVtYmVkZGluZ19kaW0iOiAxNiwKICAibG9zcyI6ICJiaW5hcnlfY3Jvc3NlbnRyb3B5IiwKICAib3B0aW1pemVyIjogImFkYW0iCn0=",
    inputFiles: ["603fe0cd0407ac653c0d0900"],
    _class: "fyp.gy.common.model.Request",
  },

  /* 3 */
  {
    name: "Request 3",
    _id: "6045303d72351430a1f74864",
    status: "PROCESSING",
    userID: "zzcheah",
    createdAt: "02-12-2023 10:25:16",
    title: "Month",
    image: "zz:proto2",
    encodedParam:
      "ewogICJiYXRjaF9zaXplIjogMzIsCiAgImVwb2NocyI6IDEwLAogICJzZWVkIjogNDIsCiAgInZhbGlkYXRpb25fc3BsaXQiOiAwLjIsCiAgIm1heF9mZWF0dXJlcyI6IDEwMDAwLAogICJzZXF1ZW5jZV9sZW5ndGgiOiAyNTAsCiAgImVtYmVkZGluZ19kaW0iOiAxNiwKICAibG9zcyI6ICJiaW5hcnlfY3Jvc3NlbnRyb3B5IiwKICAib3B0aW1pemVyIjogImFkYW0iCn0=",
    inputFiles: ["603fe0cd0407ac653c0d0900"],
    _class: "fyp.gy.common.model.Request",
  },
];

const MyRequests = () => {
  return (
    <div>
      <h1>My Requests</h1>
      <div style={{ height: "20px" }} />
      {/* <hr /> */}
      <Accordion>
        {requests ? (
          requests.map((req, i) => <RequestAccordion key={i} req={req} />)
        ) : (
          <AccordionSkeleton open count={4} />
        )}
      </Accordion>
    </div>
  );
};

export default MyRequests;
