import { Module } from '@nestjs/common'
import { ProductService } from './product.service'
import { ProductController } from './product.controller'
import { MongooseModule } from '@nestjs/mongoose'
import { ProductSchema } from './schemas/product.schema'

@Module({
  //product 도메인 내에 Product Schema를 등록한다. 
  imports: [
    MongooseModule.forFeature([{ name: 'Product', schema: ProductSchema }])
  ],
  controllers: [ProductController],
  providers: [ProductService],
})
export class ProductModule { }