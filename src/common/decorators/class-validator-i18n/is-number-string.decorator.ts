import { applyDecorators } from '@nestjs/common';
import { IsNumberString, ValidationOptions } from 'class-validator';
import { i18nValidationMessage } from 'nestjs-i18n';

export function IsNumberStringI18n(
  // validatorIsNumericOptions?: ValidatorJS.IsNumericOptions, // NOTE: TO-DO if needed.
  validationOptions?: ValidationOptions,
) {
  return applyDecorators(
    IsNumberString(
      {},
      {
        message: i18nValidationMessage('validation.IsNumberString'),
        ...validationOptions,
      },
    ),
  );
}
