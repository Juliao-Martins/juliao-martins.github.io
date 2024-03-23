export default function Ability() {
  const projects = [
    {
      id: 1,
      img: "./img/makquiz.jpg",
      title: "MakQuiz",
      desc: "MakQuiz hanesan aplikasaun web ida neebe koko ita boot sira koniesimentu komun. baze dezenvolvimentu ho ReactJS",
    },
    {
      id: 2,
      img: "./img/public_api.jpg",
      title: "Public API",
      desc: "Hau utiliza Django ho nia ekosistema Django REST Framework hodi oferese API gratuita ba public.",
    },
    {
      id: 3,
      img: "./img/3d_game.jpg",
      title: "Game 3D iha Web",
      desc: "Hau koko kria game 3D iha web neebe simple tebtebes ho baze dezenvolvimentu uza Three.JS",
    },
  ];

  return (
    <>
      <section className="info_label">
        <h1 className="info_label_header">Projetu</h1>
        <p className="font-jetbrains">Hau nia projetu</p>
      </section>
      <section className="ability_container">
        {projects.map((project) => (
          <div key={project.id} className="card_ability">
            <img
              src={project.img}
              alt={project.img}
              className="card_ability_image"
            />
            <div className="p-3">
              <h3>{project.title}</h3>
              <p>{project.desc}</p>
            </div>
          </div>
        ))}
      </section>
    </>
  );
}
