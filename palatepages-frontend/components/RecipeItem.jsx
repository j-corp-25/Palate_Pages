import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

const RecipeItem = ({ recipe }) => {
  return (
    <div className='flex border-b border-gray-300 py-4'>
      <div className='mr-4 w-44 h-44 relative'>
        <Image
          src={recipe.image ? recipe.image : '/test/default-image.png'}
          layout='fill'
          objectFit='cover'
          className='rounded'
          alt={recipe.name}
        />
      </div>
      <div className='flex flex-col justify-center'>
        <h3 className='text-2xl font-semibold mb-3 text-light-text'>
          {recipe.name}
        </h3>
        <p className='text-light-text mb-4'>{recipe.chef}</p>
        <p className='text-light-text text-sm'>{recipe.description}</p>
        <div className='mt-5'>
          <Link href={`/recipes/${recipe.slug}`}>
            <div
              className='inline-block bg-main-color hover:text-dark-text text-light-text py-2 px-4 rounded'
            >
              Details
            </div>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default RecipeItem
