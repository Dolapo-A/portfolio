import React from "react";
import Project from "../UI/Project";

import { projects } from "../data/projectdata";

const Projects = () => {
	return (
		<section className="py-16 md:py-24 md:px-6 bg-gray-800 bg-background dotted-background" id="projects">
			<div className="max-w-7xl  px-4 sm:px-6 lg:px-8 mx-auto">
				<div className=" mb-10">
					<div className="flex gap-2">
						<h2 className="text-4xl">*</h2>
						<h2 className="font-clash-display text-lg text-primary">
							Projects
						</h2>
					</div>
					<h2 className="font-clash-display text-3xl">
						Featured projects I’ve worked on{" "}
					</h2>
				</div>
				<Project
					id={projects[0].id}
					webpImage={projects[0].webpImage}
					jpgImage={projects[0].jpgImage}
					title={projects[0].title}
					tags={projects[0].tags}
					description={projects[0].description}
					links={projects[0].links}
				/>
				<Project
					id={projects[1].id}
					webpImage={projects[1].webpImage}
					jpgImage={projects[1].jpgImage}
					title={projects[1].title}
					tags={projects[1].tags}
					description={projects[1].description}
				/>
				<Project
					id={projects[2].id}
					webpImage={projects[2].webpImage}
					jpgImage={projects[2].jpgImage}
					title={projects[2].title}
					tags={projects[2].tags}
					description={projects[2].description}
					links={projects[2].links}
				/>
				<Project
					id={projects[3].id}
					webpImage={projects[3].webpImage}
					jpgImage={projects[3].jpgImage}
					title={projects[3].title}
					tags={projects[3].tags}
					description={projects[3].description}
					links={projects[3].links}
				/>
				<div className=" mt-10">
					<h2 className="font-clash-display text-3xl">Side projects</h2>
				</div>
				<Project
					id={projects[4].id}
					webpImage={projects[4].webpImage}
					jpgImage={projects[4].jpgImage}
					title={projects[4].title}
					tags={projects[4].tags}
					description={projects[4].description}
					links={projects[4].links}
				/>
				<Project
					id={projects[5].id}
					webpImage={projects[5].webpImage}
					jpgImage={projects[5].jpgImage}
					title={projects[5].title}
					tags={projects[5].tags}
					description={projects[5].description}
					links={projects[5].links}
				/>
				<Project
					id={projects[6].id}
					webpImage={projects[6].webpImage}
					jpgImage={projects[6].jpgImage}
					title={projects[6].title}
					tags={projects[6].tags}
					description={projects[6].description}
					links={projects[6].links}
				/>
			</div>
		</section>
	);
};

export default Projects;
