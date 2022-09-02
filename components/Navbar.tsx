import { FunctionComponent, useEffect, useState } from "react"
import Link from 'next/link'
import { useRouter } from "next/router"

const NavItem: FunctionComponent<{
    activeItem: string,
    setActiveItem: Function,
    name:string,
    route: string
}> = ({activeItem, name, route, setActiveItem})=> {
    return(
        activeItem !== name ? (
            <Link href={route}>
                <a >
                    <span onClick={()=>setActiveItem(name)} className='hover:text-orange-500 p-5'>{name}</span>
                </a>
            </Link>
        ): null
    )
}

const Navbar = () => {
    const [activeItem, setActiveItem] = useState<string>('')

    const { pathname } = useRouter()    

    useEffect(()=> {
    if(pathname ==="/")setActiveItem('About')
    else if(pathname ==="/soloprojects")setActiveItem('Solo-Projects')
    else if(pathname ==="/collaborations")setActiveItem('Collaborations')
    },[])
    return (
        <div className="flex justify-between px-5 py-3 my-3 font-poppins">
            <span className='font-bold text-orange-500 border-orange-500 md:text-2xl text-xl border-b-4'>{activeItem}</span>
            <div className='text-cyan-500 text-lg flex'>
            <NavItem activeItem={activeItem} setActiveItem={setActiveItem} name="About" route='/'/>
            <NavItem activeItem={activeItem} setActiveItem={setActiveItem} name="Solo-Projects" route='/soloprojects'/>
            <NavItem activeItem={activeItem} setActiveItem={setActiveItem} name="Collaborations" route='/collaborations'/>
            </div>
        </div>
    )
}

export default Navbar