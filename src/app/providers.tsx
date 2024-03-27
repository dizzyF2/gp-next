'use client'

import { ThemeProvider } from 'next-themes'

export function Providers({ children }: { children: React.ReactNode }) {
    return(
        <ThemeProvider attribute="class" defaultTheme='system' enableSystem>
            <div className='bg-[#eeebeb] dark:bg-[#18181b] duration-500'>
                {children}
            </div>
        </ThemeProvider>
    )
}