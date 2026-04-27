'use client'
import { ShoppingCart, Star } from 'lucide-react';
import Image from 'next/image';

type Props = {
    id: number
    name: string
    price?: string
    image?: string
    rating: number
    countUsersVoting: number
    available: boolean
}

const Card = ({id, name, price, image, rating, countUsersVoting, available}:Props) =>{
    return(
        <div className="max-w-[300px] min-w-[240px] w-[100%] h-[352px]  border rounded-xl flex flex-col mx-auto mb-[20px] relative cursor-pointer ">
            <div className="flex-[7] w-100% bg-gray-200 relative">
                {image && <Image src={image} alt={name} fill/>}
            </div>
            <div className="flex-[4] px-[18px] py-[16px] flex flex-col justify-between gap-[10px]">
                <div className="flex justify-between">
                    <h2 className='font-arial'>{name}</h2>
                    <h2 className="text-blue-800 font-arial">${price}</h2>
                </div>
                <div className='flex items-center'>                    
                    {Array.from({length: 5}).map((_, i)=>(
                        <>
                            <Star
                                key={i}
                                className={i < rating ? "text-yellow-400 fill-yellow-400" : "text-gray-300 fill-gray-300"
                                }
                            />
                        </>
                    ))}
                    <p className='text-sm'>({countUsersVoting})</p>
                </div>
                <button className="bg-blue-800 text-white w-full h-[36px] flex items-center justify-center rounded-xl gap-3 cursor-pointer"><ShoppingCart />Add to Cart</button>
            </div>
        </div>
    )
}
export default Card

