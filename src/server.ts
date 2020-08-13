import express from 'express'
import cors from 'cors'
import fetch from 'node-fetch'

const app = express()

app.use(cors())

app.get('/:summonerName', async (req, res) => {
    const {summonerName} = req.params
    console.log(req.params)
    console.log(summonerName)
    const url = `https://tr1.api.riotgames.com/lol/summoner/v4/summoners/by-name/${summonerName}?api_key=RGAPI-2ea69ac4-2633-4ac6-93c7-75a31560d4d3`;
    try {
        const response = await fetch(url)
        const json = await response.json()
        res.json(json)
    } catch (e) {
        console.log(e)
    }
})

app.listen(3000, () => {
    console.log('Uygulama 3000 portundan çalışıyor.')
})
