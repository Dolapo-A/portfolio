import React from "react";
import TestimonialCard from "../UI/TestimonialCard";
import {
	Carousel,
	CarouselContent,
	CarouselItem,
	CarouselNext,
	CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

import Oyinimage from "../assets/images/jpg/oyin-araoye.jpg";

const Testimonials = () => {
	const testimonials = [
		{
			pofileimage: Oyinimage,
			name: "Oyin Araoye",
			position: "CEO @OyinAraoye",
			feedback:
				"Working with Dolapo for our brand was seamless. Responses were fast, and he was quick to deliver. His attention to details and understanding of what we wanted to achieve, made working with him very easy. His delivery is also professional. We have recommended him to some of our top clientele, and hopefully, they get to experience what we have enjoyed.",
		},
		{
			pofileimage: Oyinimage,
			name: "Araoye",
			position: "CEO @OyinAraoye",
			feedback:
				"Working with Dolapo for our brand was seamless. Responses were fast, and he was quick to deliver. His attention to details and understanding of what we wanted to achieve, made working with him very easy. His delivery is also professional. We have recommended him to some of our top clientele, and hopefully, they get to experience what we have enjoyed.",
		},
		{
			pofileimage: Oyinimage,
			name: "Oyin Araoye",
			position: "CEO @OyinAraoye",
			feedback:
				"Working with Dolapo for our brand was seamless. Responses were fast, and he was quick to deliver. His attention to details and understanding of what we wanted to achieve, made working with him very easy. His delivery is also professional. We have recommended him to some of our top clientele, and hopefully, they get to experience what we have enjoyed.",
		},
		{
			pofileimage: Oyinimage,
			name: "Oyin Araoye",
			position: "CEO @OyinAraoye",
			feedback:
				"Working with Dolapo for our brand was seamless. Responses were fast, and he was quick to deliver. His attention to details and understanding of what we wanted to achieve, made working with him very easy. His delivery is also professional. We have recommended him to some of our top clientele, and hopefully, they get to experience what we have enjoyed.",
		},
	];
	return (
		<section className="py-24 bg-gray-800 dotted-background">
			<div className="max-w-7xl mx-auto">
				<div className="mb-10 text-center">
					<div className="flex gap-2 justify-center">
						<h2 className="text-4xl">*</h2>
						<h2 className="font-clash-display text-lg text-primary">
							Testimonials
						</h2>
					</div>
					<h2 className="font-clash-display text-3xl">What Clients Say</h2>
				</div>
				<div className="carousel-gradient relative py-10">
					<Carousel
						opts={{
							align: "center",
							loop: "true",
						}}
						plugins={[
							Autoplay({
								delay: 5000,
							}),
						]}
						className="mx-auto "
						orientation="horizontal"
					>
						<CarouselContent>
							{testimonials.map((testimonial, index) => (
								<CarouselItem key={index} className="md:basis-1/3 lg:basis-1/3">
									<TestimonialCard
										image={testimonial.pofileimage}
										name={testimonial.name}
										position={testimonial.position}
										feedback={testimonial.feedback}
									/>
								</CarouselItem>
							))}
						</CarouselContent>
						<CarouselPrevious className="" />
						<CarouselNext />
					</Carousel>
				</div>
			</div>
		</section>
	);
};

export default Testimonials;
