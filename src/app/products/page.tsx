
import Card from "./card"



const ProductsPage = () => {
    return(
         <div className="grid xl:mx-[120px] lg:mx-[40px] md:mx-[20px] sm:mx-[10px] mx-[120px] mt-[26px] grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
            <Card 
                id={1} 
                name={"Wireless Bluetooth Headphones"} 
                price={"22,99"} 
                image={"https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&h=300&fit=crop"} 
                rating={4} 
                countUsersVoting={323}
                available={false} />

        </div>
    )
}

export default ProductsPage

// {
//     id: 1,
//     name: 'Wireless Bluetooth Headphones',
//     price: '22,99',
//     image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&h=300&fit=crop'
//     rating: 4,
//     countUsersVoting: 323,
//     Available: true,

// }