import RNFetchBlob from 'react-native-fetch-blob';

const url = 'https://groupkhoapham.herokuapp.com/upload';
const upload = (data) => (
  RNFetchBlob.fetch('POST', url, {
    'Content-Type': 'multipart/form-data'
  }, data)
);
module.exports = upload;
