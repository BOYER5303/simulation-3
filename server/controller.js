module.exports = {
    getAllHouses: async (req, res) => {
        const allHouses = await req.app.get('db').get_all_houses();
        return res.status(200).send(allHouses)
    },
    addNewHouse: async (req, res) => {
        const { name, address, city, zipcode} = req.body;
        const { id } =req.session.user;
        const newHouse = await req.app.get('db').add_user_house([name, address, city, zipcode, id]);
        return res.status(200).send(newHouse);
    }
}