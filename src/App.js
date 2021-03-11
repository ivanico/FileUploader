import "./App.css";
import "semantic-ui-css/semantic.min.css";
import "react-datepicker/dist/react-datepicker.css";
import { Button, Container, Header, Label, Segment } from "semantic-ui-react";
import { useDropzone } from "react-dropzone";
import CrTable from "./components/CrTable";
import CrDropzone from "./components/CrDropzone";
import ReactDatePicker from "react-datepicker";
import { useState } from "react";

function App() {
  const { getRootProps, getInputProps, open, acceptedFiles } = useDropzone({
    // Disable click and keydown behavior
    noClick: true,
    noKeyboard: true,
  });
  const [month,setMonth] = useState('');
  const [year,setYear] = useState('');
  const [startDate,setStartDate] = useState('');

  const files = acceptedFiles.map((file) => (
    <li key={file.path}>
      {file.path} - {file.size} bytes
    </li>
  ));

  return (
    <Container>
      <Segment style={{ marginTop: "20px" }}>
        <Header as="h1">Load Cr Data</Header>
      </Segment>
      <Segment style={{ padding: "10px" }}>
        <CrDropzone
          getRootProps={getRootProps}
          getInputProps={getInputProps}
          files={files}
        />
      </Segment>
      <Segment>
        <CrTable /> 
      </Segment>
      <Segment>
        <Segment floated="left" compact style={{marginTop:'1rem'}}>
          <Label>Date</Label>
          <ReactDatePicker dateFormat="yyyy/MM"
          selectsEnd
          showMonthYearPicker
          placeholderText="Year/Month"
          onChange={date => {
            setYear(date);
            open();
          }}
          selected={year} 
          />
        </Segment>
        <p style={{clear:"both"}} />
      </Segment>
      <Button onClick={()=>{open()}}  content="Open" primary/>
    </Container>
  );
}

export default App;
