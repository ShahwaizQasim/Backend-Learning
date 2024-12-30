import UserModel from "../models/index.js";

const deleteUser = async (req, res) => {
    try {
        const { id } = req.params;
        const deleteUser = await UserModel.findByIdAndDelete(id);
        res.status(200).send({ status: 200, message: 'user deleted successfully', user: deleteUser });
    } catch (error) {
        res.status(400).send({ status: 400, message: error.message });
    }
}

export default deleteUser; 