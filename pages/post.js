import Layout from '../components/MyLayout.js'
import { useRouter } from 'next/router'

const Content = () => (
    <div>
        <h1>{useRouter().query.title}</h1>
        <p>This is the blog post content.</p>
    </div>
)

export default () => (
    <Layout>
        <Content />
    </Layout>
)
