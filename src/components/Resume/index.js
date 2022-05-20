export default function Resume({ activeComponent }) {
  return (
    <section
      id='resume'
      className={activeComponent === 'Resume' ? 'fade-in' : ''}
    >
      <div className='container'>
        <article>
          <div className='center-text'>
            <a
              download='BrandonHoskinsCV.docx'
              href={process.env.PUBLIC_URL + '/docs/BrandonHoskinsCV.docx'}
              className='accent-button'
            >
              Download as DOCX
            </a>
            <a
              download='BrandonHoskinsCV.pdf'
              href={process.env.PUBLIC_URL + '/docs/BrandonHoskinsCV.pdf'}
              className='accent-button'
            >
              Download as PDF
            </a>
            <h3>Brandon James Hoskins</h3>
            <h4>
              Murfreesboro, TN 37130
              <br />
              Phone: 931-996-8997
              <br />
              Email:{' '}
              <a href='mailto:branjames117@gmail.com'>branjames117@gmail.com</a>
              <br />
              LinkedIn:{' '}
              <a href='https://linkedin.com/in/branjames117' target='new'>
                linkedin.com/in/branjames117/
              </a>
              <br />
              GitHub:{' '}
              <a href='https://github.com/branjames117' target='new'>
                github.com/branjames117
              </a>
              <br />
              Portfolio:{' '}
              <a href='https://branjamesweb.dev/' target='new'>
                branjamesweb.dev
              </a>
            </h4>
          </div>

          <div className='center-text resume-header'>
            <h3>SUMMARY</h3>
          </div>

          <div className='resume-subheader'>
            Full Stack Web Developer with a background in English Literature and
            Creative Writing. Self-taught developer for several months in 2021
            prior to enrolling in the 24-week Vanderbilt Coding Boot Camp. 5
            years team lead experience. Passionate about web development and
            design and combining user-friendly interfaces with sophisticated
            back-end technologies.
          </div>

          <div className='center-text resume-header'>
            <h3>TECHNICAL SKILLS</h3>
          </div>

          <div className='resume-subheader'>
            <strong>Languages:</strong> JavaScript, TypeScript, SQL, HTML5,
            CSS3, Python.
            <br />
            <strong>Libraries and Frameworks:</strong> Node, Express, React,
            Next, MongoDB, GraphQL, Bootstrap, Tailwind, MaterialUI, Aurelia.
            <br />
            <strong>Skills:</strong> Git and GitHub, Mobile Responsiveness and
            Semantic HTML, Vercel, Heroku, AWS, ORM.
          </div>

          <div className='center-text resume-header'>
            <h3>WORK EXPERIENCE</h3>
          </div>

          <div className='resume-subheader'>
            <div>JavaScript Front-End Developer (May 2022 - Present)</div>
            Gainwell Technologies - Remote
            <br />
            Developing a long-standing healthcare population management
            application that uses the Aurelia front-end framework with
            TypeScript and SCSS, for a growing Agile development team with two
            decades of experience on the product.
            <br />
            <ul>
              <li>
                Using Visual Studio and VS Code for development, along with
                Postman, MS SQL Server, and SourceTree.
              </li>
              <li>
                Using Jira for agile issue tracking and project management.
              </li>
              <li>
                Sprint planning, story grooming and prioritizing with the scrum
                framework
              </li>
            </ul>
          </div>

          <div className='resume-subheader'>
            <div>Team Lead/Technician (May 2016 - May 2022)</div>
            A.O. Smith - APCOM - Franklin, TN
            <br />
            As setup operator, run and maintain machines on the production line
            and change machine configurations. As team lead, manage employees
            and operations of department and ensure quality and production goals
            are met or exceeded; maintain lines of communication with
            supervisors as well as maintenance and engineering.
            <br />
          </div>

          <div className='center-text resume-header'>
            <h3>PROJECTS</h3>
          </div>

          <div className='resume-subheader'>
            <div>BonnApp21</div>
            Repo:{' '}
            <a href='https://github.com/branjames117/bonnapp21'>
              https://github.com/branjames117/bonnapp21
            </a>
            <br />
            Live:
            <a href='https://bonnapp21.vercel.app'>
              https://bonnapp21.vercel.app
            </a>
            <br />
            <ul>
              <li>
                A companion app for the Bonnaroo music festival featuring a
                React front end with a Next and MongoDB back end, mobile
                responsiveness, user registration and profiles,and a black/white
                accessibility feature.
              </li>
              <li>
                Coded all aspects, maintained hosting on Vercel, user/database
                management.
              </li>
              <li>HTML, CSS, JavaScript, React.js, Next.js, MongoDB.</li>
            </ul>
          </div>

          <div className='resume-subheader'>
            <div>LyriQuery</div>
            Repo:{' '}
            <a href='https://github.com/branjames117/lyriquery'>
              https://github.com/branjames117/lyriquery
            </a>
            <br />
            Live:{' '}
            <a href='https://peaceful-basin-76013.herokuapp.com/'>
              https://peaceful-basin-76013.herokuapp.com
            </a>
            <br />
            <ul>
              <li>
                A song lyrics database with CRUD functionality allows users to
                crawl through user-submitted lyrics to find specific instances
                of entered phrases, as well as a quiz feature.
              </li>
              <li>
                Coded all aspects, maintained hosting on Heroku, database
                management.
              </li>
              <li>HTML, CSS, JavaScript, React.js, Next.js, MongoDB.</li>
            </ul>
          </div>

          <div className='resume-subheader'>
            <div>Bash Hub</div>
            Repo:{' '}
            <a href='https://github.com/branjames117/bashhub'>
              https://github.com/branjames117/bashhub
            </a>
            <br />
            Live:
            <a href='https://bash-hub.herokuapp.com/'>
              https://bash-hub.herokuapp.com/
            </a>
            <br />
            <ul>
              <li>
                Event organization and information sharing application built
                with React and MaterialUI components, GraphQL via ApolloServer,
                and Mongoose.
              </li>
              <li>User authentication with JSON web tokens.</li>
              <li>• Image uploading via the Cloudinary API.</li>
            </ul>
          </div>

          <div className='center-text resume-header'>
            <h3>EDUCATION</h3>
          </div>

          <div className='resume-subheader'>
            <div>Certificate</div>
            Vanderbilt Full-Stack Coding Boot Camp, Nashville, TN
            <br />A 24-week program developing skills in HTML, CSS, JavaScript,
            Node, MySQL, MongoDB, Express, and React. Graduated March 2022.
          </div>

          <div className='resume-subheader'>
            <div>Degree</div>
            University of Michigan, Dearborn, MI
            <br />
            Bachelor of Arts with High Distinction, English major, German minor.
            Graduated 2009.
          </div>
        </article>
      </div>
    </section>
  );
}
