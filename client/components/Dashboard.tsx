import React from "react";
import {
    chakra,
    Badge,
    Link,
    Box,
    Flex,
    useColorModeValue,
    Text,
    Stack,
    SimpleGrid,
    Icon, Button,
} from "@chakra-ui/react";

export default function Dashboard({data}) {
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
                            Analytics overview
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
                                    Analytics overview
                                </Text>
                                <chakra.p
                                    fontSize={["sm", , "md"]}
                                    color="gray.600"
                                    _dark={{color: "gray.400"}}
                                >
                                    Get a clear understanding of your spending habits by analyzing your monthly expenses
                                    on TV subscriptions, including streaming services and cable TV packages.
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

            <Box
                mx="auto"
                textAlign={{base: "left", md: "center"}}
                rounded="md"
                shadow="base"
                w="full"
                bg={bottomBg}
            >


            </Box>
            {/*<Box*/}
            {/*    mx="auto"*/}
            {/*    textAlign={{base: "left", md: "center"}}*/}
            {/*    rounded="md"*/}
            {/*    shadow="base"*/}
            {/*    w="full"*/}
            {/*    bg={bottomBg}*/}
            {/*>*/}
            {/*    <SimpleGrid*/}
            {/*        columns={[1, , , 2]}*/}
            {/*        gap="24px"*/}
            {/*        rounded="md"*/}
            {/*        mx={[10, , 24]}*/}
            {/*        textAlign="left"*/}
            {/*    >*/}
            {/*        <Box*/}
            {/*            bg="white"*/}
            {/*            _dark={{bg: "gray.800"}}*/}
            {/*            pt={10}*/}
            {/*            shadow="lg"*/}
            {/*            rounded="md"*/}
            {/*        >*/}
            {/*            <Flex direction="column">*/}
            {/*                <Box px={10} pb={5}>*/}
            {/*                    <Badge*/}
            {/*                        mb={1}*/}
            {/*                        fontSize="xs"*/}
            {/*                        letterSpacing="wide"*/}
            {/*                        colorScheme="brand"*/}
            {/*                        fontWeight="medium"*/}
            {/*                        rounded="full"*/}
            {/*                        px={4}*/}
            {/*                        py={1}*/}
            {/*                    >*/}
            {/*                        Standard*/}
            {/*                    </Badge>*/}
            {/*                    <Text*/}
            {/*                        mb={2}*/}
            {/*                        fontSize="5xl"*/}
            {/*                        fontWeight={["bold", "extrabold"]}*/}
            {/*                        color="gray.900"*/}
            {/*                        _dark={{color: "gray.50"}}*/}
            {/*                        lineHeight="tight"*/}
            {/*                    >*/}
            {/*                        $52*/}
            {/*                        <chakra.span*/}
            {/*                            fontSize="2xl"*/}
            {/*                            fontWeight="medium"*/}
            {/*                            color="gray.600"*/}
            {/*                            _dark={{color: "gray.400"}}*/}
            {/*                        >*/}
            {/*                            {" "}*/}
            {/*                            /mo{" "}*/}
            {/*                        </chakra.span>*/}
            {/*                    </Text>*/}
            {/*                    <chakra.p*/}
            {/*                        mb={6}*/}
            {/*                        fontSize="md"*/}
            {/*                        color="gray.500"*/}
            {/*                        _dark={{color: "gray.500"}}*/}
            {/*                    >*/}
            {/*                        One plan for any organization—from startups to Fortune*/}
            {/*                        500s. We offer 50% off of for all students and*/}
            {/*                        universities. Please get in touch with us and provide*/}
            {/*                        proof of your status.*/}
            {/*                    </chakra.p>*/}
            {/*                </Box>*/}
            {/*                <Flex*/}
            {/*                    px={10}*/}
            {/*                    pt={5}*/}
            {/*                    pb={10}*/}
            {/*                    direction="column"*/}
            {/*                    bg="gray.50"*/}
            {/*                    _dark={{bg: "gray.900"}}*/}
            {/*                    roundedBottom="md"*/}
            {/*                >*/}
            {/*                    <Stack mb={5} spacing={4}>*/}
            {/*                        <Feature>Granular access controls</Feature>*/}
            {/*                        <Feature>Custom components</Feature>*/}
            {/*                        <Feature>Deploy on-premises</Feature>*/}
            {/*                        <Feature>Identity management</Feature>*/}
            {/*                    </Stack>*/}
            {/*                    <Link*/}
            {/*                        w="full"*/}
            {/*                        display="inline-flex"*/}
            {/*                        alignItems="center"*/}
            {/*                        justifyContent="center"*/}
            {/*                        px={5}*/}
            {/*                        py={3}*/}
            {/*                        border="solid transparent"*/}
            {/*                        fontWeight="semibold"*/}
            {/*                        rounded="md"*/}
            {/*                        shadow="md"*/}
            {/*                        _light={{color: "white"}}*/}
            {/*                        bg="gray.800"*/}
            {/*                        _dark={{bg: "brand.500"}}*/}
            {/*                        _hover={{*/}
            {/*                            bg: "gray.700",*/}
            {/*                            _dark: {bg: "brand.600"},*/}
            {/*                        }}*/}
            {/*                    >*/}
            {/*                        Get started*/}
            {/*                    </Link>*/}
            {/*                </Flex>*/}
            {/*            </Flex>*/}
            {/*        </Box>*/}
            {/*        <Box*/}
            {/*            bg="white"*/}
            {/*            _dark={{bg: "gray.800"}}*/}
            {/*            pt={10}*/}
            {/*            shadow="lg"*/}
            {/*            rounded="md"*/}
            {/*        >*/}
            {/*            <Flex direction="column">*/}
            {/*                <Box px={10} pb={5}>*/}
            {/*                    <Badge*/}
            {/*                        mb={1}*/}
            {/*                        fontSize="xs"*/}
            {/*                        letterSpacing="wide"*/}
            {/*                        colorScheme="brand"*/}
            {/*                        fontWeight="medium"*/}
            {/*                        rounded="full"*/}
            {/*                        px={4}*/}
            {/*                        py={1}*/}
            {/*                    >*/}
            {/*                        Enterprise*/}
            {/*                    </Badge>*/}
            {/*                    <Text*/}
            {/*                        mb={2}*/}
            {/*                        fontSize="5xl"*/}
            {/*                        fontWeight={["bold", "extrabold"]}*/}
            {/*                        color="gray.900"*/}
            {/*                        _dark={{color: "gray.50"}}*/}
            {/*                        lineHeight="tight"*/}
            {/*                    >*/}
            {/*                        $82*/}
            {/*                        <chakra.span*/}
            {/*                            fontSize="2xl"*/}
            {/*                            fontWeight="medium"*/}
            {/*                            color="gray.600"*/}
            {/*                            _dark={{color: "gray.400"}}*/}
            {/*                        >*/}
            {/*                            {" "}*/}
            {/*                            /mo{" "}*/}
            {/*                        </chakra.span>*/}
            {/*                    </Text>*/}
            {/*                    <chakra.p*/}
            {/*                        mb={6}*/}
            {/*                        fontSize="md"*/}
            {/*                        color="gray.500"*/}
            {/*                        _dark={{color: "gray.500"}}*/}
            {/*                    >*/}
            {/*                        One plan for any organization—from startups to Fortune*/}
            {/*                        500s. We offer 50% off of for all students and*/}
            {/*                        universities. Please get in touch with us and provide*/}
            {/*                        proof of your status.*/}
            {/*                    </chakra.p>*/}
            {/*                </Box>*/}
            {/*                <Flex*/}
            {/*                    px={10}*/}
            {/*                    pt={5}*/}
            {/*                    pb={10}*/}
            {/*                    direction="column"*/}
            {/*                    bg="gray.50"*/}
            {/*                    _dark={{bg: "gray.900"}}*/}
            {/*                    roundedBottom="md"*/}
            {/*                >*/}
            {/*                    <Stack mb={5} spacing={4}>*/}
            {/*                        <Feature>Granular access controls</Feature>*/}
            {/*                        <Feature>Custom components</Feature>*/}
            {/*                        <Feature>Deploy on-premises</Feature>*/}
            {/*                        <Feature>Identity management</Feature>*/}
            {/*                    </Stack>*/}
            {/*                    <Link*/}
            {/*                        w="full"*/}
            {/*                        display="inline-flex"*/}
            {/*                        alignItems="center"*/}
            {/*                        justifyContent="center"*/}
            {/*                        px={5}*/}
            {/*                        py={3}*/}
            {/*                        border="solid transparent"*/}
            {/*                        fontWeight="semibold"*/}
            {/*                        rounded="md"*/}
            {/*                        shadow="md"*/}
            {/*                        _light={{color: "white"}}*/}
            {/*                        bg="gray.800"*/}
            {/*                        _dark={{bg: "brand.500"}}*/}
            {/*                        _hover={{*/}
            {/*                            bg: "gray.700",*/}
            {/*                            _dark: {bg: "brand.600"},*/}
            {/*                        }}*/}
            {/*                    >*/}
            {/*                        Get started*/}
            {/*                    </Link>*/}
            {/*                </Flex>*/}
            {/*            </Flex>*/}
            {/*        </Box>*/}
            {/*    </SimpleGrid>*/}
            {/*</Box>*/}
        </>
    )
};

