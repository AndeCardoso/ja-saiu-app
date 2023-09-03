import { ObjectSchema } from 'realm';

const TokenSchema: ObjectSchema = {
  name: 'Token',
  properties: { token: 'string' },
};

export default TokenSchema;
