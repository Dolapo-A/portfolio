const TechStack = () => {
	return (
		<section className="py-16 sm:py-24 bg-gray-800 bg-background" id="techstack">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<div className="mb-8 sm:mb-10">
					<div className="flex gap-2">
						<h2 className="text-3xl sm:text-4xl">*</h2>
						<h2 className="font-clash-display text-base sm:text-lg text-primary">
							Skill set
						</h2>
					</div>
					<h2 className="font-clash-display text-2xl sm:text-3xl">
						My Tech Stack
					</h2>
				</div>
				<div className="grid grid-cols-2 sm:grid-cols-4 gap-6 sm:gap-10">
					<h3 className="font-clash-display text-xl sm:text-2xl text-orange-700 border-b-2 py-2 sm:py-3">
						HTML
					</h3>
					<h3 className="font-clash-display text-xl sm:text-2xl text-sky-700 border-b-2 py-2 sm:py-3">
						CSS
					</h3>
					<h3 className="font-clash-display text-xl sm:text-2xl text-yellow-400 border-b-2 py-2 sm:py-3">
						JAVASCRIPT
					</h3>
					<h3 className="font-clash-display text-xl sm:text-2xl text-sky-500 border-b-2 py-2 sm:py-3">
						FLUTTER
					</h3>
					<h3 className="font-clash-display text-xl sm:text-2xl text-sky-300 border-b-2 py-2 sm:py-3">
						REACT
					</h3>
					<h3 className="font-clash-display text-xl sm:text-2xl text-cyan-500 border-b-2 py-2 sm:py-3">
						TAILWIND
					</h3>
					<h3 className="font-clash-display text-xl sm:text-2xl text-orange-400 border-b-2 py-2 sm:py-3">
						FIREBASE
					</h3>
					<h3 className="font-clash-display text-xl sm:text-2xl text-white border-b-2 py-2 sm:py-3">
						GIT
					</h3>
				</div>

				{/* <div className="mt-8 sm:mt-10">
					<h2 className="font-clash-display text-2xl sm:text-3xl">
						My Tech Stack
					</h2>
				</div> */}
			</div>
		</section>
	);
};

export default TechStack;
