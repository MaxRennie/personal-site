export const getStaticProps = async () => {
  const res = await fetch("/projects.json");
  const data = await res.json();
  return {
    props: { projects: data },
  };
};

const ProjectData = ({ projects }) => {
  return (
    <div>
      {projects.map((project) => (
        <div key={project.id}>
          <h3>{project.title}</h3>
          <p>{project.description}</p>
        </div>
      ))}
    </div>
  );
};

export default ProjectData;
