/* eslint-disable react/prop-types */
import { Card, CardContent } from "@/components/ui/card";

const TestimonialCard = ({ name, feedback, image, position }) => {
	return (
		<div className="p-0" data-aos="zoom-out-up">
			<Card className="max-w-sm mx-auto rounded-2xl border border-darkGray  card-gradient">
				<CardContent className="aspect-auto items-center justify-center p-6 rounded-2xl  ">
					<p className="text-sm/6 text-gray">{feedback}</p>
					<div className="border-b border-gray border-dashed py-4"></div>
					<div className="flex gap-x-7 mt-4">
						<img
							className="w-14 h-14 rounded-full object-cover"
							src={image}
							alt={`${name}'s image`}
						/>
						<div className="flex flex-col justify-between">
							<p className="text-lg text-gray">{name}</p>
							<p className="text-xs text-gray">{position}</p>
						</div>
					</div>
				</CardContent>
			</Card>
		</div>
	);
};

export default TestimonialCard;
