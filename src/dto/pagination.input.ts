import { ArgsType, Field, Int } from '@nestjs/graphql';
import { IsOptionalI18n } from '../common/decorators/class-validator-i18n/is-optional.decorator';
import { IsIntI18n } from '../common/decorators/class-validator-i18n/is-int.decorator';
import { MinI18n } from '../common/decorators/class-validator-i18n/min.decorator';
import { MaxI18n } from '../common/decorators/class-validator-i18n/max.decorator';
import { IsInt, IsOptional, Max, Min } from 'class-validator';

@ArgsType()
export class PaginationInputI18n {
  @Field(() => Int, { nullable: true, defaultValue: 1 })
  @IsOptionalI18n()
  @IsIntI18n()
  @MinI18n(1)
  page: number;

  @Field(() => Int, { nullable: true, defaultValue: 10 })
  @IsOptionalI18n()
  @IsIntI18n()
  @MinI18n(1)
  @MaxI18n(50)
  limit: number;
}

@ArgsType()
export class PaginationInput {
  @Field(() => Int, { nullable: true, defaultValue: 1 })
  @IsOptional()
  @IsInt()
  @Min(1)
  page: number;

  @Field(() => Int, { nullable: true, defaultValue: 10 })
  @IsOptional()
  @IsInt()
  @Min(1)
  @Max(50)
  limit: number;
}
