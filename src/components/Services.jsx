import React from "react";
import developmentIcon from "../assets/icons/development.svg";
import mobileIcon from "../assets/icons/mobile.svg";
import verifiedIcon from "../assets/icons/verified.svg";

const Services = () => {
	return (
		<section className="py-24 bg-gray-800 bg-background">
			<div className="max-w-7xl mx-auto">
				<div className="flex gap-2">
					<h2 className="text-4xl">*</h2>
					<h2 className="font-clash-display text-lg text-primary">Services</h2>
				</div>
				<h2 className="font-clash-display text-3xl">
					Here’s how I can help your business grow{" "}
				</h2>
				<div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-10">
						<div className="border-2 border-primary p-5 bg-gray-700 rounded-2xl">
							<img className="" src={developmentIcon} alt="" />
							<h3 className="font-manrope text-lg mt-4">Web Development</h3>
							<p className="font-manrope text-grayLight text-sm/6 mt-2">
								I create responsive, performance-driven websites that work
								flawlessly across all devices. Using modern technologies like
								React, I build interactive web applications that engage users
								and drive results.
							</p>
						</div>
						<div className="border-2 border-primary p-5 bg-gray-700 rounded-2xl">
							<img src={mobileIcon} alt="" />
							<h3 className="font-manrope text-lg mt-4">Web Development</h3>
							<p className="font-manrope text-grayLight text-sm/6 mt-2">
								I create responsive, performance-driven websites that work
								flawlessly across all devices. Using modern technologies like
								React, I build interactive web applications that engage users
								and drive results.
							</p>
						</div>
						<div className="border-2 border-primary p-5 bg-gray-700 rounded-2xl">
							<img src={verifiedIcon} alt="" />
							<h3 className="font-manrope text-lg mt-4">Web Development</h3>
							<p className="font-manrope text-grayLight text-sm/6 mt-2">
								I create responsive, performance-driven websites that work
								flawlessly across all devices. Using modern technologies like
								React, I build interactive web applications that engage users
								and drive results.
							</p>
						</div>
				</div>
			</div>
		</section>
	);
};

export default Services;
