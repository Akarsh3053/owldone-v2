import PriorityPage from "@/components/PriorityPage"
import { Priority } from "@/store/api"

const High = () => {
    return (
        <PriorityPage priority={Priority.High} />
    )
}

export default High;