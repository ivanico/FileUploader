import React, { useState } from "react";
import { Header, Icon, Rating, Table, Checkbox, Button } from "semantic-ui-react";

const CrTable = ({ tableData }) => {

  const [select, setSelect] = useState(false)
  const [selectAll, setSelectAll] = useState(false)


  const handleSelectAll = e => setSelectAll(!selectAll)

  return (
    <Table celled padded>
      <Table.Header>
        <Table.Row>
          <Table.HeaderCell textAlign='center'>
            <Button /*style={{backgroundColor:"rgb(249 250 251)"}}*/ onClick={handleSelectAll}>Изберете ги сите</Button>
          </Table.HeaderCell>
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
              <Table.Cell  textAlign='center'>
                <Checkbox
                // checked={selectAll}
                />
              </Table.Cell>
              <Table.Cell>
                {tr.date}
                {/* {new Date(startDate).toISOString().substring(0, 7)} */}
                </Table.Cell>
              <Table.Cell>
                {tr.prvFajl}
              </Table.Cell>
              <Table.Cell>
                {tr.posledenFajl}
              </Table.Cell>
              <Table.Cell style={{textAlign: 'center'}}>
                {tr.vcitan? <Icon name="check" color="green" />: <Icon name="close" color="red" />}
              </Table.Cell>
              <Table.Cell style={{textAlign: 'center'}}>
                {tr.obraboteni + "/" +  tr.files.length}
              </Table.Cell>
              <Table.Cell style={{textAlign: 'center'}}>
                {tr.predupreduvanja}
              </Table.Cell>
              <Table.Cell>
                {tr.korisnik}
              </Table.Cell>
            </Table.Row>
          );
        })}
      </Table.Body>
    </Table>
  );
};

export default CrTable;
