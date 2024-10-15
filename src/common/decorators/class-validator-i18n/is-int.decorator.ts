import { applyDecorators } from '@nestjs/common';
import { IsInt, ValidationOptions } from 'class-validator';
import { i18nValidationMessage } from 'nestjs-i18n';

export function IsIntI18n(validationOptions?: ValidationOptions) {
  return applyDecorators(
    IsInt({
      message: i18nValidationMessage('validation.Generic'),
      ...validationOptions,
    }),
  );
}
