import { getAllPostIds, getPostData } from '../../lib/posts'
import Date from '../../components/date'
import Link from 'next/link'
import Head from 'next/head'
import Layout from '../../components/layout'
import ReactMarkdown from 'react-markdown'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { nord } from 'react-syntax-highlighter/dist/cjs/styles/prism'

const renderers = {
    code: ({ language, value }) => {
        return <SyntaxHighlighter style={nord} language={language} children={value} />
    }
}

export default function Post({ postData }) {
    const { frontmatter, content } = postData
    return (
        <Layout>
            <Head>
                <title>{frontmatter.title}</title>
            </Head>
            <div className='text-center mt-4'>
                <a href='/'><i className='icofont-deer-head icofont-3x'></i></a>
            </div>
            <article className='flex flex-col my-10'>
                <header className='my-8'>
                    <h1 className='font-semibold text-3xl'>{frontmatter.title}</h1>
                    <div className={'text-xs text-gray-900'}>
                        <Date dateString={frontmatter.date} />
                    </div>
                </header>
                <ReactMarkdown source={content} renderers={renderers} className='markdown text-xs' />
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