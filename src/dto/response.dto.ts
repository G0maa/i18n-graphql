import { Field, Int, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class ResponseDto {
  @Field(() => String)
  text: string;

  @Field(() => Int)
  number: number;
}
