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
import { testimonials } from "../data/testimonialdata";

const Testimonials = () => {
	return (
		<section className="py-16 sm:py-24 bg-gray-800 dotted-background">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<div className="mb-8 sm:mb-10 text-center">
					<div className="flex gap-2 justify-center">
						<h2 className="text-3xl sm:text-4xl">*</h2>
						<h2 className="font-clash-display text-base sm:text-lg text-primary">
							Testimonials
						</h2>
					</div>
					<h2 className="font-clash-display text-3xl">What Clients Say</h2>
				</div>
				<div className="carousel-gradient relative py-8 sm:py-10">
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
								<CarouselItem key={index} className="basis-full sm:basis-1/2 lg:basis-1/3">
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
