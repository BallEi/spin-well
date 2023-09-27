"use client";
import React, { useState } from "react";
import { Button, Col, Drawer, Form, Input, Modal, Row } from "antd";
import { Fireworks } from 'fireworks-js'

import styles from "./styles.module.scss";

import bg from "../../public/bg-2.png" 
import image2 from "../../public/image-2.jpg"
import image3 from "../../public/image-3.jpg"


export default function SpinV2() {
  const $ = document.querySelector.bind(document);
  const container = document.querySelector('.container')
  // const fireworks = new Fireworks(container, { /* options */ })
  
  let timeRotate = 25000; 
	let currentRotate = 0;
	let isRotating = false;

  const [openForm, setOpenForm] = useState(false);
  const [openFormInfo, setOpenFormInfo] = useState(false);
  const [openFinal, setOpenFinal] = useState(false);

  const [data, setData] = useState({})
  const [form] = Form.useForm();
  const [turn, setTurn] = useState(0);

  const layout = {
    labelCol: {
      span: 6,
    },
    wrapperCol: {
      span: 24,
    },
  };

  const aGift = [
    {
      key: 1,
      percent: 100 / 100,
      name: "Chăm sóc da 1",
      image: bg,
    },
    {
      key: 1,
      percent: 0 / 100,
      name: "Chăm sóc da 2",
      image: image3,
    },
    {
      key: 1,
      percent: 0 / 100,
      name: "Chăm sóc da 3",
      image: image2,
    },
    {
      key: 1,
      percent: 0 / 100,
      name: "Chăm sóc da 4",
      image: image3,
    },
    {
      key: 1,
      percent: 0 / 100,
      name: "Chăm sóc da 5",
      image: image2,
    },
    {
      key: 1,
      percent: 10 / 100,
      name: "Chăm sóc da 6",
      image: image3,
    }
  ];
  const size = aGift.length;
  const rotate = 360 / size;
  const skewY = 90 - rotate;

  const handleOk = (data) => {
    setData(data)
    setOpenForm(false);
    setOpenFormInfo(true);
  };

  const handleCancel = () => {
    setOpenForm(false);
  };

  const handleOkInfo = () => {
    setOpenFormInfo(false);
    setTurn(1);
    start();
  };

  const handleInputAgain = () => {
    setOpenFormInfo(false);
    setOpenForm(true);
  };

  const handCloseFinal = () => {
    setTurn(0)
    setOpenFinal(false)
  }

	const start = () => {
		isRotating = true;
		const random = Math.random();

		const gift = getGift(random);

		currentRotate += 360 * 10;

    $('.wheel').style.transform = 'rotate(360deg)';

    let timer = setTimeout(() => {    
		  rotateWheel(currentRotate, gift.index);
			clearTimeout(timer);
		}, 2000);
    
    

		showGift(gift);
	};

	const rotateWheel = (currentRotate, index) => {
		$('.wheel').style.transform = `rotate(${
			currentRotate - index * rotate - rotate / 2
		}deg)`;

    console.log("currentRotate - index * rotate - rotate / 2", currentRotate - index * rotate - rotate / 2);
	};

	const getGift = randomNumber => {
		let currentPercent = 0;
		let list = [];

		aGift.forEach((item, index) => {
			currentPercent += item.percent;

			if (randomNumber <= currentPercent) {
				list.push({ ...item, index });
			}
		});

		return list[0];
	};

	const showGift = gift => {
    let timer = setTimeout(() => {
      isRotating = false;
      console.log("gif", gift);
      
      setOpenFinal(true)
			clearTimeout(timer);
		}, timeRotate);
	};


  return (
    <div className={styles.home}>
      <div className={styles.mainWheel}>
        <ul className="wheel">
          {aGift.map((item, index) => (
            <li
              style={{
                transform: `rotate(${rotate * index}deg) skewY(-${skewY}deg)`,
              }}
              key={index}
            >
              <p
                className={`${styles.textItem} ${
                  index % 2 === 0 ? `${styles.even}` : ""
                }`}
                style={{
                  transform: `skewY(${skewY}deg) rotate(${rotate / 2}deg)`,
                  backgroundImage: `url(${item.image.src})`
                }}
              >
                <b>{item.name}</b>
              </p>
            </li>
          ))}
        </ul>
        <div className={styles.arrow}>
          A
        </div>
      </div>
      <div className={styles.btnSpin} onClick={() => start()}>
        <p>QUAY</p>
      </div>

      <Modal
        title="MỜI BẠN NHẬP THÔNG TIN"
        open={openForm}
        onCancel={handleCancel}
        okText="Xác nhận"
        cancelText="Đóng"
        footer={null}
      >
        <Form name="basic" {...layout} form={form} onFinish={handleOk}>
          <Form.Item label="Tên" name="name">
            <Input />
          </Form.Item>
          <Form.Item label="Số Điện thoại" name="phone">
            <Input type="phone" />
          </Form.Item>
          <Form.Item>
            <Row>
              <Col>
              <Button type="primary" htmlType="submit" span={24}>
                Xác nhận
              </Button>
              </Col>
            </Row>

          </Form.Item>
        </Form>
      </Modal>

      <Modal
        title="XÁC NHẬN THÔNG TIN"
        open={openFormInfo}
        onOk={handleOkInfo}
        onCancel={handleInputAgain}
        okText="Xác nhận"
        cancelText="Nhập Lại"
      >
        <p>Họ và tên: <span>{data.name}</span></p>
        <p>Số điện thoại: <span>{data.phone}</span></p>
      </Modal>

      <Drawer
        title="Drawer with extra actions"
        open={openFinal}
        placement="top"
        onClose={handCloseFinal}
      >
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
      </Drawer>
    </div>
  );
}
