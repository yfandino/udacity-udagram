export const config = {
  "postgres": {
    "username": process.env.POSTGRES_USERNAME,
    "password": process.env.POSTGRES_PASSWORD,
    "database": process.env.POSTGRES_DB,
    "host": process.env.POSTGRES_HOST,
    "dialect": "postgres"
  },
  "aws": {
    "aws_region": process.env.UDAGRAM_REGION,
    "aws_profile": process.env.UDAGRAM_PROFILE,
    "aws_media_bucket": process.env.UDAGRAM_BUCKET
  }
}
