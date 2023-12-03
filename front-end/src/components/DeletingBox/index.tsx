import React, { ReactNode } from 'react';
import styles from "./style.module.css";

interface DeletingBoxProps {
    children: ReactNode;
    trueCallback: () => void;
    falseCallback: () => void;
}

export const DeletingBox: React.FC<DeletingBoxProps> = ({ children, trueCallback, falseCallback }) => {
   return (
      <div className={styles.modalOverlay} role="dialog">
         <div className={styles.modalBox}>
            {children}
            <button onClick={trueCallback}>Sim</button>
            <button onClick={falseCallback}>Não</button>
         </div>
      </div>
   );
};
