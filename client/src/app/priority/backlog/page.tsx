import PriorityPage from "@/components/PriorityPage"
import { Priority } from "@/store/api"

const Backlog = () => {
    return (
        <PriorityPage priority={Priority.Backlog} />
    )
}

export default Backlog;