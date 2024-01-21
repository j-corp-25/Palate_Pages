import Head from 'next/head'
import Image from 'next/image'
import Layout from '../components/Layout'
import axios from 'axios'
import { API_URL } from '@/config/index'
import RecipeItem from '@/components/RecipeItem'

export const getStaticProps = async () => {
  const res = await axios.get(`${API_URL}/api/recipes`)
  const recipes = await res.data

  return {
    props: { recipes },
    revalidate: 1,
  }
}
export default function Home({ recipes }) {
  return (
    <div>
      <Layout>
        <h1 className='text-light-text text-2xl'>Recipes Below</h1>
        {recipes.length === 0 && <h2> No recipes at the moment</h2>}
        {recipes.map((recipe) => (
          <RecipeItem key={recipe.id} recipe={recipe}/>
        ))}
      </Layout>
    </div>
  )
}
