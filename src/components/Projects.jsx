import React from "react";
import Project from "../UI/project";
import LarrymarkMockup from "../assets/images/jpg/larrymark-mockup.jpg";
import OyinAraoyeMockup from "../assets/images/jpg/oyin-araoye.jpg";
import GirlsLeadMockup from "../assets/images/jpg/girls-lead-mockup.jpg";
import TlbEnergy from "../assets/images/jpg/tlbenergy-mockup.jpg";
import WildOasisMockup from "../assets/images/jpg/wild-oasis.jpg";
import XchangeRate from "../assets/images/jpg/xchange-rate-mockup.jpg";
import QRcodeGenerator from "../assets/images/jpg/qrcodegenerator.jpg";

import LarrymarkMockupwebp from "../assets/images/webp/larrymark-mockup.webp";
import OyinAraoyeMockupwebp from "../assets/images/webp/oyin-araoye.webp";
import GirlsLeadMockupwebp from "../assets/images/webp/girls-lead-mockup.webp";
import TlbEnergywebp from "../assets/images/webp/tlbenergy-mockup.webp";
import WildOasisMockupwebp from "../assets/images/webp/wild-oasis.webp";
import XchangeRatewebp from "../assets/images/webp/xchange-rate-mockup.webp";
import QRcodeGeneratorwebp from "../assets/images/webp/qrcodegenerator.webp";

import { projects } from "../data/projectdata";

const Projects = () => {
	return (
		<section className="py-24 bg-gray-800 bg-background dotted-background">
			<div className="max-w-7xl mx-auto">
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
					id={projects[0].id}
					webpImage={OyinAraoyeMockupwebp}
					jpgImage={OyinAraoyeMockup}
					title={
						<>
							Oyin Araoye <sup className="text-xs">TM</sup>
						</>
					}
					tags={["Brand Design", "Illustrator", "Figma"]}
					description="This is a description for project 1"
				/>
				<Project
					id={projects[0].id}
					webpImage={GirlsLeadMockupwebp}
					jpgImage={GirlsLeadMockup}
					title="Girls Lead"
					tags={["Framer"]}
					description="This is a description for project 1"
					links={[{ name: "Live site", url: "#" }]}
				/>
				<Project
					id={projects[0].id}
					webpImage={TlbEnergywebp}
					jpgImage={TlbEnergy}
					title="TLB Energy"
					tags={["HTML", "CSS", "JavaScript"]}
					description="This is a description for project 1"
					links={[{ name: "Live site", url: "#" }]}
				/>
				<div className=" mt-10">
					<h2 className="font-clash-display text-3xl">Side projects</h2>
				</div>
				<Project
					id={projects[0].id}
					webpImage={WildOasisMockupwebp}
					jpgImage={WildOasisMockup}
					title="The wild Oasis"
					tags={["ReactJS", "Styled-Components", "Supabase"]}
					description="This is a description for project 1"
					links={[
						{ name: "Live site", url: "#" },
						{ name: "Repo", url: "#" },
					]}
				/>
				<Project
					id={projects[0].id}
					webpImage={XchangeRatewebp}
					jpgImage={XchangeRate}
					title="Xchange Rate"
					tags={["ReactJS", "Tailwind", "NodeJS"]}
					description="This is a description for project 1"
					links={[
						{ name: "Live site", url: "#" },
						{ name: "Repo", url: "#" },
					]}
				/>
				<Project
					id={projects[0].id}
					webpImage={QRcodeGeneratorwebp}
					jpgImage={QRcodeGenerator}
					title="QRCode Generator"
					tags={["Flutter", "Dart"]}
					description="This is a description for project 1"
					links={[{ name: "Repo", url: "#" }]}
				/>
			</div>
		</section>
	);
};

export default Projects;
