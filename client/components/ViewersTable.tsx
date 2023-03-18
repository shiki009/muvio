import React from "react";
import {
    chakra,
    Image,
    HStack,
    Box,
    Flex,
    useColorModeValue,
    Text,
    Stack,
    SimpleGrid,
    Icon, Button,
} from "@chakra-ui/react";
import {FaEnvelope, FaMapPin, FaSuitcase} from "react-icons/fa";

export default function ViewersTable({data}) {
    const topBg = useColorModeValue("gray.100", "gray.700");
    const bottomBg = useColorModeValue("white", "gray.800");

    return (
        <>
            <Box
                mx="auto"
                textAlign={{base: "left", md: "center"}}
                rounded="md"
                shadow="base"
                w="full"
                bg={bottomBg}
            >
                <Box pt={20} rounded="md" bg={topBg}>
                    <Box w="full" px={[10, , 4]} mx="auto">
                        <Text
                            mb={2}
                            fontSize="5xl"
                            fontWeight="bold"
                            lineHeight="tight"
                            bgGradient="linear(to-r, brand.300, brand.600)"
                            bgClip="text"
                        >
                            Viewers overview
                        </Text>
                        <chakra.p
                            mb={6}
                            fontSize={["lg", , "xl"]}
                            color="gray.600"
                            _dark={{color: "gray.400"}}
                        >
                            xxx
                        </chakra.p>
                    </Box>
                    <Box bgGradient={`linear(to-b, ${topBg} 50%, ${bottomBg} 50%)`}>
                        <Flex
                            rounded="md"
                            mx={10}
                            bg={bottomBg}
                            shadow="xl"
                            mb="100px"
                            textAlign="left"
                            direction={{base: "column", lg: "row"}}
                        >
                            <Stack spacing={8} p="45px" flex="0.7">
                                <Text fontSize="3xl" fontWeight="bold" lineHeight="tight">
                                    Viewers overview
                                </Text>
                                <chakra.p
                                    fontSize={["sm", , "md"]}
                                    color="gray.600"
                                    _dark={{color: "gray.400"}}
                                >
                                    Get a clear understanding of your spending habits by analyzing your monthly expenses on TV subscriptions, including streaming services and cable TV packages.
                                </chakra.p>
                                <Flex align="center">
                                    <Text
                                        fontFamily="body"
                                        whiteSpace="nowrap"
                                        fontWeight="semibold"
                                        textTransform="uppercase"
                                        color="brand.400"
                                    >
                                        Active viewers
                                    </Text>
                                    <Flex
                                        ml="15px"
                                        w="full"
                                        borderTopWidth="1px"
                                        h="3px"
                                        borderTopColor={topBg}
                                    />
                                </Flex>

                            </Stack>
                            <Stack
                                p="45px"
                                flex="0.3"
                                justify="center"
                                align="center"
                                bg="#F9FAFB"
                                _dark={{bg: "gray.900"}}
                                borderRightRadius="md"
                            >
                                <Text fontSize="xl" fontWeight="semibold">
                                    Number of viewers
                                </Text>
                                <Flex
                                    align="center"
                                    fontSize="5xl"
                                    fontWeight={["bold", , "extrabold"]}
                                    lineHeight="tight"
                                >
                                    2
                                </Flex>
                                <Stack spacing={6}>
                                    <Text
                                        textDecor="underline"
                                        color="gray.600"
                                        _dark={{color: "gray.400"}}
                                    >
                                        Learn more about viewers
                                    </Text>
                                    <Button w="300px" colorScheme="brand" py={6}>
                                        Go to Active Viewers
                                    </Button>
                                </Stack>
                            </Stack>
                        </Flex>
                    </Box>
                </Box>
            </Box>

            {
                data.map((token, tid) => {
                        return (
                            <>
                                <Box
                                    bg="#edf3f8"
                                    _dark={{bg: "#3e3e3e"}}
                                    style={{
                                        backgroundImage:
                                            "url(https://images.unsplash.com/photo-1666795599746-0f62dfa29a07?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80)",
                                        backgroundSize: "cover",
                                        backgroundPosition: "center",
                                        backgroundRepeat: "no-repeat",
                                    }}
                                    height="100%"
                                    width="100%"
                                    borderRadius="lg"
                                    p={8}
                                    display="flex"
                                    alignItems="left"
                                >
                                    <Image
                                        src="https://media.licdn.com/dms/image/C5603AQEx8My086HGKA/profile-displayphoto-shrink_200_200/0/1533642560509?e=1681948800&v=beta&t=9eK1TPJJX5vZIUbzXncZd8bFMXfbEoyDKBOzwwhcNyc"
                                        alt="Profile Picture"
                                        borderRadius="full"
                                        boxSize="150px"
                                        shadow="lg"
                                        border="5px solid"
                                        mb={-20}
                                        borderColor="gray.800"
                                        _dark={{borderColor: "gray.200"}}
                                    />
                                </Box>
                                <Box
                                    gridColumn="span 8"
                                    p={8}
                                    width="full"
                                    height="full"
                                    borderRadius="lg"
                                    textAlign="left"
                                    mt={10}
                                >
                                    <Text
                                        fontSize="4xl"
                                        fontWeight="bold"
                                        color="gray.800"
                                        _dark={{color: "white"}}
                                    >
                                        {token['first_name']} {token['last_name']}
                                    </Text>
                                    <HStack spacing={3} color="gray.800" _dark={{color: "gray.200"}}>
                                        <FaSuitcase size={24}/>
                                        <Text
                                            fontSize="2xl"
                                            fontWeight="bold"
                                            color="gray.800"
                                            _dark={{color: "gray.200"}}
                                        >
                                            {token['profession']}
                                        </Text>
                                    </HStack>
                                    <HStack spacing={3} color="gray.700" _dark={{color: "gray.200"}}>
                                        <FaMapPin size={20}/>
                                        <Text fontSize="lg">Estonia</Text>
                                    </HStack>
                                    <HStack spacing={3} color="gray.700" _dark={{color: "gray.200"}}>
                                        <FaEnvelope size={20}/>
                                        <Text fontSize="lg">{token['email']}</Text>
                                    </HStack>
                                </Box>
                            </>
                        );
                    }
                )
            }

        </>
    );
};


