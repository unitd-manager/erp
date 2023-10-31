import { lazy } from 'react';
import { Navigate } from 'react-router-dom';
import Loadable from '../layouts/loader/Loadable';
import EnquiryEdit from '../views/EditData/EnquiryEdit';
import StaffEdit from '../views/EditData/StaffEdit';
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
import InventoryEdit from '../views/EditData/InventoryEdit';
import MaterialRequestEdit from '../views/EditData/MaterialRequestEdit';
import MaterialIssueEdit from '../views/EditData/MaterialIssueEdit';
import EquipmentRequestEdit from '../views/EditData/EquipmentRequestEdit';
import LabourRequestEdit from '../views/EditData/LabourRequestEdit';
import DocumentEdit from '../views/EditData/DocumentEdit';
import ChangeRequestEdit from '../views/EditData/ChangeRequestEdit';
import EquipmentIssueEdit from '../views/EditData/EquipmentIssueEdit';
import SectionEdit from '../views/EditData/SectionEdit';
import SectionDetails from '../views/DetailTable/SectionDetails';
import StaffDetails from '../views/DetailTable/StaffDetails';
import UserGroupDetails from '../views/DetailTable/UserGroupDetails';
import UserGroupEdit from '../views/EditData/UserGroupEdit';
import JobOrderEdit from '../views/EditData/JobOrderEdit';
import GoodsReceiptEdit from '../views/EditData/GoodsReceiptEdit';
import ProjectEnquiryEdit from '../views/EditData/ProjectEnquiryEdit';
import ConditionalLoginForm from '../views/auth/ConditionalLoginForm';

/****Layouts*****/

const FullLayout = Loadable(lazy(() => import('../layouts/FullLayout')));
const BlankLayout = Loadable(lazy(() => import('../layouts/BlankLayout')));
/***** Pages ****/

const Classic = Loadable(lazy(() => import('../views/dashboards/Classic')));
const Crypto = Loadable(lazy(() => import('../views/dashboards/Crypto')));
const Ecommerce = Loadable(lazy(() => import('../views/dashboards/Ecommerce')));
const General = Loadable(lazy(() => import('../views/dashboards/General')));
const Extra = Loadable(lazy(() => import('../views/dashboards/Extra')));

/***** DetailTable ****/

/***** Apps ****/
const Notes = Loadable(lazy(() => import('../views/apps/notes/Notes')));
const Chat = Loadable(lazy(() => import('../views/apps/chat/Chat')));
const Contacts = Loadable(lazy(() => import('../views/apps/contacts/Contacts')));
const Calendar = Loadable(lazy(() => import('../views/apps/calendar/CalendarApp')));
const Email = Loadable(lazy(() => import('../views/apps/email/Email')));
const Shop = Loadable(lazy(() => import('../views/apps/ecommerce/Shop')));
const ShopDetail = Loadable(lazy(() => import('../views/apps/ecommerce/ShopDetail')));
const Treeview = Loadable(lazy(() => import('../views/apps/treeview/TreeView')));
const TicketList = Loadable(lazy(() => import('../views/apps/ticket/TicketList')));
const TicketDetail = Loadable(lazy(() => import('../views/apps/ticket/TicketDetail')));

/***** Ui Elements ****/
const Alerts = Loadable(lazy(() => import('../views/ui/Alerts')));
const Badges = Loadable(lazy(() => import('../views/ui/Badges')));
const Buttons = Loadable(lazy(() => import('../views/ui/Buttons')));
const Cards = Loadable(lazy(() => import('../views/ui/Cards')));
const Grid = Loadable(lazy(() => import('../views/ui/Grid')));
const Tables = Loadable(lazy(() => import('../views/ui/Tables')));
const Forms = Loadable(lazy(() => import('../views/ui/Forms')));
const Breadcrumbs = Loadable(lazy(() => import('../views/ui/Breadcrumbs')));
const Dropdowns = Loadable(lazy(() => import('../views/ui/DropDown')));
const BtnGroup = Loadable(lazy(() => import('../views/ui/BtnGroup')));
const Collapse = Loadable(lazy(() => import('../views/ui/Collapse')));
const ListGroup = Loadable(lazy(() => import('../views/ui/ListGroup')));
const Modal = Loadable(lazy(() => import('../views/ui/Modal')));
const Navbar = Loadable(lazy(() => import('../views/ui/Navbar')));
const Nav = Loadable(lazy(() => import('../views/ui/Nav')));
const Pagination = Loadable(lazy(() => import('../views/ui/Pagination')));
const Popover = Loadable(lazy(() => import('../views/ui/Popover')));
const Progress = Loadable(lazy(() => import('../views/ui/Progress')));
const Spinner = Loadable(lazy(() => import('../views/ui/Spinner')));
const Tabs = Loadable(lazy(() => import('../views/ui/Tabs')));
const Toasts = Loadable(lazy(() => import('../views/ui/Toasts')));
const Tooltip = Loadable(lazy(() => import('../views/ui/Tooltip')));

