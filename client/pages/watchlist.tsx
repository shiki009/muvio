import type {NextPage} from 'next'
import Layout from "@components/Layout";
import {
    Box,
    VStack,
    chakra,
} from '@chakra-ui/react'
import WatchlistTable from "@components/WatchlistTable";

export async function getServerSideProps() {
    // Fetch data from external API
    const res = await fetch(`http://172.17.0.1:8000/watch_list_movies/`)
    const data = await res.json()
    // Pass data to the page via props
    return {props: {data}}
}

const Watchlist: NextPage = ({data}) => {
    return (
        <Layout>
            <VStack>
                <chakra.h1
                    textAlign={'center'}
                    fontSize={'4xl'}
                    py={10}
                    fontWeight={'bold'}>
                    Watchlist
                </chakra.h1>
                <Box shadow="md">
                    <WatchlistTable data={data}/>
                </Box>
            </VStack>
        </Layout>
    )
}

export default Watchlist
