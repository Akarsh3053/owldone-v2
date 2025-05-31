import PriorityPage from "@/components/PriorityPage"
import { Priority } from "@/store/api"

const Low = () => {
    return (
        <PriorityPage priority={Priority.Low} />
    )
}

export default Low;