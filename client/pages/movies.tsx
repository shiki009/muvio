import type {NextPage} from 'next'
import Layout from "@components/Layout";
import {
    Box,
    VStack,
    chakra,
} from '@chakra-ui/react'
import MoviesTable from "@components/MoviesTable";

export async function getServerSideProps() {
    // Fetch data from external API
    const res = await fetch(`http://172.17.0.1:8000/movies/`)
    const data = await res.json()
    // Pass data to the page via props
    return {props: {data}}
}

const MoviesList: NextPage = ({data}) => {
    return (
        <Layout>
            <VStack>
                <Box shadow="md">
                    <MoviesTable data={data}/>
                </Box>
            </VStack>
        </Layout>
    )
}

export default MoviesList
