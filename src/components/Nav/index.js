export default function Nav({ activeComponent, setActiveComponent }) {
  return (
    <header>
      <nav>
        <ul>
          <li>
            <button
              onClick={() => {
                setActiveComponent('About');
              }}
              className={activeComponent === 'About' ? 'nav-active' : ''}
            >
              about
            </button>
          </li>
          <li>
            <button
              onClick={() => setActiveComponent('Projects')}
              className={activeComponent === 'Projects' ? 'nav-active' : ''}
            >
              projects
            </button>
          </li>
          <li>
            <button
              onClick={() => setActiveComponent('Contact')}
              className={activeComponent === 'Contact' ? 'nav-active' : ''}
            >
              contact
            </button>
          </li>
          <li>
            <button
              onClick={() => setActiveComponent('Resume')}
              className={activeComponent === 'Resume' ? 'nav-active' : ''}
            >
              resume
            </button>
          </li>
        </ul>
      </nav>
    </header>
  );
}
