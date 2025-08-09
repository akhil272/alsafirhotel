import { AnimatePresence, AnimateSharedLayout, motion } from "framer-motion";
import Head from "next/head";
import { useState } from "react";
import { slideInRight } from "../../variants";

interface ItemProps {
  items: { id: number; question: string; answer: string };
}
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
const Item = ({ items }: ItemProps) => {
  const [openModal, setOpenModal] = useState(false);
  const handleModal = () => {
    setOpenModal(!openModal);
  };
  return (
    <motion.div onClick={handleModal} key={items.id} className="text-lg ">
      <Head>
        <title>FAQ | Al Safir Experience</title>
        <meta name="description" content="Frequently asked question." />
      </Head>
      <div className="  items-center flex">
        <h5 className="bg-black border-l-4 border-primary px-2 w-full">
          {items.question}
        </h5>
      </div>
      <AnimatePresence>
        {openModal && (
          <motion.p
            layout
            initial={{ opacity: 0, y: "-2vh" }}
            animate={{ opacity: 1, y: 0, transition: { duration: 0.5 } }}
            exit={{
              opacity: 0,
              y: "-2vh",
              transition: { duration: 0.5 },
            }}
            className="text-white text-sm border-primary border-l-4 px-2"
          >
            {items.answer}
          </motion.p>
        )}
      </AnimatePresence>
    </motion.div>
  );
};
const Faq = () => {
  return (
    <AnimateSharedLayout>
      <motion.div
        initial="initial"
        animate="animate"
        exit="exit"
        variants={slideInRight}
        className="text-primary font-mark mt-20 px-4 md:px-96"
      >
        <div>
          <h1 className="uppercase text-4xl">Frequently Asked Questions</h1>
        </div>
        <div className="h-96 w-auto relative my-4 ">
          <img
            className="rounded h-96 w-full object-cover"
            src="/images/faq/faqcover.jpg"
          />
        </div>

        <motion.div layout className="space-y-4 my-10 ">
          {content.map((item) => (
            <Item key={item.id} items={item} />
          ))}
        </motion.div>
      </motion.div>
    </AnimateSharedLayout>
  );
};

export default Faq;
