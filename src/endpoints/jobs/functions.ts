import { GetJobResponse, Job } from './types';

function getCollectionType(option: number): Job['collection'] {
  switch (option) {
    case 0:
      return 'pickup';
    case 1:
      return 'we-deliver';
    case 2:
      return 'courier';
    case 3:
      return 'other';
    default:
      throw new Error(`Encountered unknown collection type value: ${option}`);
  }
}

function getCurrencySymbolPosition(
  position: number
): Job['currency']['symbolPosition'] {
  switch (position) {
    case 0:
      return 'before';
    case 1:
      return 'after';
    default:
      throw new Error(
        `Encountered unknown currency symbol position: ${position}`
      );
  }
}

export function formatJob(dto: GetJobResponse): Job {
  return {
    account: {
      reference: dto.ACCOUNT_REFERENCE,
      suspended: dto.ACCOUNT_SUSPENDED === 1,
    },
    accountingPackageId: dto.ACC_PACKAGE_ID,
    allowEarlyReturns: dto.ALLOW_EARLY_RETURNS === 1,
    address: dto.ADDRESS,
    archives: dto.ARCHIVES,
    calculateLateFees: dto.CALC_LATE_FEES === 1,
    client: {
      id: dto.CLIENT_ID,
      name: dto.CLIENT_ASSIGN,
      memo: dto.CLIENT_MEMO,
      reference: dto.CLIENT_REF,
    },
    collection: getCollectionType(dto.COLLECT),
    colour: dto.COLOUR,
    companyName: dto.COMPANY,
    user: {
      id: dto.CREATE_USER,
      name: dto.CREATED_BY,
      email: dto.CREATED_BY_EMAIL,
      imageId: dto.CREATED_BY_IMAGE_ID,
      jobRole: dto.CREATED_BY_JOB,
      phone: dto.CREATED_BY_TELEPHONE,
    },
    createdAt: new Date(dto.CREATE_DATE),
    creditLimit: dto.CREDIT_LIMIT,
    creditPeriod: dto.CREDIT_PERIOD,
    currency: {
      code: dto.CURRENCY.CODE,
      decimals: dto.CURRENCY.DECIMALS,
      decimalSeparator: dto.CURRENCY.DECIMAL_SEPARATOR,
      multiplier: dto.CURRENCY.MULTIPLIER,
      name: dto.CURRENCY.NAME,
      negativeFormat: dto.CURRENCY.NEGATIVE_FORMAT,
      symbol: dto.CURRENCY.SYMBOL,
      symbolPosition: getCurrencySymbolPosition(dto.CURRENCY.SYMBOL_POSITION),
      thousandSeparator: dto.CURRENCY.THOUSAND_SEPARATOR,
    },
  };
}
