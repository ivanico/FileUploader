import "./App.css";
import "semantic-ui-css/semantic.min.css";
import "react-datepicker/dist/react-datepicker.css";
import { Button, Container, Header, Input, Label, Popup, Segment } from "semantic-ui-react";
import { useDropzone } from "react-dropzone";
import CrTable from "./components/CrTable";
import CrDropzone from "./components/CrDropzone";
import DatePicker from "react-datepicker";
import { useState } from "react";
import CrModal from "./components/CrModal";
import _ from "lodash";
// import { ReactS3Uploader } from 'react-s3-uploader';

function App() {

  const getDatePartFromPath = (a) =>{
    var godina = a.substring(0,a.indexOf('-'))
    var mesec = a.substring(a.indexOf('-')+1,a.indexOf('/'))
    var den = a.substring(a.indexOf('/')+1, a.indexOf('/', a.indexOf('/')+1));
    return [godina,mesec,den].join('-');
  }

  const onDropFunction = (acceptedFiles) => {setDataFiles((curr)=>{ 
    var newFiles = [...acceptedFiles].map(file=> {
      return {
        date: getDatePartFromPath(file.path),
        file
      }
    });
    const grouped = _.groupBy(newFiles,"date");
    const flattened = _.flatMap(grouped, (files,key)=> {
      const orderedFiles = _.orderBy(files, x=> x.file.name);
      return {
        date: key,
        prvFajl: _.first(orderedFiles).file.name,
        posledenFajl: _.last(orderedFiles).file.name,
        obraboteni:0,
        predupreduvanja:0,
        korisnik:'',
        files
      };
    });
    const ordered = _.orderBy(flattened,"date");
    return [...curr,...ordered]
    });
  }

  const { getRootProps : getRootPropsFile,
     getInputProps : getInputPropsFile,
     open : openFile } = useDropzone({
    onDrop:onDropFunction,
    noClick: true,
    noKeyboard: true,
  });
  const { getRootProps, getInputProps, open } = useDropzone({
    onDrop:onDropFunction,
    noClick: true,
    noKeyboard: true,
  });
  const [openModal, setOpenModal] = useState(false);
  const [startDate, setStartDate] = useState(new Date());
  const [korisnik,setKorisnik] = useState('');
  const [korisnikError,setKorisnikError] = useState(false);
  const [dataFiles,setDataFiles] = useState([]);
  
  const vcitajEnabled = dataFiles.length > 0 && dataFiles.some(a=>!a.vcitan)

  const setVcitanoByKorisnik = (user, data, updateFunction) =>{
    updateFunction([...data].map(x=>{
       x.korisnik = x.korisnik || user;
       x.vcitan=true;
       return x;
    }));
  }

  const clickVcitaj = ()=> {
    if(!korisnik){
      setKorisnikError(true);
      return;
    }
    setVcitanoByKorisnik(korisnik, dataFiles, setDataFiles);
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
                  setOpenModal(true);
                  // setVcitajEnabled(true);
                }}
              />
            </div>
          </Segment>
          <Segment>
            <Input
              label="Корисник"
              error={korisnikError}
              placeholder="Корисник"
              value={korisnik}
              onChange={(e) => {
                setKorisnikError(false);
                setKorisnik(e.target.value);
              }}
            />
          </Segment>
          <Segment>
            {vcitajEnabled && 
              <Button primary onClick={clickVcitaj} content="Вчитај" />
            }
            {!vcitajEnabled && 
              <Popup content='Нема фајлови за вчитување' trigger={<span><Button disabled primary content="Вчитај" /></span>} />
            }
          </Segment>
        </Segment.Group>
        <p style={{ clear: "both" }} />
      </Segment>
      {dataFiles.length > 0 &&
        <Segment>
          <CrTable
            tableData={dataFiles}
            startDate={startDate}
          />
        </Segment>
      }
      <CrModal
        open={openModal}
        setOpen={setOpenModal}
        openFiles={openFile}
        openDirectory={open}
      />
    </Container>
  );
}

export default App;
