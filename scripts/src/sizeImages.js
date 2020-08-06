const Jimp = require('jimp');
const fs = require('fs');
const path = require('path');

const alreadySizedFileEndings = new Set([
  '_lg.jpg',
  '_md.jpg',
  '_sm.jpg',
]);

deleteSizedImages('src/assets/images');
sizeImages('src/assets/images');

function deleteSizedImages(rootImagesPath) {
  iterateFilesDeep(rootImagesPath, (imagePath) => {
    const imageEnding = imagePath.slice(imagePath.length - 7)
    if (alreadySizedFileEndings.has(imageEnding)) {
      console.log('deleting', imagePath);
      fs.unlinkSync(imagePath);
    }
  });
}

function sizeImages(rootImagesPath) {
  iterateFilesDeep(rootImagesPath, (imagePath) => {
    const imagePathRoot = imagePath.slice(0, imagePath.length - 4);
    Jimp.read(imagePath).then((image) => {
      console.log(`sizing ${imagePath}`)
      image.resize(1080, Jimp.AUTO).write(`${imagePathRoot}_lg.jpg`);
      image.resize(640, Jimp.AUTO).write(`${imagePathRoot}_md.jpg`);
      image.resize(320, Jimp.AUTO).write(`${imagePathRoot}_sm.jpg`);
    });
  });
}

function iterateFilesDeep(rootPath, iteratee) {
  const dirChildren = fs.readdirSync(rootPath);
  dirChildren.forEach((child) => {
    const childPath = path.join(rootPath, child);
    const isDir = fs.lstatSync(childPath).isDirectory();
    if (isDir) {
      iterateFilesDeep(childPath, iteratee);
    } else {
      iteratee(childPath);
    }
  });
}
