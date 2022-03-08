import React from "react";
import { chakra, Box, Icon, Flex, useColorModeValue } from "@chakra-ui/react";

import { BsLightningFill } from "react-icons/bs";

export default function Ma(props) {
  console.log(props.errMessage)
  return (
    <Flex
      w="full"
      bg="rgba(52, 52, 52, 0)"
      p={5}
      alignItems="center"
      justifyContent="center"
    >
      <Flex
        maxW="lg"
        w="full"
        mx="auto"
        bg={useColorModeValue("white", "gray.800")}
        shadow="md"
        rounded="lg"
        overflow="hidden"
      >
        <Flex justifyContent="center" alignItems="center" w={12} bg="red.500">
          <Icon as={BsLightningFill} color="white" boxSize={6} />
        </Flex>

        <Box mx={-3} py={2} px={4}>
          <Box mx={3}>
            <chakra.span
              color={useColorModeValue("red.500", "red.400")}
              fontWeight="bold"
            >
              Error
            </chakra.span>
            <chakra.p
              color={useColorModeValue("gray.600", "gray.200")}
              fontSize="sm"
            >
              <>{JSON.stringify(props.errMessage)}</>
            </chakra.p>
          </Box>
        </Box>
      </Flex>
    </Flex>
  );
};
