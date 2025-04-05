import { useState, useRef } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

import { slideIn } from "../utils/motion";
import { SectionWrapper } from "../hoc";
import { EarthCanvas } from "./canvas";
import { styles } from "../styles";

function Contact() {
  const formRef = useRef();

  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target

    setForm({ ...form, [name]: value })
  };

  const handleSubmit = (e) => {
    //service_8lso2e9
    //fjrwfa5UJ6sT1UwPI
    //template_qgifvjc
    e.preventDefault()
    setLoading(true)

    emailjs.send('service_8lso2e9', 'template_qgifvjc', { from_name: form.name, to_name: "Stephen", from_email: form.email, to_email: "stephenasiedu3654@gmail.com", message: form.message }, "fjrwfa5UJ6sT1UwPI").then(() => {
      setLoading(false)
      alert("Thank you, I will get back to you as soon as possible")

      setForm({
        name: "",
        email: "",
        message: ""
      })
    }, (error) => {
      setLoading(false)
      console.log(error)
      alert("Something went wrong")
    })
  };
  return (
    <div className="xl:mt-12 xl:flex-row flex gap-10 flex-col-reverse overflow-hidden">
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className="flex-[0.75] rounded-2xl p-8 bg-black-100"
      >
        <p className={styles.sectionSubText}>Get in touch</p>
        <h3 className={styles.sectionHeadText}>Contact</h3>

        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="mt-12 flex flex-col gap-8"
        >
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Your Name</span>
            <input type="text" name="name" placeholder="What's your name?" onChange={handleChange} value={form.name} className="py-4 px-6 placeholder:text-secondary text-white rounded-lg outlined-none border-none font-medium bg-tertiary" />
          </label>
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Your Email</span>
            <input type="email" name="email" onChange={handleChange} value={form.email} placeholder="What's your email?" className="py-4 px-6 placeholder:text-secondary text-white rounded-lg outlined-none border-none font-medium bg-tertiary" />
          </label>
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Your Message</span>
            <textarea rows={7} name="message" value={form.message} onChange={handleChange} placeholder="What do you want to say?" className="py-4 px-6 placeholder:text-secondary text-white rounded-lg outlined-none border-none font-medium bg-tertiary" />
          </label>

          <button className="px-8 py-3 rounded-xl bg-tertiary outline-none text-white font-bold w-fit shadow-md shadow-primary cursor-pointer" type="submit">
            {loading ? "Sending..." : "Send"}
          </button>
        </form>
      </motion.div>
      <motion.div variants={slideIn("right", "tween", 0.2, 1)} className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px]">
        <EarthCanvas />
      </motion.div>
    </div>
  );
}

export default SectionWrapper(Contact, "contact");
