import { Button } from "../components/ui/button";

const Contact = () => {
	return (
		<section
			className="py-16 sm:py-24 bg-gray-800 grid-background px-4 sm:px-6 lg:px-8"
			id="contact"
		>
			<div className="max-w-7xl mx-auto bg-gradient-to-br from-darkblue to-primary p-8 sm:p-16 lg:p-20 rounded-2xl grid grid-rows-1 sm:grid-rows-2 gap-14 sm:gap-28">
				<h2 className="font-clash-display text-2xl sm:text-3xl">
					Get in Touch
				</h2>

				<div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mt-6 sm:mt-10">
					<p className="text-xs sm:text-sm text-grayLight max-w-lg">
						Whether you want to collaborate or just chat about your next big
						idea, I&apos;m just an email away. Let&apos;s connect!
					</p>
					<a href="mailto:dolapoaraoye401@gmail.com">
						<Button effect="shineHover" className="mt-4 sm:mt-0 bg-background">
							Say hi
						</Button>
					</a>
				</div>
			</div>
		</section>
	);
};

export default Contact;
