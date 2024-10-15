import { applyDecorators } from '@nestjs/common';
import { IsEnum, ValidationOptions } from 'class-validator';
import { i18nValidationMessage } from 'nestjs-i18n';

export function IsEnumI18n(
  enumType: object,
  validationOptions?: ValidationOptions,
) {
  return applyDecorators(
    IsEnum(enumType, {
      message: i18nValidationMessage('validation.IsEnum'),
      ...validationOptions,
    }),
  );
}
