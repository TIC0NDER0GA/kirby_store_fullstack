import { Pool } from 'pg';

// Get environment variables directly from CircleCI environment
const {
    POST_DATABASE,
    POST_HOST,
    POST_USER,
    POST_PASSWORD,
    ENV,
    POST_DATABASE_TEST
} = process.env;

// Set environment variable (from CircleCI environment)
let env: string = ENV?.trim() || 'development';  // Default to 'development' if ENV is undefined

let client;

// Switch based on the environment value set in CircleCI
switch (env) {
    case 'build':
        client = new Pool({
            host: POST_HOST,
            database: POST_DATABASE,
            user: POST_USER,
            password: POST_PASSWORD
        });
        break;
    case 'test':
        client = new Pool({
            host: POST_HOST,
            database: POST_DATABASE_TEST,
            user: POST_USER,
            password: POST_PASSWORD
        });
        break;
    case 'production':
        // Add production case if needed, or handle it similarly
        client = new Pool({
            host: POST_HOST,
            database: POST_DATABASE,
            user: POST_USER,
            password: POST_PASSWORD
        });
        break;
    default:
        throw new Error(`Unknown environment: ${env}`);
}

export default client;