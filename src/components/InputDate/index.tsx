import React, { CSSProperties } from 'react';
import { DatePicker } from 'antd';
import { Col, Row } from 'antd';

interface Props {
    [field: string]: any;
    label: string;
    labelStyle?: CSSProperties
}

export default function InputDate({ label, labelStyle, ...props }: Props) {
    return (
        <Row style={{ marginBottom: '1rem' }}>
            <Col span={6} style={{ display: 'flex', justifyContent: 'start', fontWeight: 600, ...labelStyle }}>
                {label}
            </Col>
            <Col span={18} style={{ display: 'flex', justifyContent: 'start' }}>

                <DatePicker {...props} />
            </Col>
        </Row>
    )
}
