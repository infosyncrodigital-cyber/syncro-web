// Renders the page to HTML at build time so the content is in index.html
// for search engines and for visitors before the script loads.
import { readFile, writeFile, rm } from 'node:fs/promises'
import { pathToFileURL } from 'node:url'
import { resolve } from 'node:path'

const dist = resolve('dist')
const ssrEntry = pathToFileURL(resolve('dist-ssr/entry-server.js')).href

const { render } = await import(ssrEntry)
const html = await render()

const template = await readFile(resolve(dist, 'index.html'), 'utf8')
if (!template.includes('<!--app-html-->')) throw new Error('index.html has no <!--app-html--> marker')
await writeFile(resolve(dist, 'index.html'), template.replace('<!--app-html-->', html))
await rm(resolve('dist-ssr'), { recursive: true, force: true })

console.log(`prerendered index.html (${(html.length / 1024).toFixed(1)} KB of markup)`)
