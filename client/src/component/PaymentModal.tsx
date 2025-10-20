import React, { useState } from "react";

interface PaymentModalProps {
  checkoutUrl: string;
  onClose: () => void;
  onSuccess?: () => void;
  onCancel?: () => void;
}

const PaymentModal: React.FC<PaymentModalProps> = ({
  checkoutUrl,
  onClose,
  onSuccess,
  onCancel,
}) => {
  const [iframeLoaded, setIframeLoaded] = useState(false);

  const handleIframeMessage = (event: MessageEvent) => {
    if (typeof event.data !== "string") return;

    if (event.data.includes("confirmation")) {
      onSuccess?.();
      onClose();
    } else if (event.data.includes("reservation")) {
      onCancel?.();
      onClose();
    }
  };

  React.useEffect(() => {
    window.addEventListener("message", handleIframeMessage);
    return () => window.removeEventListener("message", handleIframeMessage);
  }, []);

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/50 backdrop-blur-sm z-50">
      <div className="bg-white rounded-xl shadow-2xl w-full max-w-lg h-[80vh] flex flex-col">
        <div className="flex justify-between items-center border-b p-4">
          <h2 className="text-lg font-semibold text-gray-800">Complete Payment</h2>
          <button
            className="text-gray-500 hover:text-gray-700"
            onClick={onClose}
          >
            ✕
          </button>
        </div>

        {!iframeLoaded && (
          <div className="flex-1 flex items-center justify-center text-gray-500">
            Loading checkout...
          </div>
        )}

        <iframe
          src={checkoutUrl}
          title="PayMongo Checkout"
          onLoad={() => setIframeLoaded(true)}
          className={`w-full flex-1 border-0 rounded-b-xl transition-opacity duration-300 ${
            iframeLoaded ? "opacity-100" : "opacity-0"
          }`}
        />
      </div>
    </div>
  );
};

export default PaymentModal;
