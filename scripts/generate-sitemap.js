import { SitemapStream, streamToPromise } from "sitemap";
import { createWriteStream } from "fs";
import { Readable } from "stream";

// Add your project IDs here
const projectIds = [
	// Example project IDs - replace with your actual project IDs
	"larrymark_international",
	"oyin_araoye",
	"girls-lead",
	"tlb_energy",
	"wild_oasis",
	"xchange_rate",
	"qrcodegenerator",
	// Add all your project IDs
];

// Create routes array with main route and dynamic project routes
const routes = [
	// Main route with all sections (Hero, Services, Projects, etc.)
	{
		url: "/",
		changefreq: "weekly",
		priority: 1.0,
	},

	// Generate routes for each project
	...projectIds.map((id) => ({
		url: `/project/${id}`,
		changefreq: "monthly",
		priority: 0.8,
	})),
];

// Create sitemap
const sitemapGenerator = async () => {
	try {
		// Create a stream to write to
		const stream = new SitemapStream({
			hostname: "https://dolapoaraoye.com", // Replace with your domain
		});

		// Return a promise that resolves with your XML string
		const data = await streamToPromise(Readable.from(routes).pipe(stream));

		// Write the XML to file
		createWriteStream("./public/sitemap.xml").write(data.toString());

		console.log("Sitemap generated successfully!");
	} catch (error) {
		console.log("Error generating sitemap:", error);
	}
};

sitemapGenerator();
