"use client"

import React, { FC, ReactNode, useState } from 'react'
import { configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';

import "../public/index.css"

import Sidebar from '@/components/Sidebar';
import state from '@/state';

const store = configureStore({
  reducer: state
})

type RootProps = {
  children: ReactNode;
};

const RootLayout: FC<RootProps> = ({ children }) => {
  return (
    <html>
      <head>

      </head>

      <body>
        <Provider store={store}>
          <Sidebar />
          {children}
        </Provider>
      </body>

    </html>
  )
}

export default RootLayout