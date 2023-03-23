import React from 'react'
import NewsItem from './NewsItem'
import { useState, useEffect } from 'react'



export default function NewsList() {
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(response => console.log(response))

    },[])

    return (
    <ul>
      {data.map( news_item =>
        <>
          <NewsItem item = {news_item}/>
        </>
        )}
	</ul>
  )
}
