import React from 'react'

export default function NewsItem({item}) {
    return (

        <ul>
        <li>{item.Title}</li>
        <li>{item.Date}</li>
        <li>{item.Description}</li>
        <li>{item.Author}</li>
        </ul>

  )
}
