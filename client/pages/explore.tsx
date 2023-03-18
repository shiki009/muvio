import type {NextPage} from 'next'
import Layout from "@components/Layout";
import {
    Box,
    VStack,
    chakra,
} from '@chakra-ui/react'
import ExploreView from "@components/ExploreView";

export async function getServerSideProps() {
    // Fetch data from external API
    const res = await fetch(`http://172.17.0.1:8000/movies/`)
    const data = await res.json()
    // Pass data to the page via props
    return {props: {data}}
}

const Explore: NextPage = ({data}) => {
    return (
        <Layout>
            <VStack>
                <Box shadow="md">
                    <ExploreView data={data}/>
                </Box>
            </VStack>
        </Layout>
    )
}

export default Explore
