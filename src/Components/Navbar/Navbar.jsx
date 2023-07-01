import {
  Box,
  HStack,
  Icon,
  Input,
  InputGroup,
  InputLeftElement,
  Text,
} from "@chakra-ui/react";
import Logo from "../Logo/Logo";
import { BiSearch } from "react-icons/bi";
import { AiFillPlusCircle } from "react-icons/ai";
import { useState } from "react";

const Navbar = () => {
  const [userLoggin, setUserLoggin] = useState(true);
  return (
    <HStack
      pl="2%"
      pr="2%"
      w="100%"
      display="flex"
      justifyContent={"space-between"}
      bg="#fafafa"
    >
      <Box>
        <Logo />
      </Box>

      {userLoggin ? (
        <HStack>
          <InputGroup>
            <InputLeftElement pointerEvents="none">
              <Icon as={BiSearch} boxSize={6} mb="8px" color="#0360eab3" />
            </InputLeftElement>
            <Input
              borderRadius={20}
              bg="#F5F5F5"
              type="text"
              placeholder="Search"
              h="30px"
              border="none"
            />
          </InputGroup>
          <Icon as={AiFillPlusCircle} boxSize={7} color="#0360eab3" />
        </HStack>
      ) : (
        <Text fontSize="xl"> Login</Text>
      )}
    </HStack>
  );
};
export default Navbar;
