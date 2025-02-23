import { useState } from "react";

const ContactForm = () => {
  const [inputs, setInputs] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [form, setForm] = useState({ state: "", message: "" });

  const handleChange = (e: any) => {
    setInputs((prev) => ({
      ...prev,
      [e.target.id]: e.target.value,
    }));
  };

  const onSubmitForm = async (e: any) => {
    e.preventDefault();

    if (inputs.name && inputs.email && inputs.message) {
      setForm({ state: "loading", message: "" });
      try {
        const res = await fetch(`api/contact`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(inputs),
        });

        const { error } = await res.json();

        if (error) {
          setForm({
            state: "error",
            message: error,
          });
          return;
        }

        setForm({
          state: "success",
          message: "Your message was sent successfully.",
        });
        setInputs({
          name: "",
          email: "",
          message: "",
        });
      } catch (error) {
        setForm({
          state: "error",
          message: "Something went wrong",
        });
      }
    }
  };
  return (
    <div className="pb-10">
      <form
        onSubmit={(e) => onSubmitForm(e)}
        id="contact-me"
        className="w-full max-w-xl  shadow  text-primary font-mark"
      >
        <h2 className="w-full capitalize border-b-2 text-3xl  my-5">
          Contact form
        </h2>
        <div className="flex flex-wrap mb-6">
          <div className="relative w-full appearance-none label-floating">
            <input
              className="tracking-wide text-black py-2 px-4 mb-3 leading-relaxed appearance-none block w-full bg-gray-200 border border-gray-200 rounded focus:outline-none focus:bg-white focus:border-gray-500"
              id="name"
              type="text"
              placeholder="Your name"
              required
              value={inputs.name}
              onChange={handleChange}
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
              className="tracking-wide text-black  py-2 px-4 mb-3 leading-relaxed appearance-none block w-full bg-gray-200 border border-gray-200 rounded focus:outline-none focus:bg-white focus:border-gray-500"
              id="email"
              type="text"
              placeholder="Your email"
              required
              value={inputs.email}
              onChange={handleChange}
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
              className="text-black tracking-wide py-2 px-4 mb-3 leading-relaxed appearance-none block w-full bg-gray-200 border border-gray-200 rounded focus:outline-none focus:bg-white focus:border-gray-500"
              id="message"
              typeof="text"
              placeholder="Message..."
              value={inputs.message}
              onChange={handleChange}
            />
            <label
              htmlFor="message"
              className="absolute tracking-wide py-2 px-4 mb-4 opacity-0 leading-tight block top-0 left-0 cursor-text"
            >
              Message...
            </label>
          </div>
        </div>
        <div>
          {form.state === "loading" ? (
            <div>Sending....</div>
          ) : form.state === "error" ? (
            <div>{form.message}</div>
          ) : (
            form.state === "success" && <div>Sent successfully</div>
          )}
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
