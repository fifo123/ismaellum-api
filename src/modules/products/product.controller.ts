import { JwtAuthGuard } from '@/auth/jwt-auth.guard';
import { multerStorageConfig } from '@/common/constants/multer-storage.config';
import { CreateProduct } from '@/common/domain/dtos/product/create-product.dto';
import {
  Body,
  Controller,
  HttpException,
  Post,
  UploadedFile,
  UseGuards,
  UseInterceptors,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { ProductService } from './product.service';

@Controller('product')
export class ProductController {
  constructor(private readonly productService: ProductService) {}

  @UsePipes(new ValidationPipe())
  @UseGuards(JwtAuthGuard)
  @UseInterceptors(FileInterceptor('picture', multerStorageConfig))
  @Post('/create-product')
  async createProduct(
    @UploadedFile() file: any,
    @Body() data: CreateProduct,
  ) {
    if (!file?.filename)
      throw new HttpException('Error: picture is required', 400);
    return this.productService.createProduct({
      ...data,
      picture: `${file.filename}`,
    });
  }
}
