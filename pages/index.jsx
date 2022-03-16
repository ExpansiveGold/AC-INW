import Head from "next/head"
import Topo from "../components/topo"
import Service from "../components/service"

export default function Home(){
    return(
        <>
        <Head>
            <title>Projeto 1 - Landing Page</title> 
        </Head>
        <main>
            <Topo/>
            <Service/>
        </main>
            
        </>
    )
}