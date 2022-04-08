import { useEffect } from 'react';

export default function About({ activeComponent }) {
  useEffect(() => {
    let starNodes = document.querySelectorAll('.secret');

    starNodes.forEach((starNode) => {
      setInterval(() => {
        starNode.classList.add('brighter');
        setTimeout(() => {
          starNode.classList.remove('brighter');
        }, Math.random() * 1000 + 1000);
      }, Math.random() * 15000 + 1000);
    });
  });

  return (
    <section
      id='about'
      className={activeComponent === 'About' ? 'fade-in' : ''}
    >
      <h1>Bran James &times; Web Design</h1>
      <img
        src={require('../../images/profile2.jpg')}
        alt='Bran James with his infant daughter.'
        title='Bran James'
      />

      <h1>A Love Story</h1>
      <h2 className='secret' id='secret1'>
        Node.js
      </h2>
      <h2 className='secret' id='secret2'>
        Next.js
      </h2>
      <h2 className='secret' id='secret3'>
        React.js
      </h2>
      <h2 className='secret' id='secret4'>
        JavaScript
      </h2>
      <h2 className='secret' id='secret5'>
        HTML5
      </h2>
      <h2 className='secret' id='secret6'>
        CSS3
      </h2>
      <h2 className='secret' id='secret7'>
        MongoDB
      </h2>
      <h2 className='secret' id='secret8'>
        Bootstrap
      </h2>
      <h2 className='secret' id='secret9'>
        jQuery
      </h2>
      <h2 className='secret' id='secret10'>
        SQL
      </h2>
      <h2 className='secret' id='secret11'>
        Tailwind
      </h2>

      <div className='container'>
        <p>
          I'm Brandon James Hoskins, a full-stack web developer and graduate
          from{' '}
          <a href='https://bootcamps.vanderbilt.edu/coding/'>
            Vanderbilt University's Coding Boot Camp
          </a>
          . My skillset includes HTML5/CSS3 UI/UX design, MERN (MongoDB,
          Express.js, React.js, and Node.js), Next.js, AWS, and Python, but I'm
          always eager to adopt new technologies to find the most elegant
          solution. Outside of coding my passions include medieval literature,
          creative writing, earth stewardship, thinking about outer space,
          wuxia, <em>Magic: The Gathering</em>, and late night board game
          sessions.
        </p>
        <p>
          Originally from Detroit, Michigan, I currently reside outside of
          Nashville, Tennessee, with my wife, daughter, cat and dog. I studied
          English literature at the University of Michigan.
        </p>
      </div>
    </section>
  );
}
