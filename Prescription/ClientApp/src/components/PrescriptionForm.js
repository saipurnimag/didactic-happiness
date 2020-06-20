import React, { useState } from 'react';
import { Form, Input, InputNumber, Button } from 'antd';
import { AudioOutlined } from "@ant-design/icons";


const PrescriptionForm = () => {

      const [isListening, listen] = useState(false);
      var SpeechRecognition = SpeechRecognition || window.webkitSpeechRecognition
      var SpeechGrammarList = SpeechGrammarList
      var SpeechRecognitionEvent = SpeechRecognitionEvent
      const recognition = new SpeechRecognition()

      recognition.continous = true
      recognition.interimResults = true
      recognition.lang = "en-IN"

      const validateMessages = {
            required: '${label} is required!',
            types: {
                  email: '${label} is not validate email!',
                  number: '${label} is not a validate number!',
            },
            number: {
                  range: '${label} must be between ${min} and ${max}',
            },
      };



      const [name, setName] = useState([""]);
      const[status,setStatus] = useState(["Start"]);

      const record = () => {


            listen(!isListening);
            if(status=="Start") setStatus("Stop")
            else setStatus("Start")
            if (isListening) {
                  //handle listen
                  recognition.start();
                  var finalTranscript = "";
                  recognition.onresult = (event) => {
                        var interimTranscript = "";

                        for (var i = event.resultIndex; i < event.results.length; ++i) {
                              const transcript = event.results[i][0].transcript;
                              if (event.results[i].isFinal) finalTranscript += transcript + ' ';
                              else interimTranscript += transcript;
                        }
                        console.log("interimTranscript = " + interimTranscript);
                        console.log("name = " + { name });
                        console.log("finalTranscript = " + finalTranscript);
                        setName(interimTranscript);
                        setName(finalTranscript);

                  }


            }

      }

      const onFinish = values => {
            console.log(values);
      };

      const layout = {
            labelCol: { span: 8 },
            wrapperCol: { span: 16 },
      };

      return (
            <Form name="nest-messages" onFinish={onFinish} validateMessages={validateMessages}>
                  Name is {name}
                  <Form.Item name={['user', 'name']} label="Name" rules={[{ required: true }]}>
                        <Input.TextArea
                              defaultValue={name}
                              value={name}
                              placeholder={name}
                              enterButton="Search"
                              size="large"
                        />
                        <Button type="primary" onClick={record}>
                              {status}
                        </Button>
                  </Form.Item>
                  <Form.Item name={['user', 'email']} label="Email" rules={[{ type: 'email' }]}>
                        <Input />
                  </Form.Item>
                  <Form.Item name={['user', 'age']} label="Age" rules={[{ type: 'number', min: 0, max: 99 }]}>
                        <Input />
                  </Form.Item>
                  <Form.Item name={['user', 'website']} label="Website">
                        <Input />
                  </Form.Item>
                  <Form.Item name={['user', 'introduction']} label="Introduction">
                        <Input.TextArea />
                  </Form.Item>
                  <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
                        <Button type="primary" htmlType="submit">
                              Submit
                        </Button>
                  </Form.Item>
            </Form>
      );
}

export default PrescriptionForm;
