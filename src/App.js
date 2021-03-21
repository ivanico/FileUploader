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
  const onDropFunction = (acceptedFiles) => {setDataFiles((curr)=> [...curr,...acceptedFiles.map((file)=>{
    return{
      file:file,
      vcitan:false,
      obraboteni:4,
      predupreduvanja:3,
      korisnik:''
    }
  })])}
  const { getRootProps : getRootPropsFile, getInputProps : getInputPropsFile, open : openFile, acceptedFiles : acceptedFilesFile } = useDropzone({
    onDrop:onDropFunction,
    // Disable click and keydown behavior
    noClick: true,
    noKeyboard: true,
  });
  const { getRootProps, getInputProps, open, acceptedFiles } = useDropzone({
    onDrop:onDropFunction,
    // Disable click and keydown behavior
    noClick: true,
    noKeyboard: true,
  });
  const [openModal, setOpenModal] = useState(false);
  const [startDate, setStartDate] = useState(new Date());
  // const [vcitajEnabled,setVcitajEnabled] = useState(false);
  const [korisnik,setKorisnik] = useState('');
  const [korisnikError,setKorisnikError] = useState(false);
  const [dataFiles,setDataFiles] = useState([]);
  
  // const [tableData, setTableData] = useState([]);
  
  // const files = [...acceptedFiles,...acceptedFilesFile]
  
  const vcitajEnabled = dataFiles.length > 0 && dataFiles.some(a=>!a.vcitan)

  const clickVcitaj = ()=> {
    if(!korisnik){
      setKorisnikError(true)
      return;
    }
    // setVcitajEnabled(false);
    setDataFiles(dataFiles.map(file=>{
      file.vcitan=true;
      console.log(file)
      return file
    }))
  }

  

  return (
    <Container>
      <Segment style={{ marginTop: "20px" }}>
        <Header as="h1">Load Cr Data</Header>
      </Segment>
      <Segment style={{ padding: "10px", display: "none" }}>
        <CrDropzone
          isDirectory={true}
          getRootProps={getRootProps}
          getInputProps={getInputProps}
          // files={files}
        />
        <CrDropzone
          isDirectory={false}
          getRootProps={getRootPropsFile}
          getInputProps={getInputPropsFile}
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
                  setOpenModal(true)
                  // setVcitajEnabled(true);
                }}
              />
            </div>
          </Segment>
          <Segment>
            <Input label="Корисник" error={korisnikError} placeholder="Корисник" value={korisnik} onChange={(e) => {
              setKorisnikError(false)
              setKorisnik(e.target.value)}} />
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
        <CrTable tableData={dataFiles} startDate={startDate} korisnik={korisnik} />
      </Segment>
      <Progress percent={50} />
      <CrModal open={openModal} setOpen={setOpenModal} openFiles={openFile} openDirectory={open}/>
    </Container>
  );
}

export default App;
