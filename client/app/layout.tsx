import React, { FC, ReactNode } from 'react'

import "../public/index.css"

import Sidebar from '@/components/Sidebar';

type RootProps = {
  children: ReactNode;
};

const RootLayout: FC<RootProps> = ({ children }) => {
  return (
    <html>
      <head>

      </head>

      <body>
        <Sidebar />
        {children}
      </body>

    </html>
  )
}

export default RootLayout