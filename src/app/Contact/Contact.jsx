import { useState, useRef } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import {
  FaPaperPlane,
  FaMapMarkerAlt,
  FaPhone,
  FaEnvelope,
} from "react-icons/fa";

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const [notification, setNotification] = useState(null);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);

    emailjs
      .send(
        "service_02nc8xb",
        "template_7rfttnc",
        {
          from_name: form.name,
          to_name: "Mohamed Morad",
          from_email: form.email,
          to_email: "moo.web22@gmail.com",
          message: form.message,
        },
        "ZtxR6m7GN4tcEw7pc"
      )
      .then(() => {
        setIsLoading(false);
        setNotification({
          type: "success",
          message: "Thank you for your message. I will get back to you soon!",
        });
        setForm({ name: "", email: "", message: "" });

        setTimeout(() => {
          setNotification(null);
        }, 4000);
      })
      .catch((error) => {
        setIsLoading(false);
        setNotification({
          type: "error",
          message: "Something went wrong. Please try again later.",
        });
      });
  };

  return (
    <section id="contact" className="py-20">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="text-center mb-16"
      >
        <h2 className="text-3xl font-bold mb-4 text-[#143D95]">Get In Touch</h2>
        <p className="text-lg max-w-2xl mx-auto">
          Have a project in mind or want to discuss potential opportunities?
          Feel free to reach out!
        </p>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-12">
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="space-y-6"
        >
          <div className="flex items-start space-x-4">
            <div className="text-[#143D95] text-xl mt-1">
              <FaMapMarkerAlt />
            </div>
            <div>
              <h3 className="text-xl font-bold mb-1">Location</h3>
              <p className="text-gray-400">
                {" "}
                AL-Madinah, Saudi Arabia
              </p>
            </div>
          </div>

          <div className="flex items-start space-x-4">
            <div className="text-[#143D95] text-xl mt-1">
              <FaEnvelope />
            </div>
            <div>
              <h3 className="text-xl font-bold mb-1">Email</h3>
              <p className="text-gray-400">
                moo.web22@gmail.com
              </p>
            </div>
          </div>

          <div className="flex items-start space-x-4">
            <div className="text-[#143D95] text-xl mt-1">
              <FaPhone />
            </div>
            <div>
              <h3 className="text-xl font-bold mb-1">Phone</h3>
              <p className="text-gray-400">+9660570034062</p>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block mb-2 font-medium">
                Name
              </label>
              <input
                type="text"
                name="name"
                id="name"
                value={form.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 rounded-lg border border-gray-700 bg-transparent focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>

            <div>
              <label htmlFor="email" className="block mb-2 font-medium">
                Email
              </label>
              <input
                type="email"
                name="email"
                id="email"
                value={form.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 rounded-lg border border-gray-700 bg-transparent focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>

            <div>
              <label htmlFor="message" className="block mb-2 font-medium">
                Message
              </label>
              <textarea
                name="message"
                id="message"
                rows="5"
                value={form.message}
                onChange={handleChange}
                required
                className="w-full resize-none px-4 py-3 rounded-lg border border-gray-700 bg-transparent focus:outline-none focus:ring-2 focus:ring-primary"
              ></textarea>
            </div>

            <motion.button
              type="submit"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              disabled={isLoading}
              className="flex items-center justify-center w-full bg-[#143D95] text-white px-6 py-3 rounded-lg font-medium hover:bg-primary-dark transition-colors"
            >
              {isLoading ? (
                "Sending..."
              ) : (
                <>
                  <FaPaperPlane className="mr-2" />
                  Send Message
                </>
              )}
            </motion.button>

            {notification && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className={`p-4 rounded-lg ${
                  notification.type === "success"
                    ? "  bg-green-900 text-green-200"
                    : " bg-red-900 text-red-200"
                }`}
              >
                {notification.message}
              </motion.div>
            )}
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
