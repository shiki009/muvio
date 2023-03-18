import type {NextPage} from 'next'
import Layout from "@components/Layout";
import {
    Box,
    VStack,
    chakra,
} from '@chakra-ui/react'
import EngagementView from "@components/EngagementView";
export async function getServerSideProps() {
    // Fetch data from external API
    const res = await fetch(`http://172.17.0.1:8000/active_subscriptions/`)
    const data = await res.json()
    // Pass data to the page via props
    return {props: {data}}
}

const Engagement: NextPage = ({data}) => {
    return (
        <Layout>
            <VStack>
                <Box shadow="md">
                    <EngagementView data={data}/>
                </Box>
            </VStack>
        </Layout>
    )
}

export default Engagement
