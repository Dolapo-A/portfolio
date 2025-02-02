// src/data/projects.js
import LarrymarkMockup from "../assets/images/jpg/larrymark-mockup.jpg";
import OyinAraoyeMockup from "../assets/images/jpg/oyin-araoye.jpg";
import GirlsLeadMockup from "../assets/images/jpg/girls-lead-mockup.jpg";
import TlbEnergy from "../assets/images/jpg/tlbenergy-mockup.jpg";
import WildOasisMockup from "../assets/images/jpg/wild-oasis.jpg";
import XchangeRate from "../assets/images/jpg/xchange-rate-mockup.jpg";
import QRcodeGenerator from "../assets/images/jpg/qrcodegenerator.jpg";

import LarrymarkMockupwebp from "../assets/images/webp/larrymark-mockup.webp";
import OyinAraoyeMockupwebp from "../assets/images/webp/oyin-araoye.webp";
import GirlsLeadMockupwebp from "../assets/images/webp/girls-lead-mockup.webp";
import TlbEnergywebp from "../assets/images/webp/tlbenergy-mockup.webp";
import WildOasisMockupwebp from "../assets/images/webp/wild-oasis.webp";
import XchangeRatewebp from "../assets/images/webp/xchange-rate-mockup.webp";
import QRcodeGeneratorwebp from "../assets/images/webp/qrcodegenerator.webp";

import LarrymarkPng01 from "../assets/images/gallery/larrymark_01.png";
import LarrymarkPng02 from "../assets/images/gallery/larrymark_02.png";
import LarrymarkPng03 from "../assets/images/gallery/larrymark_03.png";
import Oyinaraoye01Png01 from "../assets/images/gallery/oyin_araoye_01.png";
import Oyinaraoye02Jpg02 from "../assets/images/gallery/oyin_araoye_02.jpg";
import Oyinaraoye03jpg03 from "../assets/images/gallery/oyin_araoye_03.jpg";
import LarrymarkPng04 from "../assets/images/gallery/larrymark_04.png";
import GirlsleadPng01 from "../assets/images/gallery/girlslead_01.png";
import GirlsleadPng02 from "../assets/images/gallery/girlslead_02.png";
import TlbenergyPng01 from "../assets/images/gallery/tlbenergy_01.png";
import TlbenergyPng02 from "../assets/images/gallery/tlbenergy_02.png";
import TlbenergyPng03 from "../assets/images/gallery/tlbenergy_03.png";
import WildoasisPng01 from "../assets/images/gallery/wild_oasis_01.png";
import WildoasisPng02 from "../assets/images/gallery/wild_oasis_02.png";
import WildoasisPng03 from "../assets/images/gallery/wild_oasis_03.png";
import WildoasisPng04 from "../assets/images/gallery/wild_oasis_04.png";
import WildoasisPng05 from "../assets/images/gallery/wild_oasis_05.png";
import XchangeratePng01 from "../assets/images/gallery/xchange_rate.png";
import Qrcodegeneratorgif from "../assets/images/gifs/Qrcodegenerator.gif";

export const projects = [
	{
		id: "larryMark_international",
		title: "Larrymark International",
		clientName: "Larry Mark",
		ProjectType: "Web Development",
		projectYear: "2024",
		webpImage: LarrymarkMockupwebp,
		jpgImage: LarrymarkMockup,
		images: [LarrymarkPng01, LarrymarkPng02, LarrymarkPng03, LarrymarkPng04],
		description:
			"A modern, responsive website for Larrymark International, a leading import-export company. The site features an intuitive product catalog, real-time shipping calculator, and streamlined inquiry system.",
		fullDescription:
			"Larrymark International required a complete digital transformation of their online presence. The new website was built to showcase their extensive product catalog while providing essential tools for international customers. Key features include a dynamic product filtering system, real-time shipping cost calculations, and a multi-language support system to cater to their global client base. The design emphasizes user experience with quick load times and mobile-first responsiveness.",
		tags: ["HTML", "CSS", "JavaScript"],
		links: [{ name: "Live", url: "https://www.larrymarkintl.com/" }],
		challenges:
			"The main challenges included implementing a complex product catalog system, optimizing image loading for international users with varying internet speeds, and creating a responsive design that maintained functionality across all device sizes.",
		solutions:
			"Implemented lazy loading and image optimization techniques to improve load times. Created a progressive web app architecture for better performance. Developed a custom caching system for product data to reduce server load.",
		techStack: ["HTML", "CSS", "JavaScript", "Node.js", "MongoDB"],
		outcome:
			"The new website resulted in a 40% increase in international inquiries and a 25% reduction in page load times. Client feedback indicated significantly improved user experience and easier product discovery.",
	},

	{
		id: "oyin_araoye",
		title: "Oyin Araoye",
		clientName: "Oyin Araoye",
		ProjectType: "Brand Design",
		projectYear: "2025",
		webpImage: OyinAraoyeMockupwebp,
		jpgImage: OyinAraoyeMockup,
		images: [Oyinaraoye01Png01, Oyinaraoye02Jpg02, Oyinaraoye03jpg03],
		description:
			"A comprehensive brand identity design for Oyin Araoye, a luxury fashion designer. The project included logo design, brand guidelines, and marketing collateral.",
		fullDescription:
			"The Oyin Araoye brand identity project focused on creating a sophisticated and memorable visual language that reflects the designer's unique aesthetic and luxury positioning. The design system encompasses everything from typography and color palettes to packaging design and social media templates. The goal was to create a cohesive brand experience that resonates with high-end fashion consumers while maintaining versatility across different applications.",
		tags: ["Figma", "Illustrator", "Photoshop"],
		links: [""],
		challenges:
			"Creating a visual identity that balanced luxury with accessibility, while ensuring the brand remained distinctive in a crowded fashion market. maintaining consistency across various brand touchpoints was also crucial.",
		solutions:
			"Developed a flexible design system that works across multiple platforms. Created detailed brand guidelines to ensure consistency. Implemented a modular design approach for marketing materials.",
		techStack: ["Adobe Creative Suite", "Figma", "Sketch"],
		outcome:
			"The new brand identity helped position Oyin Araoye as a premium fashion brand, leading to increased brand recognition and successful partnerships with luxury retailers.",
	},

	{
		id: "girls-lead",
		title: "Girls Lead",
		clientName: "Sarah Johnson",
		ProjectType: "Web development",
		projectYear: "2023",
		webpImage: GirlsLeadMockupwebp,
		jpgImage: GirlsLeadMockup,
		images: [GirlsleadPng01, GirlsleadPng02],
		description:
			"An educational platform designed to empower young women through leadership training and mentorship programs. Built using Framer for rapid deployment and easy content updates.",
		fullDescription:
			"Girls Lead is an initiative aimed at providing young women with resources and opportunities for leadership development. The website serves as both an informational hub and an interactive platform where users can access course materials, connect with mentors, and track their progress. The design emphasizes accessibility and engagement, with features specifically tailored to the target demographic of young women aged 16-25.",
		tags: ["Framer"],
		links: [{ name: "Live", url: "https://girlslead.framer.website/" }],
		challenges:
			"Creating an engaging and accessible platform that appeals to young women while maintaining professional credibility. Ensuring content was easily updateable by non-technical staff.",
		solutions:
			"Utilized Framer's built-in CMS for easy content management. Implemented user research findings to create an engaging interface. Created custom components for interactive elements.",
		techStack: ["Framer"],
		outcome:
			"The platform has reached over 1000 young women in its first year, with a 75% program completion rate and positive feedback from both participants and mentors.",
	},

	{
		id: "tlb_energy",
		title: "TLB Energy",
		clientName: "Temi Oyedepo",
		ProjectType: "Web Development",
		projectYear: "2023",
		webpImage: TlbEnergywebp,
		jpgImage: TlbEnergy,
		images: [TlbenergyPng01, TlbenergyPng02, TlbenergyPng03],
		description:
			"A modern website for TLB Energy, showcasing their renewable energy solutions and services. Features include interactive project galleries and real-time energy savings calculators.",
		fullDescription:
			"TLB Energy's website was designed to establish their presence in the renewable energy sector. The site combines informative content about solar and wind energy solutions with interactive tools that help potential clients understand the benefits of renewable energy. Special attention was paid to creating engaging visualizations of energy savings and environmental impact.",
		tags: ["HTML", "CSS", "JavaScript"],
		links: [{ name: "Live", url: "https://tlbenergy.netlify.app/" }],
		challenges:
			"Presenting complex technical information in an accessible way. Creating interactive tools for energy calculations that remained accurate across different scenarios.",
		solutions:
			"Developed custom interactive visualizations for energy savings. Created an intuitive navigation system for technical content. Implemented responsive design principles for complex data presentations.",
		techStack: ["HTML", "CSS", "JavaScript"],
		outcome:
			"The website has helped TLB Energy secure 30% more client consultations and has become a valuable educational resource in the renewable energy sector.",
	},

	{
		id: "wild_oasis",
		title: "The Wild Oasis",
		clientName: "Personal Project",
		ProjectType: "Web Development",
		projectYear: "2024",
		webpImage: WildOasisMockupwebp,
		jpgImage: WildOasisMockup,
		images: [
			WildoasisPng01,
			WildoasisPng02,
			WildoasisPng03,
			WildoasisPng04,
			WildoasisPng05,
		],
		description:
			"A comprehensive hotel management system featuring real-time booking management, guest services, and administrative tools. Built with React and Supabase for reliable performance.",
		fullDescription:
			"The Wild Oasis is a full-featured hotel management application designed to streamline operations for small to medium-sized hotels. The system includes modules for reservation management, room allocation, guest services, and financial reporting. The application features a clean, intuitive interface that allows staff to manage all aspects of hotel operations efficiently.",
		tags: ["React", "Styled Components", "Supabase", "React Query"],
		links: [
			{
				name: "Repository",
				url: "https://github.com/Dolapo-A/hotel-management-system",
			},
			{ name: "Live", url: "https://wild-oasis-admin-lovat.vercel.app/login" },
		],
		challenges:
			"Building a complex system with real-time updates while maintaining performance. Implementing secure authentication and role-based access control.",
		solutions:
			"Utilized React Query for efficient data fetching and caching. Implemented Supabase real-time subscriptions for live updates. Created a comprehensive testing suite for critical features.",
		techStack: ["React", "Tailwind CSS", "Supabase", "React Query"],
		outcome:
			"The project showcases advanced React patterns and real-time database capabilities, serving as a portfolio piece and practical solution for hotel management.",
	},

	{
		id: "xchange_rate",
		title: "Xchange Rate",
		clientName: "Personal Project",
		ProjectType: "Web Development",
		projectYear: "2024",
		webpImage: XchangeRatewebp,
		jpgImage: XchangeRate,
		images: [XchangeratePng01],
		description:
			"A currency exchange rate calculator with real-time updates and historical rate tracking. Features an intuitive interface for quick currency conversions and rate monitoring.",
		fullDescription:
			"Xchange Rate is a modern currency exchange platform that provides real-time exchange rates for major world currencies. The application includes features such as historical rate charts, rate alerts, and favorite currency pairs. The interface is designed for both casual users needing quick conversions and professionals tracking multiple currency pairs.",
		tags: ["ReactJS", "Tailwind CSS", "NodeJS"],
		links: [
			{
				name: "Repository",
				url: "https://github.com/Dolapo-A/currency-exchange-app",
			},
			{ name: "Live", url: "https://currency-exchange-app-alpha.vercel.app/" },
		],
		challenges:
			"Maintaining accurate, real-time exchange rates while managing API rate limits. Creating intuitive data visualizations for historical rate trends.",
		solutions:
			"Implemented efficient caching strategies for API responses. Created custom hooks for real-time data updates. Developed responsive charts for rate visualization.",
		techStack: ["ReactJS", "Tailwind CSS", "NodeJS"],
		outcome:
			"The application successfully handles thousands of daily conversions and has become a reliable tool for users needing quick and accurate currency exchange information.",
	},

	{
		id: "qrcodegenerator",
		title: "QRCode Generator",
		clientName: "Personal Project",
		ProjectType: ["Desktop Application", "Android App"],
		projectYear: "2023",
		webpImage: QRcodeGeneratorwebp,
		jpgImage: QRcodeGenerator,
		images: [Qrcodegeneratorgif],
		description:
			"A cross-platform QR code generator application built with Flutter. Supports various QR code types and offers customization options for both desktop and mobile users.",
		fullDescription:
			"This QR code generator application provides a seamless experience across desktop and mobile platforms. Users can generate QR codes for URLs, text, contact information, and Wi-Fi credentials. The application includes features such as custom QR code styling, batch generation capabilities, and direct sharing options. Built with Flutter, it maintains consistent functionality and appearance across all platforms.",
		tags: ["Flutter", "Dart"],
		links: [
			{
				name: "Repository",
				url: "https://github.com/Dolapo-A/qrcodegenerator",
			},
		],
		challenges:
			"Ensuring consistent performance across different platforms. Implementing efficient QR code generation for batch processing.",
		solutions:
			"Developed a custom QR code generation engine for optimal performance. Created platform-specific UI adaptations while maintaining core functionality.",
		techStack: ["Flutter", "Dart"],
		outcome:
			"The application has been downloaded over 1000 times and maintains a 4.5-star rating on the Play Store, with users praising its speed and ease of use.",
	},
];
