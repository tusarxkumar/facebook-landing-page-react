
import './App.css'

function App() {
    return (
        <div className='h-screen bg-gray-100 flex justify-center items-center gap-16'>
            <div className='flex flex-col items-start w-[400px]'>
                <img className='w-80 h-auto' src="https://static.xx.fbcdn.net/rsrc.php/y1/r/4lCu2zih0ca.svg" alt="" />
                <p className='ml-6 text-2xl w-full'>Facebook helps you connect and share with the people in your life.</p>
            </div>
            <div>
                <div className='bg-white w-96 p-8 rounded-2xl shadow-2xl'>
                    <form className='flex flex-col gap-3' action="">

                        <input className='w-full border-2 px-3 py-3 border-gray-200 rounded focus:outline-blue-500' type="text" placeholder='Email address or Phone number' />

                        <input className='w-full p-2 border-2 border-gray-200 rounded focus:outline-blue-500' type="text" placeholder='Password' />
                        <button className='bg-blue-600 hover:bg-blue-500 px-2 py-2 rounded text-white font-bold'>Log in</button>
                        <a className='text-sm text-center text-blue-500'>Forgetten password?</a>
                        <hr className='border-gray-300' />
                        <button className=' bg-[#42b62b] py-3 px-2 w-60 mx-auto rounded text-white font-bold hover:bg-[#36a420]'>Create new account</button>
                    </form>
                </div>
                <p className='text-sm mt-6 text-center'><span className='text-black font-bold'>Create a Page</span> for a celebrity, brand or business.</p>
            </div>
        </div>
    )
}

export default App
