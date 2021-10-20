import { Controller, Get, Query, Res } from '@nestjs/common';

@Controller()
export class AppController {
  @Get('/healthz')
  healthz(): string {
    return 'ok';
  }

  @Get('get-image/')
  getImagem(@Query('imagem') imagem: string, @Res() res: any) {
    if (imagem == '') {
      return res.sendFile('not_found.svg', { root: './assets' });
    }
    if (imagem == 'not_found.svg')
      return res.sendFile('not_found.svg', { root: './assets' });
    if (imagem.indexOf('../assets') != -1) {
      const asset = imagem.replace('../assets/', '');

      return res.sendFile(asset, { root: './assets' }, (err: any) => {
        if (err) {
          res.sendFile('not_found.svg', { root: './assets' });
        }
      });
    }

    return res.sendFile(imagem, { root: './files' }, (err: any) => {
      if (err) {
        res.sendFile('not_found.svg', { root: './assets' });
      }
    });
  }
}
