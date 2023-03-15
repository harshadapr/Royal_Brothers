import { Box, Card, CardBody, Checkbox, CheckboxGroup, HStack, Input, Stack, Tag, TagCloseButton, TagLabel, Text } from '@chakra-ui/react';
import React, { useState } from 'react';

function MyRideFilter({data}) {
    const [filData,setFildata]=useState([])

    const handlecheck=((val)=>{
        setFildata(...setFildata,val);
    })
    return (
       <Box>
         <Card>
                            <CardBody>
                               <Box>
                               <Stack>
                                    <Text fontWeight={500}
                                    fontSize='sm'
                                    >Search by bike model</Text>
                                    <Input placeholder='Search Bike Model'>
                                    </Input>
                                </Stack>
                                <HStack mt={5}>
                                    <Tag
                                    size={'lg'}
                                    borderRadius='full'
                                    variant={'solid'}
                                    colorScheme='blackAlpha'
                                    >
                                        <TagLabel>
                                            C1
                                        </TagLabel>
                                        <TagCloseButton/>
                                    </Tag>
                                </HStack>
                                <Stack height={250}overflowY={'scroll'}  mt={5}>
                                    <CheckboxGroup
                                    
                                    colorScheme={'yellow'}>
                                    <Stack
                              
                                spacing={[1, 5]} direction={['column']}>
                                    {
                                        data.map((el)=>{
                                            return <Checkbox> {el.vehicle}</Checkbox>
                                        })
                                    }
                                    
                                </Stack>
                                    </CheckboxGroup>
                                </Stack>
                               </Box>

                            </CardBody>
                        </Card>
       </Box>
    );
}

export default MyRideFilter;