import "./App.css";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Projects from "./components/Projects";
import TechStack from "./components/Techstack";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import { BrowserRouter, Route, Routes } from "react-router";
import ProjectPage from "./pages/ProjectPage";
import ScrollToTop from "./Scolltotop";
import Navbar from "./components/Navbar";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Analytics } from "@vercel/analytics/react";

function App() {
	useEffect(() => {
		AOS.init({
			duration: 500,
			// once: true,
		});
	}, []);

	return (
		<>
			<BrowserRouter>
				<ScrollToTop />
				<Analytics />
				<Routes>
					<Route
						path="/"
						element={
							<>
								<Navbar />
								<Hero />
								<Services />
								<Projects />
								<TechStack />
								<Testimonials />
								<Contact />
								<Footer />
							</>
						}
					/>

					<Route path="project/:id" element={<ProjectPage />} />
				</Routes>
			</BrowserRouter>
		</>
	);
}

export default App;
