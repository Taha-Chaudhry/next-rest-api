import { raiseError } from '../../../components/errorHandling'

export default async function UpdateUser(_req, res) {
    res.status(403).json(raiseError(8))
}