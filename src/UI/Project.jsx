/* eslint-disable react/prop-types */
import { Button } from "@/components/ui/button";
import { ChevronRight } from "@untitled-ui/icons-react";

const Project = ({ image, title, description, tags, links=[] }) => {
	return (
		<div className="flex gap-12 max-w-7xl border-2 border-darkGray p-4 rounded-2xl mt-9 bg-background">
			<img className="w-1/4 h-full rounded-xl" src={image} alt={title} />
			<div className="flex flex-col border-2 border-darkGray p-4 rounded-xl w-full justify-between bg-background">
				<h3 className="font-manrope font-bold text-2xl">{title}</h3>
				<p className="font-manrope font-normal text-sm text-grayLight">
					{description}
				</p>
				<div className="flex gap-2">
					{tags.map((tag, index) => (
						<span
							key={index}
							className="font-manrope text-grayLight px-1 py-1 rounded-md text-xs/none border"
						>
							{tag}
						</span>
					))}
				</div>
				<div className="flex justify-between">
					<Button effect="expandIcon" icon={ChevronRight} iconPlacement="right">
						View project
					</Button>
					<div className="flex gap-2">
						{links.map((linkItem, index) => (
							<Button
								key={index}
								className="text-white"
								variant="link"
								effect="hoverUnderline"
							>
								<a href={linkItem.url}>{linkItem.name}</a>
							</Button>
						))}
					</div>
				</div>
			</div>
		</div>
	);
};

export default Project;
