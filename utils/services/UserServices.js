import AxiosUtility, { setAuthToken } from "./AxiosServices";

// login
const fetchAllUsers = async () => {
    setAuthToken(AxiosUtility);
    const res = await AxiosUtility.get("/users/");

    return res.data;
}

const createUser = async (data) => {
    setAuthToken(AxiosUtility);
    const res = await AxiosUtility.post("/users/create", data);

    return res.data;
}

const UserServices = {
    fetchAllUsers,
    createUser
}

export default UserServices;