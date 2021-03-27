let exchanges = [
    {id: '1', name: 'Exchange Dollars in Krakow', status: 'working from 9 to 18'},
    {id: '2', name: 'Exchange Euros in Krakow', status: 'working from 10 to 20'},
    {id: '3', name: 'Exchange Zlote in Krakow', status: 'working from 11 to 19'},
    {id: '4', name: 'Exchange Rubli in Krakow', status: 'closed'}
]

export const getAll = (req, res) => {
    res.status(200).json(exchanges)
}

export const create = (req, res) => {
    console.log(req.body)
    const newExchange = {
        id : Date.now().toString(),
        ...req.body

    }
    exchanges.push(newExchange)
    res.status(201).json({newExchange})
}

export const remove = (req, res) => {
    console.log('ID', req.params.id)
    res.json({})
}