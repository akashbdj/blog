import { getAllPostIds, getPostData } from '../../lib/posts'
import Date from '../../components/date'
import Link from 'next/link'
import Head from 'next/head'
import Layout from '../../components/layout'
import ReactMarkdown from 'react-markdown'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { nord } from 'react-syntax-highlighter/dist/cjs/styles/prism'
import MathJax from 'react-mathjax'
import RemarkMathPlugin from 'remark-math'

const renderers = {
    code: ({ language, value }) => <SyntaxHighlighter style={nord} language={language} children={value} />,
    math: (props) => <MathJax.Node formula={props.value} />,
    inlineMath: (props) => <MathJax.Node inline formula={props.value} />
}

export default function Post({ postData }) {
    const { frontmatter, content } = postData
    return (
        <Layout>
            <Head>
                <title>{frontmatter.title}</title>
            </Head>
            <div className='text-center mt-10'>
                <a href='/'><i className='icofont-deer-head icofont-3x'></i></a>
            </div>
            <article className='flex flex-col my-10'>
                <header className='my-8'>
                    <h1 className='font-semibold text-3xl'>{frontmatter.title}</h1>
                    <div className={'text-xs text-gray-900'}>
                        <Date dateString={frontmatter.date} />
                    </div>
                </header>
                <MathJax.Provider>
                    <ReactMarkdown plugins={[RemarkMathPlugin]} source={content} renderers={renderers} className='markdown text-sm md:text-xs' />
                </MathJax.Provider>
            </article>
        </Layout>
    )
}

export async function getStaticPaths() {
    const paths = getAllPostIds()
    return { paths, fallback: false }
}

export async function getStaticProps({ params }) {
    const postData = await getPostData(params.id)
    return {
        props: {
            postData
        }
    }
}