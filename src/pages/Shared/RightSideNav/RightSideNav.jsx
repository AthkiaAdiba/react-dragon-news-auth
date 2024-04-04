import { FaGoogle, FaGithub, FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";
import qZone1 from '../../../assets/qZone1.png';
import qZone2 from '../../../assets/qZone2.png';
import qZone3 from '../../../assets/qZone3.png';

const RightSideNav = () => {
    return (
        <div>
            <div className="p-4 space-y-3 mb-6">
                <h2 className="text-3xl">Login With</h2>
                <button className="btn btn-outline w-full">
                    <FaGoogle></FaGoogle>
                    Login with Google
                </button>
                <button className="btn btn-outline w-full">
                    <FaGithub></FaGithub>
                    Login with Github
                </button>
            </div>
            <div className="p-4 space-y-3 mb-6">
                <h2 className="text-3xl">Find Us On</h2>
                <div className="">
                    <a className=" border-2 p-2 rounded-t-lg flex items-center gap-2 text-lg" href="">
                        <FaFacebookF></FaFacebookF>
                        Facebook
                    </a>
                    <a className="border-x-2 p-2 flex items-center gap-2 text-lg" href="">
                        <FaTwitter></FaTwitter>
                        Twitter
                    </a>
                    <a className=" border-2 p-2 rounded-b-lg flex items-center gap-2 text-lg" href="">
                        <FaInstagram></FaInstagram>
                        Instagram
                    </a>
                </div>
            </div>
            {/* Q zone */}
            <div className="p-4 space-y-3 mb-6">
                <h2 className="text-3xl">Q Zone</h2>
                <div className="bg-slate-100 p-2">
                    <img src={qZone1} alt="" />
                    <img src={qZone2} alt="" />
                    <img src={qZone3} alt="" />
                </div>
            </div>
        </div>
    );
};

export default RightSideNav;