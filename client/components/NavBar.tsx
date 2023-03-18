import React from "react";
import {
    Box,
    Button,
    CloseButton,
    Flex,
    HStack,
    Icon,
    IconButton,
    Popover,
    PopoverTrigger,
    PopoverContent,
    Link,
    VStack,
    SimpleGrid,
    Stack,
    chakra,
    useColorMode,
    useColorModeValue,
    useDisclosure,
} from "@chakra-ui/react";
import {useViewportScroll} from "framer-motion";
import {FaHeart, FaMoon, FaSun} from "react-icons/fa";
import {
    AiFillGithub,
    AiFillHome,
    AiOutlineInbox,
    AiOutlineMenu,
} from "react-icons/ai";
import {
    IoIosArrowDown
} from "react-icons/io";
import {BsFillCameraVideoFill} from "react-icons/bs";
import {Logo} from "@choc-ui/logo";

export default function NavBar() {
    const mobileNav = useDisclosure();

    const {toggleColorMode: toggleMode} = useColorMode();
    const text = useColorModeValue("dark", "light");
    const SwitchIcon = useColorModeValue(FaMoon, FaSun);

    const bg = useColorModeValue("white", "gray.800");
    const ref = React.useRef<HTMLDivElement | null>(null);
    const [y, setY] = React.useState(0);
    const height = ref.current ? ref.current.getBoundingClientRect() : 0;
    const cl = useColorModeValue("gray.800", "white");

    const {scrollY} = useViewportScroll();
    React.useEffect(() => {
        return scrollY.onChange(() => setY(scrollY.get()));
    }, [scrollY]);

    const SponsorButton = (
        <Box
            display={{base: "none", md: "flex"}}
            alignItems="center"
            as="a"
            aria-label="Sponsor Choc UI on Open Collective"
            href={""}
            target="_blank"
            rel="noopener noreferrer"
            bg="gray.50"
            borderWidth="1px"
            borderColor="gray.200"
            px="1em"
            minH="36px"
            rounded="md"
            fontSize="sm"
            color="gray.800"
            outline="0"
            transition="all 0.3s"
            _hover={{
                bg: "gray.100",
                borderColor: "gray.300",
            }}
            _active={{
                borderColor: "gray.200",
            }}
            _focus={{
                boxShadow: "outline",
            }}
            ml={5}
        >
            <Icon as={FaHeart} w="4" h="4" color="red.500" mr="2"/>
            <Box as="strong" lineHeight="inherit" fontWeight="semibold">
                Sponsor
            </Box>
        </Box>
    );

    const Section = (props) => {
        const ic = useColorModeValue("brand.600", "brand.50");
        const hbg = useColorModeValue("gray.50", "brand.400");
        const tcl = useColorModeValue("gray.900", "gray.50");
        const dcl = useColorModeValue("gray.500", "gray.50");
        return (
            <Link
                m={-3}
                p={3}
                display="flex"
                alignItems="start"
                rounded="lg"
                _hover={{
                    bg: hbg,
                }}
                href={props.url}
            >
                <chakra.svg
                    flexShrink={0}
                    h={6}
                    w={6}
                    color={ic}
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                >
                    {props.icon}
                </chakra.svg>
                <Box ml={4}>
                    <chakra.p fontSize="sm" fontWeight="700" color={tcl}>
                        {props.title}
                    </chakra.p>
                    <chakra.p mt={1} fontSize="sm" color={dcl}>
                        {props.children}
                    </chakra.p>
                </Box>
            </Link>
        );
    };

    const Features = (props) => {
        const hbg = useColorModeValue("gray.50", "brand.400");
        const hbgh = useColorModeValue("gray.100", "brand.500");
        const tcl = useColorModeValue("gray.900", "gray.50");
        return (
            <React.Fragment>
                <SimpleGrid
                    columns={
                        props.h
                            ? {
                                base: 1,
                                md: 3,
                                lg: 5,
                            }
                            : 1
                    }
                    pos="relative"
                    gap={{
                        base: 6,
                        sm: 8,
                    }}
                    px={5}
                    py={6}
                    p={{
                        sm: 8,
                    }}
                >
                    <Section
                        title="Analytics"
                        icon={
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                            />
                        }
                        url="/"
                    >
                        Get a comprehensive overview of your user activity and spending on active subscriptions in a month.
                    </Section>

                    <Section
                        title="Engagement"
                        icon={
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122"
                            />
                        }
                        url="/engagement"
                    >
                        Compare yourself to other users and discover popular movies and TV shows with our engagement features.
                    </Section>
                </SimpleGrid>
                {/*<Box*/}
                {/*    px={{*/}
                {/*        base: 5,*/}
                {/*        sm: 8,*/}
                {/*    }}*/}
                {/*    py={5}*/}
                {/*    bg={hbg}*/}
                {/*    display={{*/}
                {/*        sm: "flex",*/}
                {/*    }}*/}
                {/*>*/}
                {/*    <Stack*/}
                {/*        direction={{*/}
                {/*            base: "row",*/}
                {/*        }}*/}
                {/*        spacing={{*/}
                {/*            base: 6,*/}
                {/*            sm: 10,*/}
                {/*        }}*/}
                {/*    >*/}
                {/*        <Box display="flow-root">*/}
                {/*            <Link*/}
                {/*                m={-3}*/}
                {/*                p={3}*/}
                {/*                display="flex"*/}
                {/*                alignItems="center"*/}
                {/*                rounded="md"*/}
                {/*                fontSize="md"*/}
                {/*                color={tcl}*/}
                {/*                _hover={{*/}
                {/*                    bg: hbgh,*/}
                {/*                }}*/}
                {/*            >*/}
                {/*                <chakra.svg*/}
                {/*                    flexShrink={0}*/}
                {/*                    h={6}*/}
                {/*                    w={6}*/}
                {/*                    color="gray.400"*/}
                {/*                    xmlns="http://www.w3.org/2000/svg"*/}
                {/*                    fill="none"*/}
                {/*                    viewBox="0 0 24 24"*/}
                {/*                    stroke="currentColor"*/}
                {/*                    aria-hidden="true"*/}
                {/*                >*/}
                {/*                    <path*/}
                {/*                        strokeLinecap="round"*/}
                {/*                        strokeLinejoin="round"*/}
                {/*                        strokeWidth="2"*/}
                {/*                        d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"*/}
                {/*                    />*/}
                {/*                    <path*/}
                {/*                        strokeLinecap="round"*/}
                {/*                        strokeLinejoin="round"*/}
                {/*                        strokeWidth="2"*/}
                {/*                        d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"*/}
                {/*                    />*/}
                {/*                </chakra.svg>*/}
                {/*                <chakra.span ml={3}>Watch Demo</chakra.span>*/}
                {/*            </Link>*/}
                {/*        </Box>*/}

                {/*        <Box display="flow-root">*/}
                {/*            <Link*/}
                {/*                m={-3}*/}
                {/*                p={3}*/}
                {/*                display="flex"*/}
                {/*                alignItems="center"*/}
                {/*                rounded="md"*/}
                {/*                fontSize="md"*/}
                {/*                color={tcl}*/}
                {/*                _hover={{*/}
                {/*                    bg: hbgh,*/}
                {/*                }}*/}
                {/*            >*/}
                {/*                <chakra.svg*/}
                {/*                    flexShrink={0}*/}
                {/*                    h={6}*/}
                {/*                    w={6}*/}
                {/*                    color="gray.400"*/}
                {/*                    xmlns="http://www.w3.org/2000/svg"*/}
                {/*                    fill="none"*/}
                {/*                    viewBox="0 0 24 24"*/}
                {/*                    stroke="currentColor"*/}
                {/*                    aria-hidden="true"*/}
                {/*                >*/}
                {/*                    <path*/}
                {/*                        strokeLinecap="round"*/}
                {/*                        strokeLinejoin="round"*/}
                {/*                        strokeWidth="2"*/}
                {/*                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"*/}
                {/*                    />*/}
                {/*                </chakra.svg>*/}
                {/*                <chakra.span ml={3}>Contact Sales</chakra.span>*/}
                {/*            </Link>*/}
                {/*        </Box>*/}
                {/*    </Stack>*/}
                {/*</Box>*/}
            </React.Fragment>
        );
    };

    const Entertainment = (props) => {
        const hbg = useColorModeValue("gray.50", "brand.400");
        const hbgh = useColorModeValue("gray.100", "brand.500");
        const tcl = useColorModeValue("gray.900", "gray.50");
        return (
            <React.Fragment>
                <SimpleGrid
                    columns={
                        props.h
                            ? {
                                base: 1,
                                md: 3,
                                lg: 5,
                            }
                            : 1
                    }
                    pos="relative"
                    gap={{
                        base: 6,
                        sm: 8,
                    }}
                    px={5}
                    py={6}
                    p={{
                        sm: 8,
                    }}
                >
                    <Section
                        title="Movies"
                        icon={
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M2 3.993A1 1 0 012.992 3h18.016c.548 0 .992.445.992.993v16.014a1 1 0 01-.992.993H2.992A.993.993 0 012 20.007V3.993zM4 5v14h16V5H4zm6.622 3.415l4.879 3.252a.4.4 0 010 .666l-4.88 3.252a.4.4 0 01-.621-.332V8.747a.4.4 0 01.622-.332z"
                            />
                        }
                        url="/movies"
                    >
                        View your selected or watched movies within a specific time frame with our Movies feature.
                    </Section>

                    <Section
                        title="TV Shows"
                        icon={
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M18 6h-3.59l2.3-2.29a1 1 0 10-1.42-1.42L12 5.54l-1.17-2a1 1 0 10-1.74 1L10 6H6a3 3 0 00-3 3v8a3 3 0 003 3v1a1 1 0 002 0v-1h8v1a1 1 0 002 0v-1a3 3 0 003-3V9a3 3 0 00-3-3zm1 11a1 1 0 01-1 1H6a1 1 0 01-1-1V9a1 1 0 011-1h12a1 1 0 011 1z"
                            />
                        }
                        url="/tvshows"
                    >
                        View your selected or watched TV shows within a specific time frame with our TV Shows feature.
                    </Section>

                    <Section
                        title="Watchlist"
                        icon={
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M3 4.5h10a2 2 0 012 2v3a2 2 0 01-2 2H3a2 2 0 01-2-2v-3a2 2 0 012-2zm0 1a1 1 0 00-1 1v3a1 1 0 001 1h10a1 1 0 001-1v-3a1 1 0 00-1-1H3zM1 2a.5.5 0 01.5-.5h13a.5.5 0 010 1h-13A.5.5 0 011 2zm0 12a.5.5 0 01.5-.5h13a.5.5 0 010 1h-13A.5.5 0 011 14z"
                            />
                        }
                        url="/watchlist"
                    >
                        Keep track of movies and TV shows you're interested in watching soon with our Watchlist feature.
                    </Section>

                    <Section
                        title="Explore"
                        icon={
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M11.742 10.344a6.5 6.5 0 10-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 001.415-1.414l-3.85-3.85a1.007 1.007 0 00-.115-.1zM12 6.5a5.5 5.5 0 11-11 0 5.5 5.5 0 0111 0z"
                            />
                        }
                        url="/explore"
                    >
                        Discover new movies and TV shows to add to your collection with our Explore feature.
                    </Section>
                </SimpleGrid>
                {/*<Box*/}
                {/*    px={{*/}
                {/*        base: 5,*/}
                {/*        sm: 8,*/}
                {/*    }}*/}
                {/*    py={5}*/}
                {/*    bg={hbg}*/}
                {/*    display={{*/}
                {/*        sm: "flex",*/}
                {/*    }}*/}
                {/*>*/}
                {/*    <Stack*/}
                {/*        direction={{*/}
                {/*            base: "row",*/}
                {/*        }}*/}
                {/*        spacing={{*/}
                {/*            base: 6,*/}
                {/*            sm: 10,*/}
                {/*        }}*/}
                {/*    >*/}
                {/*        <Box display="flow-root">*/}
                {/*            <Link*/}
                {/*                m={-3}*/}
                {/*                p={3}*/}
                {/*                display="flex"*/}
                {/*                alignItems="center"*/}
                {/*                rounded="md"*/}
                {/*                fontSize="md"*/}
                {/*                color={tcl}*/}
                {/*                _hover={{*/}
                {/*                    bg: hbgh,*/}
                {/*                }}*/}
                {/*            >*/}
                {/*                <chakra.svg*/}
                {/*                    flexShrink={0}*/}
                {/*                    h={6}*/}
                {/*                    w={6}*/}
                {/*                    color="gray.400"*/}
                {/*                    xmlns="http://www.w3.org/2000/svg"*/}
                {/*                    fill="none"*/}
                {/*                    viewBox="0 0 24 24"*/}
                {/*                    stroke="currentColor"*/}
                {/*                    aria-hidden="true"*/}
                {/*                >*/}
                {/*                    <path*/}
                {/*                        strokeLinecap="round"*/}
                {/*                        strokeLinejoin="round"*/}
                {/*                        strokeWidth="2"*/}
                {/*                        d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"*/}
                {/*                    />*/}
                {/*                    <path*/}
                {/*                        strokeLinecap="round"*/}
                {/*                        strokeLinejoin="round"*/}
                {/*                        strokeWidth="2"*/}
                {/*                        d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"*/}
                {/*                    />*/}
                {/*                </chakra.svg>*/}
                {/*                <chakra.span ml={3}>Watch Demo</chakra.span>*/}
                {/*            </Link>*/}
                {/*        </Box>*/}

                {/*        <Box display="flow-root">*/}
                {/*            <Link*/}
                {/*                m={-3}*/}
                {/*                p={3}*/}
                {/*                display="flex"*/}
                {/*                alignItems="center"*/}
                {/*                rounded="md"*/}
                {/*                fontSize="md"*/}
                {/*                color={tcl}*/}
                {/*                _hover={{*/}
                {/*                    bg: hbgh,*/}
                {/*                }}*/}
                {/*            >*/}
                {/*                <chakra.svg*/}
                {/*                    flexShrink={0}*/}
                {/*                    h={6}*/}
                {/*                    w={6}*/}
                {/*                    color="gray.400"*/}
                {/*                    xmlns="http://www.w3.org/2000/svg"*/}
                {/*                    fill="none"*/}
                {/*                    viewBox="0 0 24 24"*/}
                {/*                    stroke="currentColor"*/}
                {/*                    aria-hidden="true"*/}
                {/*                >*/}
                {/*                    <path*/}
                {/*                        strokeLinecap="round"*/}
                {/*                        strokeLinejoin="round"*/}
                {/*                        strokeWidth="2"*/}
                {/*                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"*/}
                {/*                    />*/}
                {/*                </chakra.svg>*/}
                {/*                <chakra.span ml={3}>Contact Sales</chakra.span>*/}
                {/*            </Link>*/}
                {/*        </Box>*/}
                {/*    </Stack>*/}
                {/*</Box>*/}
            </React.Fragment>
        );
    };

    const Personal = (props) => {
        const hbg = useColorModeValue("gray.50", "brand.400");
        const hbgh = useColorModeValue("gray.100", "brand.500");
        const tcl = useColorModeValue("gray.900", "gray.50");
        return (
            <React.Fragment>
                <SimpleGrid
                    columns={
                        props.h
                            ? {
                                base: 1,
                                md: 3,
                                lg: 5,
                            }
                            : 1
                    }
                    pos="relative"
                    gap={{
                        base: 6,
                        sm: 8,
                    }}
                    px={5}
                    py={6}
                    p={{
                        sm: 8,
                    }}
                >
                    <Section
                        title="Active Subscriptions"
                        icon={
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M20 22H4a1 1 0 01-1-1V3a1 1 0 011-1h16a1 1 0 011 1v18a1 1 0 01-1 1zm-1-2V4H5v16h14zM8 9h8v2H8V9zm0 4h8v2H8v-2z"
                            />
                        }
                        url="/activesubscriptions"
                    >
                        Manage and keep track of your active TV subscriptions with our Active Subscriptions feature.
                    </Section>

                    <Section
                        title="Viewers"
                        icon={
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M8 8a3 3 0 100-6 3 3 0 000 6zm2-3a2 2 0 11-4 0 2 2 0 014 0zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10z"
                            />
                        }
                        url="/viewers"
                    >
                        Get an overview of viewer profiles and their behavior, including preferences, viewing patterns, and engagement metrics, with our Viewers feature.
                    </Section>
                </SimpleGrid>
                {/*<Box*/}
                {/*    px={{*/}
                {/*        base: 5,*/}
                {/*        sm: 8,*/}
                {/*    }}*/}
                {/*    py={5}*/}
                {/*    bg={hbg}*/}
                {/*    display={{*/}
                {/*        sm: "flex",*/}
                {/*    }}*/}
                {/*>*/}
                {/*    <Stack*/}
                {/*        direction={{*/}
                {/*            base: "row",*/}
                {/*        }}*/}
                {/*        spacing={{*/}
                {/*            base: 6,*/}
                {/*            sm: 10,*/}
                {/*        }}*/}
                {/*    >*/}
                {/*        <Box display="flow-root">*/}
                {/*            <Link*/}
                {/*                m={-3}*/}
                {/*                p={3}*/}
                {/*                display="flex"*/}
                {/*                alignItems="center"*/}
                {/*                rounded="md"*/}
                {/*                fontSize="md"*/}
                {/*                color={tcl}*/}
                {/*                _hover={{*/}
                {/*                    bg: hbgh,*/}
                {/*                }}*/}
                {/*            >*/}
                {/*                <chakra.svg*/}
                {/*                    flexShrink={0}*/}
                {/*                    h={6}*/}
                {/*                    w={6}*/}
                {/*                    color="gray.400"*/}
                {/*                    xmlns="http://www.w3.org/2000/svg"*/}
                {/*                    fill="none"*/}
                {/*                    viewBox="0 0 24 24"*/}
                {/*                    stroke="currentColor"*/}
                {/*                    aria-hidden="true"*/}
                {/*                >*/}
                {/*                    <path*/}
                {/*                        strokeLinecap="round"*/}
                {/*                        strokeLinejoin="round"*/}
                {/*                        strokeWidth="2"*/}
                {/*                        d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"*/}
                {/*                    />*/}
                {/*                    <path*/}
                {/*                        strokeLinecap="round"*/}
                {/*                        strokeLinejoin="round"*/}
                {/*                        strokeWidth="2"*/}
                {/*                        d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"*/}
                {/*                    />*/}
                {/*                </chakra.svg>*/}
                {/*                <chakra.span ml={3}>Watch Demo</chakra.span>*/}
                {/*            </Link>*/}
                {/*        </Box>*/}

                {/*        <Box display="flow-root">*/}
                {/*            <Link*/}
                {/*                m={-3}*/}
                {/*                p={3}*/}
                {/*                display="flex"*/}
                {/*                alignItems="center"*/}
                {/*                rounded="md"*/}
                {/*                fontSize="md"*/}
                {/*                color={tcl}*/}
                {/*                _hover={{*/}
                {/*                    bg: hbgh,*/}
                {/*                }}*/}
                {/*            >*/}
                {/*                <chakra.svg*/}
                {/*                    flexShrink={0}*/}
                {/*                    h={6}*/}
                {/*                    w={6}*/}
                {/*                    color="gray.400"*/}
                {/*                    xmlns="http://www.w3.org/2000/svg"*/}
                {/*                    fill="none"*/}
                {/*                    viewBox="0 0 24 24"*/}
                {/*                    stroke="currentColor"*/}
                {/*                    aria-hidden="true"*/}
                {/*                >*/}
                {/*                    <path*/}
                {/*                        strokeLinecap="round"*/}
                {/*                        strokeLinejoin="round"*/}
                {/*                        strokeWidth="2"*/}
                {/*                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"*/}
                {/*                    />*/}
                {/*                </chakra.svg>*/}
                {/*                <chakra.span ml={3}>Contact Sales</chakra.span>*/}
                {/*            </Link>*/}
                {/*        </Box>*/}
                {/*    </Stack>*/}
                {/*</Box>*/}
            </React.Fragment>
        );
    };

    const MobileNavContent = (
        <VStack
            pos="absolute"
            top={0}
            left={0}
            right={0}
            display={mobileNav.isOpen ? "flex" : "none"}
            flexDirection="column"
            p={2}
            pb={4}
            m={2}
            bg={bg}
            spacing={3}
            rounded="sm"
            shadow="sm"
        >
            <CloseButton
                aria-label="Close menu"
                justifySelf="self-start"
                onClick={mobileNav.onClose}
            />
            <Button w="full" variant="ghost" leftIcon={<AiFillHome/>}>
                Dashboard
            </Button>
            <Button
                w="full"
                variant="solid"
                colorScheme="brand"
                leftIcon={<AiOutlineInbox/>}
            >
                Inbox
            </Button>
            <Button w="full" variant="ghost" leftIcon={<BsFillCameraVideoFill/>}>
                Videos
            </Button>
        </VStack>
    );

    return (
        <Box pos="relative">
            <chakra.header
                ref={ref}
                shadow={y > height ? "sm" : undefined}
                transition="box-shadow 0.2s"
                bg={bg}
                borderTop="6px solid"
                borderTopColor="brand.400"
                w="full"
                overflowY="hidden"
            >
                <chakra.div h="4.5rem" mx="auto" maxW="1200px">
                    <Flex w="full" h="full" px="6" align="center" justify="space-between">
                        <Flex align="center">
                            <Link href="/">
                                <HStack>
                                    <Logo/>
                                </HStack>
                            </Link>
                        </Flex>

                        <Flex>
                            <HStack
                                spacing="5"
                                display={{
                                    base: "none",
                                    md: "flex",
                                }}
                            >
                                <Popover>
                                    <PopoverTrigger>
                                        <Button
                                            bg={bg}
                                            color="gray.500"
                                            display="inline-flex"
                                            alignItems="center"
                                            fontSize="md"
                                            _hover={{
                                                color: cl,
                                            }}
                                            _focus={{
                                                boxShadow: "none",
                                            }}
                                            rightIcon={<IoIosArrowDown/>}
                                        >
                                            Features
                                        </Button>
                                    </PopoverTrigger>
                                    <PopoverContent
                                        w="100vw"
                                        maxW="md"
                                        _focus={{
                                            boxShadow: "md",
                                        }}
                                    >
                                        <Features/>
                                    </PopoverContent>
                                </Popover>
                                <Popover>
                                    <PopoverTrigger>
                                        <Button
                                            bg={bg}
                                            color="gray.500"
                                            display="inline-flex"
                                            alignItems="center"
                                            fontSize="md"
                                            _hover={{
                                                color: cl,
                                            }}
                                            _focus={{
                                                boxShadow: "none",
                                            }}
                                            rightIcon={<IoIosArrowDown/>}
                                        >
                                            Entertainment
                                        </Button>
                                    </PopoverTrigger>
                                    <PopoverContent
                                        w="100vw"
                                        maxW="md"
                                        _focus={{
                                            boxShadow: "md",
                                        }}
                                    >
                                        <Entertainment/>
                                    </PopoverContent>
                                </Popover>
                                <Popover>
                                    <PopoverTrigger>
                                        <Button
                                            bg={bg}
                                            color="gray.500"
                                            display="inline-flex"
                                            alignItems="center"
                                            fontSize="md"
                                            _hover={{
                                                color: cl,
                                            }}
                                            _focus={{
                                                boxShadow: "none",
                                            }}
                                            rightIcon={<IoIosArrowDown/>}
                                        >
                                            Personal
                                        </Button>
                                    </PopoverTrigger>
                                    <PopoverContent
                                        w="100vw"
                                        maxW="md"
                                        _focus={{
                                            boxShadow: "md",
                                        }}
                                    >
                                        <Personal/>
                                    </PopoverContent>
                                </Popover>
                                {/*<Button*/}
                                {/*    bg={bg}*/}
                                {/*    color="gray.500"*/}
                                {/*    display="inline-flex"*/}
                                {/*    alignItems="center"*/}
                                {/*    fontSize="md"*/}
                                {/*    _hover={{*/}
                                {/*        color: cl,*/}
                                {/*    }}*/}
                                {/*    _focus={{*/}
                                {/*        boxShadow: "none",*/}
                                {/*    }}*/}
                                {/*>*/}
                                {/*    Blog*/}
                                {/*</Button>*/}
                                {/*<Button*/}
                                {/*    bg={bg}*/}
                                {/*    color="gray.500"*/}
                                {/*    display="inline-flex"*/}
                                {/*    alignItems="center"*/}
                                {/*    fontSize="md"*/}
                                {/*    _hover={{*/}
                                {/*        color: cl,*/}
                                {/*    }}*/}
                                {/*    _focus={{*/}
                                {/*        boxShadow: "none",*/}
                                {/*    }}*/}
                                {/*>*/}
                                {/*    Pricing*/}
                                {/*</Button>*/}
                            </HStack>
                        </Flex>

                        <Flex
                            justify="flex-end"
                            w="full"
                            maxW="824px"
                            align="center"
                            color="gray.400"
                        >
                            <IconButton
                                size="md"
                                fontSize="lg"
                                aria-label={`Switch to ${text} mode`}
                                variant="ghost"
                                color="current"
                                ml={{base: "0", md: "3"}}
                                onClick={toggleMode}
                                icon={<SwitchIcon/>}
                            />
                            {SponsorButton}
                            <IconButton
                                display={{base: "flex", md: "none"}}
                                aria-label="Open menu"
                                fontSize="20px"
                                color="gray.800"
                                _dark={{color: "inherit"}}
                                variant="ghost"
                                icon={<AiOutlineMenu/>}
                                onClick={mobileNav.onOpen}
                            />
                        </Flex>
                    </Flex>
                    {MobileNavContent}
                </chakra.div>
            </chakra.header>
        </Box>
    );
};

