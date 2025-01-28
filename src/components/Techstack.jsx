import React from "react";

const TechStack = () => {
	return (
		<section className="py-24 bg-gray-800 bg-background">
			<div className="max-w-7xl mx-auto">
				<div className=" mb-10">
					<div className="flex gap-2">
						<h2 className="text-4xl">*</h2>
						<h2 className="font-clash-display text-lg text-primary">
							Technologies
						</h2>
					</div>
					<h2 className="font-clash-display text-3xl">My Tech Stack</h2>
				</div>
				<div className="grid grid-cols-4 gap-10">
					<h3 className="font-clash-display text-2xl text-orange-700 border-b-2 py-3">
						HTML
					</h3>
					<h3 className="font-clash-display text-2xl text-sky-700 border-b-2 py-3">
						CSS
					</h3>
					<h3 className="font-clash-display text-2xl text-yellow-400 border-b-2 py-3">
						JAVASCRIPT
					</h3>
					<h3 className="font-clash-display text-2xl text-sky-500 border-b-2 py-3">
						FLUTTER
					</h3>
					<h3 className="font-clash-display text-2xl text-sky-300 border-b-2 py-3">
						REACT
					</h3>
					<h3 className="font-clash-display text-2xl text-cyan-500 border-b-2 py-3">
						TAILWIND
					</h3>
					<h3 className="font-clash-display text-2xl text-orange-400 border-b-2 py-3">
						FIREBASE
					</h3>
					<h3 className="font-clash-display text-2xl text-white border-b-2 py-3">GITHUB</h3>
				</div>
			</div>
		</section>
	);
};

export default TechStack;
