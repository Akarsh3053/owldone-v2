import PriorityPage from "@/components/PriorityPage"
import { Priority } from "@/store/api"

const Urgent = () => {
    return (
        <PriorityPage priority={Priority.Urgent} />
    )
}

export default Urgent;