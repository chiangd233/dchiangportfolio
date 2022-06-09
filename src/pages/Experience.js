import React from "react";
import {VerticalTimeline, VerticalTimelineElement} from 'react-vertical-timeline-component';
import "react-vertical-timeline-component/style.min.css"
import {TbSchool} from "react-icons/tb"
import {MdWork} from "react-icons/md"

function Experience() {
    return (
        <div className="experience">
            <VerticalTimeline lineColor="#0e387a">
                <VerticalTimelineElement 
                    className="vertical-timeline-element--work"
                    layout = {'2-columns'}
                    contentStyle={{borderTop: '7px solid #0e387a'}}
                    contentArrowStyle={{borderRight:'7px solid white'}}
                    date="January 2022 - Present"
                    iconStyle={{background: "#0e387a", color: "#fff"}}
                    icon={<MdWork />}
                >
                    <h3 className="vertical-timeline-element-title">Black and Veatch</h3>
                    <h4 className="vertical-timeline-element-subtitle">Civil Engineer - Water/Wastewater</h4>
                    <h4 className="vertical-timeline-element-subtitle">New York City, New York</h4>
                </VerticalTimelineElement>
                <VerticalTimelineElement 
                    className="vertical-timeline-element--work"
                    layout = {'2-columns'}
                    contentStyle={{borderTop: '7px solid #C21807'}}
                    contentArrowStyle={{borderRight:'7px solid white'}}
                    date="November 2021 - May 2022"
                    iconStyle={{background: "#C21807", color: "#fff"}}
                    icon={<TbSchool />}
                >
                    <h3 className="vertical-timeline-element-title">General Assembly</h3>
                    <h4 className="vertical-timeline-element-subtitle">Software Engineering Immersive Online Flex</h4>
                    <h4 className="vertical-timeline-element-subtitle">New York City, New York</h4>
                </VerticalTimelineElement>
                <VerticalTimelineElement 
                    className="vertical-timeline-element--work"
                    layout = {'2-columns'}
                    contentStyle={{borderTop: '7px solid #0e387a'}}
                    contentArrowStyle={{borderRight:'7px solid white'}}
                    date="November 2018 - December 2021"
                    iconStyle={{background: "#0e387a", color: "#fff"}}
                    icon={<MdWork />}
                >
                    <h3 className="vertical-timeline-element-title">Colliers Engineering and Design, Inc.</h3>
                    <h4 className="vertical-timeline-element-subtitle">Water Wastewater Engineer</h4>
                    <h4 className="vertical-timeline-element-subtitle">Red Bank, New Jersey</h4>
                </VerticalTimelineElement>
                <VerticalTimelineElement 
                    className="vertical-timeline-element--work"
                    layout = {'2-columns'}
                    contentStyle={{borderTop: '7px solid #0e387a'}}
                    contentArrowStyle={{borderRight:'7px solid white'}}
                    date="May 2018 - October 2018"
                    iconStyle={{background: "#0e387a", color: "#fff"}}
                    icon={<MdWork />}
                >
                    <h3 className="vertical-timeline-element-title">Prestige Environmental, Inc.</h3>
                    <h4 className="vertical-timeline-element-subtitle">Environmental Engineer</h4>
                    <h4 className="vertical-timeline-element-subtitle">Somerset, New Jersey</h4>
                </VerticalTimelineElement>
                <VerticalTimelineElement 
                    className="vertical-timeline-element--education"
                    layout = {'2-columns'}
                    contentStyle={{borderTop: '7px solid #C21807'}}
                    contentArrowStyle={{borderRight:'7px solid white'}}
                    date="September 2013 - August 2018"
                    iconStyle={{background: "#C21807", color: "#fff"}}
                    icon={<TbSchool />}
                >
                    <h3 className="vertical-timeline-element-title">Rutgers University - New Brunswick</h3>
                    <h4 className="vertical-timeline-element-subtitle">Bachelor of Science in BioEnvironmental Engineering</h4>
                    <h4 className="vertical-timeline-element-subtitle">New Brunswick, New Jersey</h4>
                </VerticalTimelineElement>
                <VerticalTimelineElement 
                    className="vertical-timeline-element--education"
                    layout = {'2-columns'}
                    contentStyle={{borderTop: '7px solid #C21807'}}
                    contentArrowStyle={{borderRight:'7px solid white'}}
                    date="September 2004 - June 2013"
                    iconStyle={{background: "#C21807", color: "#fff"}}
                    icon={<TbSchool />}
                >
                    <h3 className="vertical-timeline-element-title">International Bilingual School in Hsinchu</h3>
                    <h4 className="vertical-timeline-element-subtitle">Grade 4 to Grade 12</h4>
                    <h4 className="vertical-timeline-element-subtitle">Hsinchu, Taiwan</h4>
                </VerticalTimelineElement>
            </VerticalTimeline>
        </div>
    )
}

export default Experience;