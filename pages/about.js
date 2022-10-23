import React from 'react'
import Footer from './../components/Footer';
import Head from 'next/head';

const About = () => {
  return (
    <>
        <Head>
          <title>About Page</title>
          <meta name='Descripsion' content='Muhamad Muzani'/>
        </Head>
        <h1 className='content'>About Page</h1>
    </>
  )
}

export default About


About.getLayout = function PageLayout(page) {
  return (
    <>
      {page}
      <Footer/>
    </>
  )
}