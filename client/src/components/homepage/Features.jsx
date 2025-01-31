// Style
import "../../style/generalCSS.scss";
import "../../style/components/homepage/Features.scss";

// Components
import Feature from "./Feature";

// Data
import chat from "../../assets/icon-chat.png";
import money from "../../assets/icon-money.png";
import security from "../../assets/icon-security.png";

function Features() {
  const features = [
    {
      logo: chat,
      alt: "Chat icon",
      title: "You are our #1 priority",
      text: "Need to talk to a representative? You can get in touch through our 24/7 chat or through a phone call in less than 5 minutes.",
    },
    {
      logo: money,
      alt: "Money icon",
      title: "More savings means higher rates",
      text: "The more you save with us, the higher your interest rate will be!",
    },
    {
      logo: security,
      alt: "Security icon",
      title: "Security you can trust",
      text: "We use top of the line encryption to make sure your data and money is always safe.",
    },
  ];

  return (
    <section className="features">
      <h2 className="sr-only">Features</h2>
      {features.map((feature, index) => (
        <Feature
          key={index}
          logo={feature.logo}
          alt={feature.alt}
          title={feature.title}
          text={feature.text}
        />
      ))}
    </section>
  );
}

export default Features;
