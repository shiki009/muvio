import React from "react";
import {
    Icon,
    ButtonGroup,
    Flex,
    IconButton,
    Table,
    Tbody,
    Td,
    Th,
    Thead,
    Tr,
    useColorModeValue,
} from "@chakra-ui/react";
import {AiFillEdit} from "react-icons/ai";
import {BsBoxArrowUpRight, BsFillTrashFill} from "react-icons/bs";
import {RiNetflixFill} from 'react-icons/ri';

export default function WatchlistTable({data}) {
    const header = ["title", "requested by", "watch it together", "actions"];

    const color1 = useColorModeValue("gray.400", "gray.400");
    const color2 = useColorModeValue("gray.400", "gray.400");

    return (
        <Table
            w="full"
            bg="white"
            _dark={{bg: "gray.800"}}
            display={{
                base: "block",
                md: "table",
            }}
            sx={{
                "@media print": {
                    display: "table",
                },
            }}
        >
            <Thead
                display={{
                    base: "none",
                    md: "table-header-group",
                }}
                sx={{
                    "@media print": {
                        display: "table-header-group",
                    },
                }}
            >
                <Tr>
                    {header.map((x) => (
                        <Th key={x}>{x}</Th>
                    ))}
                </Tr>
            </Thead>
            <Tbody
                display={{
                    base: "block",
                    lg: "table-row-group",
                }}
                sx={{
                    "@media print": {
                        display: "table-row-group",
                    },
                }}
            >
                {data.map((token, tid) => {
                    return (
                        <Tr
                            key={tid}
                            display={{
                                base: "grid",
                                md: "table-row",
                            }}
                            sx={{
                                "@media print": {
                                    display: "table-row",
                                },
                                gridTemplateColumns: "minmax(0px, 35%) minmax(0px, 65%)",
                                gridGap: "10px",
                            }}
                        >
                            {Object.keys(token).map((x) => {
                                if (x !== "id") {
                                    return (
                                        <React.Fragment key={`${tid}${x}`}>
                                            <Td
                                                display={{
                                                    base: "table-cell",
                                                    md: "none",
                                                }}
                                                sx={{
                                                    "@media print": {
                                                        display: "none",
                                                    },
                                                    textTransform: "uppercase",
                                                    color: color1,
                                                    fontSize: "xs",
                                                    fontWeight: "bold",
                                                    letterSpacing: "wider",
                                                    fontFamily: "heading",
                                                }}
                                            >
                                                {x}
                                            </Td>
                                            <Td
                                                color={"gray.500"}
                                                fontSize="md"
                                                fontWeight="hairline"
                                            >
                                                {token[x]}
                                            </Td>
                                        </React.Fragment>
                                    );
                                }
                            })}
                            <Td
                                display={{
                                    base: "table-cell",
                                    md: "none",
                                }}
                                sx={{
                                    "@media print": {
                                        display: "none",
                                    },
                                    textTransform: "uppercase",
                                    color: color2,
                                    fontSize: "xs",
                                    fontWeight: "bold",
                                    letterSpacing: "wider",
                                    fontFamily: "heading",
                                }}
                            >
                                Actions
                            </Td>
                            <Td>
                                <ButtonGroup variant="solid" size="sm" spacing={3}>
                                    <IconButton
                                        colorScheme="blue"
                                        icon={<BsBoxArrowUpRight/>}
                                        aria-label="Up"
                                    />
                                    <IconButton
                                        colorScheme="green"
                                        icon={<AiFillEdit/>}
                                        aria-label="Edit"
                                    />
                                    <IconButton
                                        colorScheme="red"
                                        variant="outline"
                                        icon={<BsFillTrashFill/>}
                                        aria-label="Delete"
                                    />
                                </ButtonGroup>
                            </Td>
                        </Tr>
                    );
                })}
            </Tbody>
        </Table>
    );
}