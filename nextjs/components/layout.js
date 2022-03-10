
import Navbar from "./navbar";
import Navbar1 from "./Navbars/navbar1";
import Footer1 from '../containers/Footer/Footer';


import Link from 'next/link'
import Script from 'next/script'
import Head from 'next/head'
// import Document, { Html, Head, Main, NextScript } from 'next/document'

// opbro🎉🎉🎉🎉😎😎😎😎





export default function Layout({ children }) {
  return (
    <>

      {/* Testing🖖🖖🖖 */}
      <Script
        src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js"
        strategy="beforeInteractive"
      />

      <Script
        type="module" src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.esm.js"
        strategy="beforeInteractive"
      />

      <Script
        type="module" src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.esm.js"
        strategy="beforeInteractive"
      />
      <Script
        type="module" src="https://rawcdn.githack.com/Harry1o1/LetTheWorkBeDone/2ad3d52e76f2eb4fea464c79cf51bae184f520ff/nextjs/ux/globals.js"
        strategy="beforeInteractive"
      />


      <Navbar />
      {/* Page content */}
      <div id="pro-main-container">
        <div id="menu">
            
          {children}
          
        </div>
        
        {/* Sometimes not needed */}
        <Footer1 />
      </div>



      <Head>
        <title>LetWorkBeDone</title>
        <meta name="description" content="Generated by create next app" />

        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" />
        <link href='https://unpkg.com/boxicons@2.1.1/css/boxicons.min.css' rel='stylesheet' />

        
        
        
        <link rel="stylesheet" href="https://unpkg.com/open-props"/>
        <link rel="stylesheet" href="https://unpkg.com/open-props/normalize.min.css"/>

      </Head>

    </>
  );
};


