import { Route, Routes } from 'react-router-dom';
import React, { lazy } from 'react';
import Loadable from '../layouts/loader/Loadable';

import EnquiryEdit from '../views/EditData/EnquiryEdit';
import QuotationEdit from '../views/EditData/QuotationEdit';
import SalesOrderEdit from '../views/EditData/SalesOrderEdit';
import GoodsDeliveryEdit from '../views/EditData/GoodsDeliveryEdit';
import SalesInvoiceEdit from '../views/EditData/SalesInvoiceEdit';
import SalesReturnEdit from '../views/EditData/SalesReturnEdit';
import CustomerEdit from '../views/EditData/CustomerEdit';
import ReceiptEdit from '../views/EditData/ReceiptEdit';
import ProjectEdit from '../views/EditData/ProjectEdit';
import ProjectQuotationEdit from '../views/EditData/ProjectQuotationEdit';
import SupplierEdit from '../views/EditData/SupplierEdit';
import RequestForQuoteEdit from '../views/EditData/RequestForQuoteEdit';
import PurchaseOrderEdit from '../views/EditData/PurchaseOrderEdit';
import PurchaseRequestEdit from '../views/EditData/PurchaseRequestEdit';
import ProductEdit from '../views/EditData/ProductEdit';

import SubcontractEdit from '../views/EditData/SubcontractEdit';
import PurchaseInvoiceEdit from '../views/EditData/PurchaseInvoiceEdit';
import PurchaseReturnEdit from '../views/EditData/PurchaseReturnEdit';
import TaskEdit from '../views/EditData/TaskEdit';
import CategoryEdit from '../views/EditData/CategoryEdit';
import SubCategoryEdit from '../views/EditData/SubCategoryEdit';
import PriceListEdit from '../views/EditData/PriceListEdit';
import ProposalEdit from '../views/EditData/ProposalEdit';






/****Layouts*****/

const FullLayout = Loadable(lazy(() => import('../layouts/FullLayout')));
//const BlankLayout = Loadable(lazy(() => import('../layouts/BlankLayout')));
/***** Pages ****/

 const Classic = Loadable(lazy(() => import('../views/dashboards/Classic')));
// const Crypto = Loadable(lazy(() => import('../views/dashboards/Crypto')));
// const Ecommerce = Loadable(lazy(() => import('../views/dashboards/Ecommerce')));
// const General = Loadable(lazy(() => import('../views/dashboards/General')));
// const Extra = Loadable(lazy(() => import('../views/dashboards/Extra')));

/***** DetailTable ****/




/***** Apps ****/
// const Notes = Loadable(lazy(() => import('../views/apps/notes/Notes')));
// const Chat = Loadable(lazy(() => import('../views/apps/chat/Chat')));
// const Contacts = Loadable(lazy(() => import('../views/apps/contacts/Contacts')));
// const Calendar = Loadable(lazy(() => import('../views/apps/calendar/CalendarApp')));
// const Email = Loadable(lazy(() => import('../views/apps/email/Email')));
// const Shop = Loadable(lazy(() => import('../views/apps/ecommerce/Shop')));
// const ShopDetail = Loadable(lazy(() => import('../views/apps/ecommerce/ShopDetail')));
// const Treeview = Loadable(lazy(() => import('../views/apps/treeview/TreeView')));
// const TicketList = Loadable(lazy(() => import('../views/apps/ticket/TicketList')));
// const TicketDetail = Loadable(lazy(() => import('../views/apps/ticket/TicketDetail')));

/***** Ui Elements ****/
// const Alerts = Loadable(lazy(() => import('../views/ui/Alerts')));
// const Badges = Loadable(lazy(() => import('../views/ui/Badges')));
// const Buttons = Loadable(lazy(() => import('../views/ui/Buttons')));
// const Cards = Loadable(lazy(() => import('../views/ui/Cards')));
// const Grid = Loadable(lazy(() => import('../views/ui/Grid')));
// const Tables = Loadable(lazy(() => import('../views/ui/Tables')));
// const Forms = Loadable(lazy(() => import('../views/ui/Forms')));
// const Breadcrumbs = Loadable(lazy(() => import('../views/ui/Breadcrumbs')));
// const Dropdowns = Loadable(lazy(() => import('../views/ui/DropDown')));
// const BtnGroup = Loadable(lazy(() => import('../views/ui/BtnGroup')));
// const Collapse = Loadable(lazy(() => import('../views/ui/Collapse')));
// const ListGroup = Loadable(lazy(() => import('../views/ui/ListGroup')));
// const Modal = Loadable(lazy(() => import('../views/ui/Modal')));
// const Navbar = Loadable(lazy(() => import('../views/ui/Navbar')));
// const Nav = Loadable(lazy(() => import('../views/ui/Nav')));
// const Pagination = Loadable(lazy(() => import('../views/ui/Pagination')));
// const Popover = Loadable(lazy(() => import('../views/ui/Popover')));
// const Progress = Loadable(lazy(() => import('../views/ui/Progress')));
// const Spinner = Loadable(lazy(() => import('../views/ui/Spinner')));
// const Tabs = Loadable(lazy(() => import('../views/ui/Tabs')));
// const Toasts = Loadable(lazy(() => import('../views/ui/Toasts')));
// const Tooltip = Loadable(lazy(() => import('../views/ui/Tooltip')));

/***** Form Layout Pages ****/
// const FormBasic = Loadable(lazy(() => import('../views/form-layouts/FormBasic')));
// const FormGrid = Loadable(lazy(() => import('../views/form-layouts/FormGrid')));
// const FormGroup = Loadable(lazy(() => import('../views/form-layouts/FormGroup')));
// const FormInput = Loadable(lazy(() => import('../views/form-layouts/FormInput')));

/***** Form Pickers Pages ****/
// const Datepicker = Loadable(lazy(() => import('../views/form-pickers/DateTimePicker')));
// const TagSelect = Loadable(lazy(() => import('../views/form-pickers/TagSelect')));

// /***** Form Validation Pages ****/
// const FormValidate = Loadable(lazy(() => import('../views/form-validation/FormValidation')));
// const FormSteps = Loadable(lazy(() => import('../views/form-steps/Steps')));
// const FormEditor = Loadable(lazy(() => import('../views/form-editor/FormEditor')));
// /***** Table Pages ****/
// const Basictable = Loadable(lazy(() => import('../views/tables/TableBasic')));
// const CustomReactTable = Loadable(lazy(() => import('../views/tables/CustomReactTable')));
// const ReactBootstrapTable = Loadable(lazy(() => import('../views/tables/ReactBootstrapTable')));

// /***** Chart Pages ****/
// const ApexCharts = Loadable(lazy(() => import('../views/charts/ApexCharts')));
// const ChartJs = Loadable(lazy(() => import('../views/charts/ChartJs')));

// /***** Sample Pages ****/
// const StarterKit = Loadable(lazy(() => import('../views/sample-pages/StarterKit')));
// const Profile = Loadable(lazy(() => import('../views/sample-pages/Profile')));
// const Gallery = Loadable(lazy(() => import('../views/sample-pages/Gallery')));
// const SearchResult = Loadable(lazy(() => import('../views/sample-pages/SearchResult')));
// const HelperClass = Loadable(lazy(() => import('../views/sample-pages/HelperClass')));

// /***** Icon Pages ****/
// const Bootstrap = Loadable(lazy(() => import('../views/icons/Bootstrap')));
// const Feather = Loadable(lazy(() => import('../views/icons/Feather')));

// /***** Map Pages ****/
// const CustomVectorMap = Loadable(lazy(() => import('../views/maps/CustomVectorMap')));

// /***** Widget Pages ****/
// const Widget = Loadable(lazy(() => import('../views/widget/Widget')));

// /***** CASL Access Control ****/
// const CASL = Loadable(lazy(() => import('../views/apps/accessControlCASL/AccessControl')));

/***** Auth Pages ****/
//const Error = Loadable(lazy(() => import('../views/auth/Error')));
//const RegisterFormik = Loadable(lazy(() => import('../views/auth/RegisterFormik')));
//const LoginFormik = Loadable(lazy(() => import('../views/auth/LoginFormik')));
//const Maintanance = Loadable(lazy(() => import('../views/auth/Maintanance')));
//const LockScreen = Loadable(lazy(() => import('../views/auth/LockScreen')));
//const RecoverPassword = Loadable(lazy(() => import('../views/auth/RecoverPassword')));
//const Login = Loadable(lazy(() => import('../views/auth/Login')));
const LoginForm = Loadable(lazy(() => import('../views/auth/LoginForm')));


// ErpDemoRoutes
const EnquiryList = Loadable(lazy(() => import('../views/ListData/EnquiryList')));
const QuotationList = Loadable(lazy(() => import('../views/ListData/QuotationList')));
const SalesOrderList = Loadable(lazy(() => import('../views/ListData/SalesOrderList')));
const GoodsDeliveryList = Loadable(lazy(() => import('../views/ListData/GoodsDeliveryList')));
const SalesInvoiceList = Loadable(lazy(() => import('../views/ListData/SalesInvoiceList')));
const SalesReturnList = Loadable(lazy(() => import('../views/ListData/SalesReturnList')));
const CustomerList = Loadable(lazy(() => import('../views/ListData/CustomerList')));
const ReceiptList = Loadable(lazy(() => import('../views/ListData/ReceiptList')));
const ProjectList = Loadable(lazy(() => import('../views/ListData/ProjectList')));
const ProjectQuotationList = Loadable(lazy(() => import('../views/ListData/ProjectQuotationList')));
const SupplierList = Loadable(lazy(() => import('../views/ListData/SupplierList')));
const RequestForQuoteList = Loadable(lazy(() => import('../views/ListData/RequestForQuoteList')));
const PurchaseOrderList = Loadable(lazy(() => import('../views/ListData/PurchaseOrderList')));
const PurchaseRequestList = Loadable(lazy(() => import('../views/ListData/PurchaseRequestList')));
const ProductList = Loadable(lazy(() => import('../views/ListData/ProductList')));
const SubcontractList = Loadable(lazy(() => import('../views/ListData/SubcontractList')));
const PurchaseInvoiceList = Loadable(lazy(() => import('../views/ListData/PurchaseInvoiceList')));
const PurchaseReturnList = Loadable(lazy(() => import('../views/ListData/PurchaseReturnList')));
const TaskList = Loadable(lazy(() => import('../views/ListData/TaskList')));
const CategoryList = Loadable(lazy(() => import('../views/ListData/CategoryList')));
const SubCategoryList = Loadable(lazy(() => import('../views/ListData/SubCategoryList')));
const PriceListList = Loadable(lazy(() => import('../views/ListData/PriceListList')));
const ProposalList = Loadable(lazy(() => import('../views/ListData/ProposalList')));

const RouterNew = () => {
  
return(
  
      <div>
        <Routes>
          <Route path="/" element={<FullLayout></FullLayout>}>
            {/* Table Edit's */}
            <Route exact path="/" name="Classic" element={<LoginForm />}></Route>
            <Route path="/dashboards/Classic" name="Classic" element={<Classic />}></Route>
            <Route path="/EnquiryEdit" name="clienttdata" element={<EnquiryEdit />}></Route>
            <Route path="/Enquiry" name="clienttdata" element={<EnquiryList />}></Route>
            <Route path="'/QuotationEdit" name="clienttdata" element={<QuotationEdit />}></Route>
            <Route path="/Quotation" name="clienttdata" element={<QuotationList />}></Route>
            <Route path="/SalesOrder" name="clienttdata" element={<SalesOrderList />}></Route>
            <Route path="/SalesOrderEdit" name="clienttdata" element={<SalesOrderEdit />}></Route>
            <Route path="/GoodsDelivery" name="clienttdata" element={ <GoodsDeliveryList/>}></Route>
            <Route path="/GoodsDeliveryEdit" name="clienttdata" element={<GoodsDeliveryEdit />}></Route>
            <Route path="/SalesInvoiceEdit" name="clienttdata" element={<SalesInvoiceEdit />}></Route>
            <Route path="/SalesInvoice" name="clienttdata" element={<SalesInvoiceList/>}></Route>
            <Route path="/SalesReturn" name="clienttdata" element={<SalesReturnList/>}></Route>
            <Route path="/Customer" name="clienttdata" element={<CustomerList/>}></Route>
            <Route path="/CustomerEdit" name="translationdata" element={<CustomerEdit/>}></Route>
            <Route path="/SalesReturnEdit" name="clienttdata" element={<SalesReturnEdit />}></Route>
            <Route path="/Receipt" name="clienttdata" element={<ReceiptList/>}></Route>
            <Route path="/ReceiptEdit" name="clienttdata" element={  <ReceiptEdit/>}></Route>
            <Route path="/Project" name="clienttdata" element={<ProjectList/>}></Route>
            <Route path="/ProjectEdit" name="clienttdata" element={<ProjectEdit/>}></Route>
            <Route path="/ProjectQuotation" name="clienttdata" element={<ProjectQuotationList/>}></Route>
            <Route path="/ProjectQuotationEdit" name="clienttdata" element={<ProjectQuotationEdit/>}></Route>
            <Route path="/Supplier" name="clienttdata" element={<SupplierList/>}></Route>
            <Route path="/SupplierEdit" name="translationdata" element={<SupplierEdit/>}></Route>
            <Route path="/RequestForQuote" name="clienttdata" element={<RequestForQuoteList/>}></Route>
            <Route path="/RequestForQuoteEdit" name="translationdata" element={<RequestForQuoteEdit/>}></Route>
            <Route path="/PurchaseOrder" name="clienttdata" element={<PurchaseOrderList/>}></Route>
            <Route path="/PurchaseOrderEdit" name="clienttdata" element={<PurchaseOrderEdit/>}></Route>
            <Route path="'/PurchaseRequest" name="clienttdata" element={  <PurchaseRequestList/> }></Route>
            <Route path="/PurchaseRequestEdit" name="clienttdata" element={<PurchaseRequestEdit/>}></Route>
            <Route path="/Product" name="clienttdata" element={<ProductList/>}></Route>
            <Route path="/ProductEdit" name="clienttdata" element={<ProductEdit/>}></Route>
            <Route path="/Subcontract" name="clienttdata" element={<SubcontractList/>}></Route>
            <Route path="/SubcontractEdit" name="clienttdata" element={<SubcontractEdit/>}></Route>
            <Route path="/PurchaseInvoiceEdit" name="translationdata" element={<PurchaseInvoiceEdit />}></Route>
            <Route path="/PurchaseInvoice" name="translationdata" element={<PurchaseInvoiceList/>}></Route>
            <Route path="/PurchaseReturnEdit" name="clienttdata" element={<PurchaseReturnEdit />}></Route>
            <Route path="/PurchaseReturn" name="clienttdata" element={<PurchaseReturnList/>}></Route>
            <Route path="/Task" name="clienttdata" element={<TaskList/>}></Route>
            <Route path="/TaskEdit" name="clienttdata" element={<TaskEdit />}></Route>
            <Route path="/Category" name="clienttdata" element={<CategoryList/>}></Route>
            <Route path="/CategoryEdit" name="translationdata" element={<CategoryEdit />}></Route>
            <Route path="/SubCategory" name="translationdata" element={<SubCategoryList/>}></Route>
            <Route path="/SubCategoryEdit" name="translationdata" element={<SubCategoryEdit />}></Route>
            <Route path="/PriceList" name="clienttdata" element={<PriceListList/>}></Route>
            <Route path="/PriceListEdit" name="translationdata" element={<PriceListEdit />}></Route>
            <Route path="/ProposalList" name="clienttdata" element={<ProposalList/>}></Route>
            <Route path="/ProposalEdit" name="translationdata" element={<ProposalEdit />}></Route>
            
            {/* <Route
              path="/expenseHeadEdit/:id"
              name="clienttdata"
              element={<ExpenseHeadEdit />}
            ></Route>
            <Route
              path="/incomeHeadEdit/:id"
              name="clienttdata"
              element={<IncomeHeadEdit />}
            ></Route>
            <Route path="/LoanEdit/:id" name="clienttdata" element={<LoanEdit />}></Route>
            <Route path="/SubConEdit/:id" name="clienttdata" element={<SubConEdit />}></Route>
            <Route path="/SupplierEdit/:id" name="clienttdata" element={<SupplierEdit />}></Route>
            <Route
              path="/JobInformationEdit/:id"
              name="clienttdata"
              element={<JobInformationEdit />}
            ></Route>
            <Route path="/StaffEdit/:id" name="clienttdata" element={<StaffEdit />}></Route>
            <Route path="/Login/:id" name="clienttdata" element={<Login />}></Route>
            <Route path="/ValueListEdit/:id" name="clienttdata" element={<ValueListEdit />}></Route>
            <Route
              path="/SubCategoryEdit/:id"
              name="clienttdata"
              element={<SubCategoryEdit />}
            ></Route>
            <Route path="/CategoryEdit/:id" name="clienttdata" element={<CategoryEdit />}></Route>
            <Route path="/SupportEdit/:id" name="clienttdata" element={<SupportEdit />}></Route>
            <Route path="/SettingEdit/:id" name="clienttdata" element={<SettingEdit />}></Route>
            <Route path="/Inventory" name="clienttdata" element={<InventoryTable />}></Route>
            <Route path="/inventoryEdit/:id" name="clienttdata" element={<InventoryEdit />}></Route>
            <Route path="/UserGroupEdit/:id" name="clienttdata" element={<UserGroupEdit />}></Route>
            <Route
              path="/PurchaseOrderEdit/:id"
              name="clienttdata"
              element={<PurchaseOrderEdit />}
            ></Route> */}
  
            {/* Supplier Modal */}
            {/* <Route
              path="/SupplierHistory/:id"
              name="clienttdata"
              element={<SupplierHistory />}
            ></Route>
            <Route path="/SubConHistory/:id" name="clienttdata" element={<SubConHistory />}></Route>
            <Route path="/TimesheetEdit/:id" name="clienttdata" element={<TimesheetEdit />}></Route>
            <Route
              path="/JobInformationEdit/:id"
              name="clienttdata"
              element={<JobInformationEdit />}
            ></Route>
  
            <Route path="/pdf/:id" name="pdfData" element={<PdfData />}></Route>
            <Route path="/pdfnext" name="pdfData" element={<PdfNext />}></Route>
            <Route path="/TicketsComponent" name="pdfData" element={<TicketsComponent />}></Route>
            <Route path="/projects" element={<DataTable />} />
            <Route path="/" element={<Classic />} />
            <Route path="/dashboards/crypto" name="Classic" element={<Crypto />}></Route>
            <Route path="/dashboards/ecommerce" name="ecommerce" element={<Ecommerce />}></Route>
            <Route path="/dashboards/general" name="general" element={<General />}></Route>
            <Route path="/dashboards/extra" name="extra" element={<Extra />}></Route>
            <Route path="/about" name="about" element={<About />}></Route>
            <Route path="/apps/notes" name="notes" element={<Notes />}></Route>
            <Route path="/apps/chat" name="chat" element={<Chat />}></Route>
            <Route path="/apps/contacts" name="contacts" element={<Contacts />}></Route>
            <Route path="/apps/calendar" name="calendar" element={<Calendar />}></Route>
            <Route path="/apps/email" name="email" element={<Email />}></Route>
            <Route path="/ecom/shop" name="email" element={<Shop />}></Route>
            <Route path="/ecom/shopdetail" name="email" element={<ShopDetail />}></Route>
            <Route path="/tickt/ticket-list" name="ticket list" element={<TicketList />}></Route>
            <Route
              path="/tickt/ticket-detail"
              name="ticket detail"
              element={<TicketDetail />}
            ></Route>
            <Route path="/apps/treeview" name="email" element={<Treeview />}></Route>
            <Route path="/ui/alerts" name="alerts" element={<Alerts />}></Route>
            <Route path="/ui/badges" name="badges" element={<Badges />}></Route>
            <Route path="/ui/buttons" name="buttons" element={<Buttons />}></Route>
            <Route path="/ui/cards" name="cards" element={<Cards />}></Route>
            <Route path="/ui/grid" name="grid" element={<Grid />}></Route>
            <Route path="/ui/table" name="table" element={<Tables />}></Route>
            <Route path="/ui/forms" name="forms" element={<Forms />}></Route>
            <Route path="/ui/breadcrumbs" name="breadcrumbs" element={<Breadcrumbs />}></Route>
            <Route path="/ui/dropdown" name="dropdown" element={<Dropdowns />}></Route>
            <Route path="/ui/button-group" name="button group" element={<BtnGroup />}></Route>
            <Route path="/ui/collapse" name="collapse" element={<Collapse />}></Route>
            <Route path="/ui/list-group" name="list-group" element={<ListGroup />}></Route>
            <Route path="/ui/modal" name="modal" element={<Modal />}></Route>
            <Route path="/ui/navbar" name="navbar" element={<Navbar />}></Route>
            <Route path="/ui/nav" name="nav" element={<Nav />}></Route>
            <Route path="/ui/pagination" name="pagination" element={<Pagination />}></Route>
            <Route path="/ui/popover" name="popover" element={<Popover />}></Route>
            <Route path="/ui/progress" name="progress" element={<Progress />}></Route>
            <Route path="/ui/spinner" name="spinner" element={<Spinner />}></Route>
            <Route path="/ui/tabs" name="tabs" element={<Tabs />}></Route>
            <Route path="/ui/toasts" name="toasts" element={<Toasts />}></Route>
            <Route path="/ui/tooltip" name="tooltip" element={<Tooltip />}></Route>
            <Route path="/form-layout/form-basic" name="form-basic" element={<FormBasic />}></Route>
            <Route path="/form-layout/form-grid" name="form-grid" element={<FormGrid />}></Route>
            <Route path="/form-layout/form-group" name="form-group" element={<FormGroup />}></Route>
            <Route path="/form-layout/form-input" name="form-input" element={<FormInput />}></Route>
            <Route path="/form-pickers/datepicker" name="datepicker" element={<Datepicker />} />
            <Route path="/form-pickers/tag-select" name="tag-select" element={<TagSelect />}></Route>
            <Route path="/form-validation" name="form-validation" element={<FormValidate />}></Route>
            <Route path="/form-steps" name="form-steps" element={<FormSteps />}></Route>
            <Route path="/form-editor" name="form-editor" element={<FormEditor />}></Route>
  
            <Route path="/tables/basic-table" name="basic-table" element={<Basictable />}></Route>
            <Route path="/tables/react-table" name="react-table" element={<CustomReactTable />} />
            <Route path="/tables/data-table" name="data-table" element={<ReactBootstrapTable />} />
            <Route path="/charts/apex" name="apex" element={<ApexCharts />}></Route>
            <Route path="/charts/chartjs" name="chartjs" element={<ChartJs />}></Route>
            <Route path="/sample-pages/profile" name="profile" element={<Profile />}></Route>
            <Route path="/sample-pages/helper-class" name="helper-class" element={<HelperClass />} />
            <Route path="/sample-pages/starterkit" name="starterkit" element={<StarterKit />} />
            <Route path="/sample-pages/gallery" name="gallery" element={<Gallery />}></Route>
            <Route
              path="/sample-pages/search-result"
              name="search-result"
              element={<SearchResult />}
            />
            <Route path="/icons/bootstrap" name="bootstrap" element={<Bootstrap />}></Route>
            <Route path="/icons/feather" name="feather" element={<Feather />}></Route>
            <Route path="/map/vector" name="vector" element={<CustomVectorMap />}></Route>
            <Route path="/widget" name="widget" element={<Widget />}></Route>
            <Route path="/casl" name="casl" element={<CASL />}></Route>
            <Route path="/auth/404" name="404" element={<Error />}></Route>
            <Route path="/projects/addproject" name="addproject" element={<AddProjects />}></Route>
            <Route
              path="/projects/editproject/:id"
              name="editproject"
              element={<EditProject />}
            ></Route>
            <Route path="/projects/projectreport" name="projectreport" element={<Reports />}></Route>
            <Route
              path="/OverAllSalesSummaryReport"
              name="clienttdata"
              element={<OverallSalesReportTable />}
            ></Route>
            <Route path="/InvoiceByYear" name="clienttdata" element={<InvoiceByYearTable />}></Route> */}
            {/* Tender */}
            {/* <Route path="/Tender" name="tenderdata" element={<TenderTable />}></Route>
            <Route path="/Opportunity" name="clienttdata" element={<OpportunityTable />}></Route>
            <Route path="/Task" name="tenderdata" element={<TaskTable />}></Route>
            <Route path="/Attendance" name="tenderdata" element={<Attendance />}></Route>
            <Route path="/TenderDetails" name="tenderdata" element={<TenderDetailsTable />}></Route>
            <Route path="/TranslationDetails" name="translationdetailsdata" element={<TranslationDetails />}></Route>
            <Route path="/Translation" name="translationdata" element={<Translation />}></Route>
            <Route path="/OpportunityDetails" name="clienttdata" element={<OpportunityDetails />}></Route>
            <Route path="/ProductDetails" name="tenderdata" element={<ProductDetailsTable />}></Route>
  
            <Route path="/Project" name="projectdata" element={<ProjectTable />}></Route>
            <Route path="/Client" name="clienttdata" element={<ClientTable />}></Route>
            <Route path="/ClientDetails" name="clienttdata" element={<ClientDetailsTable />}></Route>
            <Route path="/Booking" name="clienttdata" element={<BookingTable />}></Route>
            <Route path="/Bookings" name="clienttdata" element={<BookingsTable />}></Route>
            <Route path="/BookingDetails" name="clienttdata" element={<BookingDetails />}></Route>
            <Route path="/Product" name="clienttdata" element={<ProductTable />}></Route>
            <Route path="/Timesheet" name="clienttdata" element={<TimesheetTable />}></Route>
            <Route
              path="/TimesheetDetails"
              name="clienttdata"
              element={<TimesheetDetailsTable />}
            ></Route>
  
            <Route path="/Finance" name="clienttdata" element={<FinanceTable />}></Route>
            <Route path="/Invoice" name="clienttdata" element={<InvoiceTable />}></Route>
            <Route path="/Accounts" name="clienttdata" element={<AccountsTable />}></Route>
            <Route path="/AccountDetails" name="clienttdata" element={<AccountDetails />}></Route>
            <Route path="/ExpenseHead" name="clienttdata" element={<ExpenseHeadTable />}></Route>
            <Route
              path="/ExpenseHeadDetails"
              name="clienttdata"
              element={<ExpenseHeadDetails />}
            ></Route>
            <Route path="/IncomeHead" name="clienttdata" element={<IncomeHeadTable />}></Route>
            <Route
              path="/IncomeHeadDetails"
              name="clienttdata"
              element={<IncomeHeadDetails />}
            ></Route>
            <Route path="/Supplier" name="clienttdata" element={<SupplierTable />}></Route>
            <Route
              path="/SupplierDetails"
              name="clienttdata"
              element={<SupplierDetailsTable />}
            ></Route>
            <Route path="/Subcon" name="clienttdata" element={<SubConTable />}></Route>
            <Route path="/SubConDetails" name="clienttdata" element={<SubConDetailsTable />}></Route>
            <Route path="/Inventory" name="clienttdata" element={<InventoryTable />}></Route>
            <Route path="/Vehicle" name="clienttdata" element={<VehicleTable />}></Route>
            <Route path="/VehicleDetails" name="clienttdata" element={<VehicleDetails />}></Route>
            <Route path="/Leave" name="clienttdata" element={<LeaveTable />}></Route>
            <Route path="/LeaveDetails" name="clienttdata" element={<LeaveDetailsTable />}></Route>
            <Route path="/Loan" name="clienttdata" element={<LoanTable />}></Route>
            <Route path="/LoanDetails" name="clienttdata" element={<LoanDeatilsTable />}></Route>
            <Route
              path="/TrainingDetails"
              name="clienttdata"
              element={<TrainingDetailsTable />}
            ></Route>
            <Route path="/Training" name="clienttdata" element={<TrainingTable />}></Route>
            <Route
              path="/JobInformation"
              name="clienttdata"
              element={<JobInformationTable />}
            ></Route>
            <Route
              path="/JobInformationDetails"
              name="clienttdata"
              element={<JobInformationDetailsTable />}
            ></Route>
  
            <Route path="/CPFCalculator" name="clienttdata" element={<CPFCalculatorTable />}></Route>
            <Route
              path="/CPFCalculatorDetails"
              name="clienttdata"
              element={<CPFCalculatorDetails />}
            ></Route>
            
            <Route path="/cpfCalculatorEdit/:id" name="cpfEdit" element={<CPFCalculatorEdit />}></Route>
            <Route path="/Staff" name="clienttdata" element={<StaffTable />}></Route>
            <Route path="/StaffDetails" name="clienttdata" element={<StaffDetailsTable />}></Route>
            <Route path="/SubCategory" name="clienttdata" element={<SubCategoryTable />}></Route>
            <Route path="/ProjectReport" name="clienttdata" element={<ProjectReportTable />}></Route>
            <Route
              path="/SubCategoryDetails"
              name="clienttdata"
              element={<SubCategoryDetailsTable />}
            ></Route>
  
            <Route path="/Valuelist" name="clienttdata" element={<ValuelistTable />}></Route>
            <Route
              path="/ValuelistDetails"
              name="clienttdata"
              element={<ValuelistDetailsTable />}
            ></Route>
            <Route path="/Section" name="clienttdata" element={<Section />}></Route>
            <Route path="/SectionDetails" name="clienttdata" element={<SectionDetails />}></Route>
            <Route path="/Setting" name="clienttdata" element={<SettingTable />}></Route>
            <Route path="/SettingDetails" name="clienttdata" element={<SettingDetails />}></Route>
            <Route path="/Category" name="tenderdata" element={<CategoryTable />}></Route>
            <Route path="/CategoryDetails" name="tenderdata" element={<CategoryDetails />}></Route>
            <Route path="/UserGroup" name="clienttdata" element={<UserGroupTable />}></Route>
            <Route path="/UserGroupDetails" name="clienttdata" element={<UserGroupDetails />}></Route>
            <Route path="/Employee" name="clienttdata" element={<Employee />}></Route>
            <Route
              path="/EmployeeDetails"
              name="clienttdata"
              element={<EmployeeDetailsTable />}
            ></Route>
            <Route
              path="/EmployeeEdit/:id"
              name="clienttdata"
              element={<EmployeeEdit />}
            ></Route>
            <Route
              path="/PayrollManagement"
              name="clienttdata"
              element={<PayrollManagementTable />}
            ></Route>
            <Route
              path="/PayrollManagementDetails/:id"
              name="clienttdata"
              element={<PayrollManagementDetails />}
            ></Route>
            <Route path="/Content" name="clienttdata" element={<Content />}></Route>
            <Route
              path="/ContentDetails"
              name="clienttdata"
              element={<ContentDetailsTable />}
            ></Route>
            <Route path="/test" name="clienttdata" element={<TestTable />}></Route>
            <Route path="/Support" name="clienttdata" element={<Support />}></Route>
            <Route path="/SupportNew" name="clienttdata" element={<SupportNewTable />}></Route>
            <Route path="/SupportDetails" name="tenderdata" element={<SupportDetails />}></Route>
            <Route path="/PurchaseOrder" name="clienttdata" element={<PurchaseOrderTable />}></Route>
            <Route
              path="/Employeetrainingreports"
              name="clienttdata"
              element={<EmployeetrainingreportsTable />}
            ></Route>
            <Route
              path="/StatementofAccountsReport"
              name="clienttdata"
              element={<StatementofAccountsReport />}
            ></Route>
            <Route
              path="/NewStatementsOfAcc"
              name="clienttdata"
              element={<NewStatementsOfAcc />}
            ></Route>
            <Route path="/AgingReports" name="clienttdata" element={<AgingReportsTable />}></Route>
            <Route
              path="/CpfSummaryreports"
              name="clienttdata"
              element={<CpfSummaryReports />}
            ></Route>
            <Route path="/InvoiceByMonth" name="clienttdata" element={<InvoiceByMonth />}></Route>
            <Route
              path="/EmployeeSalaryReport"
              name="clienttdata"
              element={<EmployeeSalaryReport />}
            ></Route>
            <Route
              path="/PayslipGeneratedReports"
              name="clienttdata"
              element={<PayslipGeneratedReports />}
            ></Route>
            <Route path="/IR8AReport" name="clienttdata" element={<IR8AReport />}></Route>
            
            <Route path="/ProfitLossReport" name="clienttdata" element={<ProfitLossReport />}></Route>
  
            <Route
              path="/PurchaseGstReport"
              name="clienttdata"
              element={<PurchaseGstReport />}
            ></Route>
  
            <Route
              path="/PurchaseOrderDetails"
              name="clienttdata"
              element={<PurchaseOrderDetails />}
            ></Route> */}
          </Route>
        </Routes>
      </div>
)
  
  };
  export default RouterNew;