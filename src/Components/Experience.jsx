import { motion } from "framer-motion";

export default function Experience() {
  const myExpJob = [
    {
      id: 1,
      title: "Servisu voluntariu iha ONG Info Timor",
      date: "2018-11-03",
      desc: "Hau halao servisu voluntariu iha ONG Info Timor durante fulan rua nia laran hanesan asistente formandu hanorin pakote Office. no hau rasik fo formasaun HTML ba formandu sira.",
    },
    {
      id: 2,
      title: "Sai hanesan Manorin iha ETI Dili",
      date: "2023-03-15",
      desc: "Hau halao servisu volutariu iha ETI Dili durante fulan tolu hanesan manorin hanorin dezenhu no programasaun web. utiliza HTML, CSS, JavaScript no PHP.",
    },
    {
      id: 3,
      title: "Dezenu Web ba instuisaun privadu",
      date: "2024-01-15",
      desc: "Iha tinan ida nee hau foka liu ba iha Dezenu web ba instituisaun privada sira ho abilidade neebe hau iha.",
    },
  ];

  return (
    <section className="experience_container">
      <div className="info_label">
        <h1 className="info_label_header">Experiensia</h1>
        <p>Hau nia experiensia servisu</p>
      </div>
      <div className="experience">
        {myExpJob.map((data) => (
          <ListExp key={data.id} data={data} />
        ))}
      </div>
    </section>
  );
}

function ListExp({ data }) {
  const fadeFromLeft = {
    hidden: {
      opacity: 0,
      x: "-100%",
    },
    visible: {
      opacity: 1,
      x: 0,
    },
  };

  const fadeFromRight = {
    hidden: {
      opacity: 0,
      x: "100%",
    },
    visible: {
      opacity: 1,
      x: 0,
    },
  };

  return (
    <div className="experience_content">
      <motion.p
        variants={fadeFromLeft}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px 0px -100px 0px" }}
        className="experience_date"
      >
        {data.date}
      </motion.p>
      <p>
        <Rocket />
      </p>
      <motion.div
        variants={fadeFromRight}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-150px 0px -150px 0px" }}
        className="experience_card"
      >
        <h4 className="experience_card_title">{data.title}</h4>
        <p className="experience_card_desc">{data.desc}</p>
      </motion.div>
    </div>
  );
}

function Rocket() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className="w-6 h-6 fill-orange-500"
    >
      <path
        fillRule="evenodd"
        d="M9.315 7.584C12.195 3.883 16.695 1.5 21.75 1.5a.75.75 0 0 1 .75.75c0 5.056-2.383 9.555-6.084 12.436A6.75 6.75 0 0 1 9.75 22.5a.75.75 0 0 1-.75-.75v-4.131A15.838 15.838 0 0 1 6.382 15H2.25a.75.75 0 0 1-.75-.75 6.75 6.75 0 0 1 7.815-6.666ZM15 6.75a2.25 2.25 0 1 0 0 4.5 2.25 2.25 0 0 0 0-4.5Z"
        clipRule="evenodd"
      />
      <path d="M5.26 17.242a.75.75 0 1 0-.897-1.203 5.243 5.243 0 0 0-2.05 5.022.75.75 0 0 0 .625.627 5.243 5.243 0 0 0 5.022-2.051.75.75 0 1 0-1.202-.897 3.744 3.744 0 0 1-3.008 1.51c0-1.23.592-2.323 1.51-3.008Z" />
    </svg>
  );
}
