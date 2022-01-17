import React from 'react';

function TodayMenuCreator(props) {
    return (
        <div className="h-full w-2/3 mr-2 flex flex-col items-center">
            <h3 className="text-3xl font-semibold text-center p-4">Hôm nay ăn gì 🤤</h3>
            <div className="flex-grow w-2/3 bg-pink-100 rounded-2xl pt-6 pb-4 px-4 flex flex-col">
                <span className="text-gray-600">
                    Chọn các món ăn trong danh sách và nhấn
                    <span className="text-pink-600 font-semibold mx-1" >Chốt Kèo</span>
                    để tạo menu cho hôm nay nè.
                </span>
                <div className="flex-grow bg-pink-200 rounded-2xl my-2">
                {/* render list here */}
                </div>
                <div className='flex justify-end'>
                    <button className="py-2 px-4 rounded-md bg-green-600 font-semibold text-white ">Chốt Kèo</button>
                </div>
            </div>
        </div>
    );
}

export default TodayMenuCreator;