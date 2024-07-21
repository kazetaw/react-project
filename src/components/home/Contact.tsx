import { motion, useInView, HTMLMotionProps } from "framer-motion";
import { useRef } from "react";

const fadeInAnimation = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  transition: { duration: 0.6 },
};

const ContactCard: React.FC<HTMLMotionProps<"div">> = ({
  children,
  ...props
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true });

  return (
    <motion.div
      ref={ref}
      initial={fadeInAnimation.initial}
      animate={isInView ? fadeInAnimation.animate : {}}
      transition={fadeInAnimation.transition}
      {...props}
    >
      {children}
    </motion.div>
  );
};

function Contact() {
  return (
    <section id="contact" className="contact section py-12 bg-gray-50">
      <div className="container mx-auto text-center mb-12" data-aos="fade-up">
        <h2 className="text-3xl font-bold">Contact</h2>
        <p className="text-gray-600 mt-2">
          Necessitatibus eius consequatur ex aliquid fuga eum quidem sint
          consectetur velit
        </p>
      </div>

      <div className="container mx-auto">
        <div className="flex flex-wrap justify-center gap-8">
          <ContactCard
            className="rounded w-full md:w-1/2 lg:w-1/3 bg-white shadow-lg p-6 flex flex-col items-center"
            style={{ transitionDelay: "0.2s" }}
          >
            <h3 className="text-xl font-bold mb-2">Address</h3>
            <p className="text-gray-600">
              A108 Adam Street, New York, NY 535022
            </p>
          </ContactCard>

          <ContactCard
            className="w-full md:w-1/3 lg:w-1/6 bg-white shadow-lg p-6 rounded flex flex-col items-center"
            style={{ transitionDelay: "0.3s" }}
          >
            <i className="bi bi-telephone text-4xl text-blue-500 mb-4"></i>
            <h3 className="text-xl font-bold mb-2">Call Us</h3>
            <p className="text-gray-600">+66 92 536 2493</p>
          </ContactCard>

          <ContactCard
            className="w-full md:w-1/3 lg:w-1/6 bg-white shadow-lg p-6 rounded flex flex-col items-center"
            style={{ transitionDelay: "0.4s" }}
          >
            <i className="bi bi-envelope text-4xl text-blue-500 mb-4"></i>
            <h3 className="text-xl font-bold mb-2">Email Us</h3>
            <p className="text-gray-600">kuga.sunt@gmail.com</p>
          </ContactCard>
        </div>

        <div className="flex flex-wrap justify-center mt-12">
          <ContactCard
            className="w-full lg:w-1/2 p-4"
            style={{ transitionDelay: "0.5s" }}
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3825.9234099565197!2d102.8101093!3d16.4794154!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31228a9c9a6d01db%3A0x75bcf10e4742b0dc!2z4Lir4Lit4LmB4Lib4LiU4Lir4Lil4Lix4LiHIOC4oS7guILguK3guJnguYHguIHguYjguJk!5e0!3m2!1sth!2sth!4v1721373661466!5m2!1sth!2sth"
              frameBorder="0"
              style={{ border: 0, width: "100%", height: "400px" }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </ContactCard>

          <ContactCard
            className="w-full lg:w-1/2 p-4"
            style={{ transitionDelay: "0.6s" }}
          >
            <form
              action="forms/contact.php"
              method="post"
              className="bg-white shadow-lg p-6 rounded-lg"
            >
              <div className="flex flex-wrap -mx-2">
                <div className="w-full md:w-1/2 px-2 mb-4">
                  <input
                    type="text"
                    name="name"
                    className="form-control block w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Your Name"
                    required
                  />
                </div>

                <div className="w-full md:w-1/2 px-2 mb-4">
                  <input
                    type="email"
                    className="form-control block w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    name="email"
                    placeholder="Your Email"
                    required
                  />
                </div>

                <div className="w-full px-2 mb-4">
                  <input
                    type="text"
                    className="form-control block w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    name="subject"
                    placeholder="Subject"
                    required
                  />
                </div>

                <div className="w-full px-2 mb-4">
                  <textarea
                    className="form-control block w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    name="message"
                    rows={6}
                    placeholder="Message"
                    required
                  ></textarea>
                </div>

                <div className="w-full px-2 text-center">
                  <button
                    type="submit"
                    className="text-white bg-gradient-to-r from-teal-400 via-teal-500 to-teal-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-teal-300 dark:focus:ring-teal-800 shadow-lg shadow-teal-500/50 dark:shadow-lg dark:shadow-teal-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
                  >
                    Send Message
                  </button>
                </div>
              </div>
            </form>
          </ContactCard>
        </div>
      </div>
    </section>
  );
}

export default Contact;
