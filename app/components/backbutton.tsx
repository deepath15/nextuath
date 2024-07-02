import { Button } from '@/components/ui/button';
import Link from 'next/link';
import React from 'react'

export interface BackButtonProps {
    label: string;
    href: string;
}
const backbutton = ({ label, href }: BackButtonProps) => {


    return (
        <div className='w-full'>
            <Button
                variant={"link"}
                size={"sm"}
                className='w-full text-center'
            >
                <Link href={href} >
                    {label}
                </Link>
            </Button>
        </div>
    )
}

export default backbutton
