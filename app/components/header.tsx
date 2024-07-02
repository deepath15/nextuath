import React from 'react'
import { Poppins } from 'next/font/google'
import { cn } from '@/lib/utils';

const font = Poppins({
    subsets: ['latin'],
    display: 'swap',
    variable: '--font-poppins',
    weight: ['500'],
    style: ['normal', 'italic'],

});

const header = ({ label }: { label: string }) => {
    return (
        <div className='w-full flex-col gap-6 flex items-center'>
            <h1
                className={cn('text-3xl font-semibold ',
                    font.className
                )} >🔐 Auth</h1>
            <p className='text-muted-foreground text-sm' >{label} </p>
        </div>
    )
}

export default header
