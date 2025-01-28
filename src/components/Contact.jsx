import React from "react";
import { Button } from "../components/ui/button";

const Contact = () => {
	return (
		<section className="py-24 bg-gray-800 grid-background">
			<div className="max-w-7xl mx-auto bg-gradient-to-br from-primary to-darkblue p-16 rounded-2xl grid grid-rows-2 gap-28">
				<h2 className="font-clash-display text-3xl">Get in Touch</h2>

				<div className="flex mt-10 justify-between align-bottom">
					<p className="text-sm/6 text-grayLight max-w-lg">
						Whether you want to collaborate or just chat about your next big
						idea, I&apos;m just an email away. Let&apos;s connect!
					</p>
					<Button effect="shine" className="mt-6 bg-background ">
						Book a call
					</Button>
				</div>
			</div>
		</section>
	);
};

export default Contact;
