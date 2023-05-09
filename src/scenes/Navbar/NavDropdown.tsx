import React from 'react';
import { Transition, Dialog } from '@headlessui/react';
import { links } from '@/data';

type Props = {
  open: boolean;
  onClose: () => void;
};

export const NavDropdown: React.FC<Props> = ({ open, onClose }) => (
  <Transition show={open} as={React.Fragment}>
    <Dialog open={open} onClose={onClose}>
      {/* backdropo */}
      <Transition.Child
        as={React.Fragment}
        enter="ease-out duration-150"
        enterFrom="opacity-0"
        enterTo="opacity-100"
        leave="ease-out duration-150 delay-150"
        leaveFrom="opacity-100"
        leaveTo="opacity-0"
      >
        <div className="fixed inset-0 bg-black/30" aria-hidden="true" />
      </Transition.Child>
      <Transition.Child
        as={React.Fragment}
        enter="ease-in-out duration-300 delay-150"
        enterFrom="opacity-0 translate-y-8"
        enterTo="opacity-100 translate-y-0"
        leave="ease-in-out duration-150"
        leaveFrom="opacity-100 translate-y-0"
        leaveTo="opacity-0 translate-y-8"
      >
        <div className="fixed inset-0 px-6">
          <Dialog.Panel className="fixed top-24 left-6 right-6 bg-white z-10 p-12 text-center rounded-[0.25rem] font-bold shadow-md">
            <ul className="space-y-8">
              {links.map((link, index) => {
                const { text, url } = link;
                return (
                  <li key={index}>
                    <a href={url} className="hover:opacity-80">
                      {text}
                    </a>
                  </li>
                );
              })}
            </ul>
          </Dialog.Panel>
        </div>
      </Transition.Child>
    </Dialog>
  </Transition>
);
