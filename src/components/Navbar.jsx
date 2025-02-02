import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const Navbar = () => {
	const [isOpen, setIsOpen] = useState(false);

	const toggleMenu = () => {
		setIsOpen(!isOpen);
	};

	return (
		<div className="fixed top-3 z-50 w-full flex justify-center">
			<div className="max-w-2xl w-11/12">
				<div className="px-3 py-2 backdrop-blur-xl bg-opacity-10 bg-white rounded-lg flex justify-between items-center text-grayLight">
					<h1 className="font-clash-display text-lg">Dolapo Araoye</h1>
					<nav className="hidden sm:flex gap-5 items-center">
						<a href="#services" className="text-sm">
							Services
						</a>
						<a href="#projects" className="text-sm">
							Projects
						</a>
						<a href="#testimonials" className="text-sm">
							Testimonials
						</a>
						<Button effect="shineHover">Book a call</Button>
					</nav>
					<button
						className={`sm:hidden flex items-center transition-transform duration-300 ${
							isOpen ? "rotate-90" : ""
						}`}
						onClick={toggleMenu}
					>
						{isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
					</button>
				</div>
			</div>

			<div
				className={`
					fixed top-16 z-50 w-full
					transform transition-all duration-300 ease-in-out
					
					${
						isOpen
							? "translate-y-0 opacity-100"
							: "-translate-y-4 opacity-0 pointer-events-none"
					}
				  `}
			>
				<div className="flex justify-center fixed w-full">
					<div className="max-w-2xl w-11/12">
						<div className="sm:hidden backdrop-blur-xl bg-opacity-10 bg-white rounded-lg px-3 py-6 flex flex-col items-center gap-6 text-grayLight ">
							<a href="#services" className="py-2 text-sm">
								Services
							</a>
							<a href="#projects" className="py-2 text-sm">
								Projects
							</a>
							<a href="#testimonials" className="py-2 text-sm">
								Testimoials
							</a>
							<Button effect="shineHover">Book a call</Button>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Navbar;
