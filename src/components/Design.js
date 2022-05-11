function Design(props) {
  const handleInput = (ev) => {
    const inputValue = ev.target.value;
    const inputChanged = ev.target.name;
    props.handleInputChange(inputValue, inputChanged);
  };
  return (
    <fieldset className='container-desing'>
      <legend
        onClick={props.handleClickDesign}
        className='legend js-titleDesign'
        id='design'
      >
        <h2 className='title-design'>
          <i className='far fa-object-ungroup'></i>Diseña
          <i
            className={`fa-solid fa-angle-up ${
              props.collapseDesign ? 'rotate' : ''
            } js-angleDesign`}
          ></i>
        </h2>
      </legend>

      <section
        className={` ${
          props.collapseDesign ? 'collapsed' : ''
        } container-colors js-firstFieldset`}
      >
        <p className='paragraph'>colores</p>
        <div className='colors'>
          <div className='design-option'>
            <input
              className='input js-input1 design-input js_radio'
              type='radio'
              id='palette-1'
              name='palette'
              value='1'
              onChange={handleInput}
              checked={props.dataCard.palette === '1'}
            />
            <label htmlFor='palette1'>
              <ul className='design-list'>
                <li className='squad1'></li>
                <li className='squad2'></li>
                <li className='squad3'></li>
              </ul>
            </label>
          </div>
          <div className='design-option'>
            <input
              className='input js-input2 design-input js_radio'
              type='radio'
              id='palette-2'
              name='palette'
              value='2'
              onChange={handleInput}
              checked={props.dataCard.palette === '2'}
            />
            <label htmlFor='palette2'>
              <ul className='design-list'>
                <li className='squad1-1'></li>
                <li className='squad2-2'></li>
                <li className='squad3-3'></li>
              </ul>
            </label>
          </div>
          <div className='design-option'>
            <input
              className='input js-input3 design-input js_radio'
              type='radio'
              id='palette-3'
              name='palette'
              value='3'
              onChange={handleInput}
              checked={props.dataCard.palette === '3'}
            />
            <label htmlFor='palette3'>
              <ul className='design-list'>
                <li className='squad1-1-1'></li>
                <li className='squad2-2-2'></li>
                <li className='squad3-3-3'></li>
              </ul>
            </label>
          </div>
          <div className='design-option'>
            <input
              className='input js-input4 design-input js_radio'
              type='radio'
              id='palette-4'
              name='palette'
              value='4'
              onChange={handleInput}
              checked={props.dataCard.palette === '4'}
            />
            <label htmlFor='palette4'>
              <ul className='design-list'>
                <li className='squad1-4'></li>
                <li className='squad2-4'></li>
                <li className='squad3-4'></li>
              </ul>
            </label>
          </div>
          <div className='design-option'>
            <input
              className='input js-input5 design-input js_radio'
              type='radio'
              id='palette-5'
              name='palette'
              value='5'
              onChange={handleInput}
              checked={props.dataCard.palette === '5'}
            />
            <label htmlFor='palette5'>
              <ul className='design-list'>
                <li className='squad1-5'></li>
                <li className='squad2-5'></li>
                <li className='squad3-5'></li>
              </ul>
            </label>
          </div>
          <div className='design-option'>
            <input
              className='input js-input6 design-input js_radio'
              type='radio'
              id='palette-6'
              name='palette'
              value='6'
              onChange={handleInput}
              checked={props.dataCard.palette === '6'}
            />
            <label htmlFor='palette6'>
              <ul className='design-list'>
                <li className='squad1-6'></li>
                <li className='squad2-6'></li>
                <li className='squad3-6'></li>
              </ul>
            </label>
          </div>
        </div>
      </section>
    </fieldset>
  );
}
export default Design;
