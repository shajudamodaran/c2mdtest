import React from 'react'
import { ClipLoader, PuffLoader } from 'react-spinners'
import { FolderEmpty } from '../../../assets/Logos/Icons'

function EmptyTableData({ isLoading,marginTop }) {
    return (
        <div className="empty-table-data top-margin-50">
            <div className="empty-table-body" style={{
                height:isLoading&&70,
                width:isLoading&&70
            }} >
                {
                    isLoading ?

                        <PuffLoader color={"#ffffff"} loading={true} size={70} />
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