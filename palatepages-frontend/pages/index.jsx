import Head from 'next/head'
import Image from 'next/image'
import Layout from '../components/Layout'
import axios from 'axios'
import { API_URL } from '@/config/index'

export const getStaticProps = async () => {
  const res = await axios.get(`${API_URL}/api/recipes`)
  const recipes = await res.data

  return {
    props: { recipes },
    revalidate: 1,
  }
}
export default function Home({ recipes }) {
  console.log(recipes)
  return (
    <div>
      <Layout>
        <h1>Recipes</h1>
      </Layout>
    </div>
  )
}
