import { Button } from "../components/ui/button";
import Contactform from "../UI/Contactform";

const Contact = () => {
	return (
		<section
			className="py-16 sm:py-24 bg-gray-800 grid-background px-4 sm:px-6 lg:px-8 "
			id="contact"
		>
			<div className="max-w-7xl mx-auto bg-gradient-to-br from-primaryDark to-darkblue p-9 sm:p-10 lg:p-12 rounded-2xl gap-28 sm:gap-60">
				<div className="mx-auto max-w-md">
					<h2 className="font-clash-display text-2xl sm:text-3xl mb-2">
						Get in Touch
					</h2>
					<p className="text-sm text-grayLight max-w-lg mb-3">
						Whether you want to collaborate or just chat about your next big
						idea, I&apos;m just an email away. Let&apos;s connect!
					</p>
					{/* <a href="mailto:dolapoaraoye401@gmail.com">
						<Button effect="shineHover" className="mt-4 sm:mt-0 bg-background">
							Say hi
						</Button>
					</a> */}
					<Contactform />
				</div>
			</div>
		</section>
	);
};

export default Contact;
