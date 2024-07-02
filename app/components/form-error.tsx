import { BsExclamationTriangle } from "react-icons/bs";
import React from 'react'

interface ErrorMessage {
    message: string | undefined;

}

const ErrorMessage = ({ message }: ErrorMessage) => {
    if (!message) {
        return null;
    }
    return (
        <div className="flex items-center rounded-sm gap-x-3 p-4 bg-red-200  w-full bg-destructive/15 text-destructive  ">
            <BsExclamationTriangle className="text-red-600" size={25} />
            <p className="text-red-600">{message}</p>
        </div>
    )
}

export default ErrorMessage