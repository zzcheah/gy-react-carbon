import {
  Dropdown,
  FileUploader,
  FileUploaderDropContainer,
  TextArea,
} from "carbon-components-react";

const items = [
  {
    text: "haha",
    hehe: "123",
  },
  {
    text: "hehe",
    hehe: "123",
  },
  {
    text: "heuueuue",
    hehe: "12Aasdasd",
  },
];

const style = {
  container: {
    display: "flex",
    flexWrap: "wrap",
    paddingBottom: "20px",
  },
  dropDown: {
    paddingTop: "20px",
    width: "400px",
    marginRight: "20px",
  },
  textArea: {
    maxWidth: "600px",
    marginBottom: "30px",
    marginRight: "20px",
  },
  fileUploader: {
    // marginTop: "30px",
  },
};

const TextAreaProps = () => ({
  style: style.textArea,
  labelText: "JSON Parameters",
  invalidText: "invalid JSON format",
  placeholder: "Parameters...",
  onChange: () => {},
  onClick: () => {},
});

const filenameStatuses = {
  "Edit (edit)": "edit",
  "Complete (complete)": "complete",
  "Uploading (uploading)": "uploading",
};

const FileUploaderProps = () => ({
  style: style.fileUploader,
  labelTitle: "Upload input zip file",
  labelDescription: "Only .zip file is supported.",
  buttonLabel: "Add file",
  filenameStatus: "edit",
  accept: [".zip", ".rar"],
  multiple: false,
  iconDescription: "Clear file",
  onChange: (e) => {
    console.log(e);

    var link = document.createElement("a");
    link.download = e.target.files[0].name;
    link.href = URL.createObjectURL(e.target.files[0]);
    link.click();
  },
  onClick: () => {},
  onDelete: () => {},
});

const RequestForm = () => {
  //image
  //param
  // input file
  return (
    <div>
      <h1>Request Form</h1>
      <hr />
      <div style={style.container}>
        <div style={style.dropDown}>
          <Dropdown
            id="default"
            titleText="Docker Image"
            label="Docker Image"
            items={items}
            itemToString={(item) => (item ? item.text : "")}
            onChange={() => {
              console.log("abcd");
            }}
          ></Dropdown>
        </div>
        <div style={style.dropDown}>
          <Dropdown
            id="default"
            titleText="Docker Image"
            label="Docker Image"
            items={items}
            itemToString={(item) => (item ? item.text : "")}
            onChange={(e) => {
              console.log(e);
            }}
          />
        </div>
      </div>
      <TextArea {...TextAreaProps()} />
      <FileUploader {...FileUploaderProps()} />
    </div>
  );
};

export default RequestForm;
