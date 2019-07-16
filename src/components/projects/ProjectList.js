import React from 'react'
import ProjectSummary from './ProjectSummary'
import { Link } from 'react-router-dom'

const ProjectList = ({projects}) => {
	return(
		<div className="project-list section">
			{ projects && projects.map(project => { 	// && 연산자를 넣은 이유는 projects가 존재하면 오른쪽의 함수를 진행하겠다의 의미
				return (
					<Link to = { '/project/' + project.id } key={project.id}  >
						<ProjectSummary project= {project} />
					</Link>
				)
			})} 
			
		</div>
	)
}

export default ProjectList