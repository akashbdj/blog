import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import remark from 'remark'
import html from 'remark-html'
import highlight from 'remark-highlight.js'

const postsDirectory = path.join(process.cwd(), '_posts')

export function getSortedPostsData() {
    const fileNames = fs.readdirSync(postsDirectory)
    const postsPromises = fileNames.map((fileName) => {
        const id = fileName.replace(/\.md$/, '')
        return getPostData(id)
    })

    return Promise.all(postsPromises)
        .then((posts) => {
            posts.sort((a, b) => a.frontmatter.date < b.frontmatter.date ? 1 : -1)
            return posts
        })
        .catch((e) => console.log("Error in resolving post data: ", e))
}

export function getAllPostIds() {
    const fileNames = fs.readdirSync(postsDirectory)
    return fileNames.map(fileName => ({
        params: { id: fileName.replace(/\.md$/, '') }
    }))
}

export async function getPostData(id) {
    const content = await import(`../_posts/${id}.md`)
    const data = matter(content.default)

    return {
        id,
        frontmatter: data.data,
        content: data.content,
    }
}