import * as Icon from 'react-feather';

const SidebarData = [
  
  {
    title: 'Trading',
    href: '',
    id: 1,
    suffix: '4',
    suffixColor: 'bg-info text-dark-white',
    //icon: <Icon.Truck />,
    collapisble: true,
    children: [
      {
        title: 'DashBoard',
        href: '/dashboards/classic',
        icon: <Icon.Disc />,
        id: 1.1,
        collapisble: false,
      },
      {
        title: 'Enquiry',
        href: '/Enquiry',
        icon: <Icon.Disc />,
        id: 1.2,
        collapisble: false,
      },
      {
        title: 'Quotation',
        href: '/Quotation',
        icon: <Icon.Disc />,
        id: 1.3,
        collapisble: false,
      },
      {
        title: 'Sales Order',
        href: '/SalesOrder',
        icon: <Icon.Disc />,
        id: 1.4,
        collapisble: false,
      },
      {
        title: 'Goods Delivery',
        href: '/GoodsDelivery',
        icon: <Icon.Disc />,
        id: 1.5,
        collapisble: false,
      },
      {
        title: 'Sales Invoice',
        href: '/SalesInvoice',
        icon: <Icon.Disc />,
        id: 1.6,
        collapisble: false,
      },
      {
        title: 'Sales Return',
        href: '/SalesReturn',
        icon: <Icon.Disc />,
        id: 1.7,
        collapisble: false,
      },
      {
        title: 'Customer',
        href: '/Customer',
        icon: <Icon.Disc />,
        id: 1.8,
        collapisble: false,
      },
      {
        title: 'Sales Receipts',
        href: '/Receipt',
        icon: <Icon.Disc />,
        id: 1.9,
        collapisble: false,
      },
    ],
  },
  
  {
    title: 'Project',
    href: '',
    id: 2,
    //suffix: '4',
    suffixColor: 'bg-info text-dark-white',
    //icon: <Icon.Truck />,
    collapisble: true,
    children: [
  {
    title: 'Dashboard',
    href: '/dashboards/Classic',
    //icon: <Icon.Disc />,
    id: 2.1,
    collapisble: false,
  },
  {
    title: 'Project Enquiry',
    href: '/ProjectEnquiry',
    //icon: <Icon.MessageCircle />,
    id: 2.2,
    collapisble: false,
  },
  {
    title: 'Project Quotation',
    href: '/ProjectQuotation',
    //icon: <Icon.User />,
    id: 2.3,
    collapisble: false,
  },
  {
    title: 'Proposal',
    href: '/Proposal',
   // icon: <Icon.Calendar />,
    id: 2.4,
    collapisble: false,
  },
  {
    title: 'Project',
    href: '/Project',
    //icon: <Icon.Mail />,
    //suffix: 'New',
    suffixColor: 'bg-success text-dark-white',
    id: 2.5,
    collapisble: false,
  },
  {
    title: 'Job Order',
    href: '/JobOrder',
    //icon: <Icon.UserCheck />,
    id: 2.6,
    collapisble: false,
  },
  {
    title: 'Subcontract',
    href: '/Subcontract',
    //icon: <Icon.ShoppingCart />,
    id: 2.7,
    collapisble: false,
    
  },
  {
    title: 'Task',
    href: '/Task',
    //icon: <Icon.ShoppingCart />,
    id: 2.7,
    collapisble: false,
    
  },
  {
    title: 'Material Request',
    href: '/MaterialRequest',
    //icon: <Icon.Bookmark />,
    id: 2.8,
    collapisble: false,
    
  },
  {
    title: 'Material Issue',
    href: '/MaterialIssue',
    //icon: <Icon.Triangle />,
    id: 2.9,
    collapisble: false,
  },
  {
    title: 'Labour Request',
    href: '/LabourRequest',
    //icon: <Icon.Triangle />,
    id: 2.10,
    collapisble: false,
  },
  {
    title: 'Equipment Request',
    href: '/EquipmentRequest',
    //icon: <Icon.Triangle />,
    id: 2.11,
    collapisble: false,
  },
  {
    title: 'Equipment Issue',
    href: '/EquipmentIssue',
    //icon: <Icon.Triangle />,
    id: 2.11,
    collapisble: false,
  },
  // {
  //   title: '',
  //   href: '',
  //   //icon: <Icon.Triangle />,
  //   id: 2.12,
  //   collapisble: false,
  // },
  {
    title: 'Change Request',
    href: '/ChangeRequest',
    //icon: <Icon.Triangle />,
    id: 2.13,
    collapisble: false,
  },
  {
    title: 'Document',
    href: '/Document',
    //icon: <Icon.Triangle />,
    id: 2.14,
    collapisble: false,
  },
],
  },

  
  {
    title: 'Purchase',
    href: '',
    id: 3,
    //suffix: '22',
    suffixColor: 'bg-info text-dark-white',
    //icon: <Icon.Cpu />,
    collapisble: true,
    children: [
      {
        title: 'Dashboard',
        href: '/dashboards/Classic',
        //icon: <Icon.Disc />,
        id: 3.1,
        collapisble: false,
      },
{
    title: 'Purchase Request',
    href: '/PurchaseRequest',
    id: 3.2,
    //suffix: '22',
    suffixColor: 'bg-info text-dark-white',
    //icon: <Icon.Cpu />,
    collapisble: false,
    
  },
  {
    title: 'Request for Quote',
    href: '/RequestForQuote',
    id: 3.3,
    //suffix: '22',
    suffixColor: 'bg-info text-dark-white',
    //icon: <Icon.Cpu />,
    collapisble: false,
    
  },
  {
    title: 'Purchase Order',
    href: '/PurchaseOrder',
    id: 3.4,
    //suffix: '22',
    suffixColor: 'bg-info text-dark-white',
    //icon: <Icon.Cpu />,
    collapisble: false,
    
  },
  {
    title: 'Goods Receipt',
    href: '/GoodsReceipt',
    id: 3.5,
    //suffix: '22',
    suffixColor: 'bg-info text-dark-white',
    //icon: <Icon.Cpu />,
    collapisble: false,
    
  },
  {
    title: 'Purchase Invoice',
    href: '/PurchaseInvoice',
    id: 3.6,
    //suffix: '22',
    suffixColor: 'bg-info text-dark-white',
    //icon: <Icon.Cpu />,
    collapisble: false,
    
  },
  {
    title: 'Purchase Return',
    href: '/PurchaseReturn',
    id: 3.7,
    //suffix: '22',
    suffixColor: 'bg-info text-dark-white',
    //icon: <Icon.Cpu />,
    collapisble: false,
    
  },
  {
    title: 'Supplier',
    href: '/Supplier',
    id: 3.8,
    //suffix: '22',
    suffixColor: 'bg-info text-dark-white',
    //icon: <Icon.Cpu />,
    collapisble: false,
    
  },
  {
    title: 'Supplier Payments',
    href: '/SupplierPayments',
    id: 3.9,
    //suffix: '22',
    suffixColor: 'bg-info text-dark-white',
    //icon: <Icon.Cpu />,
    collapisble: false,
    
  },
  {
    title: 'Supplier Price List',
    href: '',
    id: 3.10,
    //suffix: '22',
    suffixColor: 'bg-info text-dark-white',
    //icon: <Icon.Cpu />,
    collapisble: false,
    
  },
],
},

  {
    title: 'Inventory',
    href: '',
    id: 4,
    //suffix: '22',
    suffixColor: 'bg-info text-dark-white',
    //icon: <Icon.Cpu />,
    collapisble: true,
    children: [
      {
        title: 'Product',
        href: '/Product',
        //icon: <Icon.Disc />,
        id: 4.1,
        collapisble: false,
      },
{
    title: 'Inventory',
    href: '/Inventory',
    id: 4.2,
    //suffix: '22',
    suffixColor: 'bg-info text-dark-white',
    //icon: <Icon.Cpu />,
    collapisble: false,
    
  },
  {
    title: 'Category',
    href: '/Category',
    id: 4.3,
    //suffix: '22',
    suffixColor: 'bg-info text-dark-white',
    //icon: <Icon.Cpu />,
    collapisble: false,
    
  },
  {
    title: 'Subcategory',
    href: '/Subcategory',
    id: 4.4,
    //suffix: '22',
    suffixColor: 'bg-info text-dark-white',
    //icon: <Icon.Cpu />,
    collapisble: false,
    
  },
  {
    title: 'Price List',
    href: '/PriceList',
    id: 4.5,
    //suffix: '22',
    suffixColor: 'bg-info text-dark-white',
    //icon: <Icon.Cpu />,
    collapisble: false,
    
  },
  {
    title: 'UOM',
    href: '',
    id: 4.6,
    //suffix: '22',
    suffixColor: 'bg-info text-dark-white',
    //icon: <Icon.Cpu />,
    collapisble: false,
    
  },
  {
    title: 'Print Label',
    href: '',
    id: 4.7,
    //suffix: '22',
    suffixColor: 'bg-info text-dark-white',
    //icon: <Icon.Cpu />,
    collapisble: false,
    
  },
  
],
},

  {
    title: 'Accounts',
    href: '',
    id: 5,
    //suffix: '22',
    suffixColor: 'bg-info text-dark-white',
    //icon: <Icon.Cpu />,
    collapisble: true,
    children: [
      {
        title: 'Account Group',
        href: '',
        //icon: <Icon.Disc />,
        id: 5.1,
        collapisble: false,
      },
{
    title: 'Chart of Accounts',
    href: '',
    id: 5.2,
    //suffix: '22',
    suffixColor: 'bg-info text-dark-white',
    //icon: <Icon.Cpu />,
    collapisble: false,
    
  },
  {
    title: 'Journal',
    href: '',
    id: 5.3,
    //suffix: '22',
    suffixColor: 'bg-info text-dark-white',
    //icon: <Icon.Cpu />,
    collapisble: false,
    
  },
  {
    title: 'Ledger',
    href: '',
    id: 5.4,
    //suffix: '22',
    suffixColor: 'bg-info text-dark-white',
    //icon: <Icon.Cpu />,
    collapisble: false,
    
  },
  {
    title: 'Credit Note',
    href: '',
    id: 5.5,
    //suffix: '22',
    suffixColor: 'bg-info text-dark-white',
    //icon: <Icon.Cpu />,
    collapisble: false,
    
  },
  {
    title: 'Debit Note',
    href: '',
    id: 5.6,
    //suffix: '22',
    suffixColor: 'bg-info text-dark-white',
    //icon: <Icon.Cpu />,
    collapisble: false,
    
  },
  {
    title: 'VAT Return',
    href: '',
    id: 5.7,
    //suffix: '22',
    suffixColor: 'bg-info text-dark-white',
    //icon: <Icon.Cpu />,
    collapisble: false,
    
  },
  
],
},
{
  title: 'Admin',
  href: '',
  id: 1,
  suffix: '4',
  suffixColor: 'bg-info text-dark-white',
  //icon: <Icon.Truck />,
  collapisble: true,
  children: [
  
    {
      title: 'Section',
      href: '/Section',
      icon: <Icon.Disc />,
      id: 1.2,
      collapisble: false,
    },
     
   
 
  ],
},
];

export default SidebarData;
