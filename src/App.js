import "./App.css";
import "semantic-ui-css/semantic.min.css";
import "react-datepicker/dist/react-datepicker.css";
import { Button, Container, Header, Input, Label, Progress, Segment } from "semantic-ui-react";
import { useDropzone } from "react-dropzone";
import CrTable from "./components/CrTable";
import CrDropzone from "./components/CrDropzone";
import DatePicker from "react-datepicker";
import { useState } from "react";
import CrModal from "./components/CrModal";
// import { ReactS3Uploader } from 'react-s3-uploader';

function App() {
  const { getRootProps, getInputProps, open, acceptedFiles } = useDropzone({
    // Disable click and keydown behavior
    noClick: true,
    noKeyboard: true,
  });

  const [startDate, setStartDate] = useState(new Date());
  const [vcitajEnabled,setVcitajEnabled] = useState(false);
  const [korisnik,setKoriskin] = useState('');


  // const [tableData, setTableData] = useState([]);

  const files = acceptedFiles.map((file) =>{
    return file;
  });

  const clickVcitaj = ()=> {
    setVcitajEnabled(false);
  }

  

  return (
    <Container>
      <Segment style={{ marginTop: "20px" }}>
        <Header as="h1">Load Cr Data</Header>
      </Segment>
      <Segment style={{ padding: "10px", display: "none" }}>
        <CrDropzone
          getRootProps={getRootProps}
          getInputProps={getInputProps}
          // files={files}
        />
      </Segment>
      <Segment>
        <Segment.Group horizontal>
          <Segment>
            <div className="ui labeled input">
              <Label>Дата</Label>
              <DatePicker
                fluid
                selected={startDate}
                dateFormat="yyyy/MM"
                selectsEnd
                showMonthYearPicker
                placeholderText="Year/Month"
                onChange={(date) => {
                  setStartDate(date);
                  open();
                  setVcitajEnabled(true);
                }}
              />
            </div>
          </Segment>
          <Segment>
            <Input label="Корисник" placeholder="Корисник" value={korisnik} />
          </Segment>
          <Segment>
            <Button primary disabled={!vcitajEnabled} onClick={clickVcitaj}>
              Вчитај
            </Button>
          </Segment>
        </Segment.Group>
        <p style={{ clear: "both" }} />
      </Segment>
      <Segment>
        <CrTable tableData={files} startDate={startDate} />
      </Segment>
      <Progress percent={50} />
      <CrModal/>
    </Container>
  );
}

export default App;
