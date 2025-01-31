// Style
import "../../style/generalCSS.scss";
import "../../style/components/homepage/Feature.scss";

function Feature({ logo, alt, title, text }) {
  return (
    <div className="feature-item">
      <img className="feature-icon" alt={alt} src={logo} />
      <h3 className="feature-item-title">{title}</h3>
      <p>{text}</p>
    </div>
  );
}

export default Feature;
