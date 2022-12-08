import Link from 'next/link'
import styles from '../../styles/Ninjas.module.css'

export const getStaticProps = async () => {

    const res = await fetch('https://jsonplaceholder.typicode.com/users')
    const data = await res.json()

    return {
        props: { ninjas: data }
    }
}


const Ninja = ({ninjas}) => {
    return ( 
        <>
            <h1>This is ninjas</h1>
            { ninjas.map(ninja => (
                <Link href={'/ninjas/' + ninja.id} key={ninja.id} className={styles.single}>

                        <h3>{ninja.name}</h3>
                </Link>
            ))} 
        </>
        
     );
}
 
export default Ninja;