import {
  Circle,
  Flex,
  Stack,
  Box,
  Text,
  Button,
  Image,
  useColorMode,
  useMediaQuery,
} from "@chakra-ui/react";
import React from "react";

export default function Hero() {
  const { colorMode } = useColorMode();
  const isDark = colorMode === "dark";

  const [isNotSmallerScreen] = useMediaQuery("(min-width:600px)");
  return (
    <Stack>
      <Circle
        position="absolute"
        bg="blue.100"
        opacity="0.1"
        w="300px"
        h="300px"
        alignSelf={"flex-end"}
      />
      <Flex
        direction={isNotSmallerScreen ? "row" : "column"}
        spacing="200px"
        p={isNotSmallerScreen ? "32" : "0"}
        alignSelf="flex-start">
        <Box mt={isNotSmallerScreen ? "0" : 16} align="flex-start">
          <Text fontSize="5xl" fontWeight="semibold">
            Hi, I am
          </Text>
          <Text
            fontSize="7xl"
            fontWeight="bold"
            bgGradient="linear(to-r, cyan.400, blue.500, purple.600)"
            bgClip="text">
            BeLovely
          </Text>
          <Text colr={isDark ? "gray.200" : "gray.500:"}>
            UX/UI, Design System, Product Design
          </Text>
        <Button
          mt={8}
          colorScheme="blue"
          onClick={() => window.open("https://www.linkedin.com/in/balanier/")}>
          Hire Me
        </Button>
        </Box>
        <Image alignSelf="center" mt={isNotSmallerScreen ? "0" : "12"}
        mb={isNotSmallerScreen ? "0" : "12" } borderRadius="full"
        backgroundColor="transparent" boxShadow="lg"
        boxSize="300px" src='https://i.ibb.co/mD1WWcQ/Brian-Lanier-profile-Avatar.jpg'/>
      </Flex>
    </Stack>
  );
}
