import Head from 'next/head'
import Layout from '../components/layout'
import Container from '../components/container'
import Form from '../components/form'

export default function Index() {
  return (
    <Layout>
      {/* Head Meta Tags */}
      <Head>
        <meta name="viewport" content="maximum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no, user-scalable=no"/>
        <title>Fnatic Code Task</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
    
      <Container>
        <div className="flex flex-wrap">
          {/* Nav Column */}
          <nav className="bg-black text-white w-full md:w-40 lg:w-64 p-5">
            <h2>Fixed Width Nav Column</h2>
            
            <ul>
              {/* Flusha doing Flusha things :D */}
              <li><a className="underline hover:text-orange focus:text-orange focus:outline-none" href="https://www.youtube.com/watch?v=93WjCKFPxL8" target="_blank" rel="noopener noreferrer">Nav Item 1</a></li>
              {/* My personal favourite Fnatic moment :D */}
              <li><a className="underline hover:text-orange focus:text-orange focus:outline-none" href="https://www.youtube.com/watch?v=XdN67NuhMW4" target="_blank" rel="noopener noreferrer">Nav Item 2</a></li>
            </ul>
          </nav>

          {/* Main Column */}
          <main className="flex-1 p-5">
            <article>
              <h1>Fluid Centre Column</h1>
              
              {/* Form Section */}
              <Form />
            </article>
          </main>

          {/* Sidebar Column */}
          <aside className="bg-orange text-white w-full md:w-40 lg:w-64 p-5">
            <h2>Fixed Width Sidebar Column</h2>
          </aside>
        </div>
      </Container>
    </Layout>
  )
}
