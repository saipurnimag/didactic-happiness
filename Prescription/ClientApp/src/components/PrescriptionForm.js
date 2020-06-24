import React, { useState } from 'react';
import { Form, Button, Space } from 'antd';
import InputField from "./InputField";
import axios from "axios";

const PrescriptionForm = () => {


      const layout = {
            labelCol: { span: 8 },
            wrapperCol: { span: 16 },
      };

      const [name, setName] = useState("no name");
      const [age, setAge] = useState("no age");
      const [symptoms, setSymptoms] = useState("no symptoms");
      const [diagnosis, setDiagnosis] = useState("no diagnosis");
      const [remarks, setRemarks] = useState("no remarks");
      const [loading, setLoading] = useState(false);
      const [medication, setMedication] = useState("no medicines");
      const [] = useState(null);

      function handleNameChange(newName) {
            setName(newName)
      }
      function handleAgeChange(newAge) {
            setAge(newAge)
      }

      function handleSymptomsChange(newSymptoms){
            setSymptoms(newSymptoms)
      }

      function handleDiagnosisChange(newDiagnosis){
            setDiagnosis(newDiagnosis)
      }

      function handleMedicationChange(newMedication){
            setMedication(newMedication)
      }

      function handleRemarksChange(newRemarks){
            setRemarks(newRemarks)
      }

      function sendPDFReq() {
            if (!loading) setLoading(true);
            //make a json

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
                        "Name": name+" ",
                        "Age": age+" ",
                        "Symptoms": symptoms+" ",
                        "Diagnosis": diagnosis+" ",
                        "Medication": medication+" ",
                        "Remarks":  remarks+" ",
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

    function sendEmail() {

        axios({
            method: 'GET',
            url: '/WeatherForecast',
            data: {
                "Name": name + " ",
                "Age": age + " ",
                "Symptoms": symptoms + " ",
                "Diagnosis": diagnosis + " ",
                "Medication": medication + " ",
                "Remarks": remarks + " ",
            }

        }).then((result) => {
            console.log(result.data);
        }).catch((error) => {
            console.log(error)
            console.log("result = " + typeof error);
        })

    }
      

      return (
            <Space size={"large"}>
                  <Form name="nest-messages" onFinish={sendPDFReq} >
                        <Form.Item xs={{ span: 22, alignItems: 'center' }} md={{ span: 12, alignItems: 'center', }}>
                              {}
                              <br />
                              {/* <Input type="text" placeholder="Name" onChange = {(text)=> handleNameChange(text)} /> */}
                              <InputField changeHandler={(newName) => handleNameChange(newName)} labelName={"Name"} />
                              {}
                              <br />
                        </Form.Item>
                        <Form.Item xs={{ span: 22 }} md={{ span: 12, alignItems: 'center', }}>
                              {}
                              <br />
                              {/* <Input type="text" placeholder="Age" onChange = {(text)=> handleAgeChange(text)} /> */}
                              <InputField changeHandler={(newAge) => handleAgeChange(newAge)} labelName={"Age"} />
                              {}
                              <br />
                        </Form.Item>
                        <Form.Item xs={{ span: 22 }} md={{ span: 12, alignItems: 'center', }}>
                              {}
                              <br />
                              {/* <Input type="text" placeholder="Age" onChange = {(text)=> handleAgeChange(text)} /> */}
                              <InputField changeHandler={(newSymptoms) => handleSymptomsChange(newSymptoms)} labelName={"Symptoms"} />
                              {}
                              <br />
                        </Form.Item>
                        <Form.Item xs={{ span: 22 }} md={{ span: 12, alignItems: 'center', }}>
                              {}
                              <br />
                              {/* <Input type="text" placeholder="Age" onChange = {(text)=> handleAgeChange(text)} /> */}
                              <InputField changeHandler={(newDiagnosis) => handleDiagnosisChange(newDiagnosis)} labelName={"Diagnosis"} />
                              {}
                              <br />
                        </Form.Item>
                        <Form.Item xs={{ span: 22 }} md={{ span: 12, alignItems: 'center', }}>
                              {}
                              <br />
                              {/* <Input type="text" placeholder="Age" onChange = {(text)=> handleAgeChange(text)} /> */}
                              <InputField changeHandler={(newMedication) => handleMedicationChange(newMedication)} labelName={"Medication"} />
                              {}
                              <br />
                        </Form.Item>
                        <Form.Item xs={{ span: 22 }} md={{ span: 12, alignItems: 'center', }}>
                              {}
                              <br />
                              {/* <Input type="text" placeholder="Age" onChange = {(text)=> handleAgeChange(text)} /> */}
                              <InputField changeHandler={(newRemarks) => handleRemarksChange(newRemarks)} labelName={"Remarks"} />
                              {}
                              <br />
                        </Form.Item>
                        
                        <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
                              {}
                              <br />
                              
                              <Button type="primary" htmlType="submit">
                                    Submit
                              </Button>

                      <br />
                      <Button type="primary" onClick={sendEmail}>
                          Send Email pls!
                              </Button>

                                
                        </Form.Item>
                  </Form>
                  
            </Space>
      );
}

export default PrescriptionForm;
