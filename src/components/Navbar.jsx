import { Button } from "@/components/ui/button";

const Navbar = () => {
	return (
		<div className="px-4 sm:px-6 lg:px-8">
			<div className="fixed top-10 left-0 right-0 z-50 max-w-3xl mx-auto  backdrop-blur-xl bg-opacity-10 bg-white  px-5 py-3 rounded-3xl flex justify-between items-center text-grayLight">
				<h1 className="font-clash-display text-xl ">Dolapo Araoye</h1>
				<nav className="flex gap-5 items-center">
					<a href="#projects" className="">
						Projects
					</a>
					<a href="#techstack" className="">
						Techstack
					</a>
					<Button effect="shine">Book a call</Button>
				</nav>
			</div>
		</div>
	);
};

export default Navbar;
