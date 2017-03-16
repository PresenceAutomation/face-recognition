import RNFetchBlob from 'react-native-fetch-blob';

const upload = (url, data) => (
  RNFetchBlob.fetch('POST', url, {
    'Content-Type': 'multipart/form-data'
  }, data)
);
module.exports = upload;
