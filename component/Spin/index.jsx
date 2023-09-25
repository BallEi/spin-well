"use client";
import React, { useState } from "react";
import { Form, Input, Modal } from "antd";

import styles from "./styles.module.scss";

export default function SpinV2() {
  const [openForm, setOpenForm] = useState(false);
  const layout = {
    labelCol: {
      span: 6,
    },
    wrapperCol: {
      span: 18,
    },
  };

  const aGift = [
    {
      key: 1,
      percent : 25 / 100,
      name: "Chăm sóc da",
      image: "../../public/bg-2.jpg"
    },
    {
      key: 1,
      percent : 25 / 100,
      name: "Chăm sóc da",
      image: "../../public/image-3.jpg"
    },
    {
      key: 1,
      percent : 25 / 100,
      name: "Chăm sóc da",
      image: "../../public/image-2.jpg"
    },    
    {
      key: 1,
      percent : 25 / 100,
      name: "Chăm sóc da",
      image: "../../public/image-3.jpg"
    },    
    {
      key: 1,
      percent : 25 / 100,
      name: "Chăm sóc da",
      image: "../../public/image-2.jpg"
    },
    {
      key: 1,
      percent : 25 / 100,
      name: "Chăm sóc da",
      image: "../../public/image-2.jpg"
    }
  ]
  const size = aGift.length;
  const rotate = 360 / size;
  const skewY = 90 - rotate;

  const handleOk = () => {
    setOpenForm(false);
  };

  const handleCancel = () => {
    setOpenForm(false);
  };

  const rotateWeel = (currentRotate, index) => {
    
  }

  return (
    <div className={styles.home}>
      <div className={styles.mainWheel}>
        <ul>
          {aGift.map((item, index) => 
            (
              <li style={{ transform: `rotate(${rotate * index}deg) skewY(-${skewY}deg)`, backgroundImage: `url(${item.image})` }} key={index}>
                <p className={`${styles.textItem} ${index % 2 === 0 ? `${styles.even}` : ''}`} style={{ transform: `skewY(${skewY}deg) rotate(${rotate / 2 }deg)` }}>
                  <b>{item.name}</b>
                </p>
              </li>
            )
          )}
        </ul>
      </div>
      <div className={styles.btnSpin} onClick={() => setOpenForm(true)}>
        <p>QUAY</p>
      </div>

      <Modal
        title="MỜI BẠN NHẬP THÔNG TIN"
        open={openForm}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <Form name="basic"  {...layout}>
              <Form.Item label="Tên" name="name">
                 <Input />
              </Form.Item>
              <Form.Item label="Số Điện thoại" name="phone">
                 <Input type="phone" />
              </Form.Item>
        </Form>
      </Modal>
    </div>
  );
}
