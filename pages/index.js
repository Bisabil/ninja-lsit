import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import Footer from '../comps/Footer'
import Navbar from '../comps/Navbar'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <>
      <Head>
        <title>Ninja List | Home</title>
        <meta name="keywords" content="ninjas" />
      </Head>
      <div className="">
        
        
        
        <h1 className={styles.title}>Hi Bill</h1>
        <p className={styles.text}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Enim harum vero laudantium eaque fuga consequuntur aspernatur ipsa veritatis, similique, consequatur magni labore, tempora magnam amet ex in id voluptatibus ipsum!</p>
        <p className={styles.text}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Enim harum vero laudantium eaque fuga consequuntur aspernatur ipsa veritatis, similique, consequatur magni labore, tempora magnam amet ex in id voluptatibus ipsum!</p>
        <Link href='/ninjas' className={styles.btn}>
          See Ninja Listing
        </Link>
        
        


      </div>
    </>
  )
}
