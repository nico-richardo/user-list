import React, { CSSProperties } from 'react';
import { Input as AntdInput } from 'antd';
import { Col, Row } from 'antd';

interface Props {
    [field: string]: any;
    label?: string;
    isLabel?: boolean;
    labelStyle?: CSSProperties
}

export default function Input({ label, labelStyle, isLabel= true, ...props }: Props) {
    return (
        <Row style={{ marginBottom: '1rem' }}>
            {isLabel && <Col span={6} style={{ display: 'flex', justifyContent: 'start', fontWeight: 600, ...labelStyle }}>
                {label}
            </Col>}
            <Col span={18} style={{ display: 'flex', justifyContent: 'start' }}>
                <AntdInput
                    {...props}
                />
            </Col>
        </Row>
    )
}
