// This is the defined response we get from the server as stated in the API
// docs. This won't be used as the actual model we will be giving the end
// user.
export type GetJobResponse = {
  /** Reference of the customer from the address book */
  ACCOUNT_REFERENCE: string;
  /** Is the account suspended (yes/true=1 or no/false=0). */
  ACCOUNT_SUSPENDED: 0 | 1;
  /** The ID of the accounting package to use */
  ACC_PACKAGE_ID: number;
  /** Address of the job */
  ADDRESS: string;
  /** Discount for early returns (yes=1 or no=0). */
  ALLOW_EARLY_RETURNS: 0 | 1;
  /** How many quotes saved */
  ARCHIVES: number;
  /** Add late fees option, (yes=1 or no=0). */
  CALC_LATE_FEES: 0 | 1;
  /** Client company or name in the address book the job is assigned to */
  CLIENT_ASSIGN: string;
  /** Client company ID in the address book the job is assigned to */
  CLIENT_ID: number;
  /** Memo from the address book */
  CLIENT_MEMO: string;
  /** Reference for the job from the client */
  CLIENT_REF: string;
  /** Option on collection (customer collect=0, we deliver=1, courier delivery=2, other=3). */
  COLLECT: 0 | 1 | 2 | 3;
  /** The colour of the job in HEX */
  COLOUR: string;
  /** Company name of the customer */
  COMPANY: string;
  /** Name of the user who created the job */
  CREATED_BY: string;
  /** Email of the user who created the job */
  CREATED_BY_EMAIL: string;
  /** Image ID of the user who created the job */
  CREATED_BY_IMAGE_ID: number;
  /** Job role of the user who created the job */
  CREATED_BY_JOB: string;
  /** Telephone number of the user who created the job */
  CREATED_BY_TELEPHONE: string;
  /** Date the job was created (YYYY-MM-DD hh:mm:ss) */
  CREATE_DATE: string;
  /** ID of the user who created the job */
  CREATE_USER: number;
  /** Credit limit of the customer */
  CREDIT_LIMIT: string;
  /** Credit time in days for the customer */
  CREDIT_PERIOD: number;
  CURRENCY: {
    /** The international currency code for the default currency used for the job */
    CODE: string;
    /** How many decimal places does the currency have */
    DECIMALS: number;
    /** The character used to separate the decimals */
    DECIMAL_SEPARATOR: string;
    /** The multiplier used to get the exchange rate */
    MULTIPLIER: number;
    /** Name of the currency */
    NAME: string;
    /** How a negative should be displayed */
    NEGATIVE_FORMAT: string;
    /** The currency symbol */
    SYMBOL: string;
    /** The position of the currency symbol (0=before, 1=after) */
    SYMBOL_POSITION: 0 | 1;
    /** The character used to separate thousands */
    THOUSAND_SEPARATOR: string;
  };
  /** The indexable custom field value */
  CUSTOM_INDEX: string;
  /** The default discount percentage to give to the customer. */
  DEFAULT_DISCOUNT: number;
  /** The default sales tax percentage */
  DEFAULT_SALES_TAX: number;
  /** Option on delivery (customer return=0, we collect=1, courier collection=2, other=3). */
  DELIVER: 0 | 1 | 2 | 3;
  /** Name of the depot the job is in */
  DEPOT: string;
  /** ID of the depot the job is in */
  DEPOT_ID: number;
  /** Job memo about the job */
  DETAILS: string;
  /** Use priority availability calculation for the job (yes=1 or no=0). */
  DO_PRIORITY: 0 | 1;
  /** How many chargeable days from JOB_DATE. */
  DURATION_DAYS: number;
  /** How many chargeable hours from JOB_DATE. */
  DURATION_HRS: number;
  /** Set to '1' if changing the dates when editing a job does not change the duration. */
  DURATION_LOCKED: 0 | 1;
  /** The price structure to be used on the job code */
  DURATION_SCHEME: string;
  /** Email address of the client */
  EMAIL: string;
  /** How many files attached to the job */
  FILES: number;
  /** The job number */
  ID: number;
  /** Is this an internal hire (yes=1 or no=0). */
  INTERNAL: 0 | 1;
  /** The ID of the other depot if it is an internal rental. */
  INTERNAL_DEPOT: number;
  /** The name of the other depot if it is an internal rental. */
  INTERNAL_DEPOT_NAME: string;
  /** Address for invoicing */
  INV_ADDRESS: string;
  /** Email for invoicing */
  INV_EMAIL: string;
  /** Date the job starts charging from (YYYY-MM-DD hh:mm). */
  JOB_DATE: string;
  /** Date the job ends (YYYY-MM-DD hh:mm). */
  JOB_END: string;
  /** Name of the job */
  JOB_NAME: string;
  /** What type of job it is */
  JOB_TYPE: string;
  /** The latitude of the job depot. */
  LATITUDE: string;
  /** Is the job locked (yes=1 or no=0). */
  LOCKED: 0 | 1;
  /** The longitude of the job depot. */
  LONGITUDE: string;
  /** Mobile/celluar telephone number of the customer */
  MOBILE: string;
  /** Name number of the customer */
  NAME: string;
  /** How many notes on the job */
  NOTES: number;
  /** The date and time the equipment used in the job is reserved from (YYYY-MM-DD hh:mm). */
  OUT_DATE: string;
  /** A note that pops up when the job is opened */
  POP_UP: string;
  /** Which price group to use (A=0, B=1, & C=2). */
  PRICE_GROUP: 0 | 1 | 2;
  /** The price structure name to be used on the job */
  PRICE_STRUCTURE: string;
  /** The ID of the project the job belongs to. */
  PROJECT_ID: number;
  /** The name of the project the job belongs to. */
  PROJECT_NAME: string;
  /** The date and time that all equipment on the job will become available again (YYYY-MM-DD hh:mm). */
  RETURN_DATE: string;
  /** The status code of the job */
  STATUS: string;
  /** The ID of the internal cross depot rental */
  SUB_ID: number;
  /** The ID of the Job, Project or stand alone purchase order the internal rental is for. */
  SUB_MAIN_ID: number;
  /** What the internal rental is for (1=job, 6=project, 11=stand alone purchase order). */
  SUB_TYPE: 1 | 6 | 11;
  /** If account warning or suspended, a note saying why. */
  SUSPENDED_NOTE: string;
  /** How many tasks in the job */
  TASKS: number;
  /** Telephone number of the client. */
  TELEPHONE: string;
  /** ID of manager 1 */
  USER: number;
  /** ID of manager 2 */
  USER2: number;
  /** Email of manager 2 */
  USER2_EMAIL: string;
  /** Image ID of manager 2 */
  USER2_IMAGE_ID: number;
  /** Job role of manager 2 */
  USER2_JOB: string;
  /** Name of manager 2 */
  USER2_NAME: string;
  /** Telephone number of manager 2 */
  USER2_TELEPHONE: string;
  /** Email address of manager 1 */
  USER_EMAIL: string;
  /** Image ID of manager 1 */
  USER_IMAGE_ID: number;
  /** Job role of manager 1 */
  USER_JOB: string;
  /** Name of manager 1 */
  USER_NAME: string;
  /** Telephone number of manager 1 */
  USER_TELEPHONE: string;
  /** Use sales tax or not (yes=1 or no=0). */
  USE_SALES_TAX: 0 | 1;
  /** Name of the job delivery building */
  VENUE: string;
  /** ID of the venue in the address book */
  VENUE_ADDRESS: number;
  /** Delivery address phone number */
  VENUE_TELEPHONE: string;
  /** If the depot is a virtual depot, it's ID */
  VIRTUAL_DEPOT_ID: number;
  /** Object array of custom field objects. {object} */
  CUSTOM_FIELDS: Record<string, unknown>;
  /** Same as 'CUSTOM_FIELDS' (kept for legacy purposes). @deprecated */
  fields: Record<string, unknown>;
  /** Array of multipliers to be applied to items (one off, per hour, per day, per week, per month, every day & every week) */
  multipliers: unknown[];
  /** The ID if the depot is a standard depot */
  root_depot_id: number;
  /** Array of tax rates data. */
  standard_tax_rates: unknown[];
};

export type Job = {
  account: {
    reference: string;
    suspended: boolean;
  };
  accountingPackageId: number;
  address: string;
  allowEarlyReturns: boolean;
  archives: number;
  calculateLateFees: boolean;
  client: {
    name: string;
    id: number;
    memo: string;
    reference: string;
  };
  collection: 'pickup' | 'we-deliver' | 'courier' | 'other';
  colour: string;
  companyName: string;
  user: {
    id: number;
    name: string;
    email: string;
    imageId: number;
    jobRole: string;
    phone: string;
  };
  createdAt: Date;
  creditLimit: string;
  creditPeriod: number;
  currency: {
    code: string;
    decimals: number;
    decimalSeparator: string;
    multiplier: number;
    name: string;
    negativeFormat: string;
    symbol: string;
    symbolPosition: 'before' | 'after';
    thousandSeparator: string;
  };
};