/***** Form Layout Pages ****/
const FormBasic = Loadable(lazy(() => import('../views/form-layouts/FormBasic')));
const FormGrid = Loadable(lazy(() => import('../views/form-layouts/FormGrid')));
const FormGroup = Loadable(lazy(() => import('../views/form-layouts/FormGroup')));
const FormInput = Loadable(lazy(() => import('../views/form-layouts/FormInput')));

/***** Form Pickers Pages ****/
const Datepicker = Loadable(lazy(() => import('../views/form-pickers/DateTimePicker')));
const TagSelect = Loadable(lazy(() => import('../views/form-pickers/TagSelect')));

/***** Form Validation Pages ****/
const FormValidate = Loadable(lazy(() => import('../views/form-validation/FormValidation')));
const FormSteps = Loadable(lazy(() => import('../views/form-steps/Steps')));
const FormEditor = Loadable(lazy(() => import('../views/form-editor/FormEditor')));
/***** Table Pages ****/
const Basictable = Loadable(lazy(() => import('../views/tables/TableBasic')));
const CustomReactTable = Loadable(lazy(() => import('../views/tables/CustomReactTable')));
const ReactBootstrapTable = Loadable(lazy(() => import('../views/tables/ReactBootstrapTable')));

/***** Chart Pages ****/
const ApexCharts = Loadable(lazy(() => import('../views/charts/ApexCharts')));
const ChartJs = Loadable(lazy(() => import('../views/charts/ChartJs')));

/***** Sample Pages ****/
const StarterKit = Loadable(lazy(() => import('../views/sample-pages/StarterKit')));
const Profile = Loadable(lazy(() => import('../views/sample-pages/Profile')));
const Gallery = Loadable(lazy(() => import('../views/sample-pages/Gallery')));
const SearchResult = Loadable(lazy(() => import('../views/sample-pages/SearchResult')));
const HelperClass = Loadable(lazy(() => import('../views/sample-pages/HelperClass')));

/***** Icon Pages ****/
const Bootstrap = Loadable(lazy(() => import('../views/icons/Bootstrap')));
const Feather = Loadable(lazy(() => import('../views/icons/Feather')));

/***** Map Pages ****/
const CustomVectorMap = Loadable(lazy(() => import('../views/maps/CustomVectorMap')));

/***** Widget Pages ****/
const Widget = Loadable(lazy(() => import('../views/widget/Widget')));

/***** CASL Access Control ****/
const CASL = Loadable(lazy(() => import('../views/apps/accessControlCASL/AccessControl')));

/***** Auth Pages ****/
const Error = Loadable(lazy(() => import('../views/auth/Error')));
const RegisterFormik = Loadable(lazy(() => import('../views/auth/RegisterFormik')));
const LoginFormik = Loadable(lazy(() => import('../views/auth/LoginFormik')));
const Maintanance = Loadable(lazy(() => import('../views/auth/Maintanance')));
const LockScreen = Loadable(lazy(() => import('../views/auth/LockScreen')));
const RecoverPassword = Loadable(lazy(() => import('../views/auth/RecoverPassword')));
//const Login = Loadable(lazy(() => import('../views/auth/Login')));
//const LoginForm = Loadable(lazy(() => import('../views/auth/LoginForm')));
const  Logout = Loadable(lazy(() => import('../views/auth/Logout')));

