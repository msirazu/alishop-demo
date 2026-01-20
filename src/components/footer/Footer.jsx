import { Link } from 'react-router-dom';
import logo from '../../assets/icons/logo.svg'
import { FaApple, FaPlay } from 'react-icons/fa';

const Footer = () => {
    const date = new Date();
    const currentYear = date.getFullYear();
    return (
        <div>
        <section className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 px-5 py-10 max-w-full gap-5">
           <div className='text-base-500 space-y-3'>
                <img className='w-40 border border-white p-2' src={logo}/>
                <p>Customer Supports:</p>
                <p className='text-xl font-bold text-white'>01303233513</p>
                <p>SM Mention, Housing Estate Area, West Akur Takur Para, Tangail, Bangladesh</p>
                <p className='text-white'>info@alishop.com</p>
           </div>
           <div className='space-y-3'>
                <h6 className='font-bold uppercase text-xl text-white'>Top Category</h6>
                <div className='flex flex-col gap-2 text-base-500'>
                <Link to='/'>Religious & Traditional Items</Link>
                <Link to='/'>Lights</Link>
                <Link to='/'>Home Appliances</Link>
                <Link to='/'>Gadgets</Link>
                <Link to='/'>Toys & Games</Link>
                <Link to='/'>Baby Products</Link>
                <Link to='/'>Browse All Product</Link>
                </div>
           </div>
           <div className='space-y-3'>
                <h6 className='font-bold uppercase text-xl text-white'>Quick Links</h6>
                <div className='flex flex-col gap-2 text-base-500'>
                <Link to='/'>Shop Product</Link>
                <Link to='/'>Shopping Cart</Link>
                <Link to='/'>Wishlist</Link>
                <Link to='/'>Compare</Link>
                <Link to='/'>Track Order</Link>
                <Link to='/'>Customer Help</Link>
                <Link to='/'>About Us</Link>
                </div>
           </div>
           <div>
                <h6 className='text-white font-bold uppercase text-xl'>Download App</h6>
                <div className='flex flex-col items-center gap-3 p-3 rounded-sm mt-3'>
                    <Link className='bg-footer-400 flex items-center gap-3 p-3 rounded-sm w-50' to='https://play.google.com/store' target='_blank'><FaPlay className='text-2xl'/>
                    <div className='flex flex-col'>
                        <p className='text-sm text-base-500'>Get it now</p>
                        <p className='font-bold text-xl text-white'>Google Play</p>
                    </div></Link>
                    <Link className='bg-footer-400 flex items-center gap-3 p-3 rounded-sm w-50' to='https://www.apple.com/app-store/' target='_blank'><FaApple className='text-3xl'/>
                    <div className='flex flex-col'>
                        <p className='text-sm text-base-500'>Get it now</p>
                        <p className='font-bold text-xl text-white'>App Store</p>
                    </div></Link>
                </div>
           </div>
           <div>
                <h6 className='text-white font-bold uppercase text-xl'>Popular Tag</h6>
                <div className='grid grid-cols-2 gap-3 mt-5'>
                    <p className='text-base-500 border py-2 px-5 rounded-lg hover:border hover:border-white hover:cursor-pointer'>Bank</p>
                    <p className='text-base-500 border py-2 px-5 rounded-lg hover:border hover:border-white hover:cursor-pointer'>Light</p>
                    <p className='text-base-500 border py-2 px-5 rounded-lg hover:border hover:border-white hover:cursor-pointer'>Power Bank</p>
                    <p className='text-base-500 border py-2 px-5 rounded-lg hover:border hover:border-white hover:cursor-pointer'>LED</p>
                    <p className='text-base-500 border py-2 px-5 rounded-lg hover:border hover:border-white hover:cursor-pointer'>Quran</p>
                    <p className='text-base-500 border py-2 px-5 rounded-lg hover:border hover:border-white hover:cursor-pointer'>Light LED</p>
                    <p className='text-base-500 border py-2 px-5 rounded-lg hover:border hover:border-white hover:cursor-pointer'>Stand</p>
                    <p className='text-base-500 border py-2 px-5 rounded-lg hover:border hover:border-white hover:cursor-pointer'>Fan</p>
                </div>
           </div>
        </section>
        <section className='text-center border-t border-gray-600 p-5'>
            <p className='text-base-500'>AliShop eCommerce © {currentYear}. Design by <span className='font-bold hover:text-blue-300 text-white'><Link target='_blank' to='https://digitalsebait.com/'>Digital Seba</Link></span></p>
        </section>
        </div>
    );
};

export default Footer;