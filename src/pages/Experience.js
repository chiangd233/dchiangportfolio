import React from "react";
import {VerticalTimeline, VerticalTimelineElement} from 'react-vertical-timeline-component';
import "react-vertical-timeline-component/style.min.css"
import "../styles/experience.css"
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
                    <p className="a">- Designed preventative electrical improvements to one of the nation’s largest treatment plant to prevent future natural disaster damages and survive up to a 500-year flood.</p>
                    <p className="a">- Guided CAD team and structural/electrical engineers on design to accomplish 60% to 90% design plans in under three months</p>
                    <p className="a">- Adapted knowledge in multiple disciplines apart from water/wastewater, such as electrical design and site development to increase profitability in the team</p>
                    <p className="a">- Took lead for the civil team, after the sudden leaving of an employee, and completed submission deadlines in under a week.</p>
                </VerticalTimelineElement>
                <VerticalTimelineElement 
                    className="vertical-timeline-element--education"
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
                    <p className="a">Full-stack software engineering immersive student in an intensive, twelve-week, 450+ hour program focused on product development fundamentals, object-oriented programming, MVC frameworks, data modeling, and team collaboration strategies. Developed a portfolio of individual and group projects.</p>
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
                    <h4 className="vertical-timeline-element-subtitle">Water/Wastewater Engineer</h4>
                    <h4 className="vertical-timeline-element-subtitle">Red Bank, New Jersey</h4>
                    <p className="a">- Designed pump station improvements after damages from Hurricane Ida in under 3 weeks to prevent loss of sanitary service to hundreds of people.</p>
                    <p className="a">- Managed all associated permits with the NJDEP to reduce design period by one year and made transition smooth from design to construction</p>
                    <p className="a">- Utilized ArcGIS and AutoCAD to design plans and figures more efficiently, which brought professionalism and quality to our work.</p>
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
                    <p className="a">- Managed several remediation projects including site inspection and construction oversight.</p>
                    <p className="a">- Creating Preliminary Assessment, Site Investigation, Remedial Action, and Response Action Reports for each remedial site.</p>
                    <p className="a">- Used ArcGIS, Microsoft Office, and Adobe PDF to create figures, graphs and tables.</p>
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