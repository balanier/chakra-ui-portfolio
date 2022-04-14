import {
  Box,
  Flex,
  Text,
  Heading,
  useMediaQuery,
  Icon,
} from "@chakra-ui/react";
import React from "react";
import { DiCodeigniter, DiAndroid, DiWebplatform } from "react-icons/di";
import { FiFigma, FiFramer } from "react-icons/fi";
import { AiOutlineSketch } from "react-icons/ai";
import ExperienceCard from "./ExperienceCard";

export default function Profile() {
  const [isNotSmallerScreen] = useMediaQuery("(min-width:600px)");
  return (
    <Flex
      direction={isNotSmallerScreen ? "row" : "column"}
      maxWidth={{ base: "100vh", md: "130vh", lg: "130vh", xl: "130vh" }}>
      <Box alignSelf="center" px="32" py="16">
        <Heading fontWeight="extrabold" color="cyan.500" size="4xl">
          7+
        </Heading>
        <Text fontSize="2xl" color="gray.400">
          Years of Experience
        </Text>
      </Box>
      <Box alignSelf="center" px="32" py="16" >
        <Text fontWeight="bold" fontSize="2xl">
          Product Designer and Developer, specialised in healthcare and health
          and wellness applications.
        </Text>
        <Flex direction={isNotSmallerScreen ? "row" : "column"} mt={8} >
         
          <ExperienceCard header="Figma Apps" icon={FiFigma}/>
          <ExperienceCard header="Sketch Apps" icon={AiOutlineSketch}/>
          <ExperienceCard header="Framer Apps" icon={FiFramer}/>
          
        </Flex>
      </Box>
    </Flex>
  );
}
