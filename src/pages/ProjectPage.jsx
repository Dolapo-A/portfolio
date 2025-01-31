// src/pages/ProjectPage.jsx
import { useParams } from "react-router";
import { projects } from "../data/projectdata";
import Footer from "../components/Footer";
import { Button } from "@/components/ui/button";



const ProjectPage = () => {
	const { id } = useParams();
	const project = projects.find((p) => p.id === id);

	if (!project) {
		return <div>Project not found</div>;
	}

	return (
		<>
			<section className="max-w-7xl mx-auto px-6 py-24">
				<div className="flex justify-between border-b-2 py-2 mb-6 border-b-primary">
					<h1 className="font-clash-display text-3xl font-bold">
						{project.title}
					</h1>
					<div className="flex gap-2">
						{project.links.map((linkItem, index) => (
							<Button
								key={index}
								className="text-white"
								variant="link"
								effect="hoverUnderline"
							>
								<a href={linkItem.url}>{linkItem.name}</a>
							</Button>
						))}
					</div>
				</div>

				<div className="grid lg:grid-cols-[3fr_1fr] lg:gap-48">
					<div className="flex flex-col gap-9">
						<div>
							<h2 className="font-clash-display text-2xl mb-2">Overview</h2>
							<p className="text-base/6 text-gray">{project.fullDescription}</p>
						</div>

						<div>
							<h2 className="font-clash-display text-2xl mb-2">Tech Stack</h2>
							<div className="flex flex-wrap gap-3">
								{project.techStack.map((tech, index) => (
									<span key={index} className="text-base/6 text-gray">
										{tech}
									</span>
								))}
							</div>
						</div>

						<div>
							<h2 className="font-clash-display text-2xl mb-2">
								Challenges & Solutions
							</h2>
							<p className="text-base/6 text-gray mb-4">{project.challenges}</p>
							<p className="text-base/6 text-gray">{project.solutions}</p>
						</div>

						<div>
							<h2 className="font-clash-display text-2xl mb-2">Outcome</h2>
							<p className="text-base/6 text-gray">{project.outcome}</p>
						</div>
					</div>

					<div className="flex flex-col gap-9">
						<div>
							<h2 className="font-clash-display text-2xl mb-2">
								Client&apos;s Name
							</h2>
							<p className="text-base/6 text-gray">{project.clientName}</p>
						</div>
						<div>
							<h2 className="font-clash-display text-2xl mb-2">Project Type</h2>
							<p className="text-base/6 text-gray">{project.ProjectType}</p>
						</div>
						<div>
							<h2 className="font-clash-display text-2xl mb-2">Project Year</h2>
							<p className="text-base/6 text-gray">{project.projectYear}</p>
						</div>
						{/* {project.links.map((link, index) => (
							<a
								key={index}
								href={link.url}
								className="px-4 py-2 text-base/6 text-gray"
								target="_blank"
								rel="noopener noreferrer"
							>
								{link.name}
							</a>
						))} */}
					</div>
				</div>
				<div className="mt-9">
					<h2 className="font-clash-display text-2xl mb-2">Snapshots</h2>
					<div className="grid grid-cols-2 gap-9">
						<picture>
							<source srcSet={project.webpImage} type="image/webp" />
							<img
								className="w-full h-96 object-cover"
								src={project.image}
								alt={project.title}
							/>
						</picture>
						<picture>
							<source srcSet={project.webpImage} type="image/webp" />
							<img
								className="w-full h-96 object-cover"
								src={project.image}
								alt={project.title}
							/>
						</picture>
						<picture>
							<source srcSet={project.webpImage} type="image/webp" />
							<img
								className="w-full h-96 object-cover"
								src={project.image}
								alt={project.title}
							/>
						</picture>
						<picture>
							<source srcSet={project.webpImage} type="image/webp" />
							<img
								className="w-full h-96 object-cover"
								src={project.image}
								alt={project.title}
							/>
						</picture>
					</div>
				</div>
				<div className="flex flex-col mt-6">
					<h2 className="font-clash-display text-2xl mb-2">Overview</h2>
					<p className="text-base/6 text-gray">{project.fullDescription}</p>
				</div>
			</section>
			<Footer />
		</>
	);
};

export default ProjectPage;
