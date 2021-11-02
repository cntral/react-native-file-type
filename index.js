import fileType from "file-type";

function FileType(path) {
  return new Promise((resolve, reject) => {
    fileType.fromFile(path)
      .then(type => resolve(type))
      .catch(reason => {
        reject(reason);
      });
  });
}

export default FileType;
