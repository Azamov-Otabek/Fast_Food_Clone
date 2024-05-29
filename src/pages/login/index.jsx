import React from "react";
import { Button,Form, Input } from "antd";
import { useLoginStore } from "../../store/auth";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";

function index() {
  const navigate = useNavigate()
  const {WorkerLogin} = useLoginStore()
  const onFinish = async(values) => {
    const response = await WorkerLogin(values)
    if(response.status == 200){
      localStorage.setItem('owner_id', JSON.stringify(response.data.owner_id))
      localStorage.setItem('worker_id', JSON.stringify(response.data.worker_id))
      localStorage.setItem('username', JSON.stringify(response.data.worker_name))
      sessionStorage.setItem('token', response.data.access_token)
      console.log(response);
      toast.success('Login Successfull', {autoClose: 1100})
      setTimeout(() => {
        navigate('/layout')
      }, 1400);
    }
  };

  return (
   <>
   <ToastContainer/>
     <div className="max-w-[1400px] mx-auto">
      <div className="flex mt-[100px] items-center gap-[150px]">
        <div>
          <img
            src="https://restaurant-crm-pvt3.vercel.app/assets/login-OAGsNQIJ.png"
            alt="restaurant"
          />
        </div>
        <div>
          <p className="text-center text-[20px] font-medium mb-[40px]">Welcome to our Restaurant..!</p>
          <Form
          className="w-[400px]"
            name="basic"
            onFinish={onFinish}
            autoComplete="on"
          >
             <Form.Item
            className="font-medium"
              label="Company Name"
              name="company_name"
              rules={[
                {
                  required: true,
                  message: "Please input your Company name!",
                },
              ]}
            >
              <Input className="text-[18px]" />
            </Form.Item>

            <Form.Item
            className="font-medium"
              label="Username"
              name="login_key"
              rules={[
                {
                  required: true,
                  message: "Please input your username!",
                },
              ]}
            >
              <Input className="text-[18px]" />
            </Form.Item>

            <Form.Item
             className="font-medium"
              label="Password"
              name="password"
              rules={[
                {
                  required: true,
                  message: "Please input your password!",
                },
              ]}
            >
              <Input.Password className="text-[18px]" />
            </Form.Item>

            <Form.Item
              wrapperCol={{
                offset: 5,
                
              }}
            >
              <Button type="primary" htmlType="submit" className="w-full">
                Submit
              </Button>
            </Form.Item>
          </Form>
        </div>
      </div>
    </div>
   </>
  );
}

export default index;
