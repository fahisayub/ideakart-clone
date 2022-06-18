import React from 'react';
import{ Table,
    TableContainer,
    Tr,
    Tbody,Container,
    Td,} from '@chakra-ui/react';
    import { useSelector } from "react-redux";
const BookSpecTable = () => {

    const {data,}=useSelector(state=>{return state.product});
    if(Object.keys(data).length===0)return <Container>Loading....</Container>

    return (
        <>
            <TableContainer>
            <Table variant="striped" colorScheme='gray'>
              <Tbody>
                <Tr>
                  <Td fontWeight='semibold'>Binding</Td>
                  <Td>{`${data.BookSpecification.Binding}`}</Td>
                </Tr>
                <Tr>
                  <Td fontWeight='semibold'>Author</Td>
                  <Td>{`${data.BookSpecification.Author}`}</Td>
                </Tr>
                <Tr>
                  <Td fontWeight='semibold'>Language</Td>
                  <Td>{`${data.BookSpecification.Language}`}</Td>
                </Tr>
                <Tr>
                  <Td fontWeight='semibold'>No of Pages</Td>
                  <Td>{`${data.BookSpecification.No_of_pages}`}</Td>
                </Tr>
                <Tr>
                  <Td fontWeight='semibold'>Isbn-10</Td>
                  <Td>{`${data.BookSpecification.Isbn_10}`}</Td>
                </Tr>
                <Tr>
                  <Td fontWeight='semibold'>Isbn-13</Td>
                  <Td>{`${data.BookSpecification.Isbn_13}`}</Td>
                </Tr>
                <Tr>
                  <Td fontWeight='semibold'>Dimension</Td>
                  <Td>{`${data.BookSpecification.Dimension}`}</Td>
                </Tr>
                <Tr>
                  <Td fontWeight='semibold'>Publisher</Td>
                  <Td>{`${data.BookSpecification.Publisher}`}</Td>
                </Tr>
              </Tbody>
            </Table>
          </TableContainer>
        </>
    );
};

export default BookSpecTable;