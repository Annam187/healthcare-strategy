export const workflows = {
  patientJourney: {
    id: 'patientJourney',
    title: 'Patient Journey',
    description: 'End-to-end lifecycle of a patient from first contact to post-care follow-up',
    color: '#00b4d8',
    steps: [
      {
        id: 1, name: 'Awareness & Access',
        icon: '🔍',
        description: 'Patient becomes aware of symptoms or preventive care need',
        actors: ['Patient', 'Primary Care Physician', 'Health Plan'],
        systems: ['Patient Portal', 'Health Plan App', 'Provider Directory'],
        painPoints: ['Finding in-network providers', 'Understanding coverage', 'Long wait times'],
        digitalOps: ['AI symptom checkers', 'Online provider search', 'Real-time availability'],
        kpis: ['Time to first appointment', 'No-show rate', 'Patient acquisition cost'],
        details: 'The patient journey begins with awareness — recognizing a health need. Digital touchpoints like telehealth portals, symptom checkers, and insurance apps are reshaping how patients first interact with the healthcare system.'
      },
      {
        id: 2, name: 'Registration & Intake',
        icon: '📋',
        description: 'Patient registers, provides demographics, insurance and medical history',
        actors: ['Patient', 'Front Desk Staff', 'Registration Specialist'],
        systems: ['EHR/EMR', 'Patient Registration System', 'Insurance Eligibility Tools'],
        painPoints: ['Redundant paperwork', 'Manual eligibility verification', 'Inaccurate data entry'],
        digitalOps: ['Digital intake forms', 'Real-time eligibility check', 'ID verification AI'],
        kpis: ['Registration time', 'Data accuracy rate', 'Eligibility denial rate'],
        details: 'Registration is a critical administrative step where data quality issues can cascade downstream into billing errors and care delays. Digital solutions like pre-visit form completion and automated insurance verification dramatically reduce friction.'
      },
      {
        id: 3, name: 'Triage & Assessment',
        icon: '🩺',
        description: 'Clinical staff assess severity and prioritize care based on patient condition',
        actors: ['Nurse', 'Triage Staff', 'Physician', 'PA/NP'],
        systems: ['EHR', 'Clinical Decision Support', 'Vitals Monitoring'],
        painPoints: ['Inconsistent triage protocols', 'ED overcrowding', 'Alert fatigue'],
        digitalOps: ['AI-assisted triage scoring', 'Predictive acuity models', 'IoT vitals capture'],
        kpis: ['Time to triage', 'Triage accuracy', 'Left Without Being Seen (LWBS) rate'],
        details: 'Triage determines care urgency and sets the tone for the entire clinical encounter. Standardized tools like ESI (Emergency Severity Index) and technology-enabled triage can improve throughput and reduce mortality risk.'
      },
      {
        id: 4, name: 'Diagnosis & Treatment Planning',
        icon: '🔬',
        description: 'Physician diagnoses condition and develops evidence-based treatment plan',
        actors: ['Physician', 'Specialist', 'Care Team', 'Pharmacist'],
        systems: ['EHR', 'Clinical Decision Support', 'PACS/Radiology', 'Lab Systems'],
        painPoints: ['Fragmented patient history', 'Information overload', 'Diagnostic delays'],
        digitalOps: ['AI diagnostic imaging', 'Predictive analytics', 'Integrated care records'],
        kpis: ['Diagnostic accuracy', 'Time to diagnosis', 'Readmission rate', 'Unnecessary tests'],
        details: 'This is the clinical core of care delivery. Access to complete, accurate patient data drives better diagnoses. Clinical Decision Support (CDS) tools embedded in EHRs can surface evidence-based guidelines and flag drug interactions in real time.'
      },
      {
        id: 5, name: 'Care Delivery & Treatment',
        icon: '💊',
        description: 'Execution of treatment plan across inpatient, outpatient, or virtual settings',
        actors: ['Physician', 'Nursing Staff', 'Allied Health', 'Patient'],
        systems: ['EHR', 'CPOE', 'Medication Administration', 'Surgical Systems'],
        painPoints: ['Medication errors', 'Care coordination gaps', 'Handoff failures'],
        digitalOps: ['CPOE with CDS', 'Barcode medication admin', 'Care pathway automation'],
        kpis: ['Medication error rate', 'Adverse events', 'Length of stay', 'Patient satisfaction'],
        details: 'Care delivery spans multiple settings and providers. Computerized Physician Order Entry (CPOE) with built-in decision support reduces medication errors. Integrated care teams with shared communication platforms improve handoffs and patient safety.'
      },
      {
        id: 6, name: 'Discharge & Transition',
        icon: '🏥',
        description: 'Safe discharge planning ensuring continuity of care post-hospitalization',
        actors: ['Care Coordinator', 'Social Worker', 'Patient', 'Caregiver'],
        systems: ['EHR', 'Care Transition Tools', 'Patient Education Systems'],
        painPoints: ['Incomplete discharge instructions', 'Lack of follow-up', 'Readmissions'],
        digitalOps: ['Automated discharge summaries', 'Digital patient education', 'RPM setup'],
        kpis: ['30-day readmission rate', 'Discharge instruction compliance', 'Transition of care time'],
        details: 'Discharge is a high-risk transition point. Poor discharge planning is a leading cause of avoidable readmissions. Digital discharge planning tools, medication reconciliation, and automated follow-up scheduling significantly reduce preventable readmissions.'
      },
      {
        id: 7, name: 'Post-Care & Follow-Up',
        icon: '📱',
        description: 'Ongoing monitoring, follow-up appointments and chronic disease management',
        actors: ['Patient', 'PCP', 'Care Manager', 'Remote Monitoring Team'],
        systems: ['Patient Portal', 'RPM Devices', 'Chronic Care Management Tools'],
        painPoints: ['Low engagement', 'Care gaps', 'Medication non-adherence'],
        digitalOps: ['Remote Patient Monitoring', 'Patient engagement apps', 'AI care gap detection'],
        kpis: ['Follow-up adherence', 'Care gap closure', 'Patient activation measure', 'Outcomes'],
        details: 'Post-acute care management is where value-based care models have the greatest impact. Remote Patient Monitoring (RPM), patient portals, and AI-driven outreach programs help manage chronic conditions and prevent deterioration.'
      }
    ]
  },

  rcm: {
    id: 'rcm',
    title: 'Revenue Cycle Management (RCM)',
    description: 'Financial lifecycle of a healthcare claim from service delivery to payment collection',
    color: '#10b981',
    steps: [
      { id: 1, name: 'Patient Access & Scheduling', icon: '📅', description: 'Pre-visit financial clearance, eligibility verification and pre-authorization', actors: ['Scheduler', 'Patient Access Rep', 'Insurance'], systems: ['Scheduling System', 'Eligibility Verification', 'Prior Auth Tools'], painPoints: ['Prior auth denials', 'Incorrect eligibility', 'Scheduling errors'], digitalOps: ['Automated prior auth', 'Real-time eligibility', 'AI scheduling'], kpis: ['Auth denial rate', 'Eligibility accuracy', 'Schedule fill rate'], details: 'Patient access is the gateway to the revenue cycle. Getting financial clearance right before the visit prevents costly rework downstream. Automated prior authorization tools can reduce denial rates by 30-40%.' },
      { id: 2, name: 'Charge Capture', icon: '💰', description: 'Accurate recording of all services rendered for billing purposes', actors: ['Physician', 'Coder', 'CDI Specialist'], systems: ['EHR', 'Charge Capture System', 'CDI Platform'], painPoints: ['Missed charges', 'Undercoding', 'Overcoding compliance risk'], digitalOps: ['AI charge capture', 'Real-time coding assistance', 'CDI automation'], kpis: ['Charge lag time', 'Missed charges %', 'Coding accuracy rate'], details: 'Charge capture bridges clinical care and billing. Every service, supply, and procedure must be documented and coded accurately. AI-powered charge capture tools can identify missed charges and flag documentation gaps in real time.' },
      { id: 3, name: 'Medical Coding', icon: '🏷️', description: 'Translation of clinical documentation into ICD-10, CPT, and HCPCS codes', actors: ['Medical Coder', 'CDI Specialist', 'Physician Advisor'], systems: ['Coding Software', 'Encoder', 'CAC Tools'], painPoints: ['Coding errors', 'Coder shortage', 'Complex documentation'], digitalOps: ['Computer Assisted Coding (CAC)', 'NLP documentation review', 'Coding AI'], kpis: ['Coding accuracy', 'Coder productivity', 'DRG optimization rate'], details: 'Medical coding is highly specialized and directly impacts reimbursement. ICD-10 has 70,000+ codes. Computer Assisted Coding (CAC) powered by NLP can improve coder productivity by 20-30% while maintaining accuracy.' },
      { id: 4, name: 'Claims Submission', icon: '📤', description: 'Submission of clean claims to payers via electronic clearinghouses', actors: ['Billing Team', 'Clearinghouse', 'Payer'], systems: ['Practice Management System', 'Clearinghouse', '835/837 EDI'], painPoints: ['Claim rejections', 'Missing information', 'Duplicate claims'], digitalOps: ['Pre-submission claim scrubbing', 'EDI automation', 'Real-time claim status'], kpis: ['Clean claim rate', 'First-pass acceptance rate', 'Days to submission'], details: 'Clean claim submission is the goal — a claim that passes all edits and is accepted by the payer without rejection. Clearinghouses act as intermediaries, scrubbing claims against payer rules before submission.' },
      { id: 5, name: 'Payment Posting', icon: '💳', description: 'Recording payments, adjustments and denials from payers and patients', actors: ['Payment Poster', 'AR Specialist'], systems: ['Practice Management', 'ERA/EOB Processing', 'Patient Ledger'], painPoints: ['Manual posting errors', 'Unidentified payments', 'Unapplied credits'], digitalOps: ['ERA auto-posting', 'AI remittance matching', 'Automated reconciliation'], kpis: ['Auto-posting rate', 'Unapplied cash %', 'Payment variance'], details: 'Payment posting translates EOBs (Explanation of Benefits) into financial transactions. Electronic Remittance Advice (ERA) auto-posting can handle 80%+ of payment postings, freeing staff for complex exceptions.' },
      { id: 6, name: 'Denial Management', icon: '⚠️', description: 'Identification, tracking and appeals of denied or underpaid claims', actors: ['Denial Specialist', 'AR Manager', 'Physician Advisor'], systems: ['Denial Tracking System', 'Appeal Management', 'Analytics Platform'], painPoints: ['High denial rates', 'Timely filing limits', 'Complex appeal processes'], digitalOps: ['Predictive denial analytics', 'Automated appeals', 'Root cause analysis AI'], kpis: ['Denial rate', 'Appeal success rate', 'Denial recovery rate', 'DNFB'], details: 'The average denial rate across US hospitals is 10-15% of claims. Proactive denial prevention and systematic appeals processes are essential. Predictive analytics can flag claims likely to be denied before submission.' },
      { id: 7, name: 'Patient Collections', icon: '🤝', description: 'Collecting patient-responsible balances through billing and payment plans', actors: ['Patient Financial Counselor', 'Collections Team', 'Patient'], systems: ['Patient Billing', 'Payment Portal', 'Financial Assistance Tools'], painPoints: ['Rising patient responsibility', 'Bad debt', 'Patient financial hardship'], digitalOps: ['Digital payment portals', 'Propensity-to-pay scoring', 'Price transparency tools'], kpis: ['Patient collection rate', 'Days in AR', 'Bad debt %', 'Net collection rate'], details: 'Patient out-of-pocket costs have risen 50%+ in the last decade. Patient-friendly billing — clear statements, multiple payment options, and proactive financial counseling — is critical for both collections and patient satisfaction.' }
    ]
  },

  clinicalOps: {
    id: 'clinicalOps',
    title: 'Clinical Operations',
    description: 'Day-to-day operational workflows driving care delivery efficiency',
    color: '#8b5cf6',
    steps: [
      { id: 1, name: 'Staffing & Scheduling', icon: '👥', description: 'Optimal nurse and physician staffing based on patient census and acuity', actors: ['Nurse Manager', 'Scheduler', 'HR'], systems: ['Staffing Software', 'EHR Census', 'Time & Attendance'], painPoints: ['Nursing shortages', 'Overtime costs', 'Float pool management'], digitalOps: ['Predictive census modeling', 'AI staffing optimization', 'Dynamic scheduling'], kpis: ['Nurse-to-patient ratio', 'Overtime rate', 'Agency staff spend', 'Turnover rate'], details: 'Healthcare staffing represents 50-60% of total operating costs. Predictive analytics can match staffing to forecasted patient volume, reducing both understaffing safety risks and costly overtime.' },
      { id: 2, name: 'Bed Management', icon: '🛏️', description: 'Real-time tracking and optimization of inpatient bed availability', actors: ['Bed Coordinator', 'Charge Nurse', 'Transfer Center'], systems: ['Bed Management System', 'EHR', 'Patient Flow Dashboard'], painPoints: ['ED boarding', 'Delayed discharges', 'Transfer coordination'], digitalOps: ['Real-time bed board', 'Predictive discharge planning', 'Automated patient placement'], kpis: ['Bed occupancy rate', 'Average length of stay', 'Boarding hours', 'Bed turnaround time'], details: 'Bed management is the operational heartbeat of a hospital. Real-time visibility into bed availability, patient status, and anticipated discharges enables better patient flow and reduces costly ED diversion.' },
      { id: 3, name: 'OR Scheduling & Management', icon: '⚕️', description: 'Surgical case scheduling, block time management and OR utilization optimization', actors: ['OR Scheduler', 'Surgeon', 'Anesthesiologist', 'OR Charge Nurse'], systems: ['OR Management System', 'Anesthesia Information System', 'Supply Chain'], painPoints: ['First case on-time starts', 'Case overruns', 'Block time waste'], digitalOps: ['Predictive case duration', 'OR analytics dashboard', 'Digital preference cards'], kpis: ['OR utilization rate', 'First case on-time starts', 'Turnover time', 'Case cancellation rate'], details: 'The OR is the highest revenue-generating department in a hospital but also the most expensive to operate (~$100/minute). Optimizing block time utilization and reducing turnaround time directly impacts profitability.' },
      { id: 4, name: 'Supply Chain & Inventory', icon: '📦', description: 'Management of clinical supplies, implants and pharmaceutical inventory', actors: ['Supply Chain Manager', 'Materials Management', 'Clinical Staff'], systems: ['ERP/Supply Chain', 'Inventory Management', 'GPO Systems'], painPoints: ['Stockouts during COVID', 'Preference card waste', 'Contract compliance'], digitalOps: ['RFID inventory tracking', 'AI demand forecasting', 'Automated reorder systems'], kpis: ['Supply cost per case', 'Stockout rate', 'Contract compliance rate', 'Days on hand'], details: 'Healthcare supply chain management gained enormous attention post-COVID. Hospitals spend 25-35% of revenue on supplies. AI-driven demand forecasting and RFID tracking can reduce supply waste by 15-25%.' },
      { id: 5, name: 'Quality & Safety Monitoring', icon: '✅', description: 'Continuous monitoring of clinical quality metrics, safety events and compliance', actors: ['Quality Team', 'Patient Safety Officer', 'CNO', 'CMO'], systems: ['Quality Reporting Platform', 'Event Reporting', 'Clinical Analytics'], painPoints: ['Near-miss underreporting', 'Regulatory burden', 'Benchmark gaps'], digitalOps: ['Real-time quality dashboards', 'Predictive risk models', 'Automated regulatory reporting'], kpis: ['HAI rate', 'HCAHPS scores', 'Core measures compliance', 'Serious safety events'], details: 'Quality monitoring is both a regulatory requirement and a patient safety imperative. CMS value-based purchasing programs tie 2% of Medicare payments to quality performance. Real-time dashboards enable proactive intervention.' },
      { id: 6, name: 'Care Coordination', icon: '🔗', description: 'Multidisciplinary coordination across care teams, settings and transitions', actors: ['Care Coordinator', 'Social Worker', 'Case Manager', 'PCP', 'Specialist'], systems: ['Care Management Platform', 'HIE', 'Secure Messaging'], painPoints: ['Fragmentation between specialties', 'Information silos', 'Transition failures'], digitalOps: ['Unified care plan platform', 'HIE connectivity', 'Care gap analytics'], kpis: ['Care plan completion rate', 'Referral close rate', '30-day readmission', 'Care gap closure'], details: 'Care coordination is the connective tissue of the healthcare system. With 40% of Medicare patients having 5+ chronic conditions, coordinating care across providers is essential to avoiding duplication, errors, and gaps in care.' }
    ]
  },

  valueBasedCare: {
    id: 'valueBasedCare',
    title: 'Value-Based Care (VBC) Model',
    description: 'Shift from fee-for-service to outcomes-based payment models',
    color: '#f59e0b',
    steps: [
      { id: 1, name: 'Population Health Identification', icon: '🎯', description: 'Identify and risk-stratify patient populations for targeted interventions', actors: ['Population Health Manager', 'Data Analyst', 'CMO'], systems: ['Population Health Platform', 'Claims Analytics', 'EHR'], painPoints: ['Incomplete data', 'Attribution complexity', 'Stratification accuracy'], digitalOps: ['AI risk stratification', 'Social determinants integration', 'Predictive modeling'], kpis: ['Risk stratification accuracy', 'Attribution rate', 'High-risk patient identification'], details: 'Population health management starts with knowing your population. Risk stratification models using claims, clinical, and social determinants of health data identify who needs proactive intervention before they become high-cost patients.' },
      { id: 2, name: 'Quality Measurement & Reporting', icon: '📊', description: 'Track HEDIS, CAHPS and CMS quality measures for payer contracts', actors: ['Quality Analyst', 'Population Health', 'Compliance'], systems: ['Quality Measurement Platform', 'HEDIS Engine', 'CMS Reporting Tools'], painPoints: ['Multiple measure sets', 'Data gaps', 'Attribution lag'], digitalOps: ['Automated HEDIS measurement', 'Real-time quality tracking', 'Gap closure workflows'], kpis: ['HEDIS measure performance', 'Stars rating', 'Quality bonus payments'], details: 'HEDIS (Healthcare Effectiveness Data and Information Set) contains 90+ measures spanning preventive care, chronic disease management, and access to care. Strong performance drives higher reimbursement under value-based contracts.' },
      { id: 3, name: 'Care Gap Closure', icon: '🔧', description: 'Proactive outreach and interventions to close preventive and chronic care gaps', actors: ['Care Manager', 'Patient', 'PCP', 'Pharmacist'], systems: ['Care Gap Engine', 'Patient Outreach Platform', 'Scheduling'], painPoints: ['Patient no-shows', 'Low engagement', 'Multiple gap types'], digitalOps: ['AI-driven outreach', 'Predictive engagement scoring', 'Omni-channel communication'], kpis: ['Care gap closure rate', 'Preventive visit rate', 'Mammography rate', 'HbA1c control'], details: 'Care gaps represent missed preventive or chronic care services — a mammogram not done, an HbA1c not checked. Closing care gaps improves patient outcomes and quality scores. AI-powered outreach can prioritize which patients to contact and through which channel.' },
      { id: 4, name: 'Utilization Management', icon: '📉', description: 'Manage appropriate use of services to eliminate waste and overutilization', actors: ['UM Nurse', 'Medical Director', 'Case Manager', 'Payer'], systems: ['UM Platform', 'InterQual/MCG Criteria', 'Prior Auth System'], painPoints: ['Unnecessary ER visits', 'Avoidable admissions', 'Physician pushback'], digitalOps: ['Predictive utilization models', 'Automated level-of-care determination', 'Care pathway analytics'], kpis: ['Avoidable ER visits', 'Inpatient admission rate', 'Readmission rate', 'OP to IP ratio'], details: 'Utilization management ensures patients receive the right care in the right setting. Moving appropriate care to less costly settings (ED→urgent care, IP→OP) is a primary driver of cost savings in value-based contracts.' },
      { id: 5, name: 'Network Performance & Analytics', icon: '🌐', description: 'Monitor provider network performance, costs and outcomes to drive improvement', actors: ['Network Analyst', 'CMO', 'CFO', 'Contract Team'], systems: ['Network Analytics Platform', 'Benchmarking Tools', 'Contract Management'], painPoints: ['Outlier providers', 'Network leakage', 'Data silos'], digitalOps: ['Provider scorecards', 'Network adequacy analytics', 'Referral pattern analysis'], kpis: ['Network leakage rate', 'Provider quality scores', 'Total cost of care PMPM', 'PMPY trends'], details: 'Network performance analytics identify high-performing vs. high-cost providers, network leakage (patients going out-of-network), and opportunities to improve care protocols across provider groups.' },
      { id: 6, name: 'Financial Reconciliation & Shared Savings', icon: '🏆', description: 'Calculate and distribute shared savings or risk arrangements with providers', actors: ['Finance Team', 'Actuary', 'Provider Relations', 'Executive Team'], systems: ['Financial Analytics', 'Actuarial Models', 'Contract Administration'], painPoints: ['Benchmark methodology disputes', 'Attribution disagreements', 'Timing of reconciliation'], digitalOps: ['Real-time cost tracking', 'Predictive shared savings models', 'Automated reconciliation'], kpis: ['Shared savings amount', 'Total cost of care vs benchmark', 'MLR', 'Risk-adjusted performance'], details: 'Value-based care ultimately reconciles total cost of care against benchmarks. ACO REACH, MSSP, and commercial VBC contracts all use different methodologies but share the goal of rewarding efficient, high-quality care.' }
    ]
  }
};

