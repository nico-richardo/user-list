import { Breadcrumb } from "antd";
import FormNote from "components/Form/User";
import { InitialUser, User } from "../../interfaces/UserList";
import { HomeOutlined, UserOutlined } from '@ant-design/icons';

import { useNavigate } from "react-router-dom";
import Title from "antd/es/typography/Title";
import { FormikValues } from "formik";
import { useDispatchContext } from "context/Users";

const CreateUser = () => {
  const navigate = useNavigate();
  const dispatch = useDispatchContext();

  const handleSubmit = (e: FormikValues) => {
    dispatch({
      type: 'ADD_USER',
      payload: e as User
    });
    navigate('/');
  }

  return <>
    <Breadcrumb style={{ marginTop: '2rem' }}>
      <Breadcrumb.Item onClick={() => navigate('/')}>
        <HomeOutlined style={{ height: '' }} />
      </Breadcrumb.Item>
      <Breadcrumb.Item > 
        <UserOutlined />
        <span>Create</span>
      </Breadcrumb.Item>
    </Breadcrumb>
    <Title level={3} style={{
      display: 'flex',
      alignContent: 'start',
      marginTop: '0.5rem',
      marginBottom: '2rem',
      fontWeight: 700
    }}>
      Create New User
    </Title>
    <FormNote
      initialValues={{ ...InitialUser }}
      onSubmit={handleSubmit}
    />
  </>;
}

export default CreateUser