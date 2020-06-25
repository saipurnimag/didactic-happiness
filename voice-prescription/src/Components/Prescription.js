import React from "react";
import { Layout, Space } from "antd";
import { Row, Col } from "antd";
import { Typography } from "antd";
import PrescriptionForm from './PrescriptionForm';
const { Title, Text } = Typography;
const { Header, Content, Footer, Sider } = Layout;
function Prescription() {
    return (
        <Content style={{ margin: "20px 20px 20px 20px" }}>
            
                <Row gutter={16}>
                    <Col span={8} offset={8}>
                        <center>
                            <Title>Generate Prescriptions</Title>
                            <br />
                        </center>
                    </Col>
                    
                </Row>
                <Row gutter={16}>
                    <Col span={8} offset={4}>
                        <center>
                        <Title level={4}>Fill the form to send pdfs directly to your patients</Title>                            
                        </center>
                        <PrescriptionForm />
                    </Col>
                    <Col span={8} offset={1} >
                        <center>
                        <Title level={4}>Your previous prescriptions</Title>                            
                        </center>
                    </Col>
                </Row>
            
        </Content>
    );
}

export default Prescription;
