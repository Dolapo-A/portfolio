/* eslint-disable react/prop-types */
import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";
import { Link } from "react-router";

const Project = ({
	id,
	webpImage,
	jpgImage,
	title,
	description,
	tags,
	links = [],
}) => {
	return (
		<div className="flex flex-col  lg:flex-row gap-4 max-w-7xl border border-darkGray p-4 rounded-2xl mt-9 bg-background h-screen-80">
			<picture>
				<source srcSet={webpImage} type="image/webp" />
				<img
					className="aspect-video lg:max-w-lg lg:h-96 object-cover border border-darkGray rounded-xl"
					src={jpgImage}
					alt={title}
				/>
			</picture>
			<div className="flex lg:justify-between grow flex-col border border-darkGray p-4 lg:p-6 rounded-xl w-full bg-background card-gradient">
				<h3 className="font-bold text-xl sm:text-2xl">{title}</h3>
				<p className="font-normal text-sm sm:text-base text-grayLight mt-6">
					{description}
				</p>
				<div className="mt-6">
					<span className="text-xs sm:text-sm font-medium inline-block mr-2">
						Tools:
					</span>
					<div className="inline-block">
						{tags.map((tag, index) => (
							<span key={index} className="text-xs sm:text-sm text-gray mr-2">
								{tag}
							</span>
						))}
					</div>
				</div>
				<div className="flex flex-col justify-between mt-6 sm:flex-row">
					<Link to={`/project/${id}`} target="_blank" rel="noopener noreferrer">
						<Button
							effect="expandIcon"
							icon={ChevronRight}
							iconPlacement="right"
							className=" sm:w-auto"
						>
							View project details
						</Button>
					</Link>
					<div className="flex gap-5 mt-4 sm:mt-0">
						{links.map((linkItem, index) => (
							<Button
								key={index}
								className="text-white text-xs sm:text-sm py-0 px-0"
								variant="link"
								effect="hoverUnderline"
							>
								<a
									target="_blank"
									rel="noopener noreferrer"
									href={linkItem.url}
								>
									{linkItem.name}
								</a>
							</Button>
						))}
					</div>
				</div>
			</div>
		</div>
	);
};

export default Project;
