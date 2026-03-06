import { FC, memo, useEffect } from 'react';
import ReactDOM from 'react-dom';
<<<<<<< HEAD
=======

>>>>>>> 3d08896f12100354fae3683441e2347453f6c0bd
import { TModalProps } from './type';
import { ModalUI } from '@ui';

const modalRoot = document.getElementById('modals');

export const Modal: FC<TModalProps> = memo(({ title, onClose, children }) => {
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
<<<<<<< HEAD
      if (e.key === 'Escape') {
        onClose();
      }
=======
      e.key === 'Escape' && onClose();
>>>>>>> 3d08896f12100354fae3683441e2347453f6c0bd
    };

    document.addEventListener('keydown', handleEsc);
    return () => {
      document.removeEventListener('keydown', handleEsc);
    };
  }, [onClose]);

  return ReactDOM.createPortal(
    <ModalUI title={title} onClose={onClose}>
      {children}
    </ModalUI>,
    modalRoot as HTMLDivElement
  );
<<<<<<< HEAD
});
=======
});
>>>>>>> 3d08896f12100354fae3683441e2347453f6c0bd
