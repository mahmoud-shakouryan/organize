import {createContext, useContext, useState} from 'react';


export const DeleteModalContext = createContext();

export const DeleteModalProvider = ({children}) => {
            const [ deleteModal, setDeleteModal] = useState(false);

            return (
                <DeleteModalContext.Provider value={{deleteModal, setDeleteModal}}>
                    {children}
                </DeleteModalContext.Provider>
            );
};

export  const useDeleteModalValue = () => {
    return useContext(DeleteModalContext);
};
