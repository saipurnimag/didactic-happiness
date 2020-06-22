import React, { useEffect, useState } from 'react';
import { Form, Input, InputNumber, Button, Space } from 'antd';
import { AudioOutlined } from "@ant-design/icons";
import InputField from "./InputField";
import Quixote from './Quixote';
import axios from "axios";
import PDFViewer from 'pdf-viewer-reactjs';

const PrescriptionForm = () => {


      const layout = {
            labelCol: { span: 8 },
            wrapperCol: { span: 16 },
      };

      const [name, setName] = useState("khgj");
      const [age, setAge] = useState("khj");
      const [symptoms, setSymptoms] = useState("kjh");
      const [diagnosis, setDiagnosis] = useState("kjhfg");
      const [remarks, setRemarks] = useState("xcvb");
      const [loading, setLoading] = useState(false);
      const [medication, setMedication] = useState("gh");
      const [encodedString, setEncodedString] = useState(null);

      function handleNameChange(newName) {
            setName(newName)
      }
      function handleAgeChange(newAge) {
            setAge(newAge)
      }

      function sendPDFReq() {
            if (!loading) setLoading(true);
            //make a json
            var json = "{\"Name\": \"" + name + "\",\"Age\": \"" + age + "\",\"Symptoms\": \"" + symptoms + "\",\"Diagnosis\": \"" + diagnosis + "\",\"Medication\": \"" + medication + "\",\"Remarks\": \"" + remarks + "\"}";

            //fetch('/WeatherForecast', {
            //      method: 'POST',
            //      body: {
            //            "Name": name,
            //            "Age": age,
            //            "Symptoms": symptoms,
            //            "Diagnosis": diagnosis,
            //            "Medication": medication,
            //            "Remarks": remarks
            //      }
            //})
            //.then( (result)=>{
            //      console.log("result = "+ typeof result);
            //      setEncodedString(new Buffer(result.data).toString('base64'))
            //});           


            // axios.post('/WeatherForecast', {
            //             "Name": "P",
            //             "Age": "4",
            //              "Symptoms": "A",
            //              "Diagnosis": "J",
            //              "Medication": "K",
            //              "Remarks": "V",
            //     })
            //     .then(function (result) {
            //       //convert result to base 64
            //             const file = new Blob(
            //                   [result.data], 
            //                   {type: 'application/pdf'});
            //             const fileURL = URL.createObjectURL(file);//Open the URL on new Window
            //             window.open(fileURL);
            //     })
            //     .catch(function (error) {
            //       console.log(error);
            //     });
          axios({
                  method: 'POST',
                   url: '/WeatherForecast',
                   responseType: "blob",
                   data: {
                         "Name": name,
                        "Age": age,
                        "Symptoms": symptoms,
                        "Diagnosis": diagnosis,
                        "Medication": medication,
                        "Remarks": remarks,
                   }

             }).then((result) => {
                   //convert result to base 64
                   const file = new Blob(
                        [result.data], 
                        {type: 'application/pdf'});
                  const fileURL = URL.createObjectURL(file);//Open the URL on new Window
                  window.open(fileURL);
                   
                   //setEncodedString(new Buffer(result.data).toString('base64'))
             }).catch((error)=>{
                   console.log(error)
                   console.log("result = "+ typeof error);
             })
      }

      let element2;

      if(encodedString==null){
            element2 = <br/>
      }
      else{
            element2 = <PDFViewer
            document={{
                  url:"http://cvr.ac.in/home/Journal/Volume4.pdf"
            //     base64: encodedString
            }}
        />
      }

      return (
            <Space size={"large"}>
                  <Form name="nest-messages" onFinish={sendPDFReq} >
                        <Form.Item xs={{ span: 22, alignItems: 'center' }} md={{ span: 12, alignItems: 'center', }}>
                              {}
                              <br />


                              <Input type="text" placeholder="Name" onChange = {(text)=> handleNameChange(text)} />
                              {/* <InputField changeHandler={(newName) => handleNameChange(newName)} labelName={"Name"} /> */}
                              {}
                              <br />
                        </Form.Item>
                        <Form.Item xs={{ span: 22 }} md={{ span: 12, alignItems: 'center', }}>
                              {}
                              <br />
                              <Input type="text" placeholder="Age" onChange = {(text)=> handleAgeChange(text)} />
                              {/* <InputField changeHandler={(newAge) => handleAgeChange(newAge)} labelName={"Age"} /> */}
                              {}
                              <br />
                        </Form.Item>
                        
                        <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
                              {}
                              <br />
                              <Button type="primary" htmlType="submit">
                                    Submit
                              </Button>
                        </Form.Item>
                  </Form>
                  {element2}
            </Space>
      );
}

export default PrescriptionForm;
