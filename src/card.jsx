import React from 'react'
import {Bookmark} from 'lucide-react'


const Card = (prop) => {
  console.log(prop.company);  

    return (
    <div className="parent">
            <div className="container">
                <div className="top">
                    <img className="image" src={prop.brandLogo} alt="Card Image" />
                    <button className='save'>
                        Save
                        <span>
                            <Bookmark size={15} />
                        </span>
                    </button>
                </div>
                <div className='main'>
                    <h3>{prop.company}  {prop.datePosted}</h3>                   
                    <h2> {prop.post}</h2>
                    <div className='part'>
                        <div className='part1'>{prop.tag1}</div>
                        <div className="part2">{prop.tag2}</div>
                    </div>
                </div>
                <div className="bottom">
                    <p className='pay'>${prop.pay}/hr <br /> {prop.location}</p>
                    <button className='btn'>Apply Now</button>
                </div>
            </div>
        </div>
    )
}

export default Card
