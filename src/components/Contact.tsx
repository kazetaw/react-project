import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import emailjs from "@emailjs/browser";

export const Contact = () => {
  const [alert, setAlert] = useState<{ type: string; message: string } | null>(
    null
  );
  const [loading, setLoading] = useState(false);
  const [fieldErrors, setFieldErrors] = useState({
    from_name: false,
    to_name: false,
    message: false,
    reply_to: false,
  });

  useEffect(() => {
    if (alert) {
      const timer = setTimeout(() => {
        setAlert(null);
      }, 5000); // Alert will disappear after 5 seconds

      return () => clearTimeout(timer); // Cleanup timer on component unmount or alert change
    }
  }, [alert]);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const { from_name, to_name, message, reply_to } = form.elements as any;

    const errors = {
      from_name: !from_name.value,
      to_name: !to_name.value,
      message: !message.value,
      reply_to: !reply_to.value,
    };

    setFieldErrors(errors);

    if (Object.values(errors).some((error) => error)) {
      setAlert({ type: "error", message: "Please fill out all fields." });
      return;
    }

    setLoading(true);

    emailjs
      .sendForm(
        "default_service",
        "template_sueb5vf",
        form,
        "ELTVtplhD-PXh5Cpj"
      )
      .then(
        () => {
          setLoading(false);
          setAlert({ type: "success", message: "Email sent successfully!" });
        },
        (error: { text: string }) => {
          setLoading(false);
          setAlert({ type: "error", message: `Error: ${error.text}` });
        }
      );
  };

  const getInputClassName = (fieldError: boolean) =>
    `mt-1 block w-full px-3 py-2 border ${
      fieldError ? "border-red-500" : "border-gray-300"
    } rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500`;

  return (
    <>
      <section id="contact" className="contact section py-12 bg-gray-100">
        {/* Section Title */}
        <div className="container mx-auto text-center mb-12" data-aos="fade-up">
          <h2 className="text-3xl font-bold">Contact</h2>
          <p className="text-gray-600 mt-2">
            Necessitatibus eius consequatur ex aliquid fuga eum quidem sint
            consectetur velit
          </p>
        </div>
        {/* End Section Title */}

        <div className="container mx-auto">
          <div className="flex flex-wrap justify-center gap-8">
            <motion.div
              className="rounded w-full md:w-1/2 lg:w-1/3 bg-white shadow-lg p-6 flex flex-col items-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              whileHover={{
                scale: 1.05,
                boxShadow: "0 10px 20px rgba(0,0,0,0.2)",
              }}
            >
              <h3 className="text-xl font-bold mb-2">Address</h3>
              <p className="text-gray-600">
                A108 Adam Street, New York, NY 535022
              </p>
            </motion.div>

            <motion.div className="w-full md:w-1/3 lg:w-1/6 bg-white shadow-lg p-6 rounded flex flex-col items-center">
              <i className="bi bi-telephone text-4xl text-blue-500 mb-4"></i>
              <h3 className="text-xl font-bold mb-2">Call Us</h3>
              <p className="text-gray-600">+66 92 536 2493</p>
            </motion.div>

            <motion.div
              className="w-full md:w-1/3 lg:w-1/6 bg-white shadow-lg p-6 rounded flex flex-col items-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              whileHover={{
                scale: 1.05,
                boxShadow: "0 10px 20px rgba(0,0,0,0.2)",
              }}
            >
              <i className="bi bi-envelope text-4xl text-blue-500 mb-4"></i>
              <h3 className="text-xl font-bold mb-2">Email Us</h3>
              <p className="text-gray-600">kuga.sunt@gmail.com</p>
            </motion.div>
          </div>

          <div className="flex flex-wrap justify-center mt-12">
            <motion.div
              className="w-full lg:w-1/2 p-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3825.9234099565197!2d102.8101093!3d16.4794154!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31228a9c9a6d01db%3A0x75bcf10e4742b0dc!2z4Lir4Lit4LmB4Lib4LiU4Lir4Lil4Lix4LiHIOC4oS7guILguK3guJnguYHguIHguYjguJk!5e0!3m2!1sth!2sth!4v1721373661466!5m2!1sth!2sth"
                frameBorder="0"
                style={{ border: 0, width: "100%", height: "488px" }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </motion.div>

            <motion.div className="w-full lg:w-1/2 p-4">
              <form id="form" className="bg-white p-6" onSubmit={handleSubmit}>
                <div className="mb-4">
                  <label
                    htmlFor="from_name"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Subject
                  </label>
                  <input
                    type="text"
                    name="from_name"
                    id="from_name"
                    className={getInputClassName(fieldErrors.from_name)}
                    required
                  />
                </div>
                <div className="mb-4">
                  <label
                    htmlFor="to_name"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Your Name
                  </label>
                  <input
                    type="text"
                    name="to_name"
                    id="to_name"
                    className={getInputClassName(fieldErrors.to_name)}
                    required
                  />
                </div>
                <div className="mb-4">
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Message
                  </label>
                  <textarea
                    name="message"
                    id="message"
                    className={getInputClassName(fieldErrors.message)}
                    rows={4}
                    required
                  ></textarea>
                </div>
                <div className="mb-4">
                  <label
                    htmlFor="reply_to"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Your Email
                  </label>
                  <input
                    type="email"
                    name="reply_to"
                    id="reply_to"
                    className={getInputClassName(fieldErrors.reply_to)}
                    required
                  />
                </div>
                <div className="text-center">
                  <button
                    type="submit"
                    className={`px-5 py-2.5 rounded-lg text-sm font-medium text-white text-center
    ${
      loading
        ? "bg-gray-400"
        : "bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 hover:bg-gradient-to-br"
    }
    focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800
    shadow-lg shadow-cyan-500/50 dark:shadow-lg dark:shadow-cyan-800/80
    transition`}
                    disabled={loading}
                  >
                    {loading ? "Sending..." : "Send Email"}
                  </button>
                </div>
              </form>
            </motion.div>
          </div>
        </div>
      </section>
      <AnimatePresence>
        {alert && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            className={`fixed bottom-5 left-5 bg-${
              alert.type === "success" ? "green" : "red"
            }-500 text-white px-4 py-2 rounded-md shadow-lg z-50`}
          >
            {alert.message}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
