import type {NextPage} from 'next'
import Layout from "@components/Layout";
import {
    Box,
    VStack,
} from '@chakra-ui/react';

import Dashboard from "@components/Dashboard";

export async function getServerSideProps() {
    // Fetch data from external API
    const res = await fetch(`http://172.17.0.1:8000/active_subscriptions/`)
    const data = await res.json()
    // Pass data to the page via props
    return {props: {data}}
}


const Home: NextPage = ({data}) => {
    return (
        <Layout>
            <VStack>
                <Box shadow="md">
                    <Dashboard data={data}/>
                </Box>
            </VStack>
        </Layout>
    )
}

export default Home
