import { Card, CardHeader, CardBody, CardFooter, Heading, Text, Button, Flex, Box } from '@chakra-ui/react'
import styled from '@emotion/styled';

function Checkout() {

    return (
        <Card m="20px" w={500} p="10px" borderRadius="5px" h={'fit-content'} boxShadow="rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px" >
            <CardHeader paddingBottom={"5px"}>
                <Heading size='md'>CheckOut</Heading>
            </CardHeader>
            <Flex direction='column' align='center'>
                <Box my={4}>
                    {/* <Text>View a summary of all your customers over the last month.</Text> */}
                </Box>
                <Box my={4} display='flex' justifyContent='space-between' w='100%'>
                    <Text>Booking Fees</Text>
                    <Text>₹ 2565.00 </Text>
                </Box>
                <Box my={4} display='flex' justifyContent='space-between' w='100%'>
                    <Text>CGST (14%) </Text>
                    <Text>₹	359.10</Text>
                </Box>
                <Box my={4} display='flex' justifyContent='space-between' w='100%'>
                    <Text>SGST  (14%) </Text>
                    <Text>₹	359.10</Text>
                </Box>
                <Box my={4} display='flex' justifyContent='space-between' w='100%'>
                    <Text>Refundable Deposit  </Text>
                    <Text>0</Text>
                </Box>
                <Box my={4} display='flex' justifyContent='space-between' w='100%'>
                    <Text>Total Payable Amount   </Text>
                    <Text>₹ 3283.20</Text>
                </Box>
            </Flex>
            <CardFooter>
                <Button colorScheme='orange' w={400} m="auto" color={'black'}> Make Payment</Button>
                {/* <Button1>Make Payment</Button1> */}
            </CardFooter>
        </Card>
    );
}

// const Button1 = styled.button`
//   background-color: "black";
//   border-radius: 3px;
//   border: 2px solid palevioletred;
//   color: palevioletred;
//   margin: 0 1em;
//   padding: 0.25em 1em;
// `

export default Checkout;

// #fed250
// Eye Dropper