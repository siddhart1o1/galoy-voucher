import Button from "@/components/Button/Button";
import ModalComponent from "@/components/ModalComponent";
import React from "react";
import styles from "./ConfirmModal.module.css";
import { formatOperand } from "@/utils/helpers";

interface ConfirmModalProps {
  open: any;
  onClose: any;
  handleSubmit: any;
  amount: any;
  currency: any;
  commissionPercentage: any;
  commissionAmountInDollars: any;
  usdToSats: any
}

const ConfirmModal: React.FC<ConfirmModalProps> = ({
  open,
  onClose,
  handleSubmit,
  amount,
  currency,
  commissionPercentage,
  commissionAmountInDollars,
  usdToSats,
}) => {
  return (
    <ModalComponent open={open} onClose={onClose}>
      <div className={styles.modal_container}>
        <h1 className={styles.modalTitle}>Confirm</h1>
        <div>
          <h3 className={styles.modalSubtitle}>Sales Amount </h3>
          <p className={styles.modalText}>
            {formatOperand(Number(amount).toFixed(currency.fractionDigits))}{" "}
            {currency.name}
          </p>
        </div>
        <div>
          <h3 className={styles.modalSubtitle}>Voucher Amount</h3>
          <p className={styles.modalText}>
            {Number(commissionAmountInDollars)} US Dollar
          </p>
        </div>



        <div>
          <h3 className={styles.modalSubtitle}>Funding Amount</h3>
          <p className={styles.modalText}>
            ≈ {usdToSats(Number(commissionAmountInDollars)).toFixed()} sats
          </p>
        </div>

        <div>
          <h3 className={styles.modalSubtitle}>Escrow Currency</h3>
          <p className={styles.modalText}>US Dollar (Stablesats)</p>
        </div>
        <div>
          <h3 className={styles.modalSubtitle}>Sales Commission</h3>
          <p className={styles.modalText}>{Number(commissionPercentage)}%</p>
        </div>
        <div className={styles.button_container}>
          <Button onClick={onClose}>Cancel</Button>
          <Button onClick={handleSubmit}>Fund</Button>
        </div>
      </div>
    </ModalComponent>
  );
};

export default ConfirmModal;
