import Modal from "antd/es/modal/Modal";
import TableFamily from "components/Table/Family";
import TableUserList from "components/Table/UserList";
import { useState } from "react";
import { Family } from "../../interfaces/UserList";

const Home = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [currFamily, setCurrFamily] = useState<Family[]>([]);

  const handleClickFamily = (value: Family[]) => {
    setCurrFamily(value);
    setIsOpen(true);
  }

  return <>
    <TableUserList
      onClickFamily={handleClickFamily}
    />
    <Modal title="Basic Modal"
      open={isOpen}
      onOk={() => setIsOpen(false)}
      onCancel={() => setIsOpen(false)}
      footer={null}>
      <TableFamily
        isReadonly
        family={currFamily}
      />
    </Modal>
  </>;
}

export default Home