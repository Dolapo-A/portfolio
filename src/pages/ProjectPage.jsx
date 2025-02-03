// src/pages/ProjectPage.jsx
import { useParams } from "react-router";
import { projects } from "../data/projectdata";
import Footer from "../components/Footer";
import { Button } from "@/components/ui/button";
import Navbar from "../components/Navbar";

const ProjectPage = () => {
	const { id } = useParams();
	const project = projects.find((p) => p.id === id);

	if (!project) {
		return <div>Project not found</div>;
	}

	return (
		<>
			<Navbar/>
			<section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 st:py-24 lg:pt-36">
				<div className="flex justify-between border-b-2 py-2 mb-6 border-b-primary">
					<h1 className="font-clash-display text-2xl sm:text-3xl lg:text-4xl font-bold">
						{project.title}
					</h1>
					<div className="flex gap-2">
						{project.links.map((linkItem, index) => (
							<Button
								key={index}
								className="text-white text-sm sm:text-base lg:text-lg py-1 px-1"
								variant="link"
								effect="hoverUnderline"
							>
								<a
									href={linkItem.url}
									target="_blank"
									rel="noopener noreferrer"
								>
									{linkItem.name}
								</a>
							</Button>
						))}
					</div>
				</div>

				<div className="grid grid-cols-1 lg:grid-cols-[3fr_1fr] gap-6 lg:gap-48">
					<div className="flex flex-col gap-6 sm:gap-9">
						<div>
							<h2 className="font-clash-display text-xl sm:text-2xl mb-2">Overview</h2>
							<p className="text-sm sm:text-base text-gray">{project.fullDescription}</p>
						</div>

						<div>
							<h2 className="font-clash-display text-xl sm:text-2xl mb-2">Tech Stack</h2>
							<div className="flex flex-wrap gap-3">
								{project.techStack.map((tech, index) => (
									<span key={index} className="text-sm sm:text-base text-gray">
										{tech}
									</span>
								))}
							</div>
						</div>

						<div>
							<h2 className="font-clash-display text-xl sm:text-2xl mb-2">
								Challenges & Solutions
							</h2>
							<p className="text-sm sm:text-base text-gray mb-4">{project.challenges}</p>
							<p className="text-sm sm:text-base text-gray">{project.solutions}</p>
						</div>

						<div>
							<h2 className="font-clash-display text-xl sm:text-2xl mb-2">Outcome</h2>
							<p className="text-sm sm:text-base text-gray">{project.outcome}</p>
						</div>
					</div>

					<div className="flex flex-col gap-6 sm:gap-9">
						<div>
							<h2 className="font-clash-display text-xl sm:text-2xl mb-2">
								Client&apos;s Name
							</h2>
							<p className="text-sm sm:text-base text-gray">{project.clientName}</p>
						</div>
						<div>
							<h2 className="font-clash-display text-xl sm:text-2xl mb-2">Project Type</h2>
							<p className="text-sm sm:text-base text-gray">{project.ProjectType}</p>
						</div>
						<div>
							<h2 className="font-clash-display text-xl sm:text-2xl mb-2">Project Year</h2>
							<p className="text-sm sm:text-base text-gray">{project.projectYear}</p>
						</div>
						
					</div>
				</div>
				<div className="mt-6 sm:mt-9 pb-24">
					<h2 className="font-clash-display text-xl sm:text-2xl mb-2">Snapshots</h2>
					<div className="grid sm:grid-cols-2 gap-6 sm:gap-9">
					{project.images.map((img, index) => (
                            <picture key={index}>
                                <source srcSet={img.webpImage} type="image/webp" />
                                <img
                                    className="w-full h-64 sm:h-80 lg:h-96 object-cover"
                                    src={img}
                                    alt={project.title}
                                />
                            </picture>
                        ))}
						{/* <picture>
							<source srcSet={project.webpImage} type="image/webp" />
							<img
								className="w-full h-64 sm:h-80 lg:h-96 object-cover"
								src={project.images[0].image}
								alt={project.title}
							/>
						</picture>
						<picture>
							<source srcSet={project.webpImage} type="image/webp" />
							<img
								className="w-full h-64 sm:h-80 lg:h-96 object-cover"
								src={project.image}
								alt={project.title}
							/>
						</picture>
						<picture>
							<source srcSet={project.webpImage} type="image/webp" />
							<img
								className="w-full h-64 sm:h-80 lg:h-96 object-cover"
								src={project.image}
								alt={project.title}
							/>
						</picture>
						<picture>
							<source srcSet={project.webpImage} type="image/webp" />
							<img
								className="w-full h-64 sm:h-80 lg:h-96 object-cover"
								src={project.image}
								alt={project.title}
							/>
						</picture> */}
					</div>
				</div>
				{/* <div className="flex flex-col mt-4 sm:mt-6 pb-24">
					<h2 className="font-clash-display text-xl sm:text-2xl mb-2">Overview</h2>
					<p className="text-sm sm:text-base text-gray">{project.fullDescription}</p>
				</div> */}
			</section>
			<Footer />
		</>
	);
};

export default ProjectPage;
