import { applyDecorators } from '@nestjs/common';
import { IsNotEmpty, ValidationOptions } from 'class-validator';
import { i18nValidationMessage } from 'nestjs-i18n';

export function IsNotEmptyI18n(validationOptions?: ValidationOptions) {
  return applyDecorators(
    IsNotEmpty({
      message: i18nValidationMessage('validation.IsNotEmpty'),
      ...validationOptions,
    }),
  );
}
