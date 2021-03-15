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

  const [startDate, setStartDate] = useState(new Date());
  const [month,setMonth] = useState('');
  const [year,setYear] = useState('');
  

  // const [tableData, setTableData] = useState([]);

  const files = acceptedFiles.map((file) =>{
    console.log(file);
    console.log(startDate);
    return file;
  });

  return (
    <Container>
      <Segment style={{ marginTop: "20px" }}>
        <Header as="h1">Load Cr Data</Header>
      </Segment>
      <Segment style={{ padding: "10px" , display: "none" }}>
        <CrDropzone
          getRootProps={getRootProps}
          getInputProps={getInputProps}
          // files={files}
        />
      </Segment>
      <Segment>
        <Segment floated="left" compact style={{marginTop:'1rem'}}>
          <Label>Date</Label>
          <ReactDatePicker
          selected={startDate}
          dateFormat="yyyy/MM"
          selectsEnd
          showMonthYearPicker
          placeholderText="Year/Month"
          onChange={date => {
            setStartDate(date);
            open();
          }}
          />
        </Segment>
        <p style={{clear:"both"}} />
      </Segment>
      <Segment>
        <CrTable tableData={files} startDate={startDate}/> 
      </Segment>
      
      {/* <Button onClick={()=>{open()}}  content="Open" primary/> */}
    </Container>
  );
}

export default App;
