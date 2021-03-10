import React from 'react';
import { Header, Rating, Table } from 'semantic-ui-react';

const CrTable = () => {
  return (  
    <Table celled padded>
    <Table.Header>
      <Table.Row>
        <Table.HeaderCell singleLine>Датум</Table.HeaderCell>
        <Table.HeaderCell>Прв Фајл</Table.HeaderCell>
        <Table.HeaderCell>Последен Фајл</Table.HeaderCell>
        <Table.HeaderCell>Вчитани</Table.HeaderCell>
        <Table.HeaderCell>Обработени</Table.HeaderCell>
        <Table.HeaderCell>Предупредувања</Table.HeaderCell>
        <Table.HeaderCell>Корисник</Table.HeaderCell>
      </Table.Row>
    </Table.Header>

    <Table.Body>
      <Table.Row>
        <Table.Cell>
          <Header as='h2' textAlign='center'>
            A
          </Header>
        </Table.Cell>
        <Table.Cell singleLine>Power Output</Table.Cell>
        <Table.Cell>
          <Rating icon='star' defaultRating={3} maxRating={3} />
        </Table.Cell>
        <Table.Cell textAlign='right'>
          80% <br />
          <a href='#'>18 studies</a>
        </Table.Cell>
        <Table.Cell>
          Creatine supplementation is the reference compound for increasing
          muscular creatine levels; there is variability in this increase,
          however, with some nonresponders.
        </Table.Cell>
      </Table.Row>
      <Table.Row>
        <Table.Cell>
          <Header as='h2' textAlign='center'>
            A
          </Header>
        </Table.Cell>
        <Table.Cell singleLine>Weight</Table.Cell>
        <Table.Cell>
          <Rating icon='star' defaultRating={3} maxRating={3} />
        </Table.Cell>
        <Table.Cell textAlign='right'>
          100% <br />
          <a href='#'>65 studies</a>
        </Table.Cell>
        <Table.Cell>
          Creatine is the reference compound for power improvement, with numbers
          from one meta-analysis to assess potency
        </Table.Cell>
      </Table.Row>
    </Table.Body>
  </Table>
  );
}
 
export default CrTable;