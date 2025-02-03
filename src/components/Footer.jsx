/* eslint-disable no-irregular-whitespace */
import React from "react";
import Sociallinks from "../UI/Sociallinks";

const Footer = () => {
	return (
		<footer
			className="pt-16 sm:pt-24 bg-gray-800 footer-border-top"
			id="footer"
		>
			<div className="max-w-7xl mx-auto text-center flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8">
				<a href="/">
					<h2 className="font-clash-display text-2xl sm:text-3xl">
						Dolapo Araoye
					</h2>
				</a>
				<Sociallinks />
				<div className="footer-border-top-mini mt-16 sm:mt-24 py-8 sm:py-10">
					<p className="text-xs sm:text-sm text-gray">
						Copyright © 2025 Dolapo Araoye. All rights reserved.
					</p>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
