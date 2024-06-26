import React from "react"
import { list } from "../../data/Data"

const RecentCard = () => {
  return (
    <>
      <div className='content grid3 mtop'>
        {list.map((val, index) => {
          const { cover, category,name} = val
          return (
            <div className="box shadow" key={index}>
              <div className="img">
                <img src={cover} alt="" style={{
                  height:240
                }}/>
              </div>
              <div className="text">
                <div className="category flex">
                  <span
                    style={{
                      background:
                        category === "Acquatique" ? "#25b5791a" : "#ff98001a",
                      color: category === "Acquatique" ? "#25b579" : "#ff9800",
                    }}
                  >
                    {category}
                  </span>
                  <i className="fa fa-heart"></i>
                </div>
                <h4>{name}</h4>
                <p>
                  
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </>
  )
}

export default RecentCard
