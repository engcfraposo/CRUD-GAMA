import { useEffect, useState, Fragment } from 'react'
import Navbar from "./components/Navbar"
import UserTable from "./components/UserTable"
import './App.css'
import { renderUsers, createUser, deleteUser, updateUser } from './interfaces/users'
import {User} from "./types"
import ModalCreateUser from './components/ModalCreateUser'
import ModalEditUser from './components/ModalEditUser'
import useModal from './hooks/useModal'
import useUser from './hooks/useUser'

function App(): JSX.Element {

  // Estado dos usuaŕios
  //const [userList, setUsers] = useState<User[]>([] as User[])
  // 1. demonstrar o valor da variavel
  // 2. alterar o valor da variavel através de uma função
  const {
    userCreateModal,
    handleOpenCreateUserModal,
    handleCloseCreateUserModal,
    userEditModal,
    handleOpenEditUserModal,
    handleCloseEditUserModal,
  } = useModal()
  
  const { 
    userList,
    handleCreateUser,
    handleDeleteUser,
    handleUpdateUser,
  } = useUser()
  //const [userCreateModal, setUserCreateModal] = useState<boolean>(false)
  //const [userEditModal, setUserEditModal] = useState<User>({} as User)
  
  //Estado inicial o componente
  //useEffect(() => {
    //renderUsers().then(users => setUsers(users))
  //},[])

  // Função para adicionar um novo usuário
  //const handleCreateUser = async (user: Omit<User, "id">) => {
    //const newUser = await createUser(user)
    //setUsers(
      //oldUserList => [...oldUserList, newUser]
    //)
  //}

  //Função de exclusão de usuario
  //const handleDeleteUser = async (id: number) => {
      //await deleteUser(id)
      //setUsers(
        //oldUserList => oldUserList.filter(
          //user => user.id !== id
        //)
      //)
  //}

  //Função de edição de usuario
  //const handleUpdateUser = async (id: number, user: Omit<User, "id">) => {
    //const newUser = await updateUser(id, user)
    //setUsers(
      //oldUserList => oldUserList.map(
        //oldUser => oldUser.id === newUser.id ? newUser : oldUser
      //)
    //)
  //}
    

  // Função para abrir o nosso modal
  //const handleOpenCreateUserModal = () => {
    //setUserCreateModal(true)
  //}

  // Função para fechar o nosso modal
  //const handleCloseCreateUserModal = () => {
    //setUserCreateModal(false)
//}

  // Função para abrir o nosso modal de edição
  //const handleOpenEditUserModal = (user: User) => {
    //setUserEditModal(user)
  //}

  // Função para fechar o nosso modal de edição
  //const handleCloseEditUserModal = () => {
    //setUserEditModal({} as User)
  //}

  
  return (
    <Fragment>
      {/*Navbar*/}
      <Navbar onClick={handleOpenCreateUserModal} />
      {/*Container*/}
      <UserTable
        onClick={handleOpenEditUserModal} 
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
      <ModalEditUser 
        show={userEditModal}
        updateUser={handleUpdateUser}
        onHide={handleCloseEditUserModal}
      />
      
    </Fragment>
  )
}

export default App
