import { Flex, Icon, Text } from "@chakra-ui/react";
import React from "react";
import {useState} from 'react';

export default function ExperienceCard(props) {
    const [isHover, setIsHover] = useState(false);
  const { icon, header } = props;
  
  return (
    <Flex
    id="card-flex"
      rounded="xl"
      direction="column"
      mt={4}
      ml={4}
      bg="gray.100"
      color="gray.600"
      _hover={{ bg: "teal.400", color:"white" }}
    //   onHover={setIsHover(!isHover)}
      h="30vh"
      w="30vh"
      justify="flex-end">
      <Icon   p="4" as={icon} w="24" h="24" />
      <Text   p="4" fontSize="xl" fontWeight="semibold">
        {header}
      </Text>
    </Flex>
  );
}