export const stakeholders = [
  {
    id: 'patient', name: 'Patient / Consumer', icon: '👤', color: '#00b4d8',
    category: 'Core',
    description: 'The central stakeholder whose health outcomes, experience, and financial responsibility continue to expand',
    goals: ['Accessible, affordable care', 'Quality outcomes', 'Seamless experience', 'Privacy protection'],
    painPoints: ['High out-of-pocket costs', 'Care fragmentation', 'Health literacy gaps', 'Access barriers'],
    digitalNeeds: ['Patient portal', 'Mobile health apps', 'Telehealth', 'Price transparency'],
    influence: 'High',
    trend: 'Consumerism is increasing patient expectations and choice'
  },
  {
    id: 'provider', name: 'Providers (Physicians/NPs)', icon: '🩺', color: '#10b981',
    category: 'Clinical',
    description: 'Clinicians delivering direct patient care; increasingly employed by large health systems',
    goals: ['Clinical autonomy', 'Work-life balance', 'Administrative burden reduction', 'Accurate reimbursement'],
    painPoints: ['EHR documentation burden', 'Prior auth delays', 'Burnout', 'Alert fatigue'],
    digitalNeeds: ['Ambient AI documentation', 'CDS tools', 'Voice assistants', 'Streamlined workflows'],
    influence: 'Very High',
    trend: 'Physician shortage and burnout driving adoption of AI assistants'
  },
  {
    id: 'hospital', name: 'Hospitals & Health Systems', icon: '🏥', color: '#8b5cf6',
    category: 'Provider Organization',
    description: 'Large integrated delivery networks managing both clinical care and business operations',
    goals: ['Financial sustainability', 'Quality performance', 'Market share', 'Operational efficiency'],
    painPoints: ['Labor cost inflation', 'Payer contract pressures', 'Regulatory compliance', 'Margin compression'],
    digitalNeeds: ['Enterprise analytics', 'Workforce optimization', 'Revenue cycle automation', 'Care coordination platform'],
    influence: 'Very High',
    trend: 'Consolidation driving creation of mega-systems with enterprise technology needs'
  },
  {
    id: 'payer', name: 'Health Plans / Payers', icon: '💼', color: '#f59e0b',
    category: 'Payer',
    description: 'Insurance companies (commercial, Medicare Advantage, Medicaid managed care) managing risk and benefits',
    goals: ['Medical loss ratio management', 'Quality star ratings', 'Member retention', 'Network adequacy'],
    painPoints: ['Fraud, waste and abuse', 'Prior auth abuse', 'Provider network gaps', 'Regulatory changes'],
    digitalNeeds: ['Claims automation', 'Utilization management AI', 'Population health tools', 'Member engagement'],
    influence: 'Very High',
    trend: 'MA growth driving need for advanced population health and clinical programs'
  },
  {
    id: 'cms', name: 'CMS & Federal Regulators', icon: '🏛️', color: '#ef4444',
    category: 'Regulatory',
    description: 'Centers for Medicare & Medicaid Services — sets coverage policy, quality programs, and payment rules',
    goals: ['Beneficiary protection', 'Cost sustainability', 'Quality improvement', 'Fraud prevention'],
    painPoints: ['Program complexity', 'Data quality', 'Fraud detection at scale', 'Interoperability gaps'],
    digitalNeeds: ['Interoperability mandates (FHIR)', 'Value-based care models', 'Price transparency', 'Prior auth reform'],
    influence: 'Extreme',
    trend: 'CMS FHIR mandates and VBC model expansion reshaping the entire industry'
  },
  {
    id: 'pharma', name: 'Pharmaceutical Companies', icon: '💊', color: '#00b4d8',
    category: 'Vendor',
    description: 'Drug manufacturers managing complex pipeline, market access, and patient support programs',
    goals: ['Drug approval', 'Market access', 'Patient adherence', 'Real-world evidence'],
    painPoints: ['Price transparency pressure', 'PBM rebate system', 'Trial recruitment', 'Adherence gaps'],
    digitalNeeds: ['Decentralized trials', 'Real-world data platforms', 'Digital therapeutics', 'Patient support apps'],
    influence: 'High',
    trend: 'Shift to specialty biologics and personalized medicine driving digital engagement'
  },
  {
    id: 'vendor', name: 'Health IT Vendors (Epic, Cerner)', icon: '💻', color: '#a78bfa',
    category: 'Technology',
    description: 'EHR, analytics, and digital health platform companies enabling clinical and administrative operations',
    goals: ['Market penetration', 'Platform stickiness', 'Interoperability standards', 'AI differentiation'],
    painPoints: ['Implementation complexity', 'Customization costs', 'Interoperability mandates', 'Competition'],
    digitalNeeds: ['FHIR APIs', 'AI/ML integration', 'Cloud migration', 'Mobile-first design'],
    influence: 'High',
    trend: 'Epic dominance (~38% market share) while new AI-native competitors emerge'
  },
  {
    id: 'employer', name: 'Employers (Self-Insured)', icon: '🏢', color: '#f59e0b',
    category: 'Payer/Purchaser',
    description: 'Large employers directly paying healthcare claims and increasingly acting as sophisticated purchasers',
    goals: ['Cost containment', 'Employee wellness', 'Productivity', 'Benefits competitiveness'],
    painPoints: ['Rising healthcare costs', 'Mental health crisis', 'GLP-1 drug costs', 'Vendor fragmentation'],
    digitalNeeds: ['Benefits navigation apps', 'Mental health platforms', 'Diabetes management tools', 'Care navigation'],
    influence: 'High',
    trend: 'Employers cutting out middlemen via direct employer-provider contracts'
  }
];

