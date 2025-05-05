// import { response } from "express"

const apiReq =  async (url = '', optionsObj = null ,errMsg = null) => {
    try{

        const response = await fetch(url,optionsObj)
        if(!response.ok) throw Error("Please Try again..")
    } catch(err){
        errMsg = err.Message;

    } finally{
        return errMsg
    }

}

export default apiReq