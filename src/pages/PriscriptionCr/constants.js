import ConsolidatedReport from "../../components/ConsolidatedReport/ConsolidatedReport";
//import Misreport from "../../components/MisReport/Misreport";
 import PrescriptionDashboard from "../../components/PrescriptionDashboard/prescriptionDashboard";
//import TodaysReport from "../../components/TodaysReport/TodaysReport";
import TemplateList from "../../components/PrescriptionTemplateList/prescriptionTemplateList";
import TodaysReport from "../../components/TodaysReport/TodaysReport";

export const prescriptionAdminSideMenu=[
    {
        tittle:"Dashboard",
        options:[
            {
                name:"Dashboard",
                ico:<i class="fal fa-book-medical"></i>,
            
                component:<prescriptionTemplateList/>,
                date:"10, February, 2021 - Wednesday"
            },
           
            
        ]
    },
    {
        tittle:" Template",
        options:[
            // {
            //     name:"Today's Report",
            //     ico:<i class="fal fa-book-medical"></i>,
            //     component:<TodaysReport/>,
            //     date:"10, February, 2021 - Wednesday"
            // },
            {
                name:"Create Template",
                ico:<i class="far fa-file-alt"></i>,
                component:<ConsolidatedReport/>

            },
            {
                name:"Edit / View",
                ico:<i class="far fa-calendar-alt"></i>,
                component:<TemplateList/>

            },
           
            
        ]
    },
    
    
]