// ErpDemoRoutes
const EnquiryList = Loadable(lazy(() => import('../views/ListData/EnquiryList')));
const Staff = Loadable(lazy(() => import('../views/ListData/Staff')));
const UserGroup= Loadable(lazy(() => import('../views/ListData/UserGroup')));
const Section = Loadable(lazy(() => import('../views/ListData/Section')));
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
const InventoryList = Loadable(lazy(() => import('../views/ListData/InventoryList')));
const MaterialRequestList = Loadable(lazy(() => import('../views/ListData/MaterialRequestList')));
const MaterialIssueList = Loadable(lazy(() => import('../views/ListData/MaterialIssueList')));
const EquipmentRequestList = Loadable(lazy(() => import('../views/ListData/EquipmentRequestList')));
const LabourRequestList = Loadable(lazy(() => import('../views/ListData/LabourRequestList')));
const DocumentList = Loadable(lazy(() => import('../views/ListData/DocumentList')));
const ChangeRequestList = Loadable(lazy(() => import('../views/ListData/ChangeRequestList')));
const EquipmentIssueList = Loadable(lazy(() => import('../views/ListData/EquipmentIssueList')));
const JobOrderList = Loadable(lazy(() => import('../views/ListData/JobOrderList')));
const GoodsReceiptList = Loadable(lazy(() => import('../views/ListData/GoodsReceiptList')));
const SupplierPaymentsList = Loadable(lazy(() => import('../views/ListData/SupplierPaymentsList')));
const ProjectEnquiryList = Loadable(lazy(() => import('../views/ListData/ProjectEnquiryList')));

/*****Routes******/

