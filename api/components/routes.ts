import config from '../config/config';
export const domainRouteTable = [
    {route: 'careers.garp.com', dest: 'https://www.garp.org/#!/careers'}
];

export const routeTable = [
    {route: '/fsa', dest: 'https://www.garp.org/#!/events/fsa-garp-global-risk-forum/a2h1W000007alJ3'},
    {route: '/fsa-rsvp', dest: 'https://my.garp.org/sfdcApp#!/rsvp/a2h1W000007alJ3QAI'},
    {route: '/community', dest: '/#!/membership#connect'},
    {
        route: '/riskradio',
        dest: 'https://www.garp.org/#!/risk-convention?utm_content=30spot&utm_source=sirius&utm_medium=ooh&utm_campaign=convention18&utm_term=sirius'
    },
    {route: '/riskconvention', dest: 'https://www.garp.org/#!/risk-convention'},
    {route: '/frm/frm-program/frm-committee.aspx', dest: '/#!/frm/frequently-asked-questions#frm-committee'},
    {route: '/risk-convention-master-classes', dest: '/#!/risk-convention#master-classes'},
    {route: '/frr/', dest: '/#!/courses/financial-risk-and-regulation'},
    {route: '/FAQ-ERP', dest: '/#!/erp/frequently-asked-questions'},
    {route: '/FAQ-FRM', dest: '/#!/frm/frequently-asked-questions'},
    {route: '/press_room', dest: '/#!/about/press-room'},
    {route: '/contact_us', dest: '/#!/about/contact-us'},
    {route: '/terms', dest: '/#!/about/terms'},
    {route: '/buy_side_risk_managers_forum', dest: '/#!/about/privacy-policy'},
    {route: '/privacy_policy', dest: '/#!/about/privacy-policy'},
    {route: '/code_of_conduct', dest: '/#!/about/code-of-conduct'},
    {route: '/bylaws', dest: '/#!/about/risk-manager-of-the-year'},
    {route: '/board_of_trustees', dest: '/#!/about/board-of-trustees'},
    {route: '/rmoty_list', dest: '/#!/about/risk-manager-of-the-year'},
    {route: '/chapters', dest: '/#!/membership/chapters'},
    {route: '/careercenter', dest: 'https://careers.garp.com/home/index.cfm?site_id=9349'},
    {route: '/benefits', dest: '/#!/membership'},
    {route: '/rmc2016', dest: 'https://www.cvent.com/d/vrqc8x'},
    {route: '/cpe', dest: '/#!/cpd'},
    {route: '/risk-education', dest: '/#!/institutional/'},
    {route: '/risk-news-and-resources', dest: '/#!/risk_intelligence'},
    {route: '/garp', dest: '/#!/about'},
    {route: '/webcast', dest: 'https://www.garp.org/#!/risk_intelligence_browse/all/Webcast/all'},
    {route: '/gwbookstore', dest: '/#!/membership/wiley-bookstore'},
    {route: '/membership/chapters/global-chapter-network/professional-chapters-and-directors.aspx', dest: '/#!/chapters/'},

    {route: 'https://www.garp.org/login.aspx', dest: 'https://my.garp.org/Login'},
    {route: '/membership/profile.aspx', dest: 'https://my.garp.org/Login'},
    {route: '/quicklinks.aspx', dest: '/#!/frm/frequently-asked-questions'},
    {route: '/garp/board-of-trustees.aspx', dest: '/#!/about/board-of-trustees'},
    {route: '/garp/contact-us.aspx', dest: '/#!/contact_us/'},
    {route: '/frm/register/register.aspx', dest: config.SFDC_PORTAL_URL + '/sfdcApp#!/public_registration/frm'},
    {route: '/erp/register/register.aspx', dest: config.SFDC_PORTAL_URL + '/sfdcApp#!/public_registration/erp'},
    {route: '/frm/exam-overview/key-deadlines.aspx', dest: '/#!/FAQ/'},
    {route: '/erp/exam-overview/key-deadlines.aspx', dest: '/#!/FAQ/erp_deadline#erp_deadline'},
    {route: '/erp/exam-overview/exam-format.aspx', dest: '/#!/erp_program_exams/'},
    {route: '/erp/exam-overview/exam-sites.aspx', dest: '/#!/exam_sites/'},
    {route: '/frm/exam-overview/exam-sites.aspx', dest: '/#!/exam_sites/'},
    {route: '/erp/study-center/recommended-study-plans.aspx', dest: '/#!/erp_study_materials/'},
    {route: '/erp/exam-overview/fees.aspx', dest: '/#!/erp_fees_payments/'},
    {route: '/frm/exam-overview/fees.aspx', dest: '/#!/frm_fees_payments/'},
    {route: '/frm/exam-overview/certification-requirements/qualifying-job-titles.aspx', dest: '/#!/frm/'},
    {route: '/erp/erp-program.aspx', dest: '/#!/erp/'},
    {route: '/erp/exam-overview.aspx', dest: '/#!/erp/'},
    {route: '/erp/exam-overview/fees.aspx', dest: '/#!/erp_fees_payment/'},
    {route: '/erp/study-center.aspx', dest: '/#!/erp_study_materials/'},
    {route: '/erp/study-center/study-materials.aspx', dest: '/#!/erp_program_exams/'},
    {route: '/events/16th-annual-risk-management-convention/event-summary-2c3043075935478683349d52cbfff2e9.aspx', dest: '/#!/events/'},
    {route: '/events/about-events.aspx', dest: '/#!/events/'},
    {route: '/events/chapter-meetings.aspx', dest: '/#!/membership/chapters'},
    {route: '/events/conferences.aspx', dest: '/#!/events'},
    {route: '/frm/career-benefits.aspx', dest: '/#!/frm'},
    {route: '/frm/certified-frm-resources.aspx', dest: '/#!/frm'},
    {route: '/frm/certified-frm-resources/receiving-your-certificate.aspx', dest: '/#!/frm'},
    {route: '/frm/certified-frm-resources/verify-your-professional-experience.aspx', dest: '/#!/frm'},
    {route: '/frm/exam-overview.aspx', dest: '/#!/frm/program-exams'},
    {route: '/frm/exam-overview/after-registration.aspx', dest: '/#!/frm/program-exams'},
    {route: '/frm/exam-overview/after-the-exam.aspx', dest: '/#!/frm/'},
    {route: '/frm/exam-overview/certification-requirements.aspx', dest: '/#!/frm/'},
    {route: '/frm/exam-overview/certification-requirements/qualifying-job-titles.aspx', dest: '/#!/frm/program-exams'},
    {route: '/frm/exam-overview/exam-day-information.aspx', dest: '/#!/frm/program-exams'},
    {route: '/frm/exam-overview/exam-format.aspx', dest: '/#!/frm/program-exams'},
    {route: '/frm/exam-overview/exam-sites.aspx', dest: '/#!/frm/program-exams'},
    {route: '/frm/exam-overview/exam-sites.aspx?p=2', dest: '/#!/frm/program-exams'},
    {route: '/frm/exam-overview/fees.aspx', dest: '/#!/frm/study-materials'},
    {route: '/frm/exam-overview/fees/payment-options.aspx', dest: '/#!/frm/fees-payments'},
    {route: '/frm/exam-overview/fees/scholarship-program.aspx', dest: '/#!/erp/fees-payments'},
    {route: '/frm/exam-overview/key-deadlines.aspx', dest: '/#!/frm/program-exams'},
    {route: '/frm/exam-overview/sample-questions.aspx', dest: '/#!/frm/study-materials'},
    {route: '/frm/exam-overview/testing-policies-and-procedures.aspx', dest: '/#!/frm/frequently-asked-questions'},
    {route: '/frm/exam-overview/testing-policies-and-procedures/calculator-policies.aspx', dest: '/#!/frm'},
    {route: '/frm/exam-overview/topic-areas.aspx', dest: '/#!/frm/program-exams'},
    {route: '/frm/exam-results/exam-results.aspx', dest: '/#!/frm'},
    {route: '/frm/exam-results/frm-past-exam-result.aspx', dest: '/#!/frm'},
    {route: '/frm/faqs.aspx', dest: '/#!/frm/frequently-asked-questions'},
    {route: '/frm/faqs/more-faqs.aspx', dest: '/#!/frm/frequently-asked-questions'},
    {route: '/frm/frm-program.aspx', dest: '/#!/frm/frequently-asked-questions'},
    {route: '/frm/frm-program.aspx?sctp=PPC&scvn=Baidu&scsrc=Baidu_Search&sckw=frm', dest: '/#!/frm'},
    {route: '/frm/frm-program.aspx?sctp=PPC&scvn=Google&scsrc=Google_Search&sckw=frm', dest: '/#!/frm/study-materials'},
    {route: '/frm/frm-program/about-the-frm-program.aspx', dest: '/#!/frm'},
    {route: '/frm/frm-program/career-opportunities.aspx', dest: '/#!/frm'},
    {route: '/frm/frm-program/frm-videos/study-strategies.aspx', dest: '/#!/frm/program-exams'},
    {route: '/frm/frm-program/frm-videos/the-frm-program.aspx', dest: '/#!/frm'},
    {route: '/frm/frm-program/meet-certified-frms.aspx', dest: '/#!/frm'},
    {route: '/frm/frm-program/program-roadmap.aspx', dest: '/#!/frm'},
    {route: '/frm/frm-program/top-employers.aspx', dest: '/#!/frm'},
    {route: '/frm/proctor-registration.aspx', dest: '/#!/frm/frequently-asked-questions'},
    {route: '/frm/register/register.aspx', dest: '/#!/registration/'},
    {route: '/frm/register/register.aspx?action=11', dest: '/#!/registration/'},
    {route: '/frm/register/register.aspx?action=2&option=1', dest: '/#!/registration/'},
    {route: '/frm/register/register.aspx?action=5&option=0', dest: '/#!/registration/'},
    {route: '/frm/register/register.aspx?action=6&error=13', dest: '/#!/registration/'},
    {route: '/frm/register/registerinvview.aspx?action=17', dest: '/#!/registration/'},
    {route: '/frm/register/registerinvview.aspx?action=6', dest: '/#!/registration/'},
    {route: '/frm/register/registration-closed.aspx', dest: '/#!/registration/'},
    {route: '/frm/register/ticket-frmparti-exam.aspx', dest: '/#!/registration/'},
    {route: '/frm/register/ticket-frmpartii-exam.aspx', dest: '/#!/registration/'},
    {route: '/frm/study-center.aspx', dest: '/#!/frm/study-materials'},
    {route: '/frm/study-center/aim-statements.aspx', dest: '/#!/frm/study-materials'},
    {route: '/frm/study-center/exam-preparation-providers.aspx', dest: '/#!/frm/exam-preparation-providers'},
    {route: '/erp/study-center/exam-preparation-providers.aspx', dest: '/#!/erp/exam-preparation-providers'},
    {route: '/frm/study-center/practice-exams.aspx', dest: '/#!/frm/study-materials'},
    {route: '/frm/study-center/study-guide.aspx', dest: '/#!/frm/study-materials'},
    {route: '/frm/study-center/study-materials.aspx', dest: '/#!/frm/study-materials'},
    {route: '/frm/study-center/study-materials/2015-frm-study-guide.aspx', dest: '/#!/frm/study-materials'},
    {route: '/frm/study-center/study-materials/frm-candidate-guide.aspx', dest: '/#!/frm/study-materials'},
    {route: '/frm/study-center/study-materials/frm-exam-preparation-handbook.aspx', dest: '/#!/frm/study-materials'},
    {route: '/frm/study-center/study-materials/sample-frm-practice-exam.aspx', dest: '/#!/frm/study-materials'},
    {route: '/garp/about-garp.aspx', dest: '/#!/about'},
    {route: '/garp/contact-us.aspx', dest: '/#!/frm/study-materials'},
    {route: '/home.aspx', dest: '/#!/'},
    {route: '/home/frm.aspx', dest: '/#!/frm'},
    {route: '/login.aspx?errlogin=1&ReturnUrl=/frm/register/register.aspx', dest: '/#!/'},
    {route: '/membership/about-membership.aspx', dest: '/#!/membership'},
    {route: '/membership/directory/member-search-results.aspx', dest: '/#!/directory/'},
    {route: '/membership/member-benefits.aspx', dest: '/#!/membership'},
    {route: '/membership/overview/log-in.aspx?ReturnUrl=/', dest: '/#!/membership'},
    {route: '/membership/overview/log-in.aspx?ReturnUrl=/frm/exam-results/exam-results.aspx', dest: '/#!/membership'},
    {route: '/membership/overview/log-in.aspx?ReturnUrl=/frm/frm-program.aspx', dest: '/#!/membership'},
    {route: '/membership/overview/log-in.aspx?ReturnUrl=/frm/register/ticket-frmparti-exam.aspx', dest: '/#!/membership'},
    {route: '/membership/overview/log-in.aspx?ReturnUrl=/membership/overview/retrieve-password.aspx', dest: '/#!/membership'},
    {route: '/membership/overview/log-in.aspx?ReturnUrl=/membership/profile.aspx', dest: '/#!/membership'},
    {route: '/membership/overview/registration_new.aspx?regtype=1', dest: '/#!/membership'},
    {route: '/membership/overview/registration_new.aspx?regtype=2', dest: '/#!/membership'},
    {route: '/membership/overview/registration_new.aspx?regtype=2re', dest: '/#!/membership'},
    {route: '/membership/overview/registrationstart.aspx', dest: '/#!/membership'},
    {route: '/membership/overview/retrieve-password.aspx', dest: '/#!/membership'},
    {route: '/quicklinks.aspx', dest: '/#!/'},
    {route: '/risk-education/about-risk-education.aspx', dest: '/#!/risk-intelligence'},
    {route: '/risk-education/certificate-programs.aspx', dest: '/#!/institutional/'},
    {route: '/risk-education/continuing-education.aspx', dest: '/#!/cpd'},
    {route: '/risk-education/risk-basics.aspx', dest: '/#!/risk-intelligence'},
    {route: '/risk-news-and-resources/departments.aspx', dest: '/#!/risk-intelligence'},
    {route: '/risk-news-and-resources/departments/news.aspx', dest: '/#!/risk-intelligence'},
    {route: '/risk-news-and-resources/webcasts/upcoming-webcasts.aspx', dest: '/#!/risk-intelligence'},
    {route: '/risk-news-and-resources/whitepapers/whitepapers.aspx', dest: '/#!/risk-intelligence'},
    {route: '/membership/erpcertifieddigitalbadge.aspx', dest: config.SFDC_PORTAL_URL + '/sfdcApp#!/public_directory/notfound'},
    {route: '/membership/frmcertifieddigitalbadge.aspx', dest: config.SFDC_PORTAL_URL + '/sfdcApp#!/public_directory/notfound'},
    {route: '/SME', dest: config.SFDC_PORTAL_URL + '/Login?start=smeregistration'}
];