import React from 'react';
import {reduxStoreType} from './types/Types';

export const StoreContext = React.createContext({} as reduxStoreType);

/*
export type ProviderType = {
    store: reduxType;
    children: React.ReactNode;
};

export const Provider = (props: ProviderType) => {
    return (
        <StoreContext.Provider value={props.store}>
            {props.children}
            </StoreContext.Provider>
    );
};*/
