import React from 'react'

const Footer = () => {
    return (
        <footer className="bg-gray-900 text-white px-6 py-8">
            <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between">
                <div className="md:w-1/3 mb-6 md:mb-0">
                    <h2 className="text-2xl font-bold mb-4">About Us</h2>
                    <p className="text-gray-400">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                </div>
                <div className="md:w-1/3 mb-6 md:mb-0">
                    <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
                    <p className="text-gray-400">1234 Main St.</p>
                    <p className="text-gray-400">Suite 123</p>
                    <p className="text-gray-400">New York, NY 10001</p>
                </div>
                <div className="md:w-1/3">
                    <h2 className="text-2xl font-bold mb-4">Follow Us</h2>
                    <div className="flex">
                        <a href="#" className="mr-4"><i className="fab fa-facebook fa-2x"></i></a>
                        <a href="#" className="mr-4"><i className="fab fa-twitter fa-2x"></i></a>
                        <a href="#" className="mr-4"><i className="fab fa-linkedin fa-2x"></i></a>
                        <a href="#" className="mr-4"><i className="fab fa-github fa-2x"></i></a>
                    </div>
                </div>
            </div>
            <div className="mt-8 border-t border-gray-700 pt-6 text-center">
                <p className="text-gray-400">&copy; 2022 My Company. All Rights Reserved.</p>
            </div>
        </footer>

    )
}

export default Footer