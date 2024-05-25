import { useContext } from "react"
import Context from "../storeContext/Context"

const useStore = () => {
    const [state, dispatch] = useContext(Context);
    return [state, dispatch];
}

export default useStore;
