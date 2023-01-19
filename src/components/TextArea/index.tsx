import React, { CSSProperties } from 'react';
import AntdTextArea from 'antd/es/input/TextArea';
import { Col, Row } from 'antd';

interface Props {
    [field: string]: any
    label?: string;
    labelStyle?: CSSProperties
}

export default function TextArea({ label, labelStyle, ...props }: Props) {
    return (
        <Row style={{ marginBottom: '1rem' }}>
            <Col span={6} style={{ display: 'flex', justifyContent: 'start', fontWeight: 600, ...labelStyle }}>
                <p>{label}</p>
            </Col>
            <Col span={18} style={{ display: 'flex', justifyContent: 'start' }}>
                <AntdTextArea
                    {...props}
                />
            </Col>
        </Row>
    )
}
