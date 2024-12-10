import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";

export default function FooterComponent(){
    return(
        <footer className="bg-[#171e27] py-[60px]">
        <div className="container mx-auto flex flex-col items-center">
            <p className="text-[#ffffff] text-center text-sm mb-2">
                &copy; 2024 Todos los derechos reservados.
            </p>
            <div className="flex space-x-4 mt-4">
                <a href="#" className="text-[#ffffff] hover:underline"><FaFacebookF /></a>
                <a href="#" className="text-[#ffffff] hover:underline"><FaTwitter /></a>
                <a href="#" className="text-[#ffffff] hover:underline"><FaInstagram /></a>
            </div>
        </div>
    </footer>
    );
}