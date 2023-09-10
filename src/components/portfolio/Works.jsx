import React, { useEffect, useState } from "react";
import { projectsData, projectsNav } from "./Data";
import WorkItems from "./WorkItems";

function Works(){
    const [item, setItem] = useState({name: "all"});
    const [projects, setProjects] = useState([]);
    const [active, setActive] = useState(0);

    useEffect(() => {
        if(item.name === "all"){
            setProjects(projectsData);
        }
        else{
            const newProjects = projectsData.filter((project) => {
                return project.category.toLowerCase() === item.name ;
            });
            setProjects(newProjects);
        }
    },[item])

    const handleClick = (e, idx) => {
        setItem({name:e.target.textContent.toLowerCase() });
        setActive(idx);
    }

    return(
        <div>
            <div className="work__filters">
                {projectsNav.map((item,idx) => {
                    return (
                        <span onClick={(e)=>{handleClick(e,idx)}} className={active===idx?"work__item active-work":"work__item"} key={idx}>{item.name}</span>
                    )
                })}
            </div>
            <div className="work__container container grid">
                {projects.map((item) => {
                    return <WorkItems item={item} key={item.id} />
                })}
            </div>
            
        </div>
    )
}

export default Works;