import { unlink } from 'fs';

export async function deleteFile(path: string): Promise<string> {
  return new Promise((resolve, reject) => {
    unlink(path, (err) => {
      if (err) reject(err);
      resolve('Deleted');
    });
  });
}
