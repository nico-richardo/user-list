import { Formik, FormikConfig } from 'formik';
import * as yup from 'yup';
import React from 'react';
import TextArea from 'components/TextArea';
import { Button, Col, Row } from 'antd';
import Input from 'components/Input';
import { Family, InitialFamily, User } from 'interfaces/UserList';
import InputNumber from 'components/InputNumber';
import TableFamily from 'components/Table/Family';
import InputDate from 'components/InputDate';

interface Props extends FormikConfig<any> {
}

const validation = yup.object().shape({
    name: yup.string().min(2, 'Too Short!').required(),
    address: yup.string().min(2, 'Too Short!').required(),
    eKtp: yup.number().required(),
    job: yup.string().min(2, 'Too Short!').required(),
    dob: yup.string().min(2, 'Too Short!').required()
});

export default function FormNote({ initialValues, innerRef, onSubmit }: Props) {
    return (
        <Formik
            initialValues={initialValues}
            innerRef={innerRef}
            validationSchema={validation}
            onSubmit={onSubmit}
        >
            {({ handleSubmit, handleChange, setFieldValue, values, errors, touched, isValid, isValidating }) => {
                const formValue: User = values;
                console.log(values, isValidating, isValid)
                return <form onSubmit={handleSubmit}>
                    <div style={{ overflowY: 'auto', height: '70vh' }}>
                        <Row style={{ justifyContent: 'space-between' }}>
                            <Col span={7} style={{ "marginRight": '0.5rem' }}>
                                <Input
                                    name="name"
                                    label="Name"
                                    value={formValue.name}
                                    onChange={handleChange}
                                    errors={errors}
                                    touched={touched}
                                />
                                <TextArea
                                    name="address"
                                    label="Address"
                                    value={formValue.address}
                                    onChange={handleChange}
                                    errors={errors}
                                    touched={touched}
                                />
                                <InputNumber
                                    name="ektp"
                                    label="eKTP"
                                    value={formValue.eKtp}
                                    onChange={(value: number) => {
                                        setFieldValue('eKtp', value);
                                    }}
                                    errors={errors}
                                    touched={touched}
                                />
                                <Input
                                    name="job"
                                    label="Job"
                                    value={formValue.job}
                                    onChange={handleChange}
                                    errors={errors}
                                    touched={touched}
                                />

                                <InputDate
                                    name="dob"
                                    label="Date of Birth"
                                    onChange={(date: any, dateString: any) => {
                                        setFieldValue('dob', dateString);
                                    }}
                                    errors={errors}
                                    touched={touched}
                                />
                            </Col>
                            <Col span={7} style={{ "marginLeft": '4rem', justifyContent: 'start' }}>
                                {
                                    formValue && formValue.phones.map((phone: number | null, index: number) => {
                                        return <InputNumber
                                            key={"phoneinput" + index}
                                            name="phones"
                                            label={index === 0 ? "Phone" : ''}
                                            value={phone}
                                            onChange={(value: any) => {
                                                const newArr = [...formValue.phones];
                                                newArr[index] = value;
                                                setFieldValue('phones', newArr);
                                            }}
                                            errors={errors}
                                            touched={touched}
                                        />
                                    })
                                }
                                <Row style={{ marginBottom: '1rem' }}>
                                    <Col span={6} />
                                    <Col span={18} style={{ display: 'flex', justifyContent: 'start' }}>
                                        <Button
                                            onClick={() => {
                                                setFieldValue('phones', [...formValue.phones, null])
                                            }}
                                            type="primary"
                                            style={{ width: '40%' }}
                                        >
                                            Add Phone
                                        </Button>
                                    </Col>
                                </Row>
                            </Col>
                            <Col span={8}></Col>
                        </Row>
                        <Row>
                            <TableFamily
                                family={formValue.family}
                                handleChange={(index: number, value: string, field: keyof Family) => {
                                    const newFamily = [...formValue.family];
                                    newFamily[index][field] = value as any;
                                    setFieldValue('family', newFamily)
                                }}
                                addNew={() =>
                                    setFieldValue('family', [...formValue.family, { ...InitialFamily }])}
                            />
                        </Row>
                    </div>
                    <Row>
                        <Button
                            htmlType="submit"
                            size='large'
                            type="primary"
                            style={{ marginTop: '0.5rem', marginLeft: '0.1rem', backgroundColor: isValid && !isValidating ? 'red' : 'white' }}
                            disabled={!isValid || isValidating}
                        >
                            Create User
                        </Button>
                    </Row>
                </form>
            }}
        </Formik>
    );
}
