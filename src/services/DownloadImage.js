import fileSaver from 'file-saver';

const downloadImage = async (id, photo) => {
    fileSaver.saveAs(photo, `download-${id}.jpg`)
}

export default downloadImage;