import { generateClient } from 'aws-amplify/api'
import { createAIHooks } from '@aws-amplify/ui-react-ai'
// If you keep this file, you can import your typed Schema from amplify/data/resource
// import type { Schema } from '../amplify/data/resource'
type Schema = any;

export const client = generateClient<Schema>({ authMode: 'userPool' })
export const { useAIConversation, useAIGeneration } = createAIHooks(client)
