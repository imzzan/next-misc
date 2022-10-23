import React from 'react';
import Head from 'next/head';

const Blog = ({post, title, description}) => {
  return (
    <>
        <Head>
            <title>{title}</title>
            <meta name={description} content='Hahhhh'/>
        </Head>
        <h1>Blog Page</h1>
        {
           post.map((item) => {
            return (
                <div key={item.id}>
                    <p>{item.id}. {item.nama} {item.kelas} {item.nim}</p>
                </div>
            )
           }) 
        }
    </>
  )
}

export default Blog


export const getStaticProps = async () => {
    const response = await fetch('https://p02-restapi-json.herokuapp.com/');
    const data = await response.json();

    return {
        props : {
            post : data,
            title : 'Blog Page',
            description : 'Aplication App'
        }
    }
}