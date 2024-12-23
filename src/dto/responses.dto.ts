import { Field, ObjectType } from '@nestjs/graphql';
import { ResponseDto } from './response.dto';

@ObjectType()
export class ResponsesDto {
  @Field(() => [ResponseDto])
  data: ResponseDto[];
}
