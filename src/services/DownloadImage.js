import { saveAs } from 'file-saver';

const downloadImage = async (id, photo) => {
    saveAs(photo, `download-${id}.jpg`)
}

export default downloadImage;