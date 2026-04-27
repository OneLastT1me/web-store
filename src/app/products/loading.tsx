import ProductCardSkeleton from "@/src/components/layout/ProductCardSkeleton"


const loading = () => {
    return(
        <div className="grid xl:mx-[120px] lg:mx-[40px] md:mx-[20px] sm:mx-[10px] mx-[120px] mt-[26px] grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
            <ProductCardSkeleton />
            <ProductCardSkeleton />
            <ProductCardSkeleton />
            <ProductCardSkeleton />
        </div>
    )
}

export default loading