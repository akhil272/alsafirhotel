import { Fragment, useState } from "react";
import { Listbox, Transition } from "@headlessui/react";

interface counter {
  title: string;
  counter: { content: string }[];
}

const ListBoxCounter = ({ title, counter }: counter) => {
  const [selected, setSelected] = useState(counter[0]);

  return (
    <div className="transition duration-1000 hover:bg-gray-900">
      <Listbox value={selected} onChange={setSelected}>
        <div className="relative mt-1 ">
          <Listbox.Button className="relative w-full py-2 pl-3 pr-10  ">
            <span className="block truncate">
              {selected.content} {title}
            </span>
            <span className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none"></span>
          </Listbox.Button>
          <Transition
            as={Fragment}
            leave="transition ease-in duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Listbox.Options className="absolute w-full bottom-12 py-1 bg-black bg-opacity-70 text-center ">
              {counter.map((count: any, countIdx: number) => (
                <Listbox.Option
                  key={countIdx}
                  className={({ active }) =>
                    `${active ? "bg-primary" : "text-white"}
                          cursor-default select-none relative py-2 `
                  }
                  value={count}
                >
                  {({ selected, active }) => (
                    <>
                      <span
                        className={`${
                          selected ? "font-medium" : "font-normal"
                        } block truncate`}
                      >
                        {count.content}
                      </span>
                    </>
                  )}
                </Listbox.Option>
              ))}
            </Listbox.Options>
          </Transition>
        </div>
      </Listbox>
    </div>
  );
};

export default ListBoxCounter;
