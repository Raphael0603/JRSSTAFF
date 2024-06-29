import LogoUSTP from '../assets/images/logoUSTP.png'
import supabase from '../../supabase/config'
import { useNavigate } from 'react-router-dom'

export default function LogIn() {
    const navigate = useNavigate()
    const handleClickSignUp = async (e) => {
        e.preventDefault({

        })
        const {data, error} = await supabase.auth.signInWithPassword({
            email: e.target.email.value,
            password: e.target.password.value,

        })
        if(error){
            console.log(error)
        }else if(!error){
            navigate('/dashboard')
        }
    }

    return (
        <div className="flex justify-center items-center min-h-screen min-w-screen bg-background-image bg-cover">
            <form method="POST"  onSubmit={handleClickSignUp} className="flex flex-col items-center justify-around h-96 w-80 p-6 rounded-sm bg-white">
                <div className="flex flex-col items-center">
                    <img src={LogoUSTP} className="h-12 w-12" />
                </div>

                <div className="flex h-8 border border-gray-400 rounded-sm">
                    {/* <img src={Person} className="p-1 w-10" /> */}
                    <input
                        className="border-l border-gray-400 p-2 outline-none"
                        placeholder="Username"
                        name="email"
                        type="email"
                    />
                </div>

                <div className="flex h-8 border border-gray-400 rounded-sm">
                    {/* <img src={Password} className="p-1 w-10" /> */}
                    <input
                        className="border-l border-gray-400 p-2 outline-none"
                        placeholder="Password"
                        name="password"
                        type="password"
                    />
                </div>

                <a href="" className="text-xs text-center underline w-52">
                    By logging in, I agree to the Terms of Conditions and Privacy Policy
                    of JRMS.
                </a>
                <button
                    className="w-60 p-1 font-semibold bg-yellow-500 hover:bg-yellow-600 transition duration-115 hover:ease-in"
                    type="submit"
                >
                    LOG IN
                </button>

                <a href="" className="text-xs text-center underline">
                    Forgot Password
                </a>
                {/* <span className="text-red-500 font-semibold">{showError}</span> */}
            </form>

        </div>
    )
}
