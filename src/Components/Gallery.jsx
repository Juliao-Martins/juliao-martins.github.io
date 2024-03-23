import {
  AnimatePresence,
  animate,
  motion,
  useMotionValue,
} from "framer-motion";
import { useEffect, useState } from "react";
import useMeasure from "react-use-measure";

export default function Gallery() {
  const images = [
    "./img/1.jpg",
    "./img/2.jpg",
    "./img/3.jpg",
    "./img/4.jpg",
    "./img/5.jpg",
    "./img/6.jpg",
    "./img/7.jpg",
  ];

  const FAST_DURATION = 15;
  const SLOW_DURATION = 75;

  const x = useMotionValue(0);
  const [ref, { width }] = useMeasure();
  const [duration, setDuration] = useState(FAST_DURATION);
  const [mustFinish, setMustFinish] = useState(false);
  const [renderer, setRenderer] = useState(false);

  useEffect(() => {
    let controls;
    const finalPosition = -width / 5 - 10;

    if (mustFinish) {
      controls = animate(x, [x.get(), finalPosition], {
        duration: duration * (1 - x.get() / finalPosition),
        ease: "linear",
        repeat: Infinity,
        repeatType: "loop",
        onComplete: () => {
          setMustFinish(false);
          setRenderer(!renderer);
        },
      });
    } else {
      controls = animate(x, [0, finalPosition], {
        duration: duration,
        ease: "linear",
        repeat: Infinity,
        repeatDelay: 0,
        repeatType: "loop",
      });
    }

    return controls.stop;
  }, [x, width, duration, mustFinish, renderer]);

  return (
    <>
      <section className="info_label">
        <h3 className="info_label_header">Mai hamutuk ho Ami</h3>
        <p>
          Ita boot la lao mesak mai hamutuk ho ami hodi aprende dezenu no
          programasaun iha web, ho ami
        </p>
      </section>
      <section className="py-8">
        <motion.section
          className="gallery_container"
          ref={ref}
          style={{ x }}
          onMouseOver={() => {
            setDuration(SLOW_DURATION);
            setMustFinish(true);
          }}
          onMouseOut={() => {
            setDuration(FAST_DURATION);
            setMustFinish(true);
          }}
        >
          {[...images, ...images, ...images, ...images, ...images].map(
            (img, ndx) => (
              <CardImage key={ndx} img={img} />
            )
          )}
        </motion.section>
      </section>
    </>
  );
}

function CardImage({ img }) {
  const [hovered, setHovered] = useState(false);

  const container = {
    hidden: {
      opacity: 0,
      scale: 0.2,
    },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delayChildren: 0.4,
        staggerChildren: 0.3,
      },
    },
  };

  const item = {
    hidden: {
      opacity: 0,
      y: 50,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.4,
        type: "spring",
      },
    },
  };

  return (
    <motion.div
      className="card_image"
      onMouseOver={() => setHovered(true)}
      onMouseOut={() => setHovered(false)}
    >
      <AnimatePresence>
        {hovered && (
          <motion.div
            variants={container}
            initial="hidden"
            animate="visible"
            exit="hidden"
            className="card_overlay"
          >
            <motion.span variants={item} className="card_overlay_desc">
              Explora
            </motion.span>
          </motion.div>
        )}
      </AnimatePresence>
      <img
        src={img}
        alt={img}
        className="w-full h-full object-cover hover:animate-pulse"
      />
    </motion.div>
  );
}
