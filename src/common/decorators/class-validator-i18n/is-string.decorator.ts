import { applyDecorators } from '@nestjs/common';
import { IsString, ValidationOptions } from 'class-validator';
import { i18nValidationMessage } from 'nestjs-i18n';

export function IsStringI18n(validationOptions?: ValidationOptions) {
  return applyDecorators(
    IsString({
      message: i18nValidationMessage('validation.IsString'),
      ...validationOptions,
    }),
  );
}
