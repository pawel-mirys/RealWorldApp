import clsx from 'clsx';
import styles from './Footer.module.scss';

const Footer = () => {
  return (
    <footer
      className={clsx(
        styles.footer,
        'flex flex-row gap-3 justify-center items-center  border-t-2'
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
      and
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
