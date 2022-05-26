import React from 'react'
import { AndroidIcon, IphoneIcon, QrCode } from '../../../../../assets/Logos/Icons'


function DownloadQrCode({variant, text}) {
    return (
        <div className={`c2md-download-app-qr ${variant}`}>
            <div className="c2md-download-app-qr_qrcode">
                <QrCode />
            </div>

            <div className='d-flex flex-column'>
                <span>{text}</span>
                <span className='c2md-download-app-qr_qrcode_caption'>Download Our App :

                    <div className="c2md-download-app-qr_qrcode_caption_icon"> <IphoneIcon size={22} /></div>
                    <div className="c2md-download-app-qr_qrcode_caption_icon"> <AndroidIcon size={22} /></div>


                </span>
            </div>
        </div>
    )
}

export default DownloadQrCode