export const digitalStrategies = [
  {
    id: 'ai-automation',
    title: 'AI & Automation',
    icon: '🤖',
    color: '#00b4d8',
    priority: 'Critical',
    maturity: 'Emerging→Growth',
    description: 'Deploying AI across clinical, operational and administrative functions to drive efficiency and quality',
    useCases: [
      { name: 'Ambient Clinical Documentation', impact: 'High', complexity: 'Medium', roi: '50% documentation time reduction', example: 'Nuance DAX, Abridge, Nabla' },
      { name: 'AI-Assisted Radiology Reading', impact: 'High', complexity: 'High', roi: '30% reading time reduction, improved accuracy', example: 'Aidoc, Viz.ai, Subtle Medical' },
      { name: 'Predictive Readmission Risk', impact: 'High', complexity: 'Medium', roi: '$15K per avoided readmission', example: 'Health Catalyst, Epic Deterioration Index' },
      { name: 'Prior Auth Automation', impact: 'Very High', complexity: 'Medium', roi: 'Reduce 40% of admin burden', example: 'Availity, Cohere Health, Rhyme' },
      { name: 'Revenue Cycle Automation (RCM AI)', impact: 'High', complexity: 'Medium', roi: '20-30% AR days reduction', example: 'Waystar, R1 RCM, Olive AI' }
    ],
    strategicConsiderations: ['Change management critical for physician adoption', 'Bias/fairness in AI models', 'Regulatory oversight increasing (FDA AI/ML guidance)', 'Data governance prerequisites']
  },
  {
    id: 'interoperability',
    title: 'Interoperability & Data Exchange',
    icon: '🔗',
    color: '#10b981',
    priority: 'Critical',
    maturity: 'Regulatory-Mandated',
    description: 'Enabling seamless data exchange across the healthcare ecosystem using FHIR standards',
    useCases: [
      { name: 'FHIR R4 Patient Data APIs', impact: 'High', complexity: 'High', roi: 'Regulatory compliance + care coordination', example: 'Epic, Cerner, Meditech APIs' },
      { name: 'Health Information Exchanges (HIE)', impact: 'High', complexity: 'High', roi: 'Reduce duplicate testing, improve care transitions', example: 'CommonWell, Carequality, Civitas' },
      { name: 'Payer-to-Payer Data Exchange', impact: 'Medium', complexity: 'Medium', roi: 'Continuity of care on member transitions', example: 'CMS Interoperability Rule compliance' },
      { name: 'Prior Auth FHIR APIs', impact: 'Very High', complexity: 'High', roi: 'Billions in admin cost savings', example: 'CMS Prior Auth Final Rule 2026' }
    ],
    strategicConsiderations: ['Information blocking prohibition (21st Century Cures Act)', 'TEFCA framework for nationwide exchange', 'Patient data rights and HIPAA', 'Vendor API strategy critical']
  },
  {
    id: 'virtual-care',
    title: 'Virtual Care & Digital Front Door',
    icon: '📱',
    color: '#8b5cf6',
    priority: 'High',
    maturity: 'Growth',
    description: 'Expanding care access through telehealth, remote monitoring and digital patient engagement',
    useCases: [
      { name: 'Synchronous Telehealth (Video Visits)', impact: 'High', complexity: 'Low', roi: '60% lower cost per visit vs office', example: 'Teladoc, AmWell, Zoom Health' },
      { name: 'Asynchronous / Store-and-Forward', impact: 'Medium', complexity: 'Low', roi: 'Dermatology, ophthalmology efficiency', example: 'MDLive, EHR asynchronous messaging' },
      { name: 'Remote Patient Monitoring (RPM)', impact: 'Very High', complexity: 'Medium', roi: 'Reduce CHF readmissions 30%+', example: 'Philips, iRhythm, Biofourmis' },
      { name: 'Hospital-at-Home', impact: 'Very High', complexity: 'High', roi: '30% cost reduction vs inpatient', example: 'Medically Home, Contessa, Dispatch Health' }
    ],
    strategicConsiderations: ['Reimbursement parity remains uncertain post-PHE', 'Licensure and credentialing across state lines', 'Digital divide for older patients', 'Integration with EHR workflows critical']
  },
  {
    id: 'analytics',
    title: 'Analytics & Business Intelligence',
    icon: '📊',
    color: '#f59e0b',
    priority: 'High',
    maturity: 'Established',
    description: 'Enterprise analytics capabilities from operational dashboards to predictive population health insights',
    useCases: [
      { name: 'Executive / Operational Dashboards', impact: 'High', complexity: 'Low', roi: 'Real-time operational visibility', example: 'Epic Reporting, Tableau, Power BI' },
      { name: 'Financial Performance Analytics', impact: 'High', complexity: 'Medium', roi: 'Identify revenue leakage, cost drivers', example: 'Strata Decision, Axiom Healthcare' },
      { name: 'Population Health Analytics', impact: 'Very High', complexity: 'High', roi: 'Reduce total cost of care 5-15%', example: 'Arcadia, Health Catalyst, Innovaccer' },
      { name: 'Clinical Quality Analytics', impact: 'High', complexity: 'Medium', roi: 'VBC quality bonus payments', example: 'Vizient, Premier, Epic analytics' }
    ],
    strategicConsiderations: ['Data governance and stewardship foundation required', 'Analytic literacy training for end users', 'Data warehouse vs. data lakehouse strategy', 'Self-service vs. centralized analytics model']
  },
  {
    id: 'patient-experience',
    title: 'Patient Experience & Engagement',
    icon: '⭐',
    color: '#ef4444',
    priority: 'High',
    maturity: 'Growth',
    description: 'Digital strategies to improve patient satisfaction, engagement and loyalty',
    useCases: [
      { name: 'Digital Front Door / Patient Portal', impact: 'High', complexity: 'Medium', roi: 'Reduce call volume 25%, improve satisfaction', example: 'MyChart, FollowMyHealth, Relatient' },
      { name: 'Online Scheduling & Self-Service', impact: 'High', complexity: 'Low', roi: 'Reduce no-shows 15-20%', example: 'Kyruus, NRC Health scheduling' },
      { name: 'AI-Powered Patient Chatbots', impact: 'Medium', complexity: 'Medium', roi: 'Handle 60% of routine inquiries', example: 'Conversa Health, Orbita, Hyro' },
      { name: 'Post-Discharge Engagement', impact: 'High', complexity: 'Medium', roi: 'Reduce readmissions, improve HCAHPS', example: 'CipherHealth, Relay Health' }
    ],
    strategicConsiderations: ['HCAHPS scores tied to VBC reimbursement', 'Health literacy and plain language requirements', 'Equity in digital access', 'CGCAHPS measures for digital experience']
  },
  {
    id: 'cybersecurity',
    title: 'Cybersecurity & Compliance',
    icon: '🔒',
    color: '#8b5cf6',
    priority: 'Critical',
    maturity: 'Established (but evolving threat)',
    description: 'Protecting patient data, clinical systems and operational continuity from cyber threats',
    useCases: [
      { name: 'Zero Trust Architecture', impact: 'Very High', complexity: 'High', roi: 'Reduce breach risk and breach cost ($10M+)', example: 'Palo Alto, CrowdStrike, Okta' },
      { name: 'Medical Device Security', impact: 'High', complexity: 'High', roi: 'Patient safety + regulatory compliance', example: 'Medigate, Claroty, Ordr' },
      { name: 'HIPAA Compliance Automation', impact: 'High', complexity: 'Medium', roi: 'Avoid $1.9M average HIPAA penalty', example: 'Compliancy Group, Clearwater' },
      { name: 'Ransomware Recovery Planning', impact: 'Very High', complexity: 'High', roi: 'Maintain clinical ops during attack', example: 'Change Healthcare incident (2024) — $1.6B impact' }
    ],
    strategicConsiderations: ['Healthcare #1 targeted industry for ransomware', 'Connected medical devices create massive attack surface', 'Incident response planning is foundational', '2024 Change Healthcare breach highlighted systemic risk']
  }
];

