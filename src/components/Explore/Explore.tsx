import { motion } from "framer-motion";
import { ExploreData } from "./ExploreData";
import { SlideUp } from "../../utility/animation";

export const Explore = () => {
    return (
        <section className="container overflow-hidden" id="explore">
            {/* header section */}
            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 2, delay: 0.2 }}
                viewport={{ once: true }}
                className="text-center md:max-w-[650px] mx-auto space-y-4"
            >
                <p>世界を探検する</p>
                <p>
                    私たちは、アスリートたちから最も信頼できるコンテンツを提供したいと考えています、
                    冒険家、探検家、世界中を旅するトラベラーたちから、最も信頼できるコンテンツを提供したいと考えています。私たちの長い
                    私たちの長年の使命は、すべての人々を教育し、刺激し、野生を体験させることです。
                    野生を体験することです。
                </p>
            </motion.div>

            {/* cards section */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 place-items-center mt-20">
                {ExploreData.map((data) => {
                    return (
                        <motion.div
                            variants={SlideUp(data.delay)}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            key={data.id}
                            className="relative"
                        >
                            <div className="overflow-hidden">
                                <img
                                    src={data.image}
                                    alt=""
                                    className="w-[380px] h-[550px] object-cover hover:scale-110 transition duration-500 ease-in-out"
                                />
                            </div>
                            <div className="absolute w-full bottom inset-0 bg-brandDark/15 pointer-events-none">
                                <div className="flex flex-col justify-end items-center h-full space-y-1 py-6">
                                    <h3 className="text-2xl font-semibold">
                                        {data.title}
                                    </h3>
                                    <p className="uppercase">{data.place}</p>
                                </div>
                            </div>
                        </motion.div>
                    );
                })}
            </div>

            {/* Button section */}
            <button className="block mx-auto mt-6 text-brandBlue uppercase font-bold">
                See more
            </button>
        </section>
    );
};
