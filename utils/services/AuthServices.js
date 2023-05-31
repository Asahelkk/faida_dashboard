import AxiosUtility from "./AxiosServices";

// login
const login = async (data) => {
    const res = await AxiosUtility.post("/users/login", data);

    return res.data;
}

const verifyAccount = async (data) => {
    const res = await AxiosUtility.post("/users/verify", data);

    return res.data;
}

const AuthServices = {
    login,
    verifyAccount
}

export default AuthServices;