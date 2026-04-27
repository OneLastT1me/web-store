
const Loading = () => {
    return(
        <div className="max-w-[300px] min-w-[240px] w-[100%] h-[332px]  border rounded-xl flex flex-col mx-auto mb-[20px]">
            <div className="flex-[7] w-100% bg-gray-200">
                <p className="w-full text-center pt-[20%]">Loading...</p>
            </div>
            <div className="flex-[4] px-[18px] py-[16px] flex flex-col justify-between">
                <div className="flex justify-between">
                    <h2>Title...</h2>
                    <h2>Price...</h2>
                </div>
                <button className="bg-gray-200 w-full h-[36px] rounded-xl">buy</button>
            </div>
        </div>
    )
}

export default Loading