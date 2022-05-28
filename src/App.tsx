import { useEffect, useState, Fragment } from 'react'
import { Container, Button, Table, Modal, Form } from 'react-bootstrap'
import { useFormik } from "formik"
import Navbar from "./components/Navbar"
import UserTable from "./components/UserTable"
import './App.css'
import { renderUsers, createUser, deleteUser } from './api'
import {User} from "./types"
import ModalCreateUser from './components/ModalCreateUser'


function App(): JSX.Element {

  // Estado dos usuaŕios
  const [userList, setUsers] = useState<User[]>([] as User[])
  // 1. demonstrar o valor da variavel
  // 2. alterar o valor da variavel através de uma função

  const [userCreateModal, setUserCreateModal] = useState<boolean>(false)
  const [userEditModal, setUserEditModal] = useState<User>({} as User)
  
  //Estado inicial o componente
  useEffect(() => {
    renderUsers().then(users => setUsers(users))
  },[])

  // Função para adicionar um novo usuário
  const handleCreateUser = async (user: Omit<User, "id">) => {
    const newUser = await createUser(user)
    setUsers(
      oldUserList => [...oldUserList, newUser]
    )
  }

  //Função de exclusão de usuario
  const handleDeleteUser = async (id: number) => {
      await deleteUser(id)
      setUsers(
        oldUserList => oldUserList.filter(
          user => user.id !== id
        )
      )
  }

  //Função de edição de usuario

  // Função para abrir o nosso modal
  const handleOpenCreateUserModal = () => {
    setUserCreateModal(true)
  }

  // Função para fechar o nosso modal
  const handleCloseCreateUserModal = () => {
    setUserCreateModal(false)
  }

  
  return (
    <Fragment>
      {/*Navbar*/}
      <Navbar onClick={handleOpenCreateUserModal} />
      {/*Container*/}
      <UserTable 
        users={userList} 
        onDelete={handleDeleteUser} 
      />
      {/*Modal de criação do usuario*/}
      <ModalCreateUser 
        show={userCreateModal} 
        createUser={handleCreateUser}
        onHide={handleCloseCreateUserModal}
      />
      {/*Modal de edição de usuario*/}
      
    </Fragment>
  )
}

export default App
