import Head from 'next/head'
import Image from 'next/image'
import React, { useEffect, useState, createContext, useContext } from "react";
import { ethers } from "ethers"// Download 👇👇👇 ethers,Web3
import { contractABI, contractAddress } from "../agenda_contract_abi/constants";// Transaction.json file 🗃️🗃️🗃️
import styles from '../styles/Home.module.css'



    
// will Return 🎉🎉🎉
const getEthereumContract = () => {
        
      const provider = new ethers.providers.Web3Provider(ethereum);
      const signer = provider.getSigner();
      const transactionsContract = new ethers.Contract(contractAddress, contractABI, signer);

    // return transactionsContract;
    console.log({
        provider,
        signer,
        transactionsContract        
        
    });
};
    
 




const Home1o1 = () => {
    
    const[ currentAccount, setCurrentAccount] = useState('')



    
    
    
    
//  Main Function 🥰🥰🥰🥰😍
    const connectWallet = async () => {
        if (typeof window !== "undefined") {
            const { ethereum } = window;// We will be here🔙🔙🔙
            try {
                if (!ethereum) return alert('Please install metamask')
                const accountsCreate = await ethereum.request({  method:'eth_requestAccounts'  })
                setCurrentAccount(accountsCreate[0])
                
                if (ethereum) {
                    
                    console.log(currentAccount);
                    
                    console.log(accountsCreate[0]);
                    
                    alert("had wallet use check blah blah.. to do this quickly")
                    
                } else {
                    alert("Something went wrong")
                    console.log("Something went wrong")
                    
                }
                
                if (currentAccount.length) {
                    console.log('lendght op')
                    
                } else {
                    console.log('if it doesnot work automaticly go to Matamask extension and connect specific account as needed');
                    console.log('else op');
                    
                }
                // getEthereumContract();
                
            } catch (e) {
                console.log(e);
            }
        }
    }   
    
    
    
// op function🥳🥳🥳
    const isWalletConnected = async () => {
        if (typeof window !== "undefined") {
            const { ethereum } = window;// We will be here🔙🔙🔙
            try {
                const accounts = await ethereum.request({  method:'eth_accounts'  })
                console.log(accounts);
                
                (3>1) ? console.log('True') : console.log('False')
                    
                if (ethereum){
                    console.log("That's my guy!")
                    if (currentAccount) {
                        alert(`And the account is ${accounts}`)
                    } else {
                        alert(`Not logged in`)
                    }
                }
                if (!ethereum){
                    console.log("That's my guy!")
                    alert("Not logd in")
                }                
                
            } catch (e) {
                console.log(e);
            }
        }
    }
    
    
    
    
    
    return (
        
        <div className={styles.container}>
          <Head>
            <title>Create Next App</title>
            <meta name="description" content="Generated by create next app" />
            <link rel="icon" href="/favicon.ico" />
          </Head>
    
          <main className={styles.main}>
          { !currentAccount && (
            <h1 className={styles.title}>
             You are  <a href="https://nextjs.org">Loged in!</a>
            </h1>
          )}
            <p className={styles.description}>
              Get started by editing{' '}
              <code className={styles.code}>pages/index.js</code>
            </p>
    
            <div className={styles.grid}>
              <a href="https://nextjs.org/docs" className={styles.card}>
                <h2>Documentation &rarr;</h2>
                <p>Find in-depth information about Next.js features and API.</p>
              </a>
    
              <a href="https://nextjs.org/learn" className={styles.card}>
                <h2>Learn &rarr;</h2>
                <p>Learn about Next.js in an interactive course with quizzes!</p>
              </a>
    
              <a
                href="https://github.com/vercel/next.js/tree/master/examples"
                className={styles.card}
              >
                <h2>Examples &rarr;</h2>
                <p>Discover and deploy boilerplate example Next.js projects.</p>
              </a>
    
              <a
                href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
                className={styles.card}
              >
                <h2>Deploy &rarr;</h2>
                <p>
                  Instantly deploy your Next.js site to a public URL with Vercel.
                </p>
              </a>
            </div>
          </main>
          
          
          <h1 onClick={connectWallet}>Metamask login</h1> 
          <h1 onClick={isWalletConnected}>✔️✅✅ if you are logged in</h1>
          
          
          <footer className={styles.footer}>
            <a
              href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
              target="_blank"
              rel="noopener noreferrer"
            >
              Powered by{' '}
              <span className={styles.logo}>
                <Image src="/vercel.svg" alt="Vercel Logo" width={72} />
              </span>
            </a>
          </footer>
        </div>        
        
        
        
    )
}

export default Homepage1o1



// $$$$$$$$$$$$$$$$$$$$$$$$$$$$$ TransactionsProvider $$$$$$$$$$$$$$$$$$$$$$$$$$$$$


// Nextjs ultimate helper🧐🧐🧐
    // if (typeof window !== "undefined") {
    //         // const { ethereum } = window;// We will be here🔙🔙🔙
    //         // console.log(window.web3);
    //         // console.log(window.ethereum);
    // }



