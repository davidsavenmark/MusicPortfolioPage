import { FunctionComponent } from "react"
import { IService } from "../type"


const ServiceCard: FunctionComponent<{ service: IService }> = ({
    service: { Icon, about, title },
}) => {
    return (

        <div className="p-2 flex items-center space-x-4">
            <Icon className="w-12 h-12 text-blue-400"/>
            <div>
                <h4 className="font-bold">
                    {title}
                    <p>{about}</p>
                </h4>
            </div>
        </div>

    )
}

export default ServiceCard