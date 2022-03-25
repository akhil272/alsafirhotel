import { useState } from "react";

const ContactForm = () => {
  const [formData, setFormData] = useState({ name: "", mail: "", message: "" });
  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    console.log(formData);
  };
  return (
    <div className="pb-10">
      <form
        onSubmit={handleSubmit}
        id="contact-me"
        className="w-full max-w-xl  shadow  text-primary font-mark"
      >
        <h2 className="w-full capitalize border-b-2 text-3xl  my-5">
          Contact form
        </h2>
        <div className="flex flex-wrap mb-6">
          <div className="relative w-full appearance-none label-floating">
            <input
              className="tracking-wide py-2 px-4 mb-3 leading-relaxed appearance-none block w-full bg-gray-200 border border-gray-200 rounded focus:outline-none focus:bg-white focus:border-gray-500"
              id="name"
              type="text"
              placeholder="Your name"
              required
              value={formData.name}
              onChange={(e) =>
                setFormData({ ...formData, name: e.target.value })
              }
            />
            <label
              htmlFor="name"
              className="absolute tracking-wide py-2 px-4 mb-4 opacity-0 leading-tight block top-0 left-0 cursor-text"
            >
              Your name
            </label>
          </div>
        </div>
        <div className="flex flex-wrap mb-6">
          <div className="relative w-full appearance-none label-floating">
            <input
              className="tracking-wide py-2 px-4 mb-3 leading-relaxed appearance-none block w-full bg-gray-200 border border-gray-200 rounded focus:outline-none focus:bg-white focus:border-gray-500"
              id="mail"
              type="text"
              placeholder="Your email"
              required
              value={formData.mail}
              onChange={(e) =>
                setFormData({ ...formData, mail: e.target.value })
              }
            />
            <label
              htmlFor="name"
              className="absolute tracking-wide py-2 px-4 mb-4 opacity-0 leading-tight block top-0 left-0 cursor-text"
            >
              Your email
            </label>
          </div>
        </div>
        <div className="flex flex-wrap mb-6">
          <div className="relative w-full appearance-none label-floating">
            <textarea
              className="autoexpand tracking-wide py-2 px-4 mb-3 leading-relaxed appearance-none block w-full bg-gray-200 border border-gray-200 rounded focus:outline-none focus:bg-white focus:border-gray-500"
              id="message"
              typeof="text"
              placeholder="Message..."
              value={formData.message}
              onChange={(e) =>
                setFormData({ ...formData, message: e.target.value })
              }
            ></textarea>
            <label
              htmlFor="message"
              className="absolute tracking-wide py-2 px-4 mb-4 opacity-0 leading-tight block top-0 left-0 cursor-text"
            >
              Message...
            </label>
          </div>
        </div>

        <div>
          <button
            className="w-full shadow bg-primary  font-mark uppercase tracking-widest  text-white font-bold py-2 px-4 rounded"
            type="submit"
          >
            Send
          </button>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
