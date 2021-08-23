import { HttpException } from '@nestjs/common';
import { MulterOptions } from '@nestjs/platform-express/multer/interfaces/multer-options.interface';
import { diskStorage } from 'multer';
import { extname } from 'path';

export const multerStorageConfig: MulterOptions = {
  storage: diskStorage({
    destination: './files',
    filename: (req, file, callback) => {
      const name = file.originalname.split('.')[0];
      const fileExtName = extname(file.originalname);

      callback(null, `${Date.now()}-${name}${fileExtName}`);
    },
  }),
  fileFilter: (req, file, callback) => {
    if (!file.originalname.match(/\.(jpg|jpeg|png|svg)$/)) {
      return callback(
        new HttpException(
          'Error: Extensão recusada, extensão aceita: svg, jpg, jpeg, png, svg',
          400,
        ),
        false,
      );
    }
    callback(null, true);
  },
};
