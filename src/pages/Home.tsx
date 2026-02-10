import Header from "../components/Header";
import Particles from "../components/Particles";
import Projects from "../components/Projects";
import '../index.css'
import { motion, useScroll, useTransform } from 'framer-motion';

function Home() {
    const { scrollY } = useScroll();
    const opacity = useTransform(scrollY, [0, 300], [1, 0]);

    return (
        <div className="relative">
            <Header />

            {/* Background layer stays fixed */}
            <Particles />

            {/* Transparent Hero Section - Particles are visible here */}
            <section className="h-screen flex items-center justify-center sticky top-0 -z-10">
                <motion.h1
                    style={{ opacity }}
                    className="text-5xl font-serif text-center px-4"
                >
                    {/* Split text for individual word hover effect */}
                    {"Admiring the light that couldn't shine me".split(" ").map((word, i) => (
                        <span
                            key={i}
                            className="inline-block transition-all duration-300 hover:blur-[2px] cursor-default"
                        >
                            {word}&nbsp;
                        </span>
                    ))}
                </motion.h1>
            </section>

            <div className="relative z-10 bg-[var(--background)]">
                {/* Solid Project Section - Particles are covered here */}
                <Projects />

                <section className="h-[4vh] flex items-center justify-center">
                    <p className="font-mono text-sm">@Ende.</p>
                </section>
            </div>
        </div>
    );
}
export default Home;
