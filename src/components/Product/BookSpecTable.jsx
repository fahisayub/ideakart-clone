import React from 'react';
import{ Table,
    TableContainer,
    Tr,
    Th,
    Tbody,Container,
    Td,} from '@chakra-ui/react';
    import { useSelector } from "react-redux";
const BookSpecTable = () => {

    const {data,}=useSelector(state=>{return state.product});
    if(Object.keys(data).length===0)return <Container>Loading....</Container>

    return (
        <>
            <TableContainer>
            <Table variant="simple">
              <Tbody>
                <Tr>
                  <Th>Binding</Th>
                  <Td>{`${data.BookSpecification.Binding}`}</Td>
                </Tr>
                <Tr>
                  <Th>Auhor</Th>
                  <Td>{`${data.BookSpecification.Author}`}</Td>
                </Tr>
                <Tr>
                  <Th>Language</Th>
                  <Td>{`${data.BookSpecification.Language}`}</Td>
                </Tr>
                <Tr>
                  <Th>No of Pages</Th>
                  <Td>{`${data.BookSpecification.No_of_pages}`}</Td>
                </Tr>
                <Tr>
                  <Th>Isbn-10</Th>
                  <Td>{`${data.BookSpecification.Isbn_10}`}</Td>
                </Tr>
                <Tr>
                  <Th>Isbn-13</Th>
                  <Td>{`${data.BookSpecification.Isbn_13}`}</Td>
                </Tr>
                <Tr>
                  <Th>Dimension</Th>
                  <Td>{`${data.BookSpecification.Dimension}`}</Td>
                </Tr>
                <Tr>
                  <Th>Publisher</Th>
                  <Td>{`${data.BookSpecification.Publisher}`}</Td>
                </Tr>
              </Tbody>
            </Table>
          </TableContainer>
        </>
    );
};

export default BookSpecTable;