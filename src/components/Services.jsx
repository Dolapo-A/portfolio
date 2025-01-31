import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import developmentIcon from "../assets/icons/development.svg";
import mobileIcon from "../assets/icons/mobile.svg";
import verifiedIcon from "../assets/icons/verified.svg";

const Services = () => {
	return (
		<section className="py-16 sm:py-24 bg-gray-800 bg-background">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<div className="flex gap-2">
					<h2 className="text-3xl sm:text-4xl">*</h2>
					<h2 className="font-clash-display text-base sm:text-lg text-primary">
						Services
					</h2>
				</div>
				<h2 className="font-clash-display text-2xl sm:text-3xl">
					Here’s how I can help your business grow
				</h2>
				<div className="mt-8 sm:mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-10">
					<div className="border border-darkGray p-4 sm:p-5 lg:p-6 bg-gray-700 rounded-2xl card-gradient">
						<img
							className="w-12 h-12 sm:w-16 sm:h-16"
							src={developmentIcon}
							alt="Web Development"
						/>
						<h3 className="font-manrope text-lg sm:text-xl mt-4">
							Web Development
						</h3>
						<p className="font-manrope text-sm sm:text-base text-grayLight mt-2">
							I craft unique visual identities and brand experiences to help
							businesses stand out online, focusing on meaningful audience
							connections.
						</p>
					</div>
					<div className="border border-darkGray p-4 sm:p-5 lg:p-6 bg-gray-700 rounded-2xl card-gradient">
						<img
							className="w-12 h-12 sm:w-16 sm:h-16"
							src={mobileIcon}
							alt="Mobile Development"
						/>
						<h3 className="font-manrope text-lg sm:text-xl mt-4">
							Mobile Development
						</h3>
						<p className="font-manrope text-sm sm:text-base text-grayLight mt-2">
							Elevate your digital presence with custom Flutter apps, offering
							native-like experiences for iOS and Android.
						</p>
					</div>
					<div className="border border-darkGray p-4 sm:p-5 lg:p-6 bg-gray-700 rounded-2xl card-gradient">
						<img
							className="w-12 h-12 sm:w-16 sm:h-16"
							src={verifiedIcon}
							alt="Brand Design"
						/>
						<h3 className="font-manrope text-lg sm:text-xl mt-4">
							Brand Design
						</h3>
						<p className="font-manrope text-sm sm:text-base text-grayLight mt-2">
							I craft unique visual identities and brand experiences to help
							businesses stand out online, focusing on meaningful audience
							connections.
						</p>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Services;
