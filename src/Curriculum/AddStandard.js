import React from 'react'

const AddStandard = () => {
  return (
// Add Standard part for understanding
    <div className="enter-standard">
      <form>
        <div className="standard-row">
          <div className="standard-col">
            <div className="tooltip-wrapper">
              <i className="fa-solid fa-arrows-up-down-left-right"/>
              <span className="tooltiptext">Move</span>
            </div> 
            <div className="tooltip-wrapper"> 
              <i className="fa-solid fa-arrow-left"/>
              <span className="tooltiptext">Outdent</span>
            </div>
            <div className="tooltip-wrapper">
              <i className="fa-solid fa-arrow-right"/>
              <span className="tooltiptext">Indent</span>
            </div> 
            <div className="tooltip-wrapper">
              <i className="fa-solid fa-trash-can"/>
              <span className="tooltiptext">Delete</span>
            </div> 
          </div>
          <div className="standard-col">
            <div className="level"></div>
          </div>
          <div className="standard-col">
            <input className="chapter" type="text" placeholder="Enter the required standard. E.g Algebra " required=""/>
          </div>
        </div>
        <div>
          <button type="submit" className="add-standard">Add a standard ✚</button>
        </div>
      </form>
    </div>
  )
}

export default AddStandard