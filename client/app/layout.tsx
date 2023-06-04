"use client"

import React, { FC, ReactNode, useState } from 'react'
import { configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';

import "../public/index.css"
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

      <body className="overflow-hidden">
        <Provider store={store}>
          <div className="relative flex w-screen h-screen overflow-hidden z-0">
            {children}
          </div>
        </Provider>
      </body>

    </html>
  )
}

export default RootLayout