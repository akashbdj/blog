import { getAllPostIds, getPostData } from '../../lib/posts'
import Date from '../../components/date'
import Link from 'next/link'
import Head from 'next/head'
import Layout from '../../components/layout'

export default function Post({ postData }) {
    return (
        <Layout>
            <Head>
                <title>{postData.title}</title>
            </Head>
            <div className='text-center mt-4'>
                <a href='/'><i className='icofont-deer-head icofont-3x'></i></a>
            </div>
            <article className='flex flex-col mt-10'>
                <header className='my-8'>
                    <h1 className='font-semibold text-3xl'>{postData.title}</h1>
                    <div className={'text-xs text-gray-900'}>
                        <Date dateString={postData.date} />
                    </div>
                </header>
                <div className='markdown text-xs' dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
            </article>
        </Layout>
    )
}

export async function getStaticPaths() {
    const paths = getAllPostIds()
    return {
        paths,
        fallback: false
    }
}

export async function getStaticProps({ params }) {
    const postData = await getPostData(params.id)
    return {
        props: {
            postData
        }
    }
}