import React from 'react';

const CurrAction = () => {
  return (
    // heading and subheading part for understanding
  <div className="subjects-wrapper">
    <div className="subjects-heading">
      <div class="heading-wrapper">
        <div class="main-heading">Actions</div>
        <div class="sub-heading">Move, Indent, Outdent, Delete </div>
        </div>
      <div class="heading-wrapper">
          <div class="main-heading">Standard</div>
          <div class="sub-heading">The text of the standard</div>
      </div>
    </div>
    <div className="subject-body">
        <div className="subject-box" >
            <div className="subject-row">
                <div className="subject-col">
                    <div className="tooltip-wrapper">
                      <i className="fa-solid fa-arrows-up-down-left-right cursor-pointer"/>
                       <span className="tooltiptext">Move</span>
                    </div>
                    <div className="tooltip-wrapper">
                      <i className="fa-solid fa-arrow-left cursor-pointer"/>
                       <span className="tooltiptext">Outdent</span>
                    </div>
                    <div className="tooltip-wrapper">
                      <i className="fa-solid fa-arrow-right cursor-pointer"/>
                       <span className="tooltiptext">Indent</span>
                    </div>
                    <div className="tooltip-wrapper">
                      <i className="fa-solid fa-trash-can cursor-pointer"/>
                       <span className="tooltiptext">Delete</span>
                    </div>
                </div>
                <div className="subject-col">
                  <div className="level"></div>
                </div>
                <div className="subject-col">
                  <input className="chapter" type="text"/>
                </div>
            </div>
            <div className="heading-box">
                <div className="heading-row">
                  <div className="heading-col">
                    <div className="tooltip-wrapper">
                    <i class="fa-solid fa-arrows-up-down-left-right"/>
                      <span className="tooltiptext">Move</span>
                    </div>
                    <div className="tooltip-wrapper">
                    <i class="fa-solid fa-arrow-left"/>
                         <span className="tooltiptext">Outdent</span>
                    </div>
                    <div className="tooltip-wrapper"> 
                    <i class="fa-solid fa-arrow-right"/>
                      <span className="tooltiptext">Indent</span>
                    </div>
                    <div className="tooltip-wrapper">
                    <i class="fa-solid fa-trash-can"/>
                        <span className="tooltiptext">Delete</span>
                    </div>
                  </div>
                  <div className="heading-col">
                      <div className="level" ></div>
                  </div>
                  <div className="heading-col">
                    <input className="heading" type="text" />
                  </div>
                </div>
                <div className="sub-heading-box">
                  <div className="sub-heading-row">
                    <div className="sub-heading-col">
                      <div className="tooltip-wrapper">
                        <i class="fa-solid fa-arrows-up-down-left-right"/>
                        <span className="tooltiptext">Move</span>
                      </div>
                      <div className="tooltip-wrapper">
                        <i class="fa-solid fa-arrow-left"/>
                        <span className="tooltiptext">Outdent</span>
                      </div>
                      <div className="tooltip-wrapper"> 
                        <i class="fa-solid fa-arrow-right"/>
                        <span className="tooltiptext">Indent</span>
                      </div>
                      <div className="tooltip-wrapper">
                        <i class="fa-solid fa-trash-can"/>
                        <span className="tooltiptext">Delete</span>
                      </div>
                    </div>
                    <div className="sub-heading-col">
                      <div className="level" ></div>
                    </div>
                    <div className="sub-heading-col">
                      <input className="sub-heading" type="text" />
                    </div>
                  </div>
                </div>
            </div>
    </div>
  </div>
  </div>
  )
}

export default CurrAction;