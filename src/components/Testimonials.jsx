import React from "react";
import TestimonialCard from "../UI/TestimonialCard";
import {
	Carousel,
	CarouselContent,
	CarouselItem,
	CarouselNext,
	CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";

const Testimonials = () => {
	const testimonials = [{ name: "Oyin Araoye", feedback: "Nice work guy!" }];
	return (
		<section className="py-24 bg-gray-800 bg-background grid-background">
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
				<Carousel className="w-2/3 mx-auto">
					<CarouselContent>
						{testimonials.map((testimonial, index) => (
							<CarouselItem key={index} className="">
								<TestimonialCard name={testimonial.name} feedback={testimonial.feedback}/>
							</CarouselItem>
						))}
					</CarouselContent>
					<CarouselPrevious className="" />
					<CarouselNext />
				</Carousel>
			</div>
		</section>
	);
};

export default Testimonials;
