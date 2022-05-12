import '../styles/App.scss';

function Footer(props) {
  return (
    <footer className='footer'>
      <small className='footer__text'>Awesome profile-cards @2018</small>
      <a href='http://adalab.es' target='_blank' rel='noreferrer'>
        <img
          className='footer__logo'
          src={props.src}
          alt='Logo Ninfas'
          title='Logo Equipo Ninfas'
        />
      </a>
    </footer>
  );
}
export default Footer;
