import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import Script from 'next/script'
import styles from '../styles/Index.module.css'

// import styles from '../styles/Home.module.css'







export default function Home1o1() {
  return (
      <>
     
     
     
     
        
     
    <div className={`${styles.image_wrapper1o1} bg-dark`}>
     
                 <Image src="/shape-1.png" className={`${styles.image1o1} rounded-circle`} alt="art shape" layout='responsive' id="img1o1"/>
        </div>
 
     
     
     
     
        <Script
            type="text/javascript" src="https://cdn.jsdelivr.net/gh/Harry1o1/Demo/nextjs/education-website/assets/js/script.js"
            strategy="beforeInteractive"
      />
      
      
      
      
      <Head>
        <title>LetWorkBeDone</title>
        <meta name="description" content="Generated by create next app" />

        <link href='https://unpkg.com/boxicons@2.1.1/css/boxicons.min.css' rel='stylesheet' />
        <link rel="stylesheet" href="https://unicons.iconscout.com/release/v4.0.0/css/line.css" />
        
        
        
        <link href="https://cdn.jsdelivr.net/gh/Harry1o1/Demo/nextjs//education-website/assets/css/animation.css" rel="stylesheet" />
        <link href="https://cdn.jsdelivr.net/gh/Harry1o1/Demo/nextjs//education-website/assets/css/media_queries.css" rel="stylesheet" />
        <link href="https://cdn.jsdelivr.net/gh/Harry1o1/Demo/nextjs//education-website/assets/css/style1o1.css" rel="stylesheet" />
        <link href="https://cdn.jsdelivr.net/gh/Harry1o1/Demo/nextjs//education-website/assets/css/variable.css" rel="stylesheet" />

    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" />
        
        
        

      </Head>

      
      
      </>
  )
}
