import React from 'react'

const Footer = ({len}) => {
  return (
    <footer>
        {len} List {len > 1 ? 'Items' : 'Item'}
    </footer>
  )
}

export default Footer