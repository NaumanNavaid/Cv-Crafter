import Image from "next/image";

const WhatsAppButton = () => {
  return (
    <a
      href="https://wa.me/923091273446"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-4 right-4 z-50 shadow-professional hover:shadow-lg transition-shadow"
    >
      <Image
        src="/WhatsApp.svg"
        alt="WhatsApp"
        width={56}
        height={56}
        className="hover:scale-110 transition-transform duration-200 sm:w-14 sm:h-14 w-12 h-12"
      />
    </a>
  );
};

export default WhatsAppButton;
