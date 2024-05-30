import React from 'react';
import { Input, QRCode, Space } from 'antd';
const QRCODE = () => {
  const [text, setText] = React.useState('https://t.me/RestaurantPayBot?start=welcome');
  return (
    <Space direction="vertical" align="center">
      <QRCode value={text} />
    </Space>
  );
};
export default QRCODE;