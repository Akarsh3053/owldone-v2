import PriorityPage from "@/components/PriorityPage"
import { Priority } from "@/store/api"

const Medium = () => {
    return (
        <PriorityPage priority={Priority.Medium} />
    )
}

export default Medium;