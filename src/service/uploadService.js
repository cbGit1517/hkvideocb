import request from '../utils/request';

// 获取链接
const sendUploadInfo = (file, name,description,userId,type) => {
    return request.post('video/addvideo' , { file, name, type, description ,userId} );
};

export default {
    sendUploadInfo,
};
