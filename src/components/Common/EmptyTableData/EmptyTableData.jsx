import React from 'react'
import { FolderEmpty } from '../../../assets/Logos/Icons'

function EmptyTableData() {
    return (
        <div className="empty-table-data top-margin-50">
            <div className="empty-table-body">
                <FolderEmpty/>
            </div>

            <div className="empty-table-footer">
                <span className="title">No Results Found.</span>
                <span className="caption">Try adjusting your search or filter to find what you are looking for.</span>
            </div>
        </div>
    )
}

export default EmptyTableData