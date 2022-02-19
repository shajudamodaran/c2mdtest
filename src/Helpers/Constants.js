import AppoinmentHistory from "../components/AppoinmentHistory/AppoinmentHistory";
import Faq from "../components/FAQ/Faq";
import TermsandConditions from "../components/TermsandConditions";
import SeparatePrivacy from "../components/TermsandConditions/SeparatePrivacy";
import SeparateTerms from "../components/TermsandConditions/SeparateTerms";


export const DASHBOARD_LEFT_OPTIONS=[
    {
        tittle:"MY APPOINTMENT",
        options:[
            {
                name:"Book a consultation",
                ico:<i class="fal fa-book-medical"></i>,
                component:null,
                date:"10, February, 2021 - Wednesday"
            },
            {
                name:"Appointment History",
                component:<AppoinmentHistory/>,
                ico:<i class="fal fa-calendar-check"></i>
            },
        ]
    },
    {
        tittle:"SETTINGS",
        options:[
            {
                name:"Terms and Conditions",
                ico:<i class="fal fa-clipboard-list"></i>,
                component:<SeparateTerms typeId='terms'/>
            },
            {
                name:"Privacy Policy",
                ico:<i class="fal fa-user-secret"></i>,
                component:<SeparatePrivacy typeId="privacy"/>
            },
            {
                name:"FAQ",
                ico:<i class="fal fa-question"></i>,
                component:<Faq typeId="privacy"/>
            },
        ]
    },
    
    
]
