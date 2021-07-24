import {createContext, useContext, useState} from 'react';


export const DeleteModalContext = createContext();

export const DeleteModalProvider = ({children}) => {
            const [ deleteModal, setDeleteModal] = useState(false);
            const [showDeleteConfirm, setShowDeleteConfirm] = useState(false);             

            return (
                <DeleteModalContext.Provider value={{deleteModal, setDeleteModal, showDeleteConfirm, setShowDeleteConfirm}}>
                    {children}
                </DeleteModalContext.Provider>
            );
};

export  const useDeleteModalValue = () => {
    return useContext(DeleteModalContext);
};
