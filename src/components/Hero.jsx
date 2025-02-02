import "../styles/custom.css";
import { Button } from "@/components/ui/button";
import Sociallinks from "../UI/Sociallinks";
import WaveReveal from "../components/animata/text/wave-reveal";

const Hero = () => {
	return (
		<section
			className="py-16 sm:py-24 lg:py-32 w-full flex flex-col items-center justify-center min-h-screen text-white text-center dotted-background px-4 sm:px-6 lg:px-8"
			id="hero"
		>
			<div className="bg-transparent flex flex-col items-center">
				<p className="border-2 border-primary font-clash-display text-sm sm:text-base bg-white text-background px-4 rounded-2xl mb-3">
					Front end developer & Brand designer
				</p>

				<h1 className="font-clash-display text-2xl sm:text-3xl lg:text-4xl font-bold">
					Crafting Digital Experiences Through Code & Design
					{/* <WaveReveal
						className="font-clash-display text-2xl sm:text-3xl lg:text-4xl font-bold"
						text="Crafting Digital Experiences Through Code & Design"
					/> */}
					
				</h1>
				<p className="font-manrope mt-4 text-sm sm:text-base lg:text-lg w-full max-w-xl text-grayLight">
					Hi, I&apos;m Dolapo. I transform ideas into seamless digital
					solutions, combining clean code with intuitive design to build
					memorable web and mobile experiences.
				</p>
				<Sociallinks />

				<Button effect="shineHover" className="mt-4 sm:mt-6">
					View Projects
				</Button>
			</div>
		</section>
	);
};

export default Hero;
