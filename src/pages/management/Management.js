import ManagementDepartment from "./ManagementDepartment";
import ManagementMenu from './ManagementMenu'

function Management(){
    return (
        <div style={{display: 'flex'}}>
            <ManagementMenu />
            <ManagementDepartment />
        </div>
    )
}
export default Management;