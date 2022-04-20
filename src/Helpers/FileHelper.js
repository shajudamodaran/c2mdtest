import jpgImage from '../assets/FileIcons/ic-jpg.svg'
import pdfImage from '../assets/FileIcons/ic-pdf.svg'
import pngImage from '../assets/FileIcons/ic-png.svg'
import fileIcon from '../assets/FileIcons/ic-file.svg'

import Assets from '../components/Layout/Assets'

let FILE_SCHEMA =
{
    "pdf": pdfImage,
    "jpg": jpgImage,
    "jpeg": jpgImage,
    "png": pngImage,
    "file":fileIcon
}



export let getFileTypeFromFileName = (fileName) => {

    if(fileName)
    {
        var fileExt = fileName.split('.').pop();
      
        if(fileExt)
        {
            let fileIcon=FILE_SCHEMA[fileExt.toLowerCase()]

            if(fileIcon)
            {
                return fileIcon
            }
            else{

                return FILE_SCHEMA.file
            }
           
        }
        else{

            return FILE_SCHEMA['file']
        }

    }

    return FILE_SCHEMA['file']

  
}