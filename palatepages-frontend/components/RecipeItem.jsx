import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

const RecipeItem = ({ recipe }) => {
  return (
    <div>
      <div>
        <Image
          src={recipe.image ? recipe.image : '/test/default-image.png'}
          width={170}
          height={100}
        />
      </div>
      <div>
        <h3> Description: {recipe.description}</h3>
        <h3>Chef: {recipe.chef}</h3>
        <h3>Name: {recipe.name}</h3>
      </div>
    </div>
  )
}

export default RecipeItem
