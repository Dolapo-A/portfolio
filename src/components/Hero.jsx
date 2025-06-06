import "../styles/custom.css";
import { Button } from "@/components/ui/button";
import Sociallinks from "../UI/Sociallinks";
import { ArrowDownRight } from "lucide-react";

const Hero = () => {
	return (
		<section
			className="py-16 sm:py-24 lg:py-32 w-full flex flex-col items-center justify-center min-h-screen text-white text-center dotted-background px-4 sm:px-6 lg:px-8"
			id="hero"
		>
			<div className="bg-transparent flex flex-col items-start">
				{/* <p className="border-2 border-primary font-clash-display text-sm sm:text-base card-gradient text-white px-4 rounded-2xl mb-3">
					Front-end developer
				</p> */}

				<h1 className="font-clash-display text-2xl sm:text-3xl lg:text-4xl font-bold text-start">
					Building Intuitive Digital Experiences
				</h1>
				<p className="font-manrope mt-4 text-sm sm:text-base lg:text-lg w-full max-w-xl text-grayLight text-start">
					Hi, I’m <strong className="text-white text-base">Dolapo</strong>. I
					specialize in building seamless web and mobile experiences that
					combine clean code with intuitive design, helping your brand stand out
					in the digital space.
				</p>
				<Sociallinks />

				<div className="flex gap-4">
					<a href="#projects">
						<Button effect="shineHover" className="mt-4 sm:mt-6">
							Explore my works
						</Button>
					</a>
					<a href="#contact">
						<Button
							effect="expandIcon"
							icon={ArrowDownRight}
							iconPlacement="right"
							className="mt-4 sm:mt-6 card-gradient border-2 border-primary"
						>
							Get in touch
						</Button>
					</a>
				</div>
			</div>
		</section>
	);
};

export default Hero;
