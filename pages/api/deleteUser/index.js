import { raiseError } from '../../../components/errorHandling'

export default async function DeleteUser(_req, res) {
    res.status(403).json(raiseError(8))
}