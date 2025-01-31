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

function App() {
	return (
		<>
			<BrowserRouter>
				<ScrollToTop />
				<Routes>
					<Route
						path="/"
						element={
							<>
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
