import { motion } from "framer-motion";
import Image from "next/image";
import { FaFacebook, FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import profilePic from "../../Assets/imgs/me.png";

const About = () => {
  return (
    <section
      id="about"
      className="py-20 bg-gradient-to-b from-gray-900 to-gray-800"
    >
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="relative w-64 h-64 mx-auto">
            <div className="absolute inset-0 bg-primary rounded-full opacity-20 blur-xl"></div>
            <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-primary">
              <Image
                src={profilePic}
                alt="Profile"
                className="w-full h-full object-cover"
                width={256}
                height={256}
              />
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="px-4"
        >
          <h2 className="text-3xl font-bold mb-6 text-[#143D95]">About Me</h2>
          <p className="text-lg mb-6">
            I'm a passionate Frontend Developer based in Al-Madinah, Saudi
            Arabia, with over 2 years of experience building responsive,
            high-performance web applications using React and Next.js. I'm
            dedicated to creating great user experiences and constantly
            expanding my skill set—currently learning Node.js to become a Full
            Stack Developer. I enjoy solving complex problems with clean,
            efficient code and would be happy to work with you.
          </p>

          <div className="flex space-x-4">
            <motion.a
              href="https://github.com/MohamedElrewiny"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ y: -3 }}
              className="text-2xl text-gray-300  hover:text-primary "
            >
              <FaGithub />
            </motion.a>
            <motion.a
              href="https://www.linkedin.com/in/mohamed-morad-a8457833b/"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ y: -3 }}
              className="text-2xl text-gray-300  hover:text-primary "
            >
              <FaLinkedin />
            </motion.a>
            <motion.a
              href="https://wa.me/+9660570034062"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ y: -3 }}
              className="text-2xl text-gray-300  hover:text-primary "
            >
              <FaWhatsapp />
            </motion.a>
            <motion.a
              href="https://www.facebook.com/share/12Gc8C75UMQ/"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ y: -3 }}
              className="text-2xl text-gray-300  hover:text-primary "
            >
              <FaFacebook />
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
