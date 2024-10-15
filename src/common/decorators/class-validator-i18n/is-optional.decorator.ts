import { applyDecorators } from '@nestjs/common';
import { IsOptional, ValidationOptions } from 'class-validator';
import { i18nValidationMessage } from 'nestjs-i18n';

export function IsOptionalI18n(validationOptions?: ValidationOptions) {
  return applyDecorators(
    IsOptional({
      message: i18nValidationMessage('validation.Generic'),
      ...validationOptions,
    }),
  );
}
