
import MainHeader from '@/shared/components/main-header';
import React from 'react';
import 'thon-ui/core/base.css';

type Props = {
  children: React.ReactNode
}


export default function RootLayout({
  children,
}: Props) {
  return (
    <html lang="pr-br">
      
      <head> 
        <meta name="viewport" content="width=device-width, initial-scale=1"/>

        <link rel="preconnect" href="https://fonts.googleapis.com"/>
<link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="crossorigin"/>

<link href="https://fonts.googleapis.com/css2?family=Poppins&display=swap" rel="stylesheet"/>
<link href="https://fonts.googleapis.com/css2?family=Courier+Prime&family=Poppins&display=swap" rel="stylesheet"/>
     
      </head>
      <body>
        <MainHeader/>
        {children}
        </body>
    </html>
  )
}
