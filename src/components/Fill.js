import GetAvatar from './avatar/GetAvatar';

function Fill(props) {
  const handleInput = (ev) => {
    const inputValue = ev.target.value;
    const inputChanged = ev.target.name;
    props.handleInputChange(inputValue, inputChanged);
  };

  return (
    <fieldset className='secondFieldset'>
      <h3
        onClick={props.handleClickFill}
        className='secondFieldset__legend js-titleFill'
        id='fill'
      >
        <i className='fa-solid fa-keyboard icon'></i>Rellena
        <i
          className={`fa-solid fa-angle-up ${
            props.collapseFill ? 'rotate' : ''
          } js-angleFill`}
        ></i>
      </h3>
      <div
        className={`${props.collapseFill ? 'collapsed' : ''} js-secondFieldset`}
      >
        <label htmlFor='completeName' className='secondFieldset__label'>
          Nombre Apellido
        </label>
        <input
          id='completeName'
          type='text'
          name='name'
          placeholder='Ej:Sally Jill'
          className='secondFieldset__input js-name js-input'
          required
          value={props.dataCard.name}
          onChange={handleInput}
        />
        <label htmlFor='marketStall' className='secondFieldset__label'>
          Puesto
        </label>
        <input
          id='marketStall'
          type='text'
          name='job'
          placeholder='Ej:front-end unicorn'
          className='secondFieldset__input js-job js-input'
          required
          value={props.dataCard.job}
          onChange={handleInput}
        />
        <label htmlFor='addimage' className='secondFieldset__label'>
          Imagen de perfil
        </label>
        <div className='secondFieldset__buttoncontainer'>
          <GetAvatar
            handleInputChange={props.handleInputChange}
            photo={props.photo}
          />
        </div>
        <label htmlFor='addemail' className='secondFieldset__label'>
          Email
        </label>
        <input
          id='addemail'
          type='email'
          name='email'
          placeholder='Ej: sally-hill@gmail.com'
          className='secondFieldset__input js-addemail js-input'
          required
          value={props.dataCard.email}
          onChange={handleInput}
        />
        <label htmlFor='addphone' className='secondFieldset__label'>
          Teléfono
        </label>
        <input
          id='addphone'
          type='text'
          name='phone'
          placeholder='Ej: 555-55-55-55'
          className='secondFieldset__input js-addPhone js-input'
          required
          value={props.dataCard.phone}
          onChange={handleInput}
        />
        <label htmlFor='addLinkedin' className='secondFieldset__label'>
          Linkedin
        </label>
        <input
          id='addLinkedin'
          type='text'
          name='linkedin'
          placeholder='Ej:sally.hill'
          className='secondFieldset__input js-addLinkedin js-input'
          required
          value={props.dataCard.linkedin}
          onChange={handleInput}
        />
        <label htmlFor='addGithub' className='secondFieldset__label'>
          Github
        </label>
        <input
          id='addGithub'
          type='text'
          name='github'
          placeholder='Ej: @sally-hill'
          className='secondFieldset__input js-addGithub js-input'
          required
          value={props.dataCard.github}
          onChange={handleInput}
        />
      </div>
    </fieldset>
  );
}

export default Fill;
