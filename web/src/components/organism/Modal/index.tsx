import {CloseIcon} from "@/components/atom/Icon/Close";

export type ModalProps = {
  children: React.ReactNode;
  onClose: () => void;
};
export const Modal = ({ children, onClose }: ModalProps) => {
  return (
    <>
      <div
        className="relative z-10"
        aria-labelledby="modal-title"
        role="dialog"
      >
        <div className="fixed inset-0 z-10 overflow-y-auto flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
          <div
            className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"
            onClick={onClose}
          ></div>
          <div className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
            <div className="cursor-pointer z-20 absolute h-6 w-6 right-2 top-2 bg-gray-50 rounded-3xl" onClick={onClose}>
              <CloseIcon />
            </div>
            {children}
          </div>
        </div>
      </div>
    </>
  );
};
