import axios from 'axios';

import URL from '@/constant/url';

// 获取文章详情 
const API = {
    getArticle(params) {
        console.log('入参', params);
        return axios.post(URL.articleDetail, params);
    },
}

export default API;