import React from 'react'

const Login = () => {
    return (
        <div class ="flex h-screen w-screen items-center justify-center">
            <div class="flex flex-col items-center justify-center border-">
                <form class="flex flex-col items-center justify-center">
                    <input type="text" placeholder="Username" class="border border-gray-400 rounded-md px-4 py-2 mb-4" />
                    <input type="password" placeholder="Password" class="border border-gray-400 rounded-md px-4 py-2 mb-4" />
                    <button type="submit" class="bg-blue-500 text-white px-4 py-2 rounded-md">Login</button>
                </form>
            </div>
        </div>
    )
}

export default Login