import React, { CSSProperties } from 'react';
import { InputNumber as AntdInputNumber } from 'antd';
import { Col, Row } from 'antd';

interface Props {
    [field: string]: any;
    label: string;
    labelStyle?: CSSProperties
}

export default function InputNumber({ label, labelStyle, ...props }: Props) {
    return (
        <Row style={{ marginBottom: '1rem' }}>
            <Col span={6} style={{ display: 'flex', justifyContent: 'start', fontWeight: 600, ...labelStyle }}>
                {label}
            </Col>
            <Col span={18} style={{ display: 'flex', justifyContent: 'start' }}>
                <AntdInputNumber
                    {...props}
                />
            </Col>
        </Row>
    )
}
