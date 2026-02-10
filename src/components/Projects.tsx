import { motion } from 'framer-motion';
import '../styles/Projects.css';

const projects = [
  { id: 1, name: 'Aura Credit System', link: '#' },
  { id: 2, name: 'GNN Smurfing Detection', link: '#' },
  { id: 3, name: 'High-Frequency Trading', link: '#' },
  { id: 4, name: 'Classroom Backend', link: '#' },
];

const Projects = () => {
  return (
    <section className="projects-container">
      <motion.div 
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.3 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="projects-inner"
      >
        <h2 className="section-title">Selected Works</h2>
        
        <div className="projects-grid">
          {projects.map((project, index) => (
            <motion.a
              key={project.id}
              href={project.link}
              className="project-button"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              whileHover={{ 
                scale: 1.05,
                backgroundColor: "var(--accent)",
                color: "var(--accent-foreground)"
              }}
              whileTap={{ scale: 0.95 }}
              transition={{ delay: index * 0.1 }}
            >
              <span className="project-name">{project.name}</span>
              <div className="button-bloom" />
            </motion.a>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Projects;