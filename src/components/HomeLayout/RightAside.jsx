
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';
import { FcGoogle } from 'react-icons/fc';
import { GrGithub } from 'react-icons/gr';
import swimming from '../../assets/swimming.png';
import playGround from '../../assets/playground.png';
import classimg from '../../assets/class.png';
import { AuthContext } from '../../provider/AuthProvider';
import { Link } from 'react-router';
import { GithubAuthProvider, GoogleAuthProvider } from 'firebase/auth';
import { use } from 'react';


const RightAside = () => {
    const { user, LoginWithGoogle, LoginWithGithub } = use(AuthContext);
    const provider = new GoogleAuthProvider();
    const providerGithub = new GithubAuthProvider();
    const handleGoogleLogin = () => {
        LoginWithGoogle(provider).then((result) => {
            console.log(result);
        }).catch((error) => {
            console.log(error)
        })
    }
    const handleGithubLogin = () => {
        LoginWithGithub(providerGithub).then(result => {
            console.log(result)
        })
    }
    return (
        <div>
            {
                user ? <p></p> : <div>
                    <h2 className='text-xl font-bold mb-4'>Login With </h2>
                    <div className='grid grid-cols-1 space-y-1.5'>
                        <button onClick={handleGoogleLogin} className='btn bg-white border border-gray-800'><FcGoogle /> Google </button>
                        <button onClick={handleGithubLogin} className='btn bg-white border border-blue-500'><GrGithub /> Github</button>
                    </div>
                </div>
            }
            <h2 className='font-bold mt-5 mb-3.5'> Find Us</h2>
            <div className=''>
                <Link target="_blank" to={'https://web.facebook.com/profile.php?id=61551265644671'}> <button className='btn w-full justify-start bg-white border border-gray-800 '>  <FaFacebook className='text-blue-500 text-lg' /> Facebook </button> </Link>
                <Link> <button className='btn w-full justify-start bg-white border border-gray-800'>   <FaInstagram className='text-lg text-pink-800' /> Instagram</button></Link>
                <Link><button className='btn w-full justify-start bg-white border border-gray-800'>   <FaTwitter className='text-lg text-blue-600' />twitter </button></Link>
            </div>
            <div className='bg-base-200  py-4 px-4 my-6'>
                <p className='font-bold text-xl'>Q-Zoon</p>
                <img className='w-full h-auto rounded-lg' src={swimming} alt="" />
                <img className='w-full h-auto rounded-lg' src={classimg} alt="" />
                <img className='w-full h-auto rounded-lg' src={playGround} alt="" />
            </div>
        </div>
    );
};

export default RightAside;