import { motion } from "framer-motion";
import FooterImage from "../../assets/images/footer.jpg";

const FooterBgImg = {
    backgroundImage: `url(${FooterImage})`,
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
};

export const Footer = () => {
    return (
        <motion.footer
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1.5, delay: 0.2 }}
            viewport={{ once: true }}
            style={FooterBgImg}
            className="relative h-[500px] bg-brandDark flex justify-center items-end mt-16"
        >
            <div
                className="absolute inset-0 bg-gradient-radial from-transparent via-black/50 to-black z-10"
                style={{
                    background:
                        "radial-gradient(circle, rgba(0,0,0,0.3) 50%, rgba(11,11,11,0.5) 70%, rgba(11,11,13,0.8) 90%",
                }}
            ></div>
            <p className="relative z-20 mb-6">
                &copy; 2024. All right reserved | The Coding Journey
            </p>
        </motion.footer>
    );
};
