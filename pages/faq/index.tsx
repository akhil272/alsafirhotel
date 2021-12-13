import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { slideInRight } from "../../variants";

const content = [
  {
    id: 1,
    question: "Is the hotel family friendly?",
    answer: "We entertain both family and individual booking.",
  },
  {
    id: 2,
    question: "Does the hotel have a pool facility?",
    answer: "The hotel has indoor pool facility.",
  },
  {
    id: 3,
    question: "Does the hotel provide airport shuttle?",
    answer: "There are shuttle services on chargeable basis.",
  },
  {
    id: 4,
    question: "Which debit/ credit cards can I use?",
    answer:
      "You can pay with the same cards that are accepted at reception, Visa, Mastercard, Amex,Diners,Dankort(Denmark) and JCB.",
  },
  {
    id: 5,
    question: "When can I check in to the hotel?",
    answer: `The standard Check-in time is 14:00 hours. Early check in & late checkout is on chargeable basis. Our new date starts at 9:00 A.M.  Next day.
Access to the guest room prior to this time, subject to availability of rooms at the time of arrival. Check out time is 12:00(noon).`,
  },
];

const Faq = () => {
  const [openModal, setOpenModal] = useState(false);
  const handleModal = () => {
    setOpenModal(!openModal);
  };

  return (
    <motion.div
      initial="initial"
      animate="animate"
      exit="exit"
      variants={slideInRight}
      className="text-primary font-mark mt-20 px-4"
    >
      <div>
        <h1 className="uppercase text-4xl">FAQ</h1>
      </div>
      <div className="space-y-4">
        {content.map((item) => (
          <div key={item.id} className="text-lg">
            <div onClick={handleModal} className="  items-center flex">
              <h5 className="bg-black border-l-4 border-primary px-2 w-full">
                {item.question}
              </h5>
            </div>
            <AnimatePresence>
              {openModal && (
                <motion.p
                  initial={{ opacity: 0, y: "-2vh" }}
                  animate={{ opacity: 1, y: 0, transition: { duration: 0.5 } }}
                  exit={{
                    opacity: 0,
                    y: "-2vh",
                    transition: { duration: 0.5 },
                  }}
                  className="text-white text-sm border-primary border-l-4 px-2"
                >
                  {item.answer}
                </motion.p>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>
    </motion.div>
  );
};

export default Faq;
