import { FC, memo } from 'react';
<<<<<<< HEAD
import styles from './modal.module.css';
=======

import styles from './modal.module.css';

>>>>>>> 3d08896f12100354fae3683441e2347453f6c0bd
import { CloseIcon } from '@zlden/react-developer-burger-ui-components';
import { TModalUIProps } from './type';
import { ModalOverlayUI } from '@ui';

<<<<<<< HEAD
export const ModalUI: FC<TModalUIProps> = memo(({ title, onClose, children }) => (
  <>
    <div className={styles.modal}>
      <div className={styles.header}>
        <h3 className={`${styles.title} text text_type_main-large`}>{title}</h3>
        <button className={styles.button} type="button">
          <CloseIcon type="primary" onClick={onClose} />
        </button>
      </div>
      <div className={styles.content}>{children}</div>
    </div>
    <ModalOverlayUI onClick={onClose} />
  </>
));
=======
export const ModalUI: FC<TModalUIProps> = memo(
  ({ title, onClose, children }) => (
    <>
      <div className={styles.modal}>
        <div className={styles.header}>
          <h3 className={`${styles.title} text text_type_main-large`}>
            {title}
          </h3>
          <button className={styles.button} type='button'>
            <CloseIcon type='primary' onClick={onClose} />
          </button>
        </div>
        <div className={styles.content}>{children}</div>
      </div>
      <ModalOverlayUI onClick={onClose} />
    </>
  )
);
>>>>>>> 3d08896f12100354fae3683441e2347453f6c0bd
