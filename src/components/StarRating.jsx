import React, { useState } from 'react'

function StarRating({ starNum = 5 }) {
        let starArr = new Array(starNum).fill(0);
        const [starIndex , setStarIndex] = useState(0)
        const [hoverIndex , setHoverIndex] = useState(0)

    return (
        <div className='container'>
            {
                starArr.map((_, index) => <span onClick={()=> setStarIndex(index+1)} onMouseOver={() => setHoverIndex(index + 1)} className={`star ${hoverIndex===0 && index < starIndex ||  index < hoverIndex ? "gold" :""}`} onMouseLeave={()=> setHoverIndex(0)} key={index}>&#9733;   </span>)
            }
        </div>
    )
}

export default StarRating