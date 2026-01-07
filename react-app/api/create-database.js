/**
 * GET /api/create-database
 * 
 * 
*/

import {Pool} from '@neondatabase/serverless'
var pool = new Pool({connectionString: process.env.DATABASE_CHURCHES_URL})

export default async function handler(req, res) {
    const sql = `CREATE TABLE IF NOT EXISTS public.churches (
        id SERIAL PRIMARY KEY,
        name VARCHAR(255) NOT NULL,
        is_christian BOOLEAN
        created_at TIMESTAMP DEFAULT NOW()
    )`
    const queryResult = await pool.query(sql)
    console.log('queryResult', queryResult)
    return res.status(200).json({queryResult})
}