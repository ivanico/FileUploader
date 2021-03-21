import React,{useState} from 'react'
import { Button, Modal, Divider, Form, Grid, Segment } from 'semantic-ui-react'

function CrModal(props) {

  const {openFiles, openDirectory} = props;
  return (
    <Modal
      onClose={() => props.setOpen(false)}
      onOpen={() => props.setOpen(true)}
      open={props.open}
    >
      <Modal.Header>Select upload </Modal.Header>
      <Modal.Content>
        <Modal.Actions>
          <Segment placeholder>
            <Grid columns={2} relaxed="very" stackable>
              <Grid.Column>
                <Button onClick={()=> {openFiles();props.setOpen(false)}} content="File" size="big" />
              </Grid.Column>
              <Grid.Column verticalAlign="middle">
                <Button onClick={()=> {openDirectory();props.setOpen(false)}} content="Folder" size="big" />
              </Grid.Column>
            </Grid>
            <Divider vertical>Or</Divider>
          </Segment>
        </Modal.Actions>
      </Modal.Content>
    </Modal>
  );
}

export default CrModal
