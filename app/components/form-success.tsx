import { AiOutlineCheckCircle } from "react-icons/ai";
import React from 'react'

interface SuccessMessage {
    message: string |undefined;

}

const SuccessMessage = ({ message }: SuccessMessage) => {
    if (!message) {
        return null;
    }
    return (
        <div className="flex items-center rounded-sm gap-x-3 p-4 bg-green-200  w-full   ">
            <AiOutlineCheckCircle className="text-green-600" size={25} />
            <p className="text-green-600">{message}</p>
        </div>
    )
}

export default SuccessMessage
