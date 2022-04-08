export default function Contact({ activeComponent }) {
  // const [formState, setFormState] = useState({
  //   name: '',
  //   email: '',
  //   message: '',
  // });

  // const [validName, setValidName] = useState(true);
  // const [validEmail, setValidEmail] = useState(true);
  // const [validMessage, setValidMessage] = useState(true);
  // const [messageSent, setMessageSent] = useState(false);

  // const { name, email, message } = formState;

  // function validateEmail(email) {
  //   var re =
  //     /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  //   return re.test(String(email).toLowerCase());
  // }

  // function handleChange(e) {
  //   if (e.target.name === 'name') {
  //     if (e.target.value.trim() === '') {
  //       setValidName(false);
  //     } else {
  //       setValidName(true);
  //     }
  //   }

  //   if (e.target.name === 'email') {
  //     let isValid = validateEmail(e.target.value);
  //     if (e.target.value.trim() === '') {
  //       setValidEmail(false);
  //     } else {
  //       setValidEmail(true);
  //     }

  //     if (!isValid) {
  //       setValidEmail(false);
  //     } else {
  //       setValidEmail(true);
  //     }
  //   }

  //   if (e.target.name === 'message') {
  //     if (e.target.value.trim() === '') {
  //       setValidMessage(false);
  //     } else {
  //       setValidMessage(true);
  //     }
  //   }

  //   if (!validName || !validEmail || !validMessage) {
  //     setFormState({ ...formState, [e.target.name]: e.target.value });
  //   }
  // }

  // function handleSubmit(e) {
  //   e.preventDefault();
  //   if (
  //     !formState.name ||
  //     !formState.email ||
  //     !formState.message ||
  //     !validName ||
  //     !validEmail ||
  //     !validMessage
  //   ) {
  //     return;
  //   } else {
  //     setMessageSent(true);
  //   }
  // }

  return (
    <section
      id='contact'
      className={activeComponent === 'Contact' ? 'fade-in' : ''}
    >
      <div className='container'>
        <article>
          <ul>
            <li>
              <span>
                <i className='fas fa-envelope-square'></i>
              </span>
              <a href='mailto:branjames117@gmail.com'>branjames117@gmail.com</a>
            </li>
            <li>
              <span>
                <i className='fas fa-phone-square-alt'></i>
              </span>{' '}
              <span>931-996-8997</span>
            </li>
            <li>
              <span>
                <i className='fab fa-linkedin'></i>
              </span>
              <a href='https://www.linkedin.com/in/branjames117/'>
                linkedin.com/in/branjames117
              </a>
            </li>
            <li>
              <span>
                <i className='fab fa-facebook-square'></i>
              </span>
              <a href='https://www.facebook.com/branjames117'>
                facebook.com/branjames117
              </a>
            </li>
            <li>
              <span>
                <i className='fab fa-github-square'></i>
              </span>
              <a href='https://github.com/branjames117'>
                github.com/branjames117
              </a>
            </li>
          </ul>
        </article>
        {/* <form id='contact-form' onSubmit={handleSubmit}>
          <div className='form-control'>
            <label htmlFor='name'>Name</label>
            <input
              autoComplete='off'
              type='text'
              name='name'
              defaultValue={name}
              onBlur={handleChange}
            />
          </div>
          <div className='form-control'>
            <label htmlFor='email'>Email</label>
            <input
              autoComplete='off'
              type='email'
              name='email'
              defaultValue={email}
              onBlur={handleChange}
            />
          </div>
          <div>
            <textarea
              autoComplete='off'
              name='message'
              rows='5'
              defaultValue={message}
              placeholder='What can we accomplish together?'
              onBlur={handleChange}
            />
          </div>
          {true && (
            <div>
              <p className='error-text'>
                {!validName && <span>Your name is required.</span>}
                {!validEmail && <span>A valid email is required.</span>}
                {!validMessage && <span>A message is required.</span>}
              </p>
            </div>
          )}
          {!messageSent ? (
            <button type='submit'>Send Message</button>
          ) : (
            <button type='submit' disabled>
              Thank you for your message!
            </button>
          )}
        </form> */}
      </div>
    </section>
  );
}
