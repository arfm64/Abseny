'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import { signIn } from 'next-auth/react';

export default function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const router = useRouter();

    const handleLogin = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        setError(null);

        // Attempt to sign in
        const result = await signIn('credentials', {
            redirect: false, // We don't want to redirect immediately
            email,
            password,
        });

        if (result?.error) {
            setError('Invalid email or password.');
            router.push('/login'); // Pastikan redirect mengarah ke login jika terjadi error
        } else {
            router.push('/'); // Redirect ke dashboard setelah login berhasil
        }


        setLoading(false);
    };


    return (
        <div className="flex w-screen h-screen">
            <div className="w-5/12 h-full sm:flex hidden items-center justify-center relative">
                <Image
                    src="/login.jpg"
                    alt="Login Image"
                    layout="fill"
                    objectFit="cover"
                    priority
                    className="p-3 rounded-[24px]"
                />
            </div>
            <div className="w-full sm:w-7/12 h-full justify-center">
                <div className="flex flex-col justify-center h-screen sm:px-20 p-10">
                    <div className="w-full flex">
                        <Image
                            src="/abseny_logo.png"
                            alt="Login Image"
                            width={150}
                            height={50}
                            priority
                        />
                    </div>
                    <h5 className="mt-4 sm:text-3xl text-2xl font-bold font-roboto text-black">Log in to your Account</h5>
                    <label htmlFor="subline" className="font-roboto font-extralight">Welcome back! Select method to log in:</label>
                    <div className="flex sm:mt-10 mt-5">
                        <button className="flex items-center justify-center w-full rounded-md bg-white border-2 border-gray-300 hover:border-gray-500 sm:me-2 py-2">
                            <Image src="/Google.png" alt="Google Logo" width={24} height={24} priority />
                            <span className="sm:ml-2 ml-1" style={{ fontSize: "12px" }}>Log in with Google</span>
                        </button>
                        <button className="flex items-center justify-center w-full rounded-md bg-white border-2 border-gray-300 hover:border-gray-500 sm:ms-2 py-2">
                            <Image src="/Facebook.svg" alt="Facebook Logo" width={24} height={24} priority />
                            <span className="sm:ml-2 ml-1" style={{ fontSize: "12px" }}>Log in with Facebook</span>
                        </button>
                    </div>
                    <div className="flex items-center my-4 before:flex-1 after:flex-1 before:border-t after:border-t border-gray-300">
                        <p className="text-center text-sm font-light text-gray-500 mx-4">or continue with email</p>
                    </div>
                    <form onSubmit={handleLogin}>
                        <div className="flex flex-col space-y-4">
                            <div className="relative">
                                <input
                                    id="email"
                                    className="block rounded-t-lg px-2.5 pb-2.5 pt-5 w-full text-sm text-gray-900 bg-gray-50 dark:bg-gray-700 border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                                    placeholder=" "
                                    type="email"
                                    required
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                                <label htmlFor="email" className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] start-2.5 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto">Email</label>
                            </div>
                            <div className="relative">
                                <input
                                    id="password"
                                    className="block rounded-t-lg px-2.5 pb-2.5 pt-5 w-full text-sm text-gray-900 bg-gray-50 dark:bg-gray-700 border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                                    placeholder=" "
                                    type="password"
                                    required
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                />
                                <label htmlFor="password" className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] start-2.5 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto">Password</label>
                            </div>
                            {error && <p className="text-red-500 text-sm">{error}</p>}
                            <div className="forgot-password">
                                <a href="#" className="text-sm text-blue-600 dark:text-blue-500 text-right block w-full hover:no-underline hover:text-blue-900 sm:mb-5">Forgot password?</a>
                            </div>
                            <button
                                type="submit"
                                className="w-full py-2 sm:mt-5 mt-0 text-white bg-blue-500 rounded-md hover:bg-blue-600"
                                disabled={loading}
                            >
                                {loading ? 'Logging in...' : 'Log In'}
                            </button>
                        </div>
                    </form>
                    <p className="flex items-center justify-center w-full text-center mt- text-sm">
                        Don’t have an account?<a href="#" className="ml-1 text-blue-600 dark:text-blue-500 text-sm"> Create an account</a>
                    </p>
                </div>
            </div>
        </div>
    );
}
