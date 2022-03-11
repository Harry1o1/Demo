import Link from 'next/link'
import Script from 'next/script'
import Head from 'next/head'
// import Document, { Html, Head, Main, NextScript } from 'next/document'

// opbro🎉🎉🎉🎉😎😎😎😎





export default function Login_logout(){
  return (
    <>
        
        <div className="container">
          <div className="forms">
            <div className="form login">
              <span className="title">Login</span>
              <form action="#">
                <div className="input-field">
                  <input type="text" placeholder="Enter your email" required />
                  <i className="uil uil-envelope icon" />
                </div>
                <div className="input-field">
                  <input type="password" className="password" placeholder="Enter your password" required />
                  <i className="uil uil-lock icon" />
                  <i className="uil uil-eye-slash showHidePw" />
                </div>
                <div className="checkbox-text">
                  <div className="checkbox-content">
                    <input type="checkbox" id="logCheck" />
                    <label htmlFor="logCheck" className="text">Remember me</label>
                  </div>
                  <a href="#" className="text">Forgot password?</a>
                </div>
                <div className="input-field button">
                  <input type="button" defaultValue="Login Now" />
                </div>
              </form>
              <div className="login-signup">
                <span className="text">Not a member?
                  <a href="#" className="text signup-link">Signup now</a>
                </span>
              </div>
            </div>
            {/* Registration Form */}
            <div className="form signup">
              <span className="title">Registration</span>
              <form action="#">
                <div className="input-field">
                  <input type="text" placeholder="Enter your name" required />
                  <i className="uil uil-user" />
                </div>
                <div className="input-field">
                  <input type="text" placeholder="Enter your email" required />
                  <i className="uil uil-envelope icon" />
                </div>
                <div className="input-field">
                  <input type="password" className="password" placeholder="Create a password" required />
                  <i className="uil uil-lock icon" />
                </div>
                <div className="input-field">
                  <input type="password" className="password" placeholder="Confirm a password" required />
                  <i className="uil uil-lock icon" />
                  <i className="uil uil-eye-slash showHidePw" />
                </div>
                <div className="checkbox-text">
                  <div className="checkbox-content">
                    <input type="checkbox" id="sigCheck" />
                    <label htmlFor="sigCheck" className="text">Remember me</label>
                  </div>
                  <a href="#" className="text">Forgot password?</a>
                </div>
                <div className="input-field button">
                  <input type="button" defaultValue="Login Now" />
                </div>
              </form>
              <div className="login-signup">
                <span className="text">Not a member?
                  <a href="#" className="text login-link">Signup now</a>
                </span>
              </div>
            </div>
          </div>
        </div>
        
        










      <Script
        type="module" src="https://cdn.jsdelivr.net/gh/Harry1o1/Demo/nextjs/pages-html/login.js"
        strategy="beforeInteractive"
      />

      <Head>
        <title>LetWorkBeDone</title>
        <meta name="description" content="Generated by create next app" />

        <link href='https://unpkg.com/boxicons@2.1.1/css/boxicons.min.css' rel='stylesheet' />
        <link href="https://cdn.jsdelivr.net/gh/Harry1o1/Demo/nextjs/pages-html/login.css" rel="stylesheet" />

    <link rel="stylesheet" href="https://unicons.iconscout.com/release/v4.0.0/css/line.css" />

        
        
        

      </Head>

    </>
  );
};

