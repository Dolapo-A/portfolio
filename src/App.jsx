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
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/react";

function App() {
	return (
		<>
			<BrowserRouter>
				<ScrollToTop>
					<Analytics />
					<SpeedInsights />
					<Routes>
						<Route
							path="/"
							element={
								<>
									<Navbar />
									<Hero />
									<Services />
									<TechStack />
									<Projects />
									<Testimonials />
									<Contact />
									<Footer />
								</>
							}
						/>

						<Route path="project/:id" element={<ProjectPage />} />
					</Routes>
				</ScrollToTop>
			</BrowserRouter>
		</>
	);
}

export default App;
