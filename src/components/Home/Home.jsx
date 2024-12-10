import { Link } from "react-router-dom";
import ItemList from "../ItemList/ItemList";


export default function HomePage() {
    const imgBanner = './new_bass_comp.jpg';
    return (
        <div>
            <div
                className="h-[700px] w-full bg-cover bg-center "
                style={{ backgroundImage: `url(${imgBanner})` }}
            >
                <div className="container mx-auto max-w-[1170px] flex flex-col h-[700px] justify-center">
                    <h2 className="text-[#000000] font-bold text-[100px] leading-[80px] capitalize">
                        featured 
                    </h2>
                    <h2 className="text-[#ff3131] font-bold text-[100px] leading-[80px] capitalize">Basses</h2>
                    <Link to="/products" className="bg-amber-500 hover:bg-amber-600 px-[50px] py-[5px] text-[18px] uppercase leading-[46px] flex w-[210px] text-center text-[#ffffff] mt-[30px]">Compra Ahora</Link>
                
                </div>
            </div>
            <div className="container mx-auto max-w-[1000px] my-[80px] py-[100px]">
                <ItemList />
    
            </div>
        </div>
    );
}