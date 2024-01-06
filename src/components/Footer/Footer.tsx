import clsx from 'clsx';

const Footer = () => {
  return (
    <footer
      className={clsx(
        'flex items-center flex-wrap gap-1 justify-center border-t-2 h-20 mt-5 text-sm mx-4'
      )}>
      <span> The project is based on</span>
      <a
        className='text-sky-700 '
        target='_blank'
        href='https://demo.realworld.io/#/'>
        RealWorld
      </a>
      &<span>RealWorld</span>
      <a
        className='text-sky-700 '
        target='_blank'
        href='https://realworld-docs.netlify.app/docs/intro'>
        Docs
      </a>
    </footer>
  );
};
export default Footer;
