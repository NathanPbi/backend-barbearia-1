import path from 'path';
import crypto from 'crypto';
import multer from 'multer';

const tmpFolder = path.resolve(__dirname, '..', '..', 'tmp');

export default {
    directory: tmpFolder,
    storage: multer.diskStorage({
        destination: path.resolve(__dirname, '..', '..', 'tmp'),
        filename(request, file, callBack) {
            const fileHasch = crypto.randomBytes(10).toString('hex');
            const filename = `${fileHasch}-${file.originalname}`;

            return callBack(null, filename);
        },
    }),
};
