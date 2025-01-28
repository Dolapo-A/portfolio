/* eslint-disable no-irregular-whitespace */
import React from "react";
import Sociallinks from "../UI/Sociallinks";

const Footer = () => {
	return (
		<footer className="py-24 pb-0 bg-gray-800 footer-border-top">
			<div className="max-w-7xl mx-auto text-center flex flex-col justify-center">
				<h2 className="font-clash-display text-3xl">Dolapo Araoye</h2>
				<Sociallinks />
				<div className="footer-border-top-mini mt-24 py-10">
					<p className="text-sm text-gray">Copyright © 2025 Dolapo Araoye. All rights reserved.</p>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
