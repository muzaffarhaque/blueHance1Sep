import React from 'react'

export default function Blog() {
  return (
    <div className='blogs-main-section'>
    <h3 className="">Blogs</h3>
    <p className="b-e-lg m-0">BlueHans offers premium UX/UI design, advanced design training, custom AI solutions. </p>
    <div className="blog-card-frame">
      {[1,2,3,4].map((ele,i)=>{
        return(
          <div key={i} className='blogs-card'>
          <div className='blogs-card-img'>

          </div>
          <div className='blogs-card-bottom-section'>
            <h6>Scaling Your Site</h6>
            <p className="m-0" >Learn about hosting built for scale and reliability.</p>
            <button className='blogs-buttons'>
              Read More
            </button>
          </div>
        </div>
        )
      })}
     
    </div>

  </div>
  )
}
