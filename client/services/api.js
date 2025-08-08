const API_KEY = "iiws7C3Z4dJUYgp9NycuFmxlK0HP6oLEIsKEQqIWJDQQNAVMK9ZTVcTa"
const BASE_URL = "https://api.pexels.com/v1"

export const getImagesAndVideos = async () => {
    try{
        const response = await fetch(`${BASE_URL}/curated?per_page=25`, {
            headers: {
                Authorization: API_KEY,
            },
        });

        const data = await response.json();
        return data.photos;

    } catch (error) {
        console.error("Error fetching curated images:",error);
        return [];
    }
};

export const searchImagesAndVideos = async(query) => {
    try {
        const response = await fetch(`${BASE_URL}/search?query=${query}&per_page`, {
            headers: {
                Authorization: API_KEY,
            },
        });

        const data = await response.json();
        return data.photos;

    } catch (error) {
        console.error("Error searching Pexels: ",error);
        return [];
    }
};