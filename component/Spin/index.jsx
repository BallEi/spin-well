"use client";
import React, { useState } from "react";
import styles from "./styles.module.scss";
import { Modal } from "antd";

export default function SpinV2() {
  const [openForm, setOpenForm] = useState(false);

  const handleOk = () => {
    setOpenForm(false);
  };

  const handleCancel = () => {
    setOpenForm(false);
  };
  return (
    <div className={styles.home}>
      <div className={styles.mainWheel}></div>
      <div className={styles.btnSpin} onClick={() => setOpenForm(true)}>
        <p>QUAY</p>
      </div>

      <Modal
        title="Basic Modal"
        open={openForm}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
      </Modal>
    </div>
  );
}
