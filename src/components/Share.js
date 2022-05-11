import { useEffect, useState } from 'react';

function Share(props) {
  const [collapsedShare, setCollapsedShare] = useState('collapsed');
  const [errorMessage, setErrorMessage] = useState('');
  const [result, setResult] = useState('');

  const handleCollapsedShare = (ev) => {
    console.log('holaaaaa');
    // Llama a la API
    props.handleClickCreateCard(ev);
  };

  const twitterShare = (event) => {
    event.preventDefault();
    const url = `https://twitter.com/intent/tweet?text=He%20creado%20una%20tarjeta%20con%20el%20Awesome%20profile%20cards%20del%20Team%20Hook&url=${props.apiData.cardURL}`;
    window.open(url, '_blank');
  };

  const errorCard = () => {
    if (!props.apiData) {
      setCollapsedShare('collapsed');
    } else {
      console.log(props.apiData);
      if (props.apiData.success) {
        setResult('La tarjeta ha sido creada:');
        setErrorMessage('');
        setCollapsedShare('');
      } else {
        setErrorMessage(props.apiData.error);
        setCollapsedShare('collapsed');
      }
    }
  };

  // Cada vez que cambie la respuesta de la API
  // recalculamos si hay o no algun error y lo pintamos
  useEffect(errorCard, [props.apiData]);

  return (
    <>
      <fieldset className='thirdFieldset'>
        <h3
          onClick={props.handleClickShare}
          className='thirdFieldset__legend js-titleShare'
          id='share'
        >
          <i className='fa-solid fa-share-nodes'></i>Comparte
          <i
            className={`fa-solid fa-angle-up ${
              props.collapseShare ? 'rotate' : ''
            } js-angleShare`}
          ></i>
        </h3>
        <div
          className={`${
            props.collapseShare ? 'collapsed' : ''
          } js-thirdFieldset`}
        >
          <button
            className='thirdFieldset__button js-thirdFieldset__button js_create_button'
            title='Crear tarjeta'
            onClick={handleCollapsedShare}
          >
            <i className='fa-regular fa-address-card'></i>Crear tarjeta
          </button>
        </div>
      </fieldset>
      <fieldset className='fourFieldset'>
        <p className='fourFieldset__link js_url_card'>{errorMessage}</p>
        <div className={`js-fourFieldset ${collapsedShare}`}>
          <p className='fourFieldset__link js_url_card'>{result}</p>
          <a
            href={props.apiData?.cardURL}
            target='_blank'
            rel='noreferrer'
            title='Haz click para ir a la tarjeta creada'
            className='fourFieldset__link js_url_card'
          >
            {props.apiData?.cardURL}
          </a>
          <button
            className='fourFieldset__button js-twitterButton'
            title='Compartir en twitter'
            onClick={twitterShare}
          >
            <i className='fa-brands fa-twitter'></i>Compartir en twitter
          </button>
        </div>
      </fieldset>
    </>
  );
}

export default Share;
