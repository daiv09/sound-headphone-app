import { useRouter } from "next/navigation";
import { ChevronRight } from "lucide-react";

export const Footer = () => {
    const router = useRouter()
    const accessoriesNavigation=()=>{
        router.push("/pages/accessories")
    }
    return (
        <footer className="bg-black py-20 border-t border-zinc-900 text-sm">
            <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-12 text-zinc-500">
                <div>
                    <h5 className="text-white font-bold mb-6">Product</h5>
                    <ul className="space-y-4">
                        <li className="hover:text-blue-400 cursor-pointer transition-colors">
                            SOUND Pro X
                        </li>
                        <li className="hover:text-blue-400 cursor-pointer transition-colors">
                            SOUND Mini
                        </li>
                        <li className="hover:text-blue-400 cursor-pointer transition-colors" onClick={accessoriesNavigation}>
                            Accessories
                        </li>
                    </ul>
                </div>
                <div>
                    <h5 className="text-white font-bold mb-6">Support</h5>
                    <ul className="space-y-4">
                        <li className="hover:text-blue-400 cursor-pointer transition-colors">
                            Downloads
                        </li>
                        <li className="hover:text-blue-400 cursor-pointer transition-colors">
                            Help Center
                        </li>
                        <li className="hover:text-blue-400 cursor-pointer transition-colors">
                            Contact Us
                        </li>
                    </ul>
                </div>

                <div>
                    <h5 className="text-white font-bold mb-6">Company</h5>

                    <ul className="space-y-4">
                        <li className="hover:text-blue-400 cursor-pointer transition-colors">
                            About SOUND
                        </li>

                        <li className="hover:text-blue-400 cursor-pointer transition-colors">
                            Careers
                        </li>

                        <li className="hover:text-blue-400 cursor-pointer transition-colors">
                            Press
                        </li>
                    </ul>
                </div>

                <div>
                    <h5 className="text-white font-bold mb-6">Subscribe</h5>

                    <p className="mb-4">Get the latest news and updates.</p>

                    <div className="flex border border-zinc-800 rounded-full overflow-hidden p-1">
                        <input
                            type="email"
                            placeholder="Email address"
                            className="bg-transparent px-4 py-2 w-full focus:outline-none text-white"
                        />

                        <button className="bg-zinc-800 hover:bg-zinc-700 text-white px-4 py-2 rounded-full transition-colors">
                            <ChevronRight size={16} />
                        </button>
                    </div>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-6 mt-20 pt-8 border-t border-zinc-900 flex justify-between items-center">
                <div>© 2025 SOUND Audio. All rights reserved.</div>

                <div className="flex gap-6">
                    <span className="cursor-pointer hover:text-white transition-colors">
                        Privacy Policy
                    </span>

                    <span className="cursor-pointer hover:text-white transition-colors">
                        Terms of Use
                    </span>
                </div>
            </div>
        </footer>
    );
};