import React from "react";
import { Header, Rating, Table } from "semantic-ui-react";

const CrTable = ({ tableData }) => {
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
        {tableData.map((tr,ind) => {
          return (
            <Table.Row key={ind} >
              <Table.Cell>
                {new Date(tr.lastModified).toISOString().substring(0, 10)}
              </Table.Cell>
              <Table.Cell singleLine>
                {tr.name}
              </Table.Cell>
              <Table.Cell>
                {tr.name}
              </Table.Cell>
              <Table.Cell>
              </Table.Cell>
              <Table.Cell>
              </Table.Cell>
              <Table.Cell>
              </Table.Cell>
              <Table.Cell>
              </Table.Cell>
            </Table.Row>
          );
        })}
      </Table.Body>
    </Table>
  );
};

export default CrTable;
