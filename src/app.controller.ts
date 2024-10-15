import { Controller, Get, Query } from '@nestjs/common';
import { AppService } from './app.service';
import {
  PaginationQueryParams,
  PaginationQueryParamsI18n,
} from './dto/pagination.query-params.dto';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(@Query() query: PaginationQueryParams): string {
    console.log('regular', query);
    return this.appService.getHello();
  }

  @Get('/i18n')
  getHelloI18n(@Query() query: PaginationQueryParamsI18n): string {
    console.log('i18n', query);
    return this.appService.getHello();
  }
}
