import React from 'react'
import { useState } from 'react'

const PicAPI = () => {
        const [image, setImage] = useState({
            download_url: 'https://picsum.photos/200/300',
            author: 'Default_Author',
        });
        const [loading, setLoading] = useState(false);
        const [animate, setAnimate] = useState(false);

        const fetchImages = async () => {
            setLoading(true);
            try{
                const response = await fetch('https://picsum.photos/v2/list');
                const data = await response.json();

                // getting random index..
                const randomIndex = Math.floor(Math.random() * data.length);
                setImage(data[randomIndex]);

                // setting animation..
                setTimeout(() => {
                    setAnimate(false);
                }, 500);

            }catch(error){
                console.log("Error Fetching Images: ", error);
            }finally{
                setLoading(false);
            }
        };

    return (
        <>
            <div className='bg-gray-400 w-4/6 m-auto mt-5 mb-5 max-h-3/5 flex flex-col justify-center items-center gap-2 rounded-lg py-5'>
                {/* Random Images */}
                {image && (
                    <img src={image.download_url} alt={`Image by ${image.author}`}
                    className={`border-2 border-gray-500 w-48 h-48 object-cover rounded transition-opacity duration-500 ${
                    animate ? 'opacity-0' : 'opacity-100'
                    }`}
                    />
                )}

                {/* Button */}
                <button className='bg-teal-500 font-bold p-2 rounded-lg transition-all text-lg active:scale-110 active:rotate-12'
                onClick={fetchImages}>
                Get Image
                </button>
                {/* Loading Indicator */}
                {loading && <p>Loading..</p>}
            </div>
        </>
    )
}

export default PicAPI