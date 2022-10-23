import React from 'react'

const News = ({data}) => {
  return (
    <div>
        <h1>{data}</h1>
    </div>
  )
}

export default News

export const getStaticProps = async () => {
    return {
        props : {
            data : 'Selamat Malam Sudah Ngantuk'
        }
    }
}