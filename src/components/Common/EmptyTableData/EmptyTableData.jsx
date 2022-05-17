import React from 'react'
import { ClipLoader, PuffLoader } from 'react-spinners'
import { FolderEmpty } from '../../../assets/Logos/Icons'

function EmptyTableData({ isLoading }) {
    return (
        <div className="empty-table-data top-margin-50">
            <div className="empty-table-body" >
                {
                    isLoading ?

                        <PuffLoader color={"#ffffff"} loading={true} size={120} />
                        :
                        <FolderEmpty />
                }

            </div>

            <div className="empty-table-footer">
                <span className="title">
                    {
                        isLoading ? "Loading data please wait..." : "No Results Found."
                    }
                </span>
                <span className="caption">
                    {
                        isLoading ? null : "Try adjusting your search or filter to find what you are looking for."
                    }
                </span>
            </div>
        </div>
    )
}

export default EmptyTableData