function Header(props) {
  return (
    <header className='header'>
      <a href='index.html' rel='noreferrer'>
        <img
          className='header__logo'
          src={props.src}
          alt='tarjetas molonas'
          title='logotipo awesome'
        />
      </a>
    </header>
  );
}
export default Header;
