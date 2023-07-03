import ProjectBlock from '../ProjectBlock/ProjectBlock';
import picthat from '../../assets/picthatn.png';
import dga from '../../assets/dga.png';
import shoestop from '../../assets/shoestop.png';
import './projects.css';

const Projects = () => {
  return (
    <section className='projects section__padding bg-tint' id='projects'>
      <div className='container'>
        <div className='projects__heading'>
          <h2 className='heading__title'>Projects</h2>
          <div className='divider'></div>
        </div>
        <div className='projects__container'>
          <ProjectBlock
            img={shoestop}
            title={`ShoeStop`}
            content={`A fully functional e-commerce shoe store that features: user authentication, adding and removing products from a cart and paying for the products using a Stripe test card. `}
            liveLink={`https://shoe-stop.vercel.app/`}
            codeLink={`https://github.com/karl-george/ShoeStopSite`}
            tech={['Next.js', 'TypeScript', 'Tailwind', 'Sanity']}
          />
          <ProjectBlock
            img={picthat}
            title={`PicThat Social Media`}
            content={`A social media image sharing platform that allows users to sign in with their google account aswell as upload, favourite, download and search images and gifs uploaded by themselves and other users.`}
            liveLink={`https://picthat.netlify.app/`}
            codeLink={`https://github.com/karl-george/picthat`}
            tech={['React', 'Sanity', 'Tailwind']}
          />
          <ProjectBlock
            img={dga}
            title={`Digital Agency SPA`}
            content={`A website designed for a fictional design agency taken from initial design template through to finished product as a SPA.`}
            liveLink={`https://karl-george.github.io/digital-agency-landing/`}
            codeLink={`https://github.com/karl-george/digital-agency-landing`}
            tech={['React']}
          />
        </div>
      </div>
    </section>
  );
};

export default Projects;
