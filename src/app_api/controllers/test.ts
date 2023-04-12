import { Request, Response } from 'express'
import { sendJSONresponse } from '../utils'

export async function test(req: Request, res: Response) {
    sendJSONresponse(res, 200, { 'status': 'OK' })
    return
}