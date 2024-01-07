import { Modal, ModalContent, ModalHeader, ModalBody } from '@nextui-org/react';
import { useAppDispatch, useAppSelector } from '@/shared/hooks/hooks';
import { useContext } from 'react';
import { LanguageContext } from '@/shared/languages/LanguageProvider';
import { closePopup } from '../../store/slices/popupSlice';

export const PopupHandlerNoSearchParams = () => {
  const { isShown, name } = useAppSelector((store) => store.popupSlice);
  const { words } = useContext(LanguageContext);
  const dispatch = useAppDispatch();
  const close = () => {
    dispatch(closePopup());
  };

  let errorMessage = '';
  const errorName = words.error;
  if (name) {
    errorMessage = words[name];
  }

  return (
    <Modal
      isOpen={isShown}
      onClose={close}
      className="p-8"
    >
      <ModalContent>
        {() => (
          <>
            <ModalHeader className="flex flex-col gap-1 text-center">
              {errorName}
            </ModalHeader>
            <ModalBody>
              <p className="whitespace-pre-wrap text-center">{errorMessage}</p>
            </ModalBody>
          </>
        )}
      </ModalContent>
    </Modal>
  );
};
