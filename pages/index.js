import Head from 'next/head'

import Layout from '../components/layout'
import Container from '../components/container'
import Form from '../components/form'

export default function Index() {
  return (
    <Layout>
      <Head>
        <meta name="viewport" content="maximum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no, user-scalable=no"/>
        <title>Fnatic Code Task</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
    
      <Container>
        <div className="flex flex-wrap">
          <nav className="bg-black text-white w-full md:w-40 lg:w-64 p-5" role="navigation">
            <h2 className="font-display uppercase block mb-4">Fixed Width Nav Column</h2>
            
            <ul>
              <li><a className="underline hover:text-orange focus:text-orange transition ease-in-out duration-300" href="#">Nav Item 1</a></li>
              <li><a className="underline hover:text-orange focus:text-orange transition ease-in-out duration-300" href="#">Nav Item 2</a></li>
            </ul>
          </nav>

          <main className="flex-1 p-5" role="main">
            <h1 className="font-display uppercase block mb-4">Fluid Centre Column</h1>

            <div className="mt-6">
              <Form />
            </div>
          </main>

          <aside className="bg-orange text-white w-full md:w-40 lg:w-64 p-5">
            <h2 className="font-display uppercase block mb-4">Fixed Width Sidebar Column</h2>
          </aside>
        </div>
      </Container>
    </Layout>
  )
}
