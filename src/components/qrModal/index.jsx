import React, { useState } from 'react';
import { Button, Modal } from 'antd';
import {QRCODE} from '../../components/ui'
const App = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };
  return (
    <>
      <Button type='danger' className='w-full mt-[20px] bg-[#FEA827] text-[white] font-bold  hover:bg-[#FEA827]' onClick={showModal}>
        QR CODE
      </Button>
      <Modal open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
          <QRCODE/>        
      </Modal>
    </>
  );
};
export default App;