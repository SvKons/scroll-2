import { motion, MotionValue, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

function useParallax(value: MotionValue<number>, distance: number) {
    return useTransform(value, [0, 1], [-distance, distance]);
}

function Info({ id, title, text }: { id: number; title: string; text: string }) {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({ target: ref });
    const y = useParallax(scrollYProgress, 300);

    return (
        <section>
            <div ref={ref}>
                <img src={require(`../img/${id}.jpg`)} alt="Картинка" />
            </div>
            <div className="services__wrap-bg">
                <div className="services__info">
                    <h2 className="services__title">{title}</h2>
                    <p className="services__text">{text}</p>
                </div>
            </div>
            <motion.h2 style={{ y }}>{`#00${id}`}</motion.h2>
        </section>
    );
}

export default Info;
