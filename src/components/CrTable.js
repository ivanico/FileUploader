import React from "react";
import { Header, Rating, Table } from "semantic-ui-react";

const CrTable = ({ tableData, startDate, korisnik }) => {
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
                {new Date(startDate).toISOString().substring(0, 7)}
                </Table.Cell>
              <Table.Cell>
                {tr.file.name}
              </Table.Cell>
              <Table.Cell>
                {tr.file.name}
              </Table.Cell>
              <Table.Cell>
                {tr.vcitan?"da":'ne'}
              </Table.Cell>
              <Table.Cell>
                {tr.obraboteni}
              </Table.Cell>
              <Table.Cell>
                {tr.predupreduvanja}
              </Table.Cell>
              <Table.Cell>
                {korisnik}
              </Table.Cell>
            </Table.Row>
          );
        })}
      </Table.Body>
    </Table>
  );
};

export default CrTable;
