import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
import { Button } from '@/components/ui/button'
import React from 'react'

const social = () => {
    return (
        <div className="flex gap-2 w-full">
            <Button
                size="lg"
                variant={'outline'}
                className="w-full "
            >
                <FaGithub size={"25"} />
            </Button>
            <Button
                size="lg"
                variant={'outline'}
                className="w-full"
            >
                <FcGoogle size={"25"} />
            </Button>
        </div>
    )
}

export default social
