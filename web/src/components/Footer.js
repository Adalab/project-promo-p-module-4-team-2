import '../styles/App.scss';

function Footer(props) {
  return (
    <footer className='footer'>
      <small className='footer__text'>Awesome profile-cards @2018</small>
      <a href='http://adalab.es' target='_blank' rel='noreferrer'>
        <img
          className='footer__logo'
          src={props.src}
          alt='Logo Hook'
          title='Logo Team Hook'
        />
      </a>
    </footer>
  );
}
export default Footer;
