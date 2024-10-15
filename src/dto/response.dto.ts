import { Field } from '@nestjs/graphql';

export class ResponseDto {
  @Field(() => String)
  text: string;
}
