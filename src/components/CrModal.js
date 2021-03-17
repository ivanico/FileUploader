import React,{useState} from 'react'
import { Button, Modal, Divider, Form, Grid, Segment } from 'semantic-ui-react'

function CrModal() {
  const [open, setOpen] = useState(false)

  return (
    <Modal
      onClose={() => setOpen(false)}
      onOpen={() => setOpen(true)}
      open={open}
      trigger={<Button>Show Modal</Button>}
    >
      <Modal.Header>Select upload </Modal.Header>
      <Modal.Content>
        <Modal.Actions>
          <Segment placeholder>
            <Grid columns={2} relaxed="very" stackable>
              <Grid.Column>
                <Button content="File" size="big" />
              </Grid.Column>
              <Grid.Column verticalAlign="middle">
                <Button content="Folder" size="big" />
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
