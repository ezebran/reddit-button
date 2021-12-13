import { NavbarContainer, NavLink, Nav } from '@/styles/LayoutStyles'
import LogoSrc from '@/public/images/reddit-logo.png'
import { useRouter } from 'next/router'
import Image from 'next/image'
import Link from 'next/link'

const Navbar: React.FC = () => (
    <NavbarContainer>
        <Image src={LogoSrc} width={125} height={44} />
        <Nav>
            <Link href="/">
                <NavLink>Inicio</NavLink>
            </Link>
            
            <Link href="/Records">
                <NavLink>Rankings</NavLink>
            </Link>
        </Nav>
        
    </NavbarContainer>
)
 
 export default Navbar; 