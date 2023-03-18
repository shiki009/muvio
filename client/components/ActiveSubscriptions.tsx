import React from "react";
import {Box, Link, chakra, Text, Flex, Stack, SimpleGrid, Button, useColorModeValue, Icon} from "@chakra-ui/react";


export default function ActiveSubscriptionsList({data}) {
    const topBg = useColorModeValue("gray.100", "gray.700");
    const bottomBg = useColorModeValue("white", "gray.800");

    const Feature = (props) => {
        return (
            <Flex align="center">
                <Flex shrink={0}>
                    <Icon
                        boxSize={5}
                        mt={1}
                        mr={2}
                        color="brand.500"
                        _dark={{color: "brand.300"}}
                        viewBox="0 0 20 20"
                        fill="currentColor"
                    >
                        <path
                            fillRule="evenodd"
                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                            clipRule="evenodd"
                        ></path>
                    </Icon>
                </Flex>
                <Box ml={4}>
                    <chakra.span mt={2} color="gray.500" _dark={{color: "gray.400"}}>
                        {props.children}
                    </chakra.span>
                </Box>
            </Flex>
        );
    };

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
                            Active Subscriptions
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
                                    Spending overview
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
                                        Active subscriptions
                                    </Text>
                                    <Flex
                                        ml="15px"
                                        w="full"
                                        borderTopWidth="1px"
                                        h="3px"
                                        borderTopColor={topBg}
                                    />
                                </Flex>
                                <SimpleGrid columns={[1, , 2, 1, 2]} spacingY={4}>
                                    <Feature>Netflix</Feature>
                                    <Feature>Amazon Prime Video </Feature>
                                    <Feature>Viaplay</Feature>
                                    <Feature>Telia</Feature>
                                </SimpleGrid>
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
                                    Total monthly payment
                                </Text>
                                <Flex
                                    align="center"
                                    fontSize="5xl"
                                    fontWeight={["bold", , "extrabold"]}
                                    lineHeight="tight"
                                >
                                    42.97
                                    <chakra.span
                                        ml={2}
                                        fontSize="2xl"
                                        fontWeight="medium"
                                        color="gray.500"
                                        _dark={{color: "gray.400"}}
                                    >
                                        {" "}
                                        EUR
                                    </chakra.span>
                                </Flex>
                                <Stack spacing={6}>
                                    <Text
                                        textDecor="underline"
                                        color="gray.600"
                                        _dark={{color: "gray.400"}}
                                    >
                                        Learn more about subscriptions
                                    </Text>
                                    <Button w="300px" colorScheme="brand" py={6}>
                                        Go to Active Subscriptions
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
                            <Box
                                bg="white"
                                _dark={{bg: "gray.800"}}
                                mx={{lg: 8}}
                                display={{lg: "flex"}}
                                maxW={{lg: "5xl"}}
                                shadow={{lg: "lg"}}
                                rounded={{lg: "lg"}}
                                key={tid}
                            >
                                <Box w={{lg: "50%"}}>
                                    <Box
                                        h={{base: 64, lg: "full"}}
                                        rounded={{lg: "lg"}}
                                        bgSize="cover"
                                        style={{
                                            backgroundImage:
                                                "url('https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png')",
                                        }}
                                    ></Box>
                                </Box>

                                <Box py={12} px={6} maxW={{base: "xl", lg: "5xl"}} w={{lg: "50%"}}>
                                    <chakra.h2
                                        fontSize={{base: "2xl", md: "3xl"}}
                                        color="gray.800"
                                        _dark={{color: "white"}}
                                        fontWeight="bold"
                                    >
                                        {token['subscription_name']}{" "}
                                        <chakra.span color="brand.600" _dark={{color: "brand.400"}}>
                                            EUR{token['subscription_price']}/month
                                        </chakra.span>
                                    </chakra.h2>
                                    <chakra.p mt={4} color="gray.600" _dark={{color: "gray.400"}}>
                                        {token['subscription_description']}
                                    </chakra.p>

                                    <Box mt={8}>
                                        <Link
                                            bg="gray.900"
                                            color="gray.100"
                                            px={5}
                                            py={3}
                                            fontWeight="semibold"
                                            rounded="lg"
                                            _hover={{bg: "gray.800"}}
                                        >
                                            Active
                                        </Link>
                                    </Box>
                                </Box>
                            </Box>
                        );
                    }
                )
            }
        </>
    )
}