const ThemeRoutes = [
  { path: '/', name: 'Home', element: <ConditionalLoginForm /> },
  
  {
    path: '/',
    element: <FullLayout />,
    children: [
      //{ path: '/', name: 'Home', element: <Navigate to="/dashboard/Classic" /> },
      
      { path: '/dashboards/Classic', name: 'Classic', exact: true, element: <Classic /> },
      { path: '/dashboards/crypto', name: 'Classic', exact: true, element: <Crypto /> },
      { path: '/dashboards/ecommerce', name: 'ecommerce', exact: true, element: <Ecommerce /> },
      { path: '/dashboards/general', name: 'general', exact: true, element: <General /> },
      { path: '/dashboards/extra', name: 'extra', exact: true, element: <Extra /> },
      { path: '/EnquiryEdit', name: 'extra', exact: true, element: <EnquiryEdit /> },
      { path: '/StaffEdit/:id', name: 'extra', exact: true, element: <StaffEdit /> },
      { path: '/SectionDetails', name: 'extra', exact: true, element: <SectionDetails /> },
      { path: '/StaffDetails', name: 'extra', exact: true, element: <StaffDetails /> },
      { path: '/UserGroupDetails', name: 'extra', exact: true, element: <UserGroupDetails /> },
      { path: '/Enquiry', name: 'extra', exact: true, element: <EnquiryList /> },
      { path: '/Staff', name: 'extra', exact: true, element: <Staff /> },
      { path: '/UserGroup', name: 'extra', exact: true, element: <UserGroup /> },
      { path: '/Section', name: 'extra', exact: true, element: <Section /> },
      { path: '/QuotationEdit', name: 'extra', exact: true, element: <QuotationEdit /> },
      { path: '/Quotation', name: 'extra', exact: true, element: <QuotationList /> },
      { path: '/SalesOrder', name: 'extra', exact: true, element: <SalesOrderList /> },
      { path: '/SalesOrderEdit', name: 'extra', exact: true, element: <SalesOrderEdit /> },
      { path: '/GoodsDelivery', name: 'extra', exact: true, element: <GoodsDeliveryList /> },
      { path: '/GoodsDeliveryEdit', name: 'extra', exact: true, element: <GoodsDeliveryEdit /> },
      { path: '/SalesInvoiceEdit', name: 'extra', exact: true, element: <SalesInvoiceEdit /> },
      { path: '/SalesInvoice', name: 'extra', exact: true, element: <SalesInvoiceList /> },
      { path: '/SalesReturn', name: 'extra', exact: true, element: <SalesReturnList /> },
      { path: '/Customer', name: 'extra', exact: true, element: <CustomerList /> },
      { path: '/CustomerEdit', name: 'extra', exact: true, element: <CustomerEdit /> },
      { path: '/SalesReturnEdit', name: 'extra', exact: true, element: <SalesReturnEdit /> },
      { path: '/Receipt', name: 'extra', exact: true, element: <ReceiptList /> },
      { path: '/ReceiptEdit', name: 'extra', exact: true, element: <ReceiptEdit /> },
      { path: '/Project', name: 'extra', exact: true, element: <ProjectList /> },
      { path: '/ProjectEdit', name: 'extra', exact: true, element: <ProjectEdit /> },
      { path: '/ProjectQuotation', name: 'extra', exact: true, element: <ProjectQuotationList /> },
      { path: '/Proposal', name: 'extra', exact: true, element: <ProposalList /> },
      { path: '/ProposalEdit', name: 'extra', exact: true, element: <ProposalEdit/> },
      { path: '/Inventory', name: 'extra', exact: true, element: <InventoryList /> },
      { path: '/InventoryEdit', name: 'extra', exact: true, element: <InventoryEdit/> },
      { path: '/MaterialRequest', name: 'extra', exact: true, element: <MaterialRequestList/> },
      { path: '/MaterialRequestEdit', name: 'extra', exact: true, element: <MaterialRequestEdit/> },
      { path: '/MaterialIssue', name: 'extra', exact: true, element: <MaterialIssueList/> },
      { path: '/MaterialIssueEdit', name: 'extra', exact: true, element: <MaterialIssueEdit/> },
      { path: '/EquipmentRequest', name: 'extra', exact: true, element: <EquipmentRequestList/> },
      { path: '/EquipmentRequestEdit', name: 'extra', exact: true, element: <EquipmentRequestEdit/> },
      { path: '/LabourRequest', name: 'extra', exact: true, element: <LabourRequestList/> },
      { path: '/LabourRequestEdit', name: 'extra', exact: true, element: <LabourRequestEdit/> },
      { path: '/Document', name: 'extra', exact: true, element: <DocumentList/> },
      { path: '/DocumentEdit', name: 'extra', exact: true, element: <DocumentEdit/> },
      { path: '/ChangeRequest', name: 'extra', exact: true, element: <ChangeRequestList/> },
      { path: '/ChangeRequestEdit', name: 'extra', exact: true, element: <ChangeRequestEdit/> },
      { path: '/EquipmentIssue', name: 'extra', exact: true, element: <EquipmentIssueList/> },
      { path: '/EquipmentIssueEdit', name: 'extra', exact: true, element: <EquipmentIssueEdit/> },
      { path: '/SectionEdit/:id', name: 'extra', exact: true, element: <SectionEdit/> },
      { path: '/UserGroupEdit/:id', name: 'extra', exact: true, element: <UserGroupEdit/> },
      { path: '/JobOrder', name: 'extra', exact: true, element: <JobOrderList/> },
      { path: '/JobOrderEdit', name: 'extra', exact: true, element: <JobOrderEdit/> },
      { path: '/GoodsReceipt', name: 'extra', exact: true, element: <GoodsReceiptList/> },
      { path: '/GoodsReceiptEdit', name: 'extra', exact: true, element: <GoodsReceiptEdit/> },
      { path: '/SupplierPayments', name: 'extra', exact: true, element: <SupplierPaymentsList/> },
      { path: '/ProjectEnquiryEdit', name: 'extra', exact: true, element: <ProjectEnquiryEdit/> },
      { path: '/ProjectEnquiry', name: 'extra', exact: true, element: <ProjectEnquiryList/> },
      

      {
        path: '/ProjectQuotationEdit',
        name: 'extra',
        exact: true,
        element: <ProjectQuotationEdit />,
      },
      { path: '/Supplier', name: 'extra', exact: true, element: <SupplierList /> },
      { path: '/SupplierEdit', name: 'extra', exact: true, element: <SupplierEdit /> },
      { path: '/RequestForQuote', name: 'extra', exact: true, element: <RequestForQuoteList /> },
      {
        path: '/RequestForQuoteEdit',
        name: 'extra',
        exact: true,
        element: <RequestForQuoteEdit />,
      },
      { path: '/PurchaseOrder', name: 'extra', exact: true, element: <PurchaseOrderList /> },
      { path: '/PurchaseOrderEdit', name: 'extra', exact: true, element: <PurchaseOrderEdit /> },
      { path: '/PurchaseRequest', name: 'extra', exact: true, element: <PurchaseRequestList /> },
      {
        path: '/PurchaseRequestEdit',
        name: 'extra',
        exact: true,
        element: <PurchaseRequestEdit />,
      },
      { path: '/Product', name: 'extra', exact: true, element: <ProductList /> },
      { path: '/ProductEdit', name: 'extra', exact: true, element: <ProductEdit /> },
      { path: '/Subcontract', name: 'extra', exact: true, element: <SubcontractList /> },
      { path: '/SubcontractEdit', name: 'extra', exact: true, element: <SubcontractEdit /> },
      {
        path: '/PurchaseInvoiceEdit',
        name: 'extra',
        exact: true,
        element: <PurchaseInvoiceEdit />,
      },
      { path: '/PurchaseInvoice', name: 'extra', exact: true, element: <PurchaseInvoiceList /> },
      { path: '/PurchaseReturnEdit', name: 'extra', exact: true, element: <PurchaseReturnEdit /> },
      { path: '/PurchaseReturn', name: 'extra', exact: true, element: <PurchaseReturnList /> },
      { path: '/Task', name: 'extra', exact: true, element: <TaskList /> },
      { path: '/TaskEdit', name: 'extra', exact: true, element: <TaskEdit /> },
      { path: '/Category', name: 'extra', exact: true, element: <CategoryList /> },
      { path: '/CategoryEdit', name: 'extra', exact: true, element: <CategoryEdit /> },
      { path: '/SubCategory', name: 'extra', exact: true, element: <SubCategoryList /> },
      { path: '/SubCategoryEdit', name: 'extra', exact: true, element: <SubCategoryEdit /> },
      { path: '/PriceList', name: 'extra', exact: true, element: <PriceListList /> },
      { path: '/PriceListEdit', name: 'extra', exact: true, element: <PriceListEdit /> },
      { path: '/apps/notes', name: 'notes', exact: true, element: <Notes /> },
      { path: '/apps/chat', name: 'chat', exact: true, element: <Chat /> },
      { path: '/apps/contacts', name: 'contacts', exact: true, element: <Contacts /> },
      { path: '/apps/calendar', name: 'calendar', exact: true, element: <Calendar /> },
      { path: '/apps/email', name: 'email', exact: true, element: <Email /> },
      { path: '/ecom/shop', name: 'email', exact: true, element: <Shop /> },
      { path: '/ecom/shopdetail', name: 'email', exact: true, element: <ShopDetail /> },
      { path: '/tickt/ticket-list', name: 'ticket list', exact: true, element: <TicketList /> },
      {
        path: '/tickt/ticket-detail',
        name: 'ticket detail',
        exact: true,
        element: <TicketDetail />,
      },
      { path: '/apps/treeview', name: 'email', exact: true, element: <Treeview /> },
      { path: '/ui/alerts', name: 'alerts', exact: true, element: <Alerts /> },
      { path: '/ui/badges', name: 'badges', exact: true, element: <Badges /> },
      { path: '/ui/buttons', name: 'buttons', exact: true, element: <Buttons /> },
      { path: '/ui/cards', name: 'cards', exact: true, element: <Cards /> },
      { path: '/ui/grid', name: 'grid', exact: true, element: <Grid /> },
      { path: '/ui/table', name: 'table', exact: true, element: <Tables /> },
      { path: '/ui/forms', name: 'forms', exact: true, element: <Forms /> },
      { path: '/ui/breadcrumbs', name: 'breadcrumbs', exact: true, element: <Breadcrumbs /> },
      { path: '/ui/dropdown', name: 'dropdown', exact: true, element: <Dropdowns /> },
      { path: '/ui/button-group', name: 'button group', exact: true, element: <BtnGroup /> },
      { path: '/ui/collapse', name: 'collapse', exact: true, element: <Collapse /> },
      { path: '/ui/list-group', name: 'list-group', exact: true, element: <ListGroup /> },
      { path: '/ui/modal', name: 'modal', exact: true, element: <Modal /> },
      { path: '/ui/navbar', name: 'navbar', exact: true, element: <Navbar /> },
      { path: '/ui/nav', name: 'nav', exact: true, element: <Nav /> },
      { path: '/ui/pagination', name: 'pagination', exact: true, element: <Pagination /> },
      { path: '/ui/popover', name: 'popover', exact: true, element: <Popover /> },
      { path: '/ui/progress', name: 'progress', exact: true, element: <Progress /> },
      { path: '/ui/spinner', name: 'spinner', exact: true, element: <Spinner /> },
      { path: '/ui/tabs', name: 'tabs', exact: true, element: <Tabs /> },
      { path: '/ui/toasts', name: 'toasts', exact: true, element: <Toasts /> },
      { path: '/ui/tooltip', name: 'tooltip', exact: true, element: <Tooltip /> },
      { path: '/form-layout/form-basic', name: 'form-basic', exact: true, element: <FormBasic /> },
      { path: '/form-layout/form-grid', name: 'form-grid', exact: true, element: <FormGrid /> },
      { path: '/form-layout/form-group', name: 'form-group', exact: true, element: <FormGroup /> },
      { path: '/form-layout/form-input', name: 'form-input', exact: true, element: <FormInput /> },
      {
        path: '/form-pickers/datepicker',
        name: 'datepicker',
        exact: true,
        element: <Datepicker />,
      },
      { path: '/form-pickers/tag-select', name: 'tag-select', exact: true, element: <TagSelect /> },
      { path: '/form-validation', name: 'form-validation', exact: true, element: <FormValidate /> },
      { path: '/form-steps', name: 'form-steps', exact: true, element: <FormSteps /> },
      { path: '/form-editor', name: 'form-editor', exact: true, element: <FormEditor /> },

      { path: '/tables/basic-table', name: 'basic-table', exact: true, element: <Basictable /> },
      {
        path: '/tables/react-table',
        name: 'react-table',
        exact: true,
        element: <CustomReactTable />,
      },
      {
        path: '/tables/data-table',
        name: 'data-table',
        exact: true,
        element: <ReactBootstrapTable />,
      },
      { path: '/charts/apex', name: 'apex', exact: true, element: <ApexCharts /> },
      { path: '/charts/chartjs', name: 'chartjs', exact: true, element: <ChartJs /> },
      { path: '/sample-pages/profile', name: 'profile', exact: true, element: <Profile /> },
      {
        path: '/sample-pages/helper-class',
        name: 'helper-class',
        exact: true,
        element: <HelperClass />,
      },
      {
        path: '/sample-pages/starterkit',
        name: 'starterkit',
        exact: true,
        element: <StarterKit />,
      },
      { path: '/sample-pages/gallery', name: 'gallery', exact: true, element: <Gallery /> },
      {
        path: '/sample-pages/search-result',
        name: 'search-result',
        exact: true,
        element: <SearchResult />,
      },
      { path: '/icons/bootstrap', name: 'bootstrap', exact: true, element: <Bootstrap /> },
      { path: '/icons/feather', name: 'feather', exact: true, element: <Feather /> },
      { path: '/map/vector', name: 'vector', exact: true, element: <CustomVectorMap /> },
      { path: '/widget', name: 'widget', exact: true, element: <Widget /> },
      { path: '/casl', name: 'casl', exact: true, elemeqnt: <CASL /> },
      { path: '*', element: <Navigate to="/auth/404" /> },
    ],
  },
  {
    path: '/auth',
    element: <BlankLayout />,
    children: [
      { path: '404', element: <Error /> },
      { path: '*', element: <Navigate to="/auth/404" /> },
      { path: 'registerformik', element: <RegisterFormik /> },
      { path: 'loginformik', element: <LoginFormik /> },
      { path: 'maintanance', element: <Maintanance /> },
      { path: 'lockscreen', element: <LockScreen /> },
      { path: 'recoverpwd', element: <RecoverPassword /> },
      {
        path: 'login',
        element: <ConditionalLoginForm />,
      },
      { path: 'logout', element: <Logout /> },
    ],
    
  },
];

export default ThemeRoutes;
