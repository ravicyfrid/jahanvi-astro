import { gemsService } from "@/services"
import { useEffect } from "react"

const Gems = () => {

    useEffect(() => {
        gemsService.getGems().then((result: any) => {
            console.log('result',result);

        })
    }, [])
    return (<>
this is gems page
    </>)
}
export default Gems