import { applyDecorators } from '@nestjs/common';
import { Max, ValidationOptions } from 'class-validator';
import { i18nValidationMessage } from 'nestjs-i18n';

export function MaxI18n(
  maxValue: number,
  validationOptions?: ValidationOptions,
) {
  return applyDecorators(
    Max(maxValue, {
      message: i18nValidationMessage('validation.Generic'),
      ...validationOptions,
    }),
  );
}
