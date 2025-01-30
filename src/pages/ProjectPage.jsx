// src/pages/ProjectPage.jsx
import { useParams } from 'react-router';
import { projects } from '../data/projectdata';


const ProjectPage = () => {
  const { id } = useParams();
  const project = projects.find(p => p.id === id);

  if (!project) {
    return <div>Project not found</div>;
  }

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">{project.title}</h1>
      
      <div className="mb-8">
        <picture>
          <source srcSet={project.webpImage} type="image/webp" />
          <img 
            className="w-full h-96 object-cover rounded-xl"
            src={project.image} 
            alt={project.title} 
          />
        </picture>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <h2 className="text-2xl font-semibold mb-4">Overview</h2>
          <p className="text-gray-300">{project.fullDescription}</p>
        </div>

        <div>
          <h2 className="text-2xl font-semibold mb-4">Tech Stack</h2>
          <div className="flex flex-wrap gap-2">
            {project.techStack.map((tech, index) => (
              <span 
                key={index}
                className="px-3 py-1 bg-gray-800 rounded-full text-sm"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        <div>
          <h2 className="text-2xl font-semibold mb-4">Challenges & Solutions</h2>
          <p className="text-gray-300 mb-4">{project.challenges}</p>
          <p className="text-gray-300">{project.solutions}</p>
        </div>

        <div>
          <h2 className="text-2xl font-semibold mb-4">Outcome</h2>
          <p className="text-gray-300">{project.outcome}</p>
        </div>
      </div>

      <div className="mt-8 flex gap-4">
        {project.links.map((link, index) => (
          <a 
            key={index}
            href={link.url}
            className="px-4 py-2 bg-gray-800 rounded-lg hover:bg-gray-700 transition"
            target="_blank"
            rel="noopener noreferrer"
          >
            {link.name}
          </a>
        ))}
      </div>
    </div>
  );
};

export default ProjectPage;