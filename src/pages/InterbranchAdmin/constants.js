import ConsolidatedReport from "../../components/ConsolidatedReport/ConsolidatedReport";
import Misreport from "../../components/MisReport/Misreport";
import TodaysReport from "../../components/TodaysReport/TodaysReport";

export const interbranchAdminSideMenu=[
    {
        tittle:"Dashboard",
        options:[
            {
                name:"Dashboard",
                ico:<i class="fal fa-book-medical"></i>,
                component:<TodaysReport/>,
                date:"10, February, 2021 - Wednesday"
            },
           
            
        ]
    },
    {
        tittle:"MIS REPORTS",
        options:[
            // {
            //     name:"Today's Report",
            //     ico:<i class="fal fa-book-medical"></i>,
            //     component:<TodaysReport/>,
            //     date:"10, February, 2021 - Wednesday"
            // },
            {
                name:"Detailed Report",
                ico:<i class="far fa-calendar-alt"></i>,
                component:<Misreport/>

            },
            {
                name:"Consolidate Report",
                ico:<i class="far fa-file-alt"></i>,
                component:<ConsolidatedReport/>

            },
            
        ]
    },
    
    
]
