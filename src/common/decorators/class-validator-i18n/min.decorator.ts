import { applyDecorators } from '@nestjs/common';
import { Min, ValidationOptions } from 'class-validator';
import { i18nValidationMessage } from 'nestjs-i18n';

export function MinI18n(
  minValue: number,
  validationOptions?: ValidationOptions,
) {
  return applyDecorators(
    Min(minValue, {
      message: i18nValidationMessage('validation.Generic'),
      ...validationOptions,
    }),
  );
}
