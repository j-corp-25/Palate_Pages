import React from 'react'
import Head from 'next/head'

const Layout = ({ title, description, keywords, children }) => {
  return (
    <div>
      <Head>
        <meta charSet='utf-8' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <title>{title}</title>
        <meta name='description' content={description} />
        <meta name='keywords' content={keywords} />

        {/* Favicon*/}
        <link rel='icon' href='/favicon.ico' />

        {/* Open Graph Tags */}
        <meta property='og:title' content={title} />
        <meta property='og:description' content={description} />
        <meta property='og:type' content='website' />
        <meta property='og:url' content='https://www.yourwebsiteurl.com' />
        <meta
          property='og:image'
          content='https://www.yourwebsiteurl.com/og-image.jpg'
        />

        {/* Twitter Card Tags */}
        <meta name='twitter:card' content='summary_large_image' />
        <meta name='twitter:title' content={title} />
        <meta name='twitter:description' content={description} />
        <meta
          name='twitter:image'
          content='https://www.yourwebsiteurl.com/twitter-image.jpg'
        />

        {/* Canonical URL */}
        <link
          rel='canonical'
          href='https://www.yourwebsiteurl.com/current-page-url'
        />
      </Head>
      {children}
    </div>
  )
}

Layout.defaultProps = {
  title: 'Palate Pages | Find Delicious Recipes',
  description:
    'Explore a wide variety of delicious and easy-to-make recipes. Whether you are looking for healthy meals or comforting classics, Palate Pages has something for everyone.',
  keywords:
    'quick recipes, healthy eating, home cooking, recipe ideas, family meals, dietary recipes, international cuisine, food blogging, cooking tips, food reviews',
}

export default Layout
