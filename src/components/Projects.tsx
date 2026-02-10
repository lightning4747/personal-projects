import { motion } from 'framer-motion';
import '../styles/Projects.css';

const projects = [
  { id: 1, name: 'Sample', link: '#' },
];

const Projects = () => {
  return (
    <motion.section 
      className="projects-section"
      initial={{ backgroundColor: "transparent" }}
      whileInView={{ backgroundColor: "var(--muted)" }} // Change to your preferred theme color
      viewport={{ margin: "-200px" }}
      transition={{ duration: 1 }}
    >
      <div className="projects-inner">
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          Project Catalog
        </motion.h2>
        
        <div className="projects-grid">
          {projects.map((project, index) => (
            <motion.a
              key={project.id}
              href={project.link}
              className="project-button"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 }}
            >
              {project.name}
            </motion.a>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default Projects;