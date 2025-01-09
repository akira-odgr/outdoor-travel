import { motion } from "framer-motion";
import { JournalData } from "./JournalData";
import { SlideUp } from "../../utility/animation";

export const Journal = () => {
    return (
        <section className="container mt-40" id="journal">
            {/* header section */}
            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 2, delay: 0.2 }}
                className="text-center md:max-w-[650px] mx-auto space-y-4"
            >
                <p className="text-3xl">The Journal</p>
                <p>
                    公有地とアウトドア保護に関わる機会に関する
                    あなたのアウトドア体験を守るために を体験してください。
                </p>
            </motion.div>

            {/* cards section */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-14 place-items-center mt-20">
                {JournalData.map((data) => (
                    <motion.div
                        variants={SlideUp(data.delay)}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        key={data.id}
                    >
                        <div className="overflow-hidden">
                            <img
                                src={data.image}
                                alt=""
                                className="w-full h-[350px] object-cover hover:scale-110 transition duration-500 ease-in-out"
                            />
                        </div>

                        {/* card text section */}
                        <div className="space-y-1 py-6 text-center px-12">
                            <p className="uppercase">{data.date}</p>
                            <p className="text-xl font-semibold font-merriweather">
                                {data.title}
                            </p>
                            <p className="!mt-8">{data.about}</p>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};
