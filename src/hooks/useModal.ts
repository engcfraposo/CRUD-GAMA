import { useState } from 'react';
import { User } from '../types';

const useModal = () => {
  const [userCreateModal, setUserCreateModal] = useState<boolean>(false)
  const [userEditModal, setUserEditModal] = useState<User>({} as User)
  
  // Função para abrir o nosso modal
  const handleOpenCreateUserModal = () => {
    setUserCreateModal(true)
  }

  // Função para fechar o nosso modal
  const handleCloseCreateUserModal = () => {
    setUserCreateModal(false)
  }

  // Função para abrir o nosso modal de edição
  const handleOpenEditUserModal = (user: User) => {
    setUserEditModal(user)
  }

  // Função para fechar o nosso modal de edição
  const handleCloseEditUserModal = () => {
    setUserEditModal({} as User)
  }

  
  return {
      userCreateModal,
      handleOpenCreateUserModal,
      handleCloseCreateUserModal, 
      userEditModal,
      handleOpenEditUserModal,
      handleCloseEditUserModal
    };
}

export default useModal;