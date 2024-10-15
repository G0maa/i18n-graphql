import { Args, Query, Resolver } from '@nestjs/graphql';
import { PaginationInput, PaginationInputI18n } from './dto/pagination.input';

@Resolver()
export class AppResolver {
  @Query(() => String)
  async helloWorld(@Args() args: PaginationInput): Promise<string> {
    console.log('Regular', args);
    return 'Hello World!';
  }

  @Query(() => String)
  async helloWorldI18n(@Args() args: PaginationInputI18n): Promise<string> {
    console.log('I18n', args);
    return 'Hello World!';
  }
}
