'use client'
import React, { useCallback, useContext, createContext } from 'react';
import io from 'socket.io-client';

interface SocketProviderProps {
    children?: React.ReactNode;
}

interface ISocketContext {
    sendMessage: (msg: string) => any;
}

const SocketContext = createContext<ISocketContext | null>(null);

export const useSocket = () => {
    const state = useContext(SocketContext);
    if (!state) {
        throw new Error("SocketProvider is not defined");
    }
    return state;
};

export const SocketProvider: React.FC<SocketProviderProps> = ({ children }) => {
    const sendMessage: ISocketContext['sendMessage'] = useCallback((msg) => {
        console.log("The message is:", msg);
    }, []);

    const contextValue: ISocketContext = {
        sendMessage,
    };

    return (
        <SocketContext.Provider value={contextValue}>
            {children}
        </SocketContext.Provider>
    );
};
