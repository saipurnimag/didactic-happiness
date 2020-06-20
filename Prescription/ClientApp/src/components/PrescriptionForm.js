import React, { useEffect, useState } from 'react';
import { Form, Input, InputNumber, Button } from 'antd';
import { AudioOutlined } from "@ant-design/icons";
import NameInput from "./NameInput";

const PrescriptionForm = () => {


      const layout = {
            labelCol: { span: 8 },
            wrapperCol: { span: 16 },
      };

      const[name, setName] = useState("");
      const[age, setAge] = useState(0);

      function handleNameChange(newName){
            setName(newName)
      }
      return (
            <Form {...layout} name="nest-messages" >
                  <Form.Item  label="Introduction">
                        <NameInput patientNameSetter = {handleNameChange} />                        
                  </Form.Item>
                  <Form.Item  label="Introduction">
                        <NameInput patientAge = {age} />                        
                  </Form.Item>
                  <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
                        <Button type="primary" htmlType="submit">
                              Generate PDF
                        </Button>
                  </Form.Item>
            </Form>
      );
}

export default PrescriptionForm;
