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
                <a>
                    <span onClick={()=>setActiveItem(name)} className='hover:text-red-500 p-5'>{name}</span>
                </a>
            </Link>
        ): null
    )
}

const Navbar = () => {
    const [activeItem, setActiveItem] = useState<string>('')
    const { pathname } = useRouter()    

    useEffect(()=> {
    if(pathname ==="/")setActiveItem('Home')
    else if(pathname ==="/soloprojects")setActiveItem('Solo')
    else if(pathname ==="/collaborations")setActiveItem('Collaborations')
    },[])
    return (
        <div className="flex justify-between px-4 py-3 my-3 font-poppins">
            <span className='font-bold text-red-500 border-red-500 md:text-2xl sm:text-3-xl border-b-4 tracking-wide'>{activeItem}</span>
            <div className='text-black text-lg sm:text-xl '>
            <NavItem activeItem={activeItem} setActiveItem={setActiveItem} name="Home" route='/'/>
            <NavItem activeItem={activeItem} setActiveItem={setActiveItem} name="Solo" route='/soloprojects'/>
            <NavItem activeItem={activeItem} setActiveItem={setActiveItem} name="Collaborations" route='/collaborations'/>
            </div>
        </div>
    )
}

export default Navbar