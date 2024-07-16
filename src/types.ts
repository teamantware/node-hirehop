// The API is run on 3 different endpoints. These are the available endpoints
// that are documented on their website. They can be found here:
// https://www.hirehop.com.au/api_documentation/
export type DomainName =
  | 'https://hirehop.net'
  | 'https://myhirehop.com'
  | 'https://myhirehop.co.uk';

export type Config = {
  domain: DomainName;
  token: string;
};
