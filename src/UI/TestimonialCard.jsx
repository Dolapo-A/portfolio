/* eslint-disable react/prop-types */
import { Card, CardContent } from "@/components/ui/card";

const TestimonialCard = ({ name, feedback }) => {
	return (
		<div className="p-10">
			<Card>
				<CardContent className="flex aspect-auto items-center justify-center p-6">
					<p>{feedback}</p>
					<span className="text-4xl font-semibold">{name}</span>
				</CardContent>
			</Card>
		</div>
	);
};

export default TestimonialCard;
