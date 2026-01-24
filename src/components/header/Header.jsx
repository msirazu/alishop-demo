import { FaCartArrowDown, FaFacebook, FaHeart, FaInstagram, FaPinterest, FaRegUser, FaTwitter, FaYoutube } from 'react-icons/fa';
import logo from '../../assets/icons/logo.svg'
import SearchBar from '../small/SearchBar';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className="bg-primary py-2 font-poppins w-full">
            <section className='hidden lg:flex justify-between py-2 px-5'>
                <div>
                    <h6 className='text-white text-sm'>Welcome to AliShop online eCommerce store.</h6>
                </div>
                <div className='flex items-center gap-3'>
                    <div>
                        <p className='text-white'>Follow us:</p>
                    </div>
                    <div className='flex gap-1 text-white'>
                        <FaFacebook className='hover-icons-2'/>
                        <FaTwitter className='hover-icons-2'/>
                        <FaPinterest className='hover-icons-2'/>
                        <FaInstagram className='hover-icons-2'/>
                        <FaYoutube className='hover-icons-2'/>
                    </div>
                    <div><p>Eng</p></div>
                    <div><p>BDT</p></div>
                </div>
            </section>
            <hr className='border-gray-500 hidden lg:block mb-1 mt-1'/>
            <section className='flex items-center gap-5 w-full px-5 py-3'>
                <div className='flex-1'>
                    <Link to='/'>
                    <img className='w-50' src={logo}/>
                    </Link>
                </div>
                <div className='bg-white flex-3 hidden sm:flex'>
                    <SearchBar />
                </div>
                <div className='flex gap-2 flex-1 justify-end text-white text-xl items-center'>
                    <Link to='/checkout'>
                    <FaCartArrowDown className='hover-icons'/>
                    </Link>
                    <FaHeart className='hover-icons'/>
                    <FaRegUser className='hover-icons'/>
                </div>
            </section>
            <section>
                <div className='bg-white sm:hidden my-2 mx-5'>
                    <SearchBar />
                </div>
            </section>
        </div>
    );
};

export default Header;