import { a, defineData, type ClientSchema } from '@aws-amplify/backend';

const schema = a.schema({
  chat: a
    .conversation({
      aiModel: a.ai.model('Claude 3.5 Haiku'),
      systemPrompt: 'You are a helpful farm assistant. Be concise and practical.',
    })
    .authorization((allow) => allow.owner()),
});

export type Schema = ClientSchema<typeof schema>;
export const data = defineData({ schema });
