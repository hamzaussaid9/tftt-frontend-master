import React from 'react'
export default function MeatMatrixItem({item}) {
    return (
        <ul>
          <li>{item.Product}</li>
          <li>{item.Description}</li>
          <li>{item.Picture}</li>
          <li>{item.Link}</li>
          <li>{item.Price}</li>
        </ul>

  )
}
