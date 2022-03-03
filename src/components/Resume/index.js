export default function Resume({ activeComponent }) {
  return (
    <section
      id='resume'
      className={activeComponent === "Resume" ? "fade-in" : ""}
    >
      <div className='container'>
        <article>
          <div className='center-text'>
            <a
              download='BrandonHoskinsCV.docx'
              href={process.env.PUBLIC_URL + "/docs/BrandonHoskinsCV.docx"}
              className='accent-button'
            >
              Download as DOCX
            </a>
            <a
              download='BrandonHoskinsCV.pdf'
              href={process.env.PUBLIC_URL + "/docs/BrandonHoskinsCV.pdf"}
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
              Email:{" "}
              <a href='mailto:branjames117@gmail.com'>branjames117@gmail.com</a>
              <br />
              LinkedIn:{" "}
              <a href='https://linkedin.com/in/branjames117' target='new'>
                linkedin.com/in/branjames117/
              </a>
              <br />
              GitHub:{" "}
              <a href='https://github.com/branjames117' target='new'>
                github.com/branjames117
              </a>
              <br />
              Portfolio:{" "}
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
            back-end technologies. Lifelong learner.
          </div>

          <div className='center-text resume-header'>
            <h3>TECHNICAL SKILLS</h3>
          </div>

          <div className='resume-subheader'>
            <strong>Languages:</strong> JavaScript, SQL, HTML5, CSS3, Python
            <br />
            <strong>Libraries and Frameworks:</strong> Node, Express, React,
            Next, MongoDB, Bootstrap, Tailwind
            <br />
            <strong>Skills:</strong> Git and GitHub, Mobile Responsiveness and
            Semantic HTML, Vercel, Heroku, AWS, ORM
          </div>

          <div className='center-text resume-header'>
            <h3>PROJECTS</h3>
          </div>

          <div className='resume-subheader'>
            <div>BonnApp21</div>
            Repo:{" "}
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
            Repo:{" "}
            <a href='https://github.com/branjames117/lyriquery'>
              https://github.com/branjames117/lyriquery
            </a>
            <br />
            Live:{" "}
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
            <div>One Small Step</div>
            Repo:{" "}
            <a href='https://github.com/branjames117/one-small-step'>
              https://github.com/branjames117/one-small-step
            </a>
            <br />
            Live:
            <a href='https://branjames117.github.io/one-small-step/'>
              https://branjames117.github.io/one-small-step/
            </a>
            <br />
            <ul>
              <li>
                Single-page application with various NASA and astronomy-related
                APIs including Astronomy Picture of the Day, NASA Image and
                Video Search, ISS Tracker, and Reddit.
              </li>
              <li>Acted as project lead with three other developers.</li>
            </ul>
          </div>

          <div className='center-text resume-header'>
            <h3>WORK EXPERIENCE</h3>
          </div>

          <div className='resume-subheader'>
            <div>Team Lead/Technician (2016 - Current)</div>
            A.O. Smith - APCOM - Franklin, TN
            <br />
            As setup operator, run and maintain machines on the production line
            and change machine configurations. As team lead, manage employees
            and operations of department and ensure quality and production goals
            are met or exceeded; maintain lines of communication with
            supervisors as well as maintenance and engineering.
            <br />
            <ul>
              <li>
                Became team lead over a large department one year after hire.
              </li>
              <li>
                Consistently surpassed annual performance review expectations.
              </li>
            </ul>
          </div>

          <div className='center-text resume-header'>
            <h3>EDUCATION</h3>
          </div>

          <div className='resume-subheader'>
            <div>Certificate</div>
            Vanderbilt Full-Stack Coding Boot Camp, Nashville, TN
            <br />A 24-week program developing skills in HTML, CSS, JavaScript,
            Node, MySQL, MongoDB, Express, and React. Began in September 2021,
            graduating in March 2022.
          </div>

          <div className='resume-subheader'>
            <div>Degree</div>
            University of Michigan, Dearborn, MI
            <br />
            Bachelor of Arts with High Distinction, English major, German minor,
            graduated 2009.
          </div>
        </article>
      </div>
    </section>
  );
}
