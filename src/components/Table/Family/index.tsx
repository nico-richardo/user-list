import { Button, Col, Row, Table, Typography } from "antd";
import { ColumnsType } from "antd/es/table";
import { Family, Relationship, relationshipOption } from "interfaces/UserList";
import moment from 'moment';
import { useMemo } from "react";
import { DatePicker } from 'antd';

import { Select } from 'antd';
import Input from "components/Input";

type Props = {
    family: Family[];
    isReadonly?: boolean;
    handleChange?: (index: number, value: string, field: keyof Family) => void;
    addNew?: () => void;
}

const TableFamily = ({ family, isReadonly = false, addNew, ...props }: Props) => {
    const { Text } = Typography;
    const capitalizeFirstLetter = (string: string) => {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }

    const dropdownOption: { value: string, label: string }[] = useMemo(() => {
        return relationshipOption.map((value: Relationship) => ({
            value: value,
            label: capitalizeFirstLetter(value)
        }))

    }, [])

    const handleChange = (index: number, value: string, field: keyof Family) => {
        props.handleChange && props.handleChange(index, value, field);
    };


    const columns: ColumnsType<Family> = [
        {
            title: 'Name',
            dataIndex: 'name',
            key: 'name',
            render: (_, { name }, index) => {
                return isReadonly ?
                    <p>{name}</p>
                    :
                    <Input
                        key={"familyname" + index}
                        name="name"
                        isLabel={false}
                        value={name}
                        onChange={(e: any) => handleChange(index, e.target.value, 'name')}
                    />


            },
        },
        {
            title: 'Date of Birth',
            dataIndex: 'dob',
            key: 'dob',
            render: (_, { dob }, index) => {
                return isReadonly ?
                    <p>{moment(dob).format('D-MMMM-YYYY')}</p>
                    :
                    <DatePicker
                        key={"familydob" + index} onChange={(_date: any, dateString: any) => {
                            handleChange(index, dateString, 'dob');
                        }} />

            },
        },
        {
            title: 'Relationship',
            dataIndex: 'relationship',
            key: 'relationship',
            render: (_, { relationship }, index) => {
                return isReadonly ?
                    <p>{relationship}</p>
                    :
                    <Select
                        key={"familyrealtionship" + index}
                        defaultValue={relationship}
                        style={{ width: 120 }}
                        onChange={(value: string) => handleChange(index, value, 'relationship')}
                        options={dropdownOption}
                    />
            }
        }
    ];


    return <Row style={{ display: 'flex', flexDirection: 'column' }}>
        <Row style={{ marginTop: '2rem', marginBottom: '1rem' }}>
            <Col flex={3} style={{ justifyContent: 'start', display: 'flex' }}>
                <Text style={{ fontWeight: 900, fontSize: '1.5rem' }}>{`Family Member (${family.length})`}</Text>
            </Col>
            <Col flex={8} style={{ justifyContent: 'end', display: 'flex' }}>
            </Col>
        </Row>
        <Table columns={columns} dataSource={family} />
        {!isReadonly && <Button
            type="primary"
            onClick={() => addNew && addNew()}
            style={{
                marginRight: '0.5rem',
                marginLeft: '0.5rem',
                width: '40%'
            }}
        >
            Add Family Member
        </Button>}
    </Row>;
}

export default TableFamily