import { Args, Query, Resolver } from '@nestjs/graphql';
import { PaginationInput, PaginationInputI18n } from './dto/pagination.input';
import { ResponseDto } from './dto/response.dto';
import { ResponsesDto } from './dto/responses.dto';

@Resolver()
export class AppResolver {
  @Query(() => ResponsesDto)
  async helloWorld(@Args() args: PaginationInput): Promise<ResponsesDto> {
    console.log('Regular', args);
    return { data: [{ text: 'Hello World!', number: 1 }] };
  }

  @Query(() => ResponseDto)
  async helloWorldI18n(
    @Args() args: PaginationInputI18n,
  ): Promise<ResponseDto> {
    console.log('I18n', args);
    return { text: 'Hello World!', number: 1 };
  }
}
