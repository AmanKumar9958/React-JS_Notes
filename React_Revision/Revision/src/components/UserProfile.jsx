import React from 'react'

const UserProfile = (props) => {
    return (
        <>
            <div className="bg-gray-800 w-1/4 sm:w-3/6 lg:w-1/4 mx-auto mt-10 rounded-3xl shadow-xl p-8 flex flex-col items-center gap-6">
                {/* Profile Image */}
                <div className="relative">
                    <img 
                    src={props.photo}
                    alt="Profile_Picture" 
                    className="rounded-full w-40 h-40 border-4 border-gray-700 shadow-lg"
                    />
                    <div className="absolute top-0 left-0 bg-green-500 w-4 h-4 rounded-full border-2 border-gray-800 transform translate-x-[-50%] translate-y-[-50%]"></div>
                </div>

                {/* Profile Info */}
                <div className="text-center">
                    <h2 className="text-white font-extrabold text-2xl" >{props.name}</h2>
                    <p className="text-gray-400 font-medium">{props.profession}</p>
                </div>

                {/* Additional Details */}
                <div className="bg-gray-700 w-40 rounded-xl p-4 text-white text-center">
                    <p><span className="font-semibold">Age:</span> {props.age}</p>
                    <p><span className="font-semibold">State:</span> {props.state}</p>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-4">
                    <button className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-lg shadow">
                    Message
                    </button>
                    <button className="bg-gray-600 hover:bg-gray-700 text-white px-6 py-2 rounded-lg shadow">
                    View Profile
                    </button>
                </div>
            </div>
        </>
    )
}

export default UserProfile