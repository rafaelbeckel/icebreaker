import Head from 'next/head'
import axios from 'axios'

export default function Home({ question }) {
  return (
    <div>
      <Head>
        <title>Your Ice Breaker of the Day</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <h1>{question}</h1>
    </div>
  )
}

export async function getServerSideProps() {
  let baseUrl = 'http://localhost:3000';
  if(process.env.VERCEL_URL) {
    baseUrl = process.env.VERCEL_URL
  }

  const res = await axios.get(baseUrl+'/api/question');
  const data = await res.data;

  if (!data) {
    return {
      props: {
        question: "Would you mind reloading the page? [404]"
      },
    }
  }

  return {
      props: {
        question: data.question
      }
  }
}
