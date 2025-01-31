import githubIcon from "../assets/icons/github-original.svg";
import linkedinIcon from "../assets/icons/linkedin-plain.svg";
import xIcon from "../assets/icons/X.svg";

const Sociallinks = () => {
	return (
		<div className="flex gap-4 mt-4 justify-center">
			<a
				href="https://github.com/Dolapo-A"
				target="_blank"
				rel="noopener noreferrer"
			>
				<img src={githubIcon} alt="Github icon" />
			</a>
			<a
				href="https://www.linkedin.com/in/dolapo-araoye-86ba31219/"
				target="_blank"
				rel="noopener noreferrer"
			>
				<img src={linkedinIcon} alt="LinkedIn icon" />
			</a>
			<a
				href="https://x.com/_dolapoe"
				target="_blank"
				rel="noopener noreferrer"
			>
				<img src={xIcon} alt="X/Twitter icon" />
			</a>
		</div>
	);
};

export default Sociallinks;
