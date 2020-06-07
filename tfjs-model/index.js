const tf = require('@tensorflow/tfjs-node');

function b64ToImageData(image) {
    const image_size = 224;
    // Image comes in as Base64 String

    // https://github.com/auchenberg/node-canvas-base64/blob/master/index.js
    // https://www.npmjs.com/package/canvas#imagesrc
    const Canvas = require('canvas');
    const canvas = new Canvas.Canvas(image_size);
    const ctx = canvas.getContext('2d');
    const { Image, createImageData } = require('canvas');
    const img = new Image();
    img.onload = () => ctx.drawImage(img, 0, 0);
    img.onerror = (err) => {
        throw err;
    };
    img.src = image;

    canvas.height = image_size;
    canvas.width = image_size;
    img.height = image_size;
    img.width = image_size;

    ctx.clearRect(0, 0, image_size, image_size);
    ctx.drawImage(img, 0, 0);

    // https://medium.com/@sretks/search-3d-models-by-using-tensorflow-js-and-heymesh-ebc528ae9b7d

    const byteArray = tf.browser.fromPixels(canvas).toFloat();
    // const byteArray = tf.browser.fromPixels(imageData).toFloat();

    const offset = tf.scalar(127.5);
    const normalized = byteArray.sub(offset).div(offset);

    const batched = normalized.reshape([
        -1,
        image_size,
        image_size,
        3,
    ]);

    return batched;
}

async function testModel(image) {
    const model = await tf.loadGraphModel(
        'file://tfjs-model/model.json',
    );
    return model.predict(b64ToImageData(image)).data();
}

module.exports = testModel;
