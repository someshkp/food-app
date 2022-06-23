import React from 'react'

function BannerName({name, discount, link}) {
  return (
    <div className='bannerContent'>
        <h3>Hello {name}</h3>
        <p>Get free Discount of <span>{discount}%</span> for first purchase of every month.</p>

        <a href={link}>Learn More</a>
    </div>
  )
}

export default BannerName 