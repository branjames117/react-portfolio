import BigProject from '../BigProject';
import SmallProject from '../SmallProject';

export default function Projects({ activeComponent }) {
  const bigProject = {
    liveLink: 'https://bonnapp21.vercel.app/',
    githubLink: 'https://github.com/branjames117/bonnapp21',
    imageName: 'bonnapp21.jpg',
    altText: 'App with lineup of a music festival displayed.',
    title: 'BonnApp21',
    description: 'Music Festival Companion App',
    stack: 'MongoDB, React, Next',
  };

  const smallProjects = [
    {
      liveLink: 'https://devsparkio.herokuapp.com/',
      githubLink: 'https://github.com/branjames117/devspark',
      imageName: 'devspark.jpg',
      altText: 'App showing dating app.',
      title: 'devSpark',
      description: 'Web Dev Dating App',
      stack: 'Node, Sequelize, MVC',
    },
    {
      liveLink: 'https://peaceful-basin-76013.herokuapp.com/',
      githubLink: 'https://github.com/branjames117/lyriquery',
      imageName: 'lyriquery.jpg',
      altText: 'App with search engine related to music lyrics.',
      title: 'LyriQuery',
      description: 'Lyric Search Database',
      stack: 'MongoDB, Express, Node',
    },
    {
      liveLink: 'https://branjames117.github.io/one-small-step/',
      githubLink: 'https://github.com/branjames117/one-small-step',
      imageName: 'onesmallstep.jpg',
      altText: `App utilizing NASA's public APIs.`,
      title: 'One Small Step',
      description: 'Hub for Astronomy Lovers',
      stack: 'JavaScript, Tailwind, HTML',
    },
    {
      liveLink: 'https://mltarts.herokuapp.com/',
      githubLink: 'https://github.com/branjames117/mltarts',
      imageName: 'mltarts.jpg',
      altText: 'Website for a local theatre company.',
      title: 'MLT Arts',
      description: 'Theatre Company Website',
      stack: 'Node, Express',
    },
    {
      liveLink: 'https://branjames117.github.io/code-quizbowl/',
      githubLink: 'https://github.com/branjames117/code-quizbowl',
      imageName: 'codequiz.jpg',
      altText: 'JavaScript code quiz.',
      title: 'Code Quiz',
      description: 'Via Vanderbilt Boot Camp',
      stack: 'JavaScript, HTML, CSS',
    },
    {
      liveLink: 'https://branjames117.github.io/simonsays/',
      githubLink: 'https://github.com/branjames117/simonsays',
      imageName: 'simonsays.jpg',
      altText: 'App emulating Simon Says toy.',
      title: 'Simon Says Game',
      description: 'Via Udemy',
      stack: 'JavaScript, HTML, CSS',
    },
    {
      liveLink: 'https://obscure-mesa-27013.herokuapp.com/',
      githubLink: 'https://github.com/branjames117/eweblog',
      imageName: 'eweblog.jpg',
      altText: 'Blog with standard blog features.',
      title: 'Ewe Blog',
      description: 'Via Vanderbilt Boot Camp',
      stack: 'Node, Express, Sequelize',
    },
    {
      liveLink: 'https://branjames117.github.io/password-generator/',
      githubLink: 'https://github.com/branjames117/password-generator',
      imageName: 'passwordgen.jpg',
      altText: 'App with password generation capabilities.',
      title: 'Password Generator',
      description: 'Via Vanderbilt Boot Camp',
      stack: 'JavaScript',
    },
    {
      githubLink: 'https://github.com/branjames117/plexnamer',
      imageName: 'plexnamer.jpg',
      altText: 'App showing command line prompt.',
      title: 'PlexNamer',
      description: 'CLI File Renaming Script',
      stack: 'Python',
    },
    {
      liveLink: 'https://branjames117.github.io/my-daily-life/',
      githubLink: 'https://github.com/branjames117/my-daily-life',
      imageName: 'mydailylife.jpg',
      altText: 'App about scheduling your work day.',
      title: 'My Daily Life',
      description: 'Via Vanderbilt Boot Camp',
      stack: 'jQuery, jQuery UI, Bootstrap',
    },
    {
      liveLink: 'https://branjames117.github.io/taskmasterpro/',
      githubLink: 'https://github.com/branjames117/taskmasterpro',
      imageName: 'taskmasterpro.jpg',
      altText: 'App with Kanban-style task tracking.',
      title: 'TaskMaster Pro',
      description: 'Via Vanderbilt Boot Camp',
      stack: 'JavaScript, jQuery, Bootstrap',
    },
  ];

  return (
    <section
      id='projects'
      className={activeComponent === 'Projects' ? 'fade-in' : ''}
    >
      <div className='container'>
        <article>
          <BigProject project={bigProject} />
          {smallProjects.map((project) => (
            <SmallProject project={project} key={project.title} />
          ))}
        </article>
      </div>
    </section>
  );
}
