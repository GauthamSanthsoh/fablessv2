import React from 'react'
import './Programs.css'
import prog_1 from '../../assets/camp.jpg'
import prog_2 from '../../assets/campus.jpg'
import prog_3 from '../../assets/eco.jpg'
import prog_4 from '../../assets/fact.jpg'
import prog_5 from '../../assets/inc.jpg'
import program_icon_1 from '../../assets/campus-events.png'
import program_icon_2 from '../../assets/graduation.png'
import program_icon_3 from '../../assets/businessman.png'
import program_icon_4 from '../../assets/factory.png'
import program_icon_5 from '../../assets/incubator.png'


const Programs = () => {
  return (
    <div className='programs'>
        <div className="program">
            <img src={prog_3} alt="" />
            <div className="caption">
                <img src={program_icon_1} alt="" />
                <p>campus chapter </p>
            </div>
        </div>
        <div className="program">
            <img src={prog_1} alt="" />
            <div className="caption">
                <img src={program_icon_2} alt="" />
                <p>Universities</p>
            </div>
        </div>
        <div className="program">
            <img src={prog_4} alt="" />
            <div className="caption">
                <img src={program_icon_3} alt="" />
                <p>professional bodies </p>
            </div>
        </div>
        <div className="program">
            <img src={prog_2} alt="" />
            <div className="caption">
                <img src={program_icon_4} alt="" />
                <p>Collaborating companies </p>
            </div>
        </div>
        <div className="program">
            <img src={prog_5} alt="" />
            <div className="caption">
                <img src={program_icon_5} alt="" />
                <p>Incubator </p>
            </div>
        </div>
    </div>
  )
}

export default Programs
