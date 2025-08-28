

type ModalProps = {
  isOpen: boolean;
  onClose: () => void;
};

const Modal = ({isOpen, onClose}: ModalProps) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black bg-opacity-50 flex items-center justify-center">
      <div className="bg-white p-6 rounded-lg w-full max-w-md shadow-xl relative">
        <button onClick={onClose} className="absolute top-2 right-2 text-gray-600 hover:text-black text-xl">
          &times;
        </button>
        <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
        <form>
          <input
            type="text"
            placeholder="Your Name"
            className="w-full border px-3 py-2 rounded mb-3"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="w-full border px-3 py-2 rounded mb-3"
          />
          <textarea
            placeholder="Your Message"
            rows={4}
            className="w-full border px-3 py-2 rounded mb-4"
          ></textarea>
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default Modal;