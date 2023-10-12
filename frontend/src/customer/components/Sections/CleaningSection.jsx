import React, { useState } from "react";
import { sectionData } from "./sectionData";
import SectionModal from "./SectionModal";

const CleaningSection = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedSection, setSelectedSection] = useState(null);

  const openModal = (section) => {
    setSelectedSection(section);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setSelectedSection(null);
    setIsModalOpen(false);
  };

  const toggleModal = (section) => {
    if (isModalOpen) {
      if (selectedSection === section) {
        // Nếu modal đang mở và nút đã được nhấn là nút mở modal, đóng modal
        closeModal();
      } else {
        // Nếu modal đang mở và nút đã được nhấn không phải là nút mở modal, mở modal mới
        openModal(section);
      }
    } else {
      // Nếu modal chưa mở, mở modal
      openModal(section);
    }
  };

  return (
    <section className="bg-gray-900 text-white">
      <div className="mx-auto max-w-screen-xl px-4 py-8 sm:py-12 sm:px-6 lg:py-16 lg:px-8">
        <div className="mx-auto max-w-lg text-center">
          <h2 className="text-3xl font-bold sm:text-4xl">
            Request a Custom Quote Waitlist!
          </h2>
        </div>

        <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {sectionData.map((section, index) => (
            <button
              key={index}
              className="block rounded-xl border border-gray-800 p-8 shadow-xl transition hover:border-pink-500/10 hover:shadow-pink-500/10"
              onClick={() => toggleModal(section)}
            >
              {section.icon}
              <h2 className="mt-4 text-xl font-bold text-white">
                {section.title}
              </h2>
              <p className="mt-1 text-sm text-gray-300">
                {section.description}
              </p>
            </button>
          ))}
        </div>
      </div>
      {isModalOpen && (
        <SectionModal
          section={selectedSection}
          closeModal={closeModal}
        />
      )}
    </section>
  );
};

export default CleaningSection;
