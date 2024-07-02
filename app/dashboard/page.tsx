import React from 'react'
import { auth } from '@/auth'

const page = async () => {

    const sesssion = await auth();

    return (
        <div>
            {JSON.stringify(sesssion)}
        </div>
    )
}

export default page
