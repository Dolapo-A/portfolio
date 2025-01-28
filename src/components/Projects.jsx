import React from "react";
import Project from "../UI/project";
import LarrymarkMockup from "../assets/images/larrymark-mockup.jpg";
import OyinAraoyeMockup from "../assets/images/oyin-araoye.jpg";
import GirlsLeadMockup from "../assets/images/girls-lead-mockup.jpg";
import TlbEnergy from "../assets/images/tlbenergy-mockup.jpg";
import WildOasisMockup from "../assets/images/wild-oasis.jpg";
import XchangeRate from "../assets/images/xchange-rate-mockup.jpg";
import QRcodeGenerator from "../assets/images/qrcodegenerator.jpg";

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
					image={LarrymarkMockup}
					title="Larrymark International"
					tags={["HTML", "CSS", "JavaScript"]}
					description="This is a description for project 1"
					links={[{ name: "Live site", url: "#" }]}
					link={["google.com", "hello.com"]}
				/>
				<Project
					image={OyinAraoyeMockup}
					title={
						<>
							Oyin Araoye <sup className="text-xs">TM</sup>
						</>
					}
					tags={["Brand Design", "Illustrator", "Figma"]}
					description="This is a description for project 1"
				/>
				<Project
					image={GirlsLeadMockup}
					title="Girls Lead"
					tags={["Framer"]}
					description="This is a description for project 1"
					links={[{ name: "Live site", url: "#" }]}
				/>
				<Project
					image={TlbEnergy}
					title="TLB Energy"
					tags={["HTML", "CSS", "JavaScript"]}
					description="This is a description for project 1"
					links={[{ name: "Live site", url: "#" }]}
				/>
				<div className=" mt-10">
					<h2 className="font-clash-display text-3xl">Side projects</h2>
				</div>
				<Project
					image={WildOasisMockup}
					title="The wild Oasis"
					tags={["ReactJS", "Styled-Components", "Supabase"]}
					description="This is a description for project 1"
					links={[
						{ name: "Live site", url: "#" },
						{ name: "Repo", url: "#" },
					]}
				/>
				<Project
					image={XchangeRate}
					title="Xchange Rate"
					tags={["ReactJS", "Tailwind", "NodeJS"]}
					description="This is a description for project 1"
					links={[
						{ name: "Live site", url: "#" },
						{ name: "Repo", url: "#" },
					]}
				/>
				<Project
					image={QRcodeGenerator}
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
