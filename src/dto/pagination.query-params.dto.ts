import { Type } from 'class-transformer';
import { MinI18n } from '../common/decorators/class-validator-i18n/min.decorator';
import { IsIntI18n } from '../common/decorators/class-validator-i18n/is-int.decorator';
import { IsOptionalI18n } from '../common/decorators/class-validator-i18n/is-optional.decorator';
import { MaxI18n } from '../common/decorators/class-validator-i18n/max.decorator';
import { IsInt, IsOptional, Max, Min } from 'class-validator';

export class PaginationQueryParamsI18n {
  @IsOptionalI18n()
  @IsIntI18n()
  @MinI18n(1)
  @Type(() => Number)
  page = 1;

  @IsOptionalI18n()
  @IsIntI18n()
  @MinI18n(1)
  @MaxI18n(50)
  @Type(() => Number)
  limit = 10;
}

// Sanity check
export class PaginationQueryParams {
  @IsOptional()
  @IsInt()
  @Min(1)
  @Type(() => Number)
  page = 1;

  @IsOptional()
  @IsInt()
  @Min(1)
  @Max(50)
  @Type(() => Number)
  limit = 10;
}
