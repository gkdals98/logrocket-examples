import { Injectable } from '@nestjs/common'
import { Model } from 'mongoose'
import { InjectModel } from '@nestjs/mongoose'
import { Product, ProductDocument } from './schemas/product.schema'
import { CreateProductDTO } from './dtos/create-product.dto'
import { FilterProductDTO } from './dtos/filter-product.dto'


@Injectable()
export class ProductService {
    //InjectModel은 Module에서 등록된 Product Schema를 주입해준다. 이후 CRUD function을 정의하기 위함.
    constructor(@InjectModel('Product') private readonly productModel: Model<ProductDocument>) { }

    async getFilteredProducts(filterProductDto: FilterProductDTO): Promise<Product[]> {
        //검색 DTO로부터 category와 search값 받음
        const { category, search } = filterProductDto
        let products = await this.getAllProducts()

        if (search) {
            products = products.filter(product =>
                product.name.includes(search) ||
                product.description.includes(search)
            )
        }

        if (category) {
            products = products.filter(product =>
                product.category === category
            )
        }
        return products
    }

    async getAllProducts(): Promise<Product[]> {
        const products = await this.productModel.find().exec()
        return products
    }

    async getProduct(id: string): Promise<Product> {
        const product = await this.productModel.findById(id).exec()
        return product
    }

    async addProduct(createProductDto: CreateProductDTO): Promise<Product> {
        const newProduct = await this.productModel.create(createProductDto)
        return newProduct.save()
    }

    async updateProduct(id: string, createProductDto: CreateProductDTO): Promise<Product> {
        const updateProduct = await this.productModel.findByIdAndUpdate(id, createProductDto, { new: true })
        return updateProduct
    }

    async deleteProduct(id: string): Promise<any> {
        const deleteProduct = await this.productModel.findByIdAndRemove(id)
        return deleteProduct
    }
}
