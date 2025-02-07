import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const Navbarprojects = () => {
	const [isOpen, setIsOpen] = useState(false);

	const toggleMenu = () => {
		setIsOpen(!isOpen);
	};

	return (
		<div className="fixed top-3 z-50 w-full flex justify-center">
			<div className="max-w-2xl w-11/12">
				<div className="px-3 py-2 backdrop-blur-3xl bg-opacity-50 bg-darkGray rounded-lg flex justify-between items-center text-grayLight">
					<a href="/">
						<h1 className="font-clash-display text-lg">Dolapo Araoye</h1>
					</a>
					<nav className="sm:flex gap-5 items-center">
						
						<a href="#contact">
							<Button effect="shineHover">Contact</Button>
						</a>
					</nav>
					
				</div>
			</div>

			
		</div>
	);
};

export default Navbarprojects;
