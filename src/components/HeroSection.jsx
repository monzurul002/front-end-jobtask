import checkBox from "../assets/Checkbox.png"
import logo2 from "../assets/frame3.png"
import google from "../assets/google.png"
import facebook from "../assets/facebook.png"
import apple from "../assets/apple.png"
const HeroSection = () => {
    return (
        <div className=" w-full px-0 md:px-5 py-10 md:py-16 ">
            <div className="grid grid-cols-1 md:grid-cols-2  ">
                {/* left part */}
                <div className="px-8 md:px-12">
                    <span className="bg-primary px-2 py-1  text-white rounded-3xl">Header</span>
                    <h1 className="text-4xl md:text-5xl font-extrabold mt-3">A small business <br /> is only as good <br /> as its tools. </h1>
                    <div className="py-2 w-11/12 text-xl  text-slate-500 font-semibold">
                        <p className="py-4 ">Small businesses are types of corporations, partnerships</p>
                        <div className="flex gap-2 ">
                            <img src={checkBox} className="" alt="" />
                            <p>Mauris pellentesque congue </p>
                        </div>
                        <div className="flex gap-2">
                            <img src={checkBox} alt="" />
                            <p>Suspendisse mollis tincidunt</p>
                        </div>
                        <div className="flex flex-row gap-2">
                            <img src={checkBox} alt="" />
                            <p>Praesent varius justo vfr hero</p>
                        </div>
                    </div>
                </div>
                {/* right part */}
                <div className="flex flex-col w-5/6 mx-auto md:mt-0 mt-7 justify-center items-center bg-white pb-8 px-3 rounded-2xl ">
                    <div>
                        <div className="flex flex-col  space-x-2 items-center text-center pb-4 ">
                            <img className="w-12 mb-8 mt-[-17px] " src={logo2} alt="" />
                            <h1 className="font-bold text-3xl">Join our community</h1>
                            <p className="text-xl text-slate-500 font-semibold">Start your free trial</p>
                        </div>

                        <form action="">
                            <label className="font-medium pb-1" htmlFor="email">Email</label><br />
                            <input className="border w-full rounded-lg py-2 px-3 " type="email" name="email" id="email" placeholder="Enter your email address" /> <br />
                            <input type="submit" className="text-white bg-primary w-full py-3 my-2 rounded-lg text-xl" value="Get Started" />
                        </form>
                    </div>
                    <div>
                        <div className="flex justify-center items-center my-4 gap-2">
                            <div className="border border-slate-200 w-1/2 h-[1px] "></div>
                            <span className="text-xl text-slate-500">OR</span>
                            <div className="border border-slate-200 w-1/2 h-[1px] "></div>
                        </div>

                        <div className="space-y-2 font-semibold text-xl">
                            <button className="flex justify-center items-center py-2 rounded-lg  gap-4 border border-slate-300 w-full">
                                <img src={google} alt="" />
                                <span>Sign in with Google</span>
                            </button>
                            <button className="flex justify-center items-center py-2 rounded-lg  gap-2 border border-slate-300 w-full">
                                <img src={facebook} alt="" />
                                <span>Sign in with Facebook</span>
                            </button>
                            <button className="flex justify-center items-center py-2 rounded-lg gap-2 border border-slate-300 w-full">
                                <img src={apple} alt="" />
                                <span>Sign in with Apple</span>
                            </button>
                            <p className="text-xl text-slate-400 font-medium">Already have an account? <span className="text-primary underline cursor-pointer">Sign in</span></p>
                        </div>

                    </div>

                </div>
            </div>
        </div>
    );
};

export default HeroSection;


