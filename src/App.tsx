import './index.css';
import { motion, useScroll, useSpring } from 'framer-motion';
import { Data } from './data/data';
import Info from './components/Info';

export default function App() {
    const { scrollYProgress } = useScroll();
    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001,
    });

    return (
        <>
            {Data.map(({ id, title, text }) => (
                <Info key={id} id={id} title={title} text={text} />
            ))}
            <motion.div className="progress" style={{ scaleX }} />
        </>
    );
}
