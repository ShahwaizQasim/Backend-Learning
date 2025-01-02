import UserModel from "../models/index.js";

const deleteUser = async (req, res) => {
    try {
        const { id } = req.params;
        console.log('id', id);
        const deleteUser = await UserModel.findByIdAndDelete(id.trim());
        res.status(200).send({ status: 200, message: 'user deleted successfully', user: deleteUser });
    } catch (error) {
        console.log(error);
        
        res.status(400).send({ status: 400, message: error.message });
    }
}

export default deleteUser; 