import { border } from "@chakra-ui/react";
import { GET_S, GET_R, GET_E, UPLOAD_R, UPLOAD_S, UPLOAD_E, FILTER_S, SORT } from "./action.type";

let initial = {
    isLoading: false,
    data: [],
    isError: false

}

export const adminreducer = (state = initial, { type, payload }) => {
    switch (type) {
        case GET_R:
            {
                return { ...state, isLoading: true, isError: false }
            }
        case GET_S: {
            return { ...state, isLoading: false, data: payload, isError: false }
        }
        case GET_E:
            {
                return { ...state, isLoading: false, isError: true }
            }
        case FILTER_S:
            {
                return { ...state, isLoading: false, data: payload, isError: false }
            }
        case SORT:
            {
                if (payload === 'asc') {
                    let newdata = state.data.sort((a, b) => {
                        return a.cost - b.cost
                    })
                    return { ...state, isLoading: false, data: newdata, isError: false }
                }
                else if (payload === 'desc') {
                    let newdata = state.data.sort((a, b) => {
                        return b.cost - a.cost
                    })

                    return { ...state, isLoading: false, data: newdata, isError: false }
                }


            }
        default: return state;
    }
}

