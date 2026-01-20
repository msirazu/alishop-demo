import { FaCartArrowDown, FaFacebook, FaHeart, FaInstagram, FaPinterest, FaRegUser, FaTwitter, FaYoutube } from 'react-icons/fa';
import logo from '../../assets/icons/logo.svg'
import SearchBar from '../small/SearchBar';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className="bg-primary px-5 py-2 font-poppins w-full">
            <section className='hidden md:flex justify-between py-2'>
                <div>
                    <h6 className='text-white text-sm'>Welcome to AliShop online eCommerce store.</h6>
                </div>
                <div className='flex items-center gap-3'>
                    <div>
                        <p className='text-white'>Follow us:</p>
                    </div>
                    <div className='flex gap-2 text-white'>
                        <FaFacebook />
                        <FaTwitter />
                        <FaPinterest />
                        <FaInstagram />
                        <FaYoutube />
                    </div>
                    <div><p>Eng</p></div>
                    <div><p>BDT</p></div>
                </div>
            </section>
            <section className='flex items-center gap-5 w-full py-3'>
                <div className='flex-1'>
                    <Link to='/'>
                    <img className='w-50' src={logo}/>
                    </Link>
                </div>
                <div className='bg-white flex-3 hidden sm:flex'>
                    <SearchBar />
                </div>
                <div className='flex gap-5 flex-1 justify-end text-white text-xl items-center'>
                    <FaCartArrowDown className='hover-icons'/>
                    <FaHeart/>
                    <FaRegUser/>
                </div>
            </section>
            <section>
                <div className='bg-white sm:hidden my-2'>
                    <SearchBar />
                </div>
            </section>
        </div>
    );
};

export default Header;