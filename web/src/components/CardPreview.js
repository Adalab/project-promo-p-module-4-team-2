import Profile from "./avatar/Profile";

function CardPreview(props) {
  return (
    <section className="container__preview">
      <div className="card__container">
        <button
          className="card__reset js-reset"
          href="#"
          onClick={props.handleReset}
        >
          <i className="far fa-trash-alt"></i> reset
        </button>

        <div className={`card js-preview palette-${props.dataCard.palette}`}>
          <div className="card__personalInfo personalInfoBorderPalette1 js-borde">
            <p className="card__personalInfo--name js-personalName personalInfoNamePalette1">
              {props.dataCard.name || "Nombre Apellidos"}
            </p>
            <p className="card__personalInfo--job js-cardJob">
              {props.dataCard.job || "Front-End developer"}
            </p>
          </div>
          <Profile photo={props.photo} />

          <nav className="card__socialInfo">
            <ul className="card__socialMenu">
              <li className="card__rrss">
                <a
                  className="card__rrss--item rrssPalette1 js-border1 js-iconPhone"
                  href={`tel:${props.dataCard.phone}`}
                  target="_blank"
                  title="phone number"
                  rel="noreferrer"
                >
                  <i className="icon fas fa-mobile-alt js-icon1"></i>
                </a>
              </li>
              <li className="card__rrss">
                <a
                  className="card__rrss--item rrssPalette1 js-border2 js-iconEmail"
                  href={`mailto:${props.dataCard.email || "hola@adalab.es"}`}
                  target="_blank"
                  rel="noreferrer"
                  title="email address"
                >
                  <i className="icon far fa-envelope js-icon2"></i>
                </a>
              </li>
              <li className="card__rrss">
                <a
                  className="card__rrss--item rrssPalette1 js-border3 js-iconLinkedin"
                  href={`https://es.linkedin.com/in/${props.dataCard.linkedin}`}
                  target="_blank"
                  rel="noreferrer"
                  title="linkedin"
                >
                  <i className="icon fab fa-linkedin-in js-icon3"></i>
                </a>
              </li>
              <li className="card__rrss">
                <a
                  className="card__rrss--item rrssPalette1 js-border4 js-iconGithub"
                  href={`https://github.com/${props.dataCard.github}`}
                  target="_blank"
                  rel="noreferrer"
                  title="github"
                >
                  <i className="icon fab fa-github-alt js-icon4"></i>
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </section>
  );
}
export default CardPreview;
