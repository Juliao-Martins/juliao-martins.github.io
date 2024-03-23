import { TypeAnimation } from "react-type-animation";
import img from "/img/juliao_martins.jpg";

export default function Header() {
  return (
    <section className="header_container">
      <div className="header_image">
        <img className="image_me" src={img} alt="" />
        <h1 className="image_header">
          Juli&atilde;o <span className="text-orange-500">Martins</span>
        </h1>
      </div>
      <div className="header_typewritter">
        <h2 className="typewritter_header">
          Ola, <span className="text-orange-500">Belum sira👋</span>
        </h2>
        <MyTypeAnimation />
      </div>
    </section>
  );
}

function MyTypeAnimation() {
  return (
    <TypeAnimation
      sequence={[
        "Hau Julião Martins.",
        969,
        "Bemvindu Belum sira🤝",
        999,
        "Hau gosta dezeñu Pajina Web.",
        999,
        "Hau gosta programasaun Web.",
        6666,
      ]}
      wrapper="span"
      cursor={true}
      repeat={Infinity}
      speed={10}
    />
  );
}
