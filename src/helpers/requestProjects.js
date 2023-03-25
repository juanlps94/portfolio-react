import axios from 'axios'


const baseURL = "http://localhost:3001/getProject";

const obtainData = async () => {
    const data = await axios({
        method: 'get',
        url: baseURL
    })

    return data
}

export default obtainData;