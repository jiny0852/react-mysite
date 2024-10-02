// src/api/youtube.js
import axios from 'axios';

const API_KEY = 'AIzaSyDNXcwltsriJuhppt3hqJGKCmhJvK4Nlqs';//'YOUR_API_KEY'; // 여기에 본인의 API 키 입력
const BASE_URL = 'https://www.googleapis.com/youtube/v3/search';

export const fetchMusicVideos = async (query) => {
    const response = await axios.get(BASE_URL, {
        params: {
            part: 'snippet',
            q: query,
            type: 'video',
            videoCategoryId: '10', // 음악 카테고리 ID
            key: API_KEY,
        },
    });

    console.log('++++++++++유튭js+++++++++');
    console.log(response.data.items);
    console.log('++++++++++///유튭js///+++++++++');



    return response.data.items;
};
