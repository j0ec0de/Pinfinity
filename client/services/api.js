// import meta

const API_KEY = import.meta.env.VITE_PEXELS_API_KEY;
const BASE_URL = "https://api.pexels.com/v1" // changed to use proxy

export const getImagesAndVideos = async () => {
    try{
        const response = await fetch(`${BASE_URL}/curated?per_page=25`, {
            headers: {
                Authorization: `Bearer ${API_KEY}`,
            },
        });

        if(!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        return data.photos;

    } catch (error) {
        console.error("Error fetching curated images:",error);
        return [];
    }
};

export const searchImagesAndVideos = async(query) => {
    try {
        const response = await fetch(`${BASE_URL}/search?query=${query}&per_page=25`, {
            headers: {
                Authorization: `Bearer ${API_KEY}`,
            },
        });

        if(!response.ok) {
            throw new Error(`HTTPS error! status: ${response.status}`);
        }

        const data = await response.json();
        return data.photos;

    } catch (error) {
        console.error("Error searching Pexels: ",error);
        return [];
    }
};