export const glossaryTerms = [
  { term: 'ACO', definition: 'Accountable Care Organization — a group of doctors, hospitals, and other providers who come together voluntarily to give coordinated high quality care to Medicare patients.', category: 'VBC', importance: 'Critical' },
  { term: 'ADT', definition: 'Admission, Discharge, Transfer — notifications sent to care teams and payers when patient status changes in a facility.', category: 'Clinical Operations', importance: 'High' },
  { term: 'APM', definition: 'Alternative Payment Model — payment approaches that provide incentives for high-quality and value-efficient care, such as bundled payments, capitation, or shared savings.', category: 'VBC', importance: 'Critical' },
  { term: 'CDI', definition: 'Clinical Documentation Improvement — the process of ensuring clinical documentation accurately reflects the severity of illness, quality of care, and supports correct coding.', category: 'RCM', importance: 'High' },
  { term: 'CDS', definition: 'Clinical Decision Support — tools embedded in EHRs that provide clinicians with patient-specific recommendations at the point of care.', category: 'Clinical', importance: 'High' },
  { term: 'Capitation', definition: 'A payment model where a provider is paid a set amount per patient per month to cover all care for that patient, regardless of how much care is actually provided.', category: 'VBC', importance: 'Critical' },
  { term: 'CPOE', definition: 'Computerized Physician Order Entry — electronic entry of physician instructions for treatment of patients in a hospital.', category: 'Clinical', importance: 'High' },
  { term: 'CPT', definition: 'Current Procedural Terminology — a set of medical codes used to describe services and procedures performed by healthcare providers, maintained by the AMA.', category: 'RCM', importance: 'Critical' },
  { term: 'DRG', definition: 'Diagnosis Related Group — a patient classification system that standardizes prospective Medicare payment to hospitals for inpatient stays based on diagnosis and treatment.', category: 'RCM', importance: 'Critical' },
  { term: 'EHR/EMR', definition: 'Electronic Health Record / Electronic Medical Record — digital version of a patient\'s paper chart containing medical history, diagnoses, medications, treatment plans, and test results.', category: 'Technology', importance: 'Critical' },
  { term: 'FHIR', definition: 'Fast Healthcare Interoperability Resources — a standard for exchanging healthcare information electronically, developed by HL7. The foundation of modern healthcare interoperability.', category: 'Technology', importance: 'Critical' },
  { term: 'Fee-for-Service (FFS)', definition: 'The traditional healthcare payment model where providers are paid for each service performed, which incentivizes volume over value.', category: 'VBC', importance: 'Critical' },
  { term: 'HCAHPS', definition: 'Hospital Consumer Assessment of Healthcare Providers and Systems — a national, standardized survey measuring patient experience of hospital care, tied to CMS reimbursement.', category: 'Quality', importance: 'High' },
  { term: 'HEDIS', definition: 'Healthcare Effectiveness Data and Information Set — 90+ measures used by health plans to measure performance on dimensions of care and service, maintained by NCQA.', category: 'Quality', importance: 'High' },
  { term: 'HIE', definition: 'Health Information Exchange — the electronic mobilization of healthcare information across organizations within a region, community or hospital system.', category: 'Technology', importance: 'High' },
  { term: 'HIPAA', definition: 'Health Insurance Portability and Accountability Act — federal law protecting patient health information privacy and security. Non-compliance carries significant penalties.', category: 'Regulatory', importance: 'Critical' },
  { term: 'ICD-10', definition: 'International Classification of Diseases, 10th Revision — a medical classification system of codes used to classify diseases, symptoms, and procedures for billing and reporting.', category: 'RCM', importance: 'Critical' },
  { term: 'MACRA', definition: 'Medicare Access and CHIP Reauthorization Act — legislation replacing the SGR formula, creating MIPS and APM pathways for physician payment reform.', category: 'Regulatory', importance: 'High' },
  { term: 'MA (Medicare Advantage)', definition: 'A private health plan option for Medicare beneficiaries. MA plans receive a capitated payment from CMS and are responsible for all Medicare services.', category: 'Payer', importance: 'Critical' },
  { term: 'MCO', definition: 'Managed Care Organization — a health care organization that manages the cost, utilization and quality of care delivered to plan members.', category: 'Payer', importance: 'High' },
  { term: 'MLR', definition: 'Medical Loss Ratio — the percentage of premium revenue spent on medical claims and quality improvement. ACA requires 80% (individual/small group) and 85% (large group) MLR.', category: 'Payer', importance: 'High' },
  { term: 'NPI', definition: 'National Provider Identifier — a unique 10-digit identification number issued to healthcare providers by CMS, required for all HIPAA electronic transactions.', category: 'Administrative', importance: 'High' },
  { term: 'PMPM', definition: 'Per Member Per Month — a cost metric used in managed care to represent the total healthcare costs incurred per covered member each month. The fundamental metric in VBC.', category: 'VBC', importance: 'Critical' },
  { term: 'Prior Authorization', definition: 'A requirement by health insurance companies for approval before certain services or medications are prescribed. A major driver of provider administrative burden.', category: 'Administrative', importance: 'Critical' },
  { term: 'RCM', definition: 'Revenue Cycle Management — the financial processes used by healthcare providers to track patient care from registration through final payment of balances.', category: 'RCM', importance: 'Critical' },
  { term: 'RPM', definition: 'Remote Patient Monitoring — the use of digital devices to monitor patients\' health data outside of traditional clinical settings.', category: 'Technology', importance: 'High' },
  { term: 'SDOH', definition: 'Social Determinants of Health — non-medical factors that influence health outcomes (housing, food security, education, income) that account for 80% of health outcomes.', category: 'Clinical', importance: 'High' },
  { term: 'STARS Rating', definition: 'CMS quality rating system for Medicare Advantage and Part D plans, from 1-5 stars. Higher-rated plans receive quality bonus payments and can earn back rebates.', category: 'Quality', importance: 'High' },
  { term: 'Value-Based Care (VBC)', definition: 'A healthcare delivery model where providers are paid based on patient health outcomes rather than the volume of services, aligning financial incentives with quality.', category: 'VBC', importance: 'Critical' },
  { term: 'Total Cost of Care (TCC)', definition: 'All healthcare expenditures for a defined patient population over a period of time. The primary metric for ACOs and risk-bearing entities.', category: 'VBC', importance: 'Critical' },
];

export const scenarios = [
  {
    id: 'scenario1',
    title: 'ED Overcrowding Crisis',
    icon: '🚨',
    difficulty: 'Hard',
    context: 'Riverside Medical Center is a 400-bed regional hospital experiencing a 15% increase in ED visits over 12 months. ED boarding time for admitted patients has risen to 8 hours average. Patient satisfaction scores are dropping, staff overtime is up 35%, and the CMO is under pressure.',
    stakeholders: ['CMO', 'ED Medical Director', 'CNO', 'CFO', 'Care Coordinators'],
    questions: [
      { q: 'What are the root causes of ED overcrowding?', options: ['Increased community demand', 'Discharge bottlenecks (output problem)', 'Bed management failures', 'All of the above — typically a system problem'], answer: 3, explanation: 'ED overcrowding is almost always an output problem as much as an input problem. Delays in discharging patients from inpatient units are the #1 cause of boarding. The correct BA approach is system-level process mapping.' },
      { q: 'Which digital solution would have the highest near-term impact?', options: ['New patient portal launch', 'Real-time bed management dashboard with predictive discharge', 'Telehealth for minor complaints', 'EHR upgrade'], answer: 1, explanation: 'A real-time bed management system gives operational leaders visibility into current bed status and predicted discharges, enabling proactive bed placement. This directly attacks the boarding problem.' },
      { q: 'As a BA, what data would you gather first to build the business case?', options: ['ED arrival times only', 'Boarding hours, LWBS rate, discharge times by unit, census by hour', 'Patient satisfaction scores only', 'Staff satisfaction surveys'], answer: 1, explanation: 'A comprehensive operational data analysis — boarding hours, LWBS (Left Without Being Seen), discharge patterns, and hourly census — gives the full picture needed to identify the key constraint and quantify the opportunity.' }
    ]
  },
  {
    id: 'scenario2',
    title: 'Value-Based Care Transition',
    icon: '🎯',
    difficulty: 'Medium',
    context: 'BlueCross plan has signed a total cost of care ACO agreement with a 300-physician medical group. Year 1 targets require 5% reduction in total cost of care. The medical group has no population health infrastructure. Your client is the CMO of the medical group.',
    stakeholders: ['CMO', 'Population Health Manager', 'PCP Physicians', 'Care Coordinators', 'Finance'],
    questions: [
      { q: 'What should be the highest priority technology investment?', options: ['New EMR system', 'Population health analytics platform', 'Patient portal redesign', 'Billing system upgrade'], answer: 1, explanation: 'A population health analytics platform that aggregates claims + clinical data is the foundational requirement. Without data, you cannot identify high-risk patients, measure performance, or close care gaps.' },
      { q: 'Which patient segment should get the most intensive care management?', options: ['All patients equally', 'Only the sickest 1% (highest cost)', 'The rising risk 5-15% — complex chronic conditions', 'Only Medicare patients'], answer: 2, explanation: 'The "rising risk" segment (complex but not yet catastrophic) offers the highest ROI for care management intervention. The top 1% is often in crisis and expensive regardless. The rising risk segment can be prevented from becoming high cost.' },
      { q: 'How would you measure success at 6 months?', options: ['Patient satisfaction scores', 'PMPM trend vs. baseline, care gap closure rate, high-risk patient engagement rate', 'Physician satisfaction only', 'Revenue vs. expenses'], answer: 1, explanation: 'PMPM trend (are costs going up slower than benchmark?), care gap closure (are we delivering preventive care?), and high-risk engagement (are we reaching the patients who matter?) are the leading indicators of VBC success.' }
    ]
  },
  {
    id: 'scenario3',
    title: 'Revenue Cycle Transformation',
    icon: '💰',
    difficulty: 'Easy',
    context: 'Community Health Network has a 12% denial rate (industry average 10%), Days in AR of 52 (benchmark 40 days), and a net collection rate of 91% (target 95%). The CFO wants to understand where the leakage is and what digital investments will close the gap.',
    stakeholders: ['CFO', 'RCM Director', 'Coding Manager', 'Patient Access Leader', 'Billing Team'],
    questions: [
      { q: 'What is the first step in an RCM diagnostic?', options: ['Hire more billers', 'Denial root cause analysis by denial code, payer, and service line', 'Implement new billing software immediately', 'Renegotiate all payer contracts'], answer: 1, explanation: 'Root cause analysis is always the first step. Breaking down denials by code (CO-4, CO-16, PR-96), payer, provider, and service line reveals exactly where the leakage is occurring, enabling targeted interventions.' },
      { q: 'A 12% denial rate with high CO-16 (lack of information) denials suggests:', options: ['Payer system issues', 'Prior authorization gaps and incomplete documentation at point of care', 'Coding errors only', 'Patient demographics issues'], answer: 1, explanation: 'CO-16 (lacking information needed for adjudication) typically points to prior auth issues, incomplete clinical documentation, or missing attachments. This is a process gap in patient access and clinical documentation workflows.' },
      { q: 'Which investment would best reduce Days in AR from 52 to 40?', options: ['More collections staff', 'Predictive analytics to prioritize AR work queues + automated claim status tracking', 'Patient portal redesign', 'New EHR'], answer: 1, explanation: 'Working the right claims at the right time is more impactful than adding headcount. Predictive AR prioritization ensures staff focus on claims most likely to be collectible and closest to timely filing deadlines.' }
    ]
  }
];
