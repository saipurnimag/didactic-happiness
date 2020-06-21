import React, { useEffect, useState } from 'react';
import { Form, Input, InputNumber, Button, Space } from 'antd';
import { AudioOutlined } from "@ant-design/icons";
import InputField from "./InputField";

const PrescriptionForm = () => {


      const layout = {
            labelCol: { span: 8 },
            wrapperCol: { span: 16 },
      };

      const [name, setName] = useState("");
      const [age, setAge] = useState(0);
      const [symptoms, setSymptoms] = useState("");
      const [diagnosis, setDiagnosis] = useState("");
      const[remarks,setRemarks] = useState("");

      function handleNameChange(newName) {
            setName(newName)
      }
      function handleAgeChange(newAge) {
            setAge(newAge)
      }

      return (
            <Space size={"large"}>
                 
            <Form name="nest-messages" >
                  <Form.Item xs={{ span: 22, alignItems: 'center' }} md={{ span: 12, alignItems: 'center', }}>
                        { }
                        <br />
                        <InputField changeHandler={(newName) => handleNameChange(newName)} labelName={"Name"} />
                        { }
                        <br />
                  </Form.Item>
                  <Form.Item xs={{ span: 22 }} md={{ span: 12, alignItems: 'center', }}>
                        { }
                        <br />
                        <InputField changeHandler={(newAge) => handleAgeChange(newAge)} labelName={"Age"} />
                        { }
                        <br />
                  </Form.Item>
                  <Form.Item xs={{ span: 22 }} md={{ span: 12, alignItems: 'center', }}>
                        { }
                        <br />
                        <InputField changeHandler={(newSymptoms) => setSymptoms(newSymptoms)} labelName={"Symptoms"} />
                        { }
                        <br />
                  </Form.Item>
                  <Form.Item xs={{ span: 22 }} md={{ span: 12, alignItems: 'center', }}>
                        { }
                        <br />
                        <InputField changeHandler={(newDiagnosis) => setDiagnosis(newDiagnosis)} labelName={"Diagnosis"} />
                        { }
                        <br />
                  </Form.Item>
                  <Form.Item xs={{ span: 22 }} md={{ span: 12, alignItems: 'center', }}>
                        { }
                        <br />
                        <InputField changeHandler={(newRemarks) => setRemarks(newRemarks)} labelName={"Remarks"} />
                        { }
                        <br />
                  </Form.Item>
                  <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
                        { }
                        <br />
                        <Button type="primary" block>
                              Generate-Prescription
                        </Button>
                      
                  </Form.Item>
            </Form>
            
            </Space>
      );
}

export default PrescriptionForm;
