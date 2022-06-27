import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose'
import { Document } from 'mongoose'

//Collection은 관계형 DB의 Table과 비슷한 개념이다.
//이 Collection 내에 저장된 Binary Json(BSON)이 Document이다.
//Document는 키와 Value로 이루어진 BSON 데이터이다.
//아래와 같이 선언하면 ProductDocument는 Product Schema인 동시에 Document이다.
//출처 - https://developer88.tistory.com/396
export type ProductDocument = Product & Document

//Mongoose에선 모든것이 Schema에서 파생된다.
//출처 - https://jakekwak.gitbook.io/nestjs/techniques/mongo
@Schema()
export class Product {
    @Prop()
    name: string;
    @Prop()
    description: string;
    @Prop()
    price: number;
    @Prop()
    category: string;
}

export const ProductSchema = SchemaFactory.createForClass(Product)