import { Button, Col, Row, Table, Typography } from "antd";
import { ColumnsType } from "antd/es/table";
import { useStateContext } from "context/Users";
import { Family, User } from "interfaces/UserList";
import moment from 'moment';
import { useNavigate } from "react-router-dom";

type Props = {
    onClickFamily: (value: Family[]) => void
}

const TableUserList = ({ onClickFamily }: Props) => {
    const { users } = useStateContext();
    const navigate = useNavigate();
    const { Text } = Typography;

    const columns: ColumnsType<User> = [
        {
            title: 'Name',
            dataIndex: 'name',
            key: 'name'
        },
        {
            title: 'eKTP',
            dataIndex: 'eKtp',
            key: 'eKtp',
        },
        {
            title: 'Address',
            dataIndex: 'address',
            key: 'address',
        },
        {
            title: 'Job',
            dataIndex: 'job',
            key: 'job',
        },
        {
            title: 'Date of Birth',
            dataIndex: 'dob',
            key: 'dob',
            render: (_, { dob }) => (
                <p>{moment(dob).format('D-MMMM-YYYY')}</p>
            ),
        },
        {
            title: 'Phone Number',
            key: 'phones',
            dataIndex: 'phones',
            render: (_, { phones }) => (
                <p>{phones.toString()}</p>
            ),
        },
        {
            title: 'Family',
            key: 'action',
            render: (_, { family }) => (
                <Button
                    type="primary"
                    onClick={() => onClickFamily(family)}
                >
                    {`Show (${family.length})`}
                </Button>
            ),
        },
    ];


    return <>
        <Row style={{ marginTop: '2rem', marginBottom: '1rem' }}>
            <Col flex={3} style={{ justifyContent: 'start', display: 'flex' }}>
                <Text style={{ fontWeight: 900, fontSize: '1.5rem' }}>List Users</Text>
            </Col>
            <Col flex={8} style={{ justifyContent: 'end', display: 'flex' }}>
                <Button
                    type="primary"
                    onClick={() => navigate("/create")}
                    style={{
                        marginRight: '0.5rem',
                        marginLeft: '0.5rem'
                    }}
                >
                    Create New User
                </Button>
            </Col>
        </Row>
        <Table columns={columns} dataSource={users} />
    </>;
}

export default TableUserList