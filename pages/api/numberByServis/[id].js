
export default async function handler(req, res) {

    try {
        const response = await fetch(`https://api.numberland.ir/v2.php/?apikey=${process.env.API_KEY}&method=getinfo&service=${req.query.id}`)
        const data = await response.json()

        res.status(200).json({ data })

    } catch (err) {

        res.status(400).json(err)
    }
}