import { Flex, Heading, IconButton, Spacer, useColorMode } from '@chakra-ui/react'
import React from 'react'
import { FaGithub, FaInstagram, FaLinkedin, FaMoon, FaSun } from 'react-icons/fa'

export default function Nav(props) {
  const {isDark} = props;
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <Flex w="100%">
        <Heading ml="8" size="md" fontWeight="semibold" color="cyan.400">
          BeLovely
        </Heading>
        <Spacer></Spacer>
        <IconButton
          icon={<FaLinkedin />}
          isRound="true"
          onClick={toggleColorMode}></IconButton>
        <IconButton
          ml={8}
          icon={<FaInstagram />}
          isRound="true"
          onClick={toggleColorMode}></IconButton>
        <IconButton
          ml={8}
          icon={<FaGithub />}
          isRound="true"
          onClick={toggleColorMode}></IconButton>
        <IconButton
          ml={8}
          icon={isDark ? <FaSun /> : <FaMoon />}
          isRound="true"
          onClick={toggleColorMode}></IconButton>
      </Flex>
  )
}
