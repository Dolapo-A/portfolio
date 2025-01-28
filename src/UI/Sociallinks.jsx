
import githubIcon from "../assets/icons/github-original.svg";
import linkedinIcon from "../assets/icons/linkedin-plain.svg";
import xIcon from "../assets/icons/X.svg";

const Sociallinks = () => {
    return (
        <div className="flex gap-4 mt-4 justify-center" >
					<a href="#">
						<img src={githubIcon} alt="" />
					</a>
					<a href="#">
						<img src={linkedinIcon} alt="" />
					</a>
					<a href="#">
						<img src={xIcon} alt="" />
					</a>
				</div>
    )
}

export default Sociallinks