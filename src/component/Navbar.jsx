import {Link } from 'react-scroll'
import { useEffect, useState ,useRef} from 'react'
import Logo from '../image/images.svg'
import Button from './Button';

const Navbar = () => {

  const [ isOpen, setIsOpen ] = useState( false );
  const [ active, setActive ] = useState( false );
  const genericHamburgerLine = `h-[3px]  w-7 md:w-10 my-[3px] rounded-full bg-black transition ease transform duration-300`;
 
  const isActive = () => {
    window.scrollY > 0 ? setActive( true ) : setActive( false )
  }
  useEffect( () => {
    window.addEventListener( "scroll", isActive )
  }, [] );

  const divEl = useRef();

  useEffect(() => {
    const handler = ( event ) => {
      
      if ( !divEl.current.contains(event.target)) {
      
        setIsOpen(false)
        
      }
    };

    document.addEventListener('click', handler, true);

    return () => {
      document.removeEventListener('click', handler);
    };
  }, []);
  return (
  

    <div  ref={ divEl }  className={ `w-full py-1 ${ active ? "bg-white z-50 shadow-xl font-lato fixed top-0 left-0  " :
      "bg-white z-50 fixed top-0 left-0  " }` }>
      <div className="w-11/12  mx-auto flex justify-between items-center">
        <Link to="home" smooth={ true } spy={ true } offset={ -150 } className='cursor-pointer flex flex-col text-xl font-one items-center '>
          <img className='py-3 w-16 md:w-24' src={ Logo } alt="" />
         
        </Link>
        <div className="hidden lg:flex font-pop items-center  gap-8">
          <Link to="home" activeClass="currently" smooth={ true } spy={ true } offset={ -200 } className=" hover:text-primary-200 transition-all duration-300 cursor-pointer">Home</Link>
          <Link to="about" activeClass="currently"  smooth={ true } spy={ true }  offset={-150}  className=" hover:text-primary-200 transition-all duration-300 cursor-pointer">About Us</Link>
          <Link to="vehicle"activeClass="currently"  smooth={ true } spy={ true }  offset={-150}  className=" hover:text-primary-200 transition-all duration-300 cursor-pointer">Vehicle Models</Link>
          <Link to="testimonials" activeClass="currently"  smooth={ true } spy={ true }  offset={-150}  className=" hover:text-primary-200 transition-all duration-300 cursor-pointer">Testimonials</Link>
          <Link to="contact" activeClass="currently"  smooth={ true } spy={ true }  offset={-150}  className=" hover:text-primary-200 transition-all duration-300 cursor-pointer">Contact</Link>
        </div>
        <div className="hidden lg:flex gap-8 font-pop">
          <button className='hover:text-primary-200 transition-all duration-300 '>Sign in</button>
          <Button small color="primary" >
           Register
              </Button>
        </div>
        <div className={ `flex relative bg-primay-200 lg:hidden ${ isOpen ? "" : "" }` }>
          {/* mobile menu */ }
        <button className="flex flex-col h-12 w-z  rounded justify-center items-center group" onClick={() => setIsOpen(!isOpen)}  >
            <div className={ ` transition-all duration-500 ${ genericHamburgerLine }
           ${isOpen
              ? "rotate-[405deg] translate-y-[6px]   group-hover:scale-105"
              : " group-hover:-translate-y-[3px]"
              }` } />
            <div className={ `${ genericHamburgerLine } ${ isOpen ? "opacity-0" : "" }` } />
            <div className={ ` transition-all duration-500 ${ genericHamburgerLine } ${ isOpen ? "-rotate-[45deg]  -translate-y-[12px]  group-hover:scale-105" : " group-hover:translate-y-[2px]" }` } />
          </button>
        </div>
      </div>
      <div className={ `transition-all duration-500 flex justify-center items-center absolute overflow-x-hidden h-screen translate-x-0  w-3/4  top-[50px] bg-white ${ isOpen ? "lg:hidden right-0 " : "-right-full" }` }>
        <div className="flex flex-col font-pop items-center gap-10">
          <Link onClick={()=>setIsOpen(false)} to="home" activeClass="currently" smooth={ true } spy={ true } offset={ -200 } className=" hover:text-primary-200 transition-all duration-300 cursor-pointer">Home</Link>
          <Link onClick={()=>setIsOpen(false)} to="about"  activeClass="currently" smooth={ true } spy={ true } offset={ -150 } className=" hover:text-primary-200 transition-all duration-300 cursor-pointer">About Us</Link>
          <Link onClick={()=>setIsOpen(false)} to="Vehicle"  activeClass="currently" smooth={ true } spy={ true } offset={ -150 } className=" hover:text-primary-200 transition-all duration-300 cursor-pointer">Vehicle Models</Link>
          <Link onClick={()=>setIsOpen(false)} to="testimonials" activeClass="currently" smooth={ true } spy={ true } offset={ -150 } className=" hover:text-primary-200 transition-all duration-300 cursor-pointer">Testimonials</Link>
          <Link onClick={()=>setIsOpen(false)} to="contact"  activeClass="currently" smooth={ true } spy={ true } offset={ -150 } className=" hover:text-primary-200 transition-all duration-300 cursor-pointer">Contact</Link>
        </div>
      </div>
    </div>
  )
}

export default Navbar
