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

export const projects = [
	{
		id: "larryMark_international",
		title: "Larrymark International",
		clientName: "Client Name",
		ProjectType: "Web Development",
		projectYear: "2024",
		webpImage: LarrymarkMockupwebp,
		jpgImage: LarrymarkMockup,
		description: "Detailed description...",
		fullDescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vitae dignissim neque. Pellentesque ultricies nisi sed bibendum dignissim. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Ut lobortis nibh sit amet semper vulputate. Pellentesque porttitor, eros egestas efficitur rhoncus, ligula orci consectetur augue, id interdum lacus ipsum at velit. Phasellus imperdiet in purus efficitur pulvinar. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nunc non purus dictum, rhoncus leo eget, lacinia odio. Morbi quam felis, faucibus sit amet nulla in, hendrerit dignissim tellus. Vestibulum ultricies pellentesque turpis ac placerat. Ut ullamcorper ligula eleifend, suscipit ante id, efficitur lacus. Sed quis congue massa, eget fringilla nunc. Ut quis consectetur purus, sit amet scelerisque tellus. Proin ullamcorper turpis in ipsum convallis faucibus. Phasellus magna ipsum, cursus vitae tellus in, suscipit suscipit dui. Fusce faucibus tortor eu vehicula interdum.",
		tags: ["HTML", "CSS", "JavaScript"],
		links: [
			{ name: "GitHub", url: "..." },
			{ name: "Live", url: "..." },
		],
		challenges: "Description of challenges...",
		solutions: "How problems were solved...",
		techStack: ["HTML", "CSS", "JavaScript"],
		outcome: "Project results and impact...",
	},

	{
		id: "oyin_araoye",
		title: "Oyin Araoye",
		clientName: "Oyin Araoye",
		ProjectType: "Brand Design",
		projectYear: "2025",
		webpImage: OyinAraoyeMockupwebp,
		jpgImage: OyinAraoyeMockup,
		description: "Detailed description...",
		fullDescription: "More detailed content for the project page...",
		tags: ["Figma", "Illustrator", "Photoshop"],
		links: [""],
		challenges: "Description of challenges...",
		solutions: "How problems were solved...",
		techStack: [""],
		outcome: "Project results and impact...",
	},

	{
		id: "girls-lead",
		title: "Girls Lead",
		clientName: "Sarah",
		ProjectType: "Web development",
		projectYear: "2023",
		webpImage: GirlsLeadMockupwebp,
		jpgImage: GirlsLeadMockup,
		description: "Detailed description...",
		fullDescription: "More detailed content for the project page...",
		tags: ["Framer"],
		links: [
			{ name: "Live", url: "..." },
		],
		challenges: "Description of challenges...",
		solutions: "How problems were solved...",
		techStack: ["Framer"],
		outcome: "Project results and impact...",
	},

	{
		id: "tlb_energy",
		title: "TLB Energy",
		clientName: "Temi Oyedepo",
		ProjectType: "Web Development",
		projectYear: "2023",
		webpImage: TlbEnergywebp,
		jpgImage: TlbEnergy,
		description: "Detailed description...",
		fullDescription: "More detailed content for the project page...",
		tags: ["HTML", "CSS", "JavaScript"],
		links: [
			{ name: "GitHub", url: "..." },
			{ name: "Live", url: "..." },
		],
		challenges: "Description of challenges...",
		solutions: "How problems were solved...",
		techStack: ["HTML", "CSS", "JavaScript"],
		outcome: "Project results and impact...",
	},

  // side projects
	{
		id: "wild_oasis",
		title: "The Wild Oasis",
		clientName: "Personal Project",
		ProjectType: "Web Development",
		projectYear: "2024",
		webpImage: WildOasisMockupwebp,
		jpgImage: WildOasisMockup,
		description: "Detailed description...",
		fullDescription: "More detailed content for the project page...",
		tags: ["React", "Styled Components", "Supabase", "React Query"],
		links: [
			{ name: "GitHub", url: "..." },
			{ name: "Live", url: "..." },
		],
		challenges: "Description of challenges...",
		solutions: "How problems were solved...",
		techStack: ["React", "Tailwind CSS", "Supabase", "React Query"],
		outcome: "Project results and impact...",
	},

	{
		id: "xchange_rate",
		title: "Xchange Rate",
		clientName: "Personal Project",
		ProjectType: "Web Development",
		projectYear: "2021",
		webpImage: XchangeRatewebp,
		jpgImage: XchangeRate,
		description: "Detailed description...",
		fullDescription: "More detailed content for the project page...",
		tags: ["ReactJS", "Tailwind CSS", "NodeJS"],
		links: [
			{ name: "GitHub", url: "..." },
			{ name: "Live", url: "..." },
		],
		challenges: "Description of challenges...",
		solutions: "How problems were solved...",
		techStack: ["ReactJS", "Tailwind CSS", "NodeJS"],
		outcome: "Project results and impact...",
	},

	{
		id: "qrcodegenerator",
		title: "QRCode Generator",
		clientName: "Personal Project",
		ProjectType: ["Desktop Application", "Android App"],
		projectYear: "2023",
		webpImage: QRcodeGeneratorwebp,
		jpgImage: QRcodeGenerator,
		description: "Detailed description...",
		fullDescription: "More detailed content for the project page...",
		tags: ["Flutter", "Dart"],
		links: [
			{ name: "GitHub", url: "..." },
		],
		challenges: "Description of challenges...",
		solutions: "How problems were solved...",
		techStack: ["Flutter", "Dart"],
		outcome: "Project results and impact...",
	},

	// ... other projects
];
