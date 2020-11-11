import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/Home.module.css'
import { getSortedPostsData } from '../lib/posts'

export default function Home({ posts }) {
  return (
    <div className='flex flex-col md:flex-row h-screen'>
      <Head>
        <title>akashbdj</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header className='header flex flex-col justify-center items-center md:w-3/12 lg:w-1/5 my-10'>
        <div className=''><i className='icofont-deer-head icofont-5x'></i></div>
        <div className='p-4 text-xl'>
          <a className='p-1' target='_blank' href='https://www.github.com/akashbdj' ><i className="fab fa-github-alt"></i></a>
          <a className='p-1' target='_blank' href='https://www.twitter.com/akashbdj' ><i className="fab fa-twitter"></i></a>
          <a className='p-1' target='_blank' href='https://linkedin.com/in/akashbdj91' ><i className="fab fa-linkedin"></i></a>
          <a className='p-1' target='_blank' href='https://www.youtube.com/channel/UC8vRw6EcCgIKVuaazldTwDw' ><i className="fab fa-youtube"></i></a>
          <a className='p-1' href='mailto:akashbdj@gmail.com' ><i className="fas fa-envelope"></i></a>
        </div>
      </header>
      <article className='flex-1'>
        <section className='md:m-24 m-6'>
          <h2 className='text-sm font-semibold my-1'>Notes</h2>
          <ul>
            {posts.map(({ id, frontmatter }) => {
              return (<li key={id}>
                <Link href={`/posts/${id}`}>
                  <a className='text-xs'>{frontmatter.title}</a>
                </Link>
              </li>)
            })}
          </ul>
        </section>
      </article>
    </div>
  )
}

export async function getStaticProps() {
  return {
    props: { posts: await getSortedPostsData() }
  }
}
