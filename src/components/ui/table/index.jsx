import React, { useEffect, useState } from "react";
import { Table } from "antd";
import { useOrderStore } from "../../../store/orders";

function index() {
  const [data, setData] = useState([]);
  const { getOrders } = useOrderStore();
  const columns = [
    {
      title: "T/R",
      dataIndex: "index",
      key: "index",
    },
    {
      title: "Table number",
      dataIndex: "table_number",
      key: "table_number",
    },
    {
      title: "Worker name",
      dataIndex: "worker_name",
      key: "worker_name",
    },
    {
      title: "Date",
      dataIndex: "createdAt",
      key: "createdAt",
      render: (text) => <span className="text-[#4f43fa] font-medium">{text}</span>
    },
    Table.EXPAND_COLUMN,
    {
      title: "Product",
      dataIndex: "product",
      key: "product",
      render: (text) => <span className="font-medium">View more Click here</span>
    },
    {
      title: "Tax",
      dataIndex: "tax",
      key: "tax",
      render: (text) => <span className="text-[#572020] font-medium">{text}%</span>
    },
    {
      title: "Total",
      dataIndex: "totalPrice",
      key: "totalPrice",
      render: (text) => <span className="font-medium text-[#4063ff]">{text}</span>
    },
  ];

  async function getData() {
    const payload = {
      page: 1,
      limit: 999,
      worker_id: JSON.parse(localStorage.getItem("worker_id")),
    };
    console.log(payload);
    const response = await getOrders(payload);
    if (response.status == 200) {
      const datas = response.data.orders.map((e, i )=> {
        return {
            index: i + 1, 
            id: e.id,
            table_number: e.table_number,
            worker_name: e.worker_name,
            createdAt: e.createdAt.slice(0, 19),
            products: e.products,
            tax: e.tax,
            totalPrice: e.totalPrice,
        }
      })
      setData(datas);
    }
  }
  useEffect(() => {
    getData();
  }, []);

  return (
    <Table
      className="mt-[100px]"
      columns={columns}
      rowSelection={{}}
      expandable={{
        expandedRowRender: (record) => (
          <div>
              {record.products?.map((item) => (
              <div key={item.id} className="flex justify-between w-[300px] mx-auto">
                <p className="text-[16px] font-medium">{item.title}</p>
                <p className="text-[16px] font-medium">{item.count}x</p>
                <p className="text-[16px] font-medium">{item.price} so'm</p>
              </div>
            ))}
          </div>
        ),
      }}
      dataSource={data}
      rowKey={(record) => record.id}
      
    />
  );
}

export default index;
