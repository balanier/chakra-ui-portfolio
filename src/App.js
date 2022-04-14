import logo from "./logo.svg";
import "./App.css";
import {
  Flex,
  Heading,
  IconButton,
  Spacer,
  useColorMode,
  VStack,
} from "@chakra-ui/react";
import {
  FaSun,
  FaMoon,
  FaInstagram,
  FaGithub,
  FaLinkedin,
} from "react-icons/fa";
import Nav from "./components/Nav";
import Social from './components/Social';
import Profile from './components/Profile';
import Hero from "./components/Hero";

function App() {
  const { colorMode, toggleColorMode } = useColorMode();
  const isDark = colorMode === "dark";
  return (
    <VStack p={5}>
      <Nav isDark={isDark}/>
      <Hero/>
      <Social/>
      <Profile/>
    </VStack>
  );
}

export default App;
