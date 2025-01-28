import "../styles/custom.css";
import { Button } from "@/components/ui/button";
import Sociallinks from "../UI/Sociallinks";

const Hero = () => {
	return (
		<section className="w-full flex flex-col items-center justify-center h-screen text-white text-center  dotted-background">
			<div className="bg-transparent flex flex-col items-center">
				<p className="border-4 border-primary font-clash-display text-base bg-white text-background px-3 py-0 rounded-2xl mb-3">
					Front end developer & Brand designer
				</p>
				<h1 className="font-clash-display text-4xl font-bold">
					Crafting Digital Experiences Through Code & Design{" "}
				</h1>
				<p className=" font-manrope mt-4 text-base w-full max-w-xl text-grayLight">
					Hi, I&apos;m Dolapo. I transform ideas into seamless digital
					solutions, combining clean code with intuitive design to build
					memorable web and mobile experiences.
				</p>
				<Sociallinks/>

				<Button effect="shine" className="mt-6">View Projects</Button>
			</div>
		</section>
	);
};

export default Hero;
