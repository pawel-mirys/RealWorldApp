import clsx from 'clsx';

const Footer = () => {
  return (
    <footer
      className={clsx(
        'flex flex-row gap-1 justify-center items-center border-t-2 h-20 mt-5'
      )}>
      <div>
        <span> The project is based on</span>
        <a
          className='text-sky-700 ml-1'
          target='_blank'
          href='https://demo.realworld.io/#/'>
          RealWorld
        </a>
      </div>
      &
      <div>
        <span>RealWorld</span>
        <a
          className='text-sky-700 ml-1'
          target='_blank'
          href='https://realworld-docs.netlify.app/docs/intro'>
          Docs
        </a>
      </div>
    </footer>
  );
};
export default Footer;
