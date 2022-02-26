export default function SmallProject({ project }) {
  return (
    <div className='smaller-project'>
      <a href={project.liveLink} className='project-link'>
        <img
          className='smaller-project-image'
          src={require(`../../images/${project.imageName}`)}
          alt={project.altText}
          title={project.title}
        />
      </a>
      <div className='smaller-project-caption'>
        <strong>{project.title}</strong>
        <br />
        {project.description}
        <br />
        {project.stack}
        <br />
        <a href={project.githubLink}>Repo</a>
        {project.liveLink && ' | '}
        {project.liveLink && <a href={project.liveLink}>Live</a>}
      </div>
    </div>
  );
}
