import React, { Suspense, lazy } from "react";
import { Router, Switch, Route } from "react-router-dom";
import { history } from "./history";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import Spinner from "./components/@vuexy/spinner/Loading-spinner";
import knowledgeBaseCategory from "./views/pages/knowledge-base/Category";
import knowledgeBaseQuestion from "./views/pages/knowledge-base/Questions";
import { ContextLayout } from "./utility/context/Layout";

const analyticsDashboard = lazy(() =>
  import("./views/dashboard/analytics/AnalyticsDashboard")
);
const ecommerceDashboard = lazy(() =>
  import("./views/dashboard/ecommerce/EcommerceDashboard")
);
// const sellerDashboard = lazy(()=> import("./views/dashboard/seller/SellerDeshboard"));

// Customer
const CustomerGroup = lazy(() =>
  import("./views/apps/freshlist/customer/CustomerGroup")
);
const CustomerList = lazy(() =>
  import("./views/apps/freshlist/customer/CustomerList")
);
const ReviewTable = lazy(() =>
  import("./views/apps/freshlist/customer/ReviewTable")
);
const CustomerReview = lazy(() =>
  import("./views/apps/freshlist/customer/CustomerReview")
);

const FilterOption = lazy(() =>
  import("./views/apps/freshlist/customer/FilterOption")
);
const Summary = lazy(() => import("./views/apps/freshlist/customer/Summary"));
const AddFund = lazy(() => import("./views/apps/freshlist/customer/AddFund"));
const EditCustomer = lazy(() =>
  import("./views/apps/freshlist/customer/EditCustomer")
);
const ViewCustomer = lazy(() =>
  import("./views/apps/freshlist/customer/ViewCustomer")
);
// wallet
const Credit = lazy(() => import("./views/apps/freshlist/wallet/Credit"));
const Debit = lazy(() => import("./views/apps/freshlist/wallet/Debit"));
const AddTransactions = lazy(() =>
  import("./views/apps/freshlist/wallet/AddTransactions")
);

// Login
const Login = lazy(() => import("./views/pages/authentication/login/Login"));

// Hub List
const AddHub = lazy(() => import("./views/apps/freshlist/hubs/AddHub"));
const HubList = lazy(() => import("./views/apps/freshlist/hubs/HubList"));
// hub_list

//Banner

const BannerList = lazy(() =>
  import("./views/apps/freshlist/banner/BannerList")
);
const AddBanner = lazy(() => import("./views/apps/freshlist/banner/AddBanner"));
const ViewBanner = lazy(() =>
  import("./views/apps/freshlist/banner/ViewBanner")
);
const EditBanner = lazy(() =>
  import("./views/apps/freshlist/banner/EditBanner")
);
// Sales
const TotalSales = lazy(() =>
  import("./views/apps/freshlist/sales/TotalSales")
);
const HubSales = lazy(() => import("./views/apps/freshlist/sales/HubSales"));
// Zone
const CreateZone = lazy(() => import("./views/apps/freshlist/zone/CreateZone"));
const AddDeliveryCharges = lazy(() =>
  import("./views/apps/freshlist/zone/AddDeliveryCharges")
);
//Vendor
const AddVendor = lazy(() => import("./views/apps/freshlist/vendor/AddVendor"));
const VendorInformation = lazy(() =>
  import("./views/apps/freshlist/vendor/VendorInformation")
);
const VendorList = lazy(() =>
  import("./views/apps/freshlist/vendor/VendorList")
);
const WithDraws = lazy(() => import("./views/apps/freshlist/vendor/WithDraws"));
const ViewWithDraws = lazy(() =>
  import("./views/apps/freshlist/vendor/ViewWithDraws")
);
//Driver

const AddDriver = lazy(() => import("./views/apps/freshlist/driver/AddDriver"));
const DeliveryManList = lazy(() =>
  import("./views/apps/freshlist/driver/DeliveryManList")
);

const EditDeliveryMan = lazy(() =>
  import("./views/apps/freshlist/driver/EditDeliveryMan")
);

//special offer
const SpecialList = lazy(() =>
  import("./views/apps/freshlist/special/SpecialList")
);

//Coupon
const CouponList = lazy(() =>
  import("./views/apps/freshlist/coupon/CouponList")
);
// Deal Of Day
// const DealOfDay = lazy(() =>
//   import("./views/apps/freshlist/dealOfDay/DealOfDay")
// );

// Discount
const DiscountList = lazy(() =>
  import("./views/apps/freshlist/discount/DiscountList")
);
const EditDeal = lazy(() =>
  import("./views/apps/freshlist/dealOfDay/EditDeal")
);
const Points = lazy(() => import("./views/apps/freshlist/points/Points"));
//FlashSale
const FlashSale = lazy(() =>
  import("./views/apps/freshlist/flashSale/FlashSale")
);
const EditFlashSale = lazy(() =>
  import("./views/apps/freshlist/flashSale/EditFlashSale")
);
const AddFlashSale = lazy(() =>
  import("./views/apps/freshlist/flashSale/AddFlashSale")
);
//FeatureDeal

const FeatureDeal = lazy(() =>
  import("./views/apps/freshlist/featuredeal/FeatureDeal")
);

const EditFeatureDeal = lazy(() =>
  import("./views/apps/freshlist/featuredeal/EditFeatureDeal")
);

const AddFeatureDeal = lazy(() =>
  import("./views/apps/freshlist/featuredeal/AddFeatureDeal")
);
//Gallery

const Gallery = lazy(() => import("./views/apps/freshlist/gallery/Gallery"));
const AddGallery = lazy(() =>
  import("./views/apps/freshlist/gallery/AddGallery")
);

//order
const All = lazy(() => import("./views/apps/freshlist/order/All"));
const AddOrder = lazy(() => import("./views/apps/freshlist/order/AddOrder"));
const EditOrder = lazy(() => import("./views/apps/freshlist/order/EditOrder"));
const ViewAll = lazy(() => import("./views/apps/freshlist/order/ViewAll"));
const ViewPending = lazy(() =>
  import("./views/apps/freshlist/order/ViewPending")
);
const Pending = lazy(() => import("./views/apps/freshlist/order/Pending"));
const Confirmed = lazy(() => import("./views/apps/freshlist/order/Confirmed"));
const ViewConfirmed = lazy(() =>
  import("./views/apps/freshlist/order/ViewConfirmed")
);
const InProcess = lazy(() => import("./views/apps/freshlist/order/InProcess"));
const ViewPackaging = lazy(() =>
  import("./views/apps/freshlist/order/ViewPackaging")
);
const Outfordelivery = lazy(() =>
  import("./views/apps/freshlist/order/Outfordelivery")
);
const ViewOutfordelivery = lazy(() =>
  import("./views/apps/freshlist/order/ViewOutfordelivery")
);
const Delivered = lazy(() => import("./views/apps/freshlist/order/Delivered"));
const ViewDelivered = lazy(() =>
  import("./views/apps/freshlist/order/ViewDelivered")
);
const Returned = lazy(() => import("./views/apps/freshlist/order/Returned"));
const ViewReturned = lazy(() =>
  import("./views/apps/freshlist/order/ViewReturned")
);
const Failedtodeliver = lazy(() =>
  import("./views/apps/freshlist/order/Failedtodeliver")
);
const ViewFailedtodeliver = lazy(() =>
  import("./views/apps/freshlist/order/ViewFailedtodeliver")
);
const Canceled = lazy(() => import("./views/apps/freshlist/order/Canceled"));
const ViewCanceled = lazy(() =>
  import("./views/apps/freshlist/order/ViewCanceled")
);
//Refund Request

const PendingRequest = lazy(() =>
  import("./views/apps/freshlist/refundrequest/PendingRequest")
);

const ViewPendingRequest = lazy(() =>
  import("./views/apps/freshlist/refundrequest/ViewPendingRequest")
);
const ApprovedRequest = lazy(() =>
  import("./views/apps/freshlist/refundrequest/ApprovedRequest")
);

const ViewApprovedRequest = lazy(() =>
  import("./views/apps/freshlist/refundrequest/ViewApprovedRequest")
);
const RejectedRequest = lazy(() =>
  import("./views/apps/freshlist/refundrequest/RejectedRequest")
);

const ViewRejectedRequest = lazy(() =>
  import("./views/apps/freshlist/refundrequest/ViewRejectedRequest")
);
const CompletedRequest = lazy(() =>
  import("./views/apps/freshlist/refundrequest/CompletedRequest")
);

const ViewRefundRequest = lazy(() =>
  import("./views/apps/freshlist/refundrequest/ViewRefundRequest")
);
// T& c
const TermsAndCondition = lazy(() =>
  import("./views/apps/freshlist/termsAndCondition/TAndCList")
);
const AddTAndC = lazy(() =>
  import("./views/apps/freshlist/termsAndCondition/AddTAndC")
);

// options
const AttributeList = lazy(() =>
  import("./views/apps/freshlist/options/AttributeList")
);
const CreateAttribute = lazy(() =>
  import("./views/apps/freshlist/options/CreateAttribute")
);
// report
const StockReport = lazy(() =>
  import("./views/apps/freshlist/report/StockReport")
);
const ProductReport = lazy(() =>
  import("./views/apps/freshlist/report/ProductReport")
);
const CommissionReport = lazy(() =>
  import("./views/apps/freshlist/report/CommissionReport")
);
const CustomerReport = lazy(() =>
  import("./views/apps/freshlist/report/CustomerReport")
);
const SaleReport = lazy(() =>
  import("./views/apps/freshlist/report/SaleReport")
);
const TaxReport = lazy(() => import("./views/apps/freshlist/report/TaxReport"));

// Category
const CategoryList = lazy(() =>
  import("./views/apps/freshlist/category/CategoryList")
);
const AddCategory = lazy(() =>
  import("./views/apps/freshlist/category/AddCategory")
);
const EditCategory = lazy(() =>
  import("./views/apps/freshlist/category/EditCategory")
);
// Subcategory SubCategoryList
const SubCategoryList = lazy(() =>
  import("./views/apps/freshlist/subcategory/SubCategoryList")
);
const AddSubCategory = lazy(() =>
  import("./views/apps/freshlist/subcategory/AddSubCategory")
);
const EditSubCategory = lazy(() =>
  import("./views/apps/freshlist/subcategory/EditSubCategory")
);
// Brand
const BrandList = lazy(() => import("./views/apps/freshlist/brand/BrandList"));
const AddBrand = lazy(() => import("./views/apps/freshlist/brand/AddBrand"));
const EditBrand = lazy(() => import("./views/apps/freshlist/brand/EditBrand"));
// Product Attributes

// Batch
const AddBatch = lazy(() => import("./views/apps/freshlist/batch/AddBatch"));
const AssigntoBatch = lazy(() =>
  import("./views/apps/freshlist/batch/AssigntoBatch")
);

const ProductAttributeList = lazy(() =>
  import("./views/apps/freshlist/attribute/ProductAttributeList")
);
const AddProductAttribute = lazy(() =>
  import("./views/apps/freshlist/attribute/AddProductAttribute ")
);
const EditProductAttribute = lazy(() =>
  import("./views/apps/freshlist/attribute/EditProductAttribute")
);
// INhouseProduct
const HouseProductList = lazy(() =>
  import("./views/apps/freshlist/house/HouseProductList")
);

const AddHouseProduct = lazy(() =>
  import("./views/apps/freshlist/house/AddHouseProduct")
);
const EditHouseProduct = lazy(() =>
  import("./views/apps/freshlist/house/EditHouseProduct")
);
// BundleList
const BundleList = lazy(() =>
  import("./views/apps/freshlist/bundle/BundleList")
);

// Subscriber
const SubscriberList = lazy(() =>
  import("./views/apps/freshlist/subscriber/SubscriberList")
);
// Notification
const Notification = lazy(() =>
  import("./views/apps/freshlist/notif/Notification")
);
const AddNotification = lazy(() =>
  import("./views/apps/freshlist/notif/AddNotification")
);
// policy
const PrivacyPolicy = lazy(() =>
  import("./views/apps/freshlist/privacyPolicy/PrivacyPolicy")
);

const addPolicy = lazy(() =>
  import("./views/apps/freshlist/privacyPolicy/AddPolicy")
);
// help

const HelpAndSupport = lazy(() =>
  import("./views/apps/freshlist/helpAndSupport/HelpAndSupport")
);
// Payout
const VendorPayout = lazy(() =>
  import("./views/apps/freshlist/payout/VendorPayout")
);
const DriverPayout = lazy(() =>
  import("./views/apps/freshlist/payout/DriverPayout")
);
// Earning
const VendorEarning = lazy(() =>
  import("./views/apps/freshlist/earning/VendorEarning")
);
// Profile
const userProfile = lazy(() => import("./views/pages/profile/UserProfile"));

const editUserProfile = lazy(() =>
  import("./views/pages/profile/EditUserProfile")
);
const viewUserProfile = lazy(() =>
  import("./views/pages/profile/ViewUserProfile")
);
const Location = lazy(() => import("./views/apps/freshlist/location/Location"));

const pendingPayment = lazy(() =>
  import("./views/apps/pendingPayment/PendingPayment")
);

const simpleProductList = lazy(() =>
  import("./views/apps/productManagement/simpleProduct/SimpleProductList")
);
const addSimpleProduct = lazy(() =>
  import("./views/apps/productManagement/simpleProduct/AddSimpleProduct")
);
const editSimpleProduct = lazy(() =>
  import("./views/apps/productManagement/simpleProduct/EditSimpleProduct")
);
const viewSimpleProduct = lazy(() =>
  import("./views/apps/productManagement/simpleProduct/ViewSimpleProduct")
);

// const coupon = lazy(() => import("./views/apps/products/coupon/Coupon"));

const offerList = lazy(() =>
  import("./views/apps/offerAndCoupon/offer/OfferList")
);
const addSpecialOffer = lazy(() =>
  import("./views/apps/offerAndCoupon/specialOffer/AddSpecialOffer")
);

const addCoupons = lazy(() =>
  import("./views/apps/offerAndCoupon/coupons/AddCoupons")
);
const editCoupon = lazy(() =>
  import("./views/apps/offerAndCoupon/coupons/EditCoupon")
);
const offerByBrand = lazy(() =>
  import("./views/apps/offerAndCoupon/OfferByBrand")
);
const buyGet = lazy(() => import("./views/apps/offerAndCoupon/BuyGet"));
const rewardPoint = lazy(() => import("./views/apps/rewards/RewardPoint"));

const commission = lazy(() => import("./views/apps/commission/Commission"));

const onlineOrders = lazy(() =>
  import("./views/apps/onlineOrders/OnlineOrders")
);
const Subscription = lazy(() =>
  import("./views/apps/subscription/Subscription")
);
const adSubscription = lazy(() =>
  import("./views/apps/adSubscription/AdSubscription")
);
const pageLayout = lazy(() => import("./views/apps/pageLayout/PageLayout"));

const stockAdjustment = lazy(() =>
  import("./views/apps/stockControl/StockAdjustment")
);
const stockTransferRequest = lazy(() =>
  import("./views/apps/stockControl/StockTransferRequest")
);

const activityLogs = lazy(() => import("./views/apps/activity/ActivityLogs"));
const addActivityLogs = lazy(() =>
  import("./views/apps/activity/AddActivityLogs")
);
const editActivityLogs = lazy(() =>
  import("./views/apps/activity/EditActivityLogs")
);
const viewActivityLogs = lazy(() =>
  import("./views/apps/activity/ViewActivityLogs")
);
const systemMails = lazy(() => import("./views/apps/activity/SystemMails"));
const addSystemMails = lazy(() =>
  import("./views/apps/activity/AddSystemMails")
);
const editSystemMails = lazy(() =>
  import("./views/apps/activity/EditSystemMails")
);
const viewSystemMails = lazy(() =>
  import("./views/apps/activity/ViewSystemMails")
);
const menuManagementList = lazy(() =>
  import("./views/apps/menuManagement/MenuManagementList")
);
const addMenuManagement = lazy(() =>
  import("./views/apps/menuManagement/AddMenuManagement")
);
const editMenuManagement = lazy(() =>
  import("./views/apps/menuManagement/EditMenuManagement")
);
const billableExpenseDetails = lazy(() =>
  import(
    "./views/apps/purchasesAndExpenses/billableExpenseDetails/BillableExpenseDetails"
  )
);
const addBillableExpenseDetails = lazy(() =>
  import(
    "./views/apps/purchasesAndExpenses/billableExpenseDetails/AddBillableExpenseDetails"
  )
);
const purchasesByItem = lazy(() =>
  import("./views/apps/purchasesAndExpenses/purchasesByItem/PurchasesByItem")
);
const addPurchasesByItem = lazy(() =>
  import("./views/apps/purchasesAndExpenses/purchasesByItem/AddPurchasesByItem")
);
const receiveHistory = lazy(() =>
  import("./views/apps/purchasesAndExpenses/receiveHistory/ReceiveHistory")
);
const adRreceiveHistory = lazy(() =>
  import("./views/apps/purchasesAndExpenses/receiveHistory/AddReceiveHistory")
);
const storesList = lazy(() => import("./views/apps/store/stores/StoresList"));
const addstores = lazy(() => import("./views/apps/store/stores/AddStores"));
const editstore = lazy(() => import("./views/apps/store/stores/EditStore"));
const viewstore = lazy(() => import("./views/apps/store/stores/ViewStore"));
const storesRequestList = lazy(() =>
  import("./views/apps/store/storesRequest/StoresRequestList")
);
const addStoresRequest = lazy(() =>
  import("./views/apps/store/storesRequest/AddStoresRequest")
);
const blogList = lazy(() => import("./views/apps/website/blog/BlogList"));
const addBlog = lazy(() => import("./views/apps/website/blog/AddBlog"));
const newsList = lazy(() => import("./views/apps/website/news/NewsList"));
const addNews = lazy(() => import("./views/apps/website/news/AddNews"));
const videosList = lazy(() => import("./views/apps/website/videos/VideosList"));
const addVideo = lazy(() => import("./views/apps/website/videos/AddVideo"));
const websitePdf = lazy(() => import("./views/apps/website/WebsitePdf"));
const websiteProImg = lazy(() =>
  import("./views/apps/website/websiteProduct/WebsiteProImg")
);
const addProImg = lazy(() =>
  import("./views/apps/website/websiteProduct/AddProImg")
);
const appBanner = lazy(() =>
  import("./views/apps/mobileApp/appBanner/AppBanner")
);

const Subs = lazy(() =>
  import("./views/pages/authentication/subscription/Subs")
);
const forgotPassword = lazy(() =>
  import("./views/pages/authentication/ForgotPassword")
);
const resetPassword = lazy(() =>
  import("./views/pages/authentication/ResetPassword")
);
const newPassword = lazy(() =>
  import("./views/pages/authentication/NewPassword")
);

const sellerSubscription = lazy(() =>
  import("./views/apps/sellerSubs/SellerSubscription")
);
const addSub = lazy(() => import("./views/apps/sellerSubs/AddSub"));

const mySubscription = lazy(() => import("./views/apps/mySubs/MySubscription"));

const sponsoredAd = lazy(() => import("./views/apps/sponsoredAds/SponsoredAd"));

//Theme Component starts from here
const userList = lazy(() => import("./views/apps/user/list/List"));
const userEdit = lazy(() => import("./views/apps/user/edit/Edit"));
const userView = lazy(() => import("./views/apps/user/view/View"));
const email = lazy(() => import("./views/apps/email/Email"));
const chat = lazy(() => import("./views/apps/chat/Chat"));
const todo = lazy(() => import("./views/apps/todo/Todo"));
const calendar = lazy(() => import("./views/apps/calendar/Calendar"));
const shop = lazy(() => import("./views/apps/ecommerce/shop/Shop"));
const wishlist = lazy(() => import("./views/apps/ecommerce/wishlist/Wishlist"));
const checkout = lazy(() => import("./views/apps/ecommerce/cart/Cart"));
const productDetail = lazy(() =>
  import("./views/apps/ecommerce/detail/Detail")
);
const grid = lazy(() => import("./views/ui-elements/grid/Grid"));
const typography = lazy(() =>
  import("./views/ui-elements/typography/Typography")
);
const textutilities = lazy(() =>
  import("./views/ui-elements/text-utilities/TextUtilities")
);
const syntaxhighlighter = lazy(() =>
  import("./views/ui-elements/syntax-highlighter/SyntaxHighlighter")
);
const colors = lazy(() => import("./views/ui-elements/colors/Colors"));
const reactfeather = lazy(() =>
  import("./views/ui-elements/icons/FeatherIcons")
);
const basicCards = lazy(() => import("./views/ui-elements/cards/basic/Cards"));
const statisticsCards = lazy(() =>
  import("./views/ui-elements/cards/statistics/StatisticsCards")
);
const analyticsCards = lazy(() =>
  import("./views/ui-elements/cards/analytics/Analytics")
);
const actionCards = lazy(() =>
  import("./views/ui-elements/cards/actions/CardActions")
);
const Alerts = lazy(() => import("./components/reactstrap/alerts/Alerts"));
const Buttons = lazy(() => import("./components/reactstrap/buttons/Buttons"));
const Breadcrumbs = lazy(() =>
  import("./components/reactstrap/breadcrumbs/Breadcrumbs")
);
const Carousel = lazy(() =>
  import("./components/reactstrap/carousel/Carousel")
);
const Collapse = lazy(() =>
  import("./components/reactstrap/collapse/Collapse")
);
const Dropdowns = lazy(() =>
  import("./components/reactstrap/dropdowns/Dropdown")
);
const ListGroup = lazy(() =>
  import("./components/reactstrap/listGroup/ListGroup")
);
const Modals = lazy(() => import("./components/reactstrap/modal/Modal"));
const Pagination = lazy(() =>
  import("./components/reactstrap/pagination/Pagination")
);
const NavComponent = lazy(() =>
  import("./components/reactstrap/navComponent/NavComponent")
);
const Navbar = lazy(() => import("./components/reactstrap/navbar/Navbar"));
const Tabs = lazy(() => import("./components/reactstrap/tabs/Tabs"));
const TabPills = lazy(() =>
  import("./components/reactstrap/tabPills/TabPills")
);
const Tooltips = lazy(() =>
  import("./components/reactstrap/tooltips/Tooltips")
);
const Popovers = lazy(() =>
  import("./components/reactstrap/popovers/Popovers")
);
const Badge = lazy(() => import("./components/reactstrap/badge/Badge"));
const BadgePill = lazy(() =>
  import("./components/reactstrap/badgePills/BadgePill")
);
const Progress = lazy(() =>
  import("./components/reactstrap/progress/Progress")
);
const Media = lazy(() => import("./components/reactstrap/media/MediaObject"));
const Spinners = lazy(() =>
  import("./components/reactstrap/spinners/Spinners")
);
const Toasts = lazy(() => import("./components/reactstrap/toasts/Toasts"));
const avatar = lazy(() => import("./components/@vuexy/avatar/Avatar"));
const AutoComplete = lazy(() =>
  import("./components/@vuexy/autoComplete/AutoComplete")
);
const chips = lazy(() => import("./components/@vuexy/chips/Chips"));
const divider = lazy(() => import("./components/@vuexy/divider/Divider"));
const vuexyWizard = lazy(() => import("./components/@vuexy/wizard/Wizard"));
const listView = lazy(() => import("./views/ui-elements/data-list/ListView"));
const thumbView = lazy(() => import("./views/ui-elements/data-list/ThumbView"));
const select = lazy(() => import("./views/forms/form-elements/select/Select"));
const switchComponent = lazy(() =>
  import("./views/forms/form-elements/switch/Switch")
);
const checkbox = lazy(() =>
  import("./views/forms/form-elements/checkboxes/Checkboxes")
);
const radio = lazy(() => import("./views/forms/form-elements/radio/Radio"));
const input = lazy(() => import("./views/forms/form-elements/input/Input"));
const group = lazy(() =>
  import("./views/forms/form-elements/input-groups/InputGoups")
);
const numberInput = lazy(() =>
  import("./views/forms/form-elements/number-input/NumberInput")
);
const textarea = lazy(() =>
  import("./views/forms/form-elements/textarea/Textarea")
);
const pickers = lazy(() =>
  import("./views/forms/form-elements/datepicker/Pickers")
);
const inputMask = lazy(() =>
  import("./views/forms/form-elements/input-mask/InputMask")
);
const layout = lazy(() => import("./views/forms/form-layouts/FormLayouts"));
const formik = lazy(() => import("./views/forms/formik/Formik"));
const tables = lazy(() => import("./views/tables/reactstrap/Tables"));
const ReactTables = lazy(() =>
  import("./views/tables/react-tables/ReactTables")
);
const Aggrid = lazy(() => import("./views/tables/aggrid/Aggrid"));
const DataTable = lazy(() => import("./views/tables/data-tables/DataTables"));

const faq = lazy(() => import("./views/pages/faq/FAQ"));
const knowledgeBase = lazy(() =>
  import("./views/pages/knowledge-base/KnowledgeBase")
);
const search = lazy(() => import("./views/pages/search/Search"));
const accountSettings = lazy(() =>
  import("./views/pages/account-settings/AccountSettings")
);
const invoice = lazy(() => import("./views/pages/invoice/Invoice"));
const comingSoon = lazy(() => import("./views/pages/misc/ComingSoon"));
const error404 = lazy(() => import("./views/pages/misc/error/404"));
const error500 = lazy(() => import("./views/pages/misc/error/500"));
const authorized = lazy(() => import("./views/pages/misc/NotAuthorized"));
const maintenance = lazy(() => import("./views/pages/misc/Maintenance"));
const apex = lazy(() => import("./views/charts/apex/ApexCharts"));
const chartjs = lazy(() => import("./views/charts/chart-js/ChartJS"));
const extreme = lazy(() => import("./views/charts/recharts/Recharts"));
const leafletMaps = lazy(() => import("./views/maps/Maps"));
const toastr = lazy(() => import("./extensions/toastify/Toastify"));
const sweetAlert = lazy(() => import("./extensions/sweet-alert/SweetAlert"));
const rcSlider = lazy(() => import("./extensions/rc-slider/Slider"));
const uploader = lazy(() => import("./extensions/dropzone/Dropzone"));
const editor = lazy(() => import("./extensions/editor/Editor"));
const drop = lazy(() => import("./extensions/drag-and-drop/DragAndDrop"));
const tour = lazy(() => import("./extensions/tour/Tour"));
const clipboard = lazy(() =>
  import("./extensions/copy-to-clipboard/CopyToClipboard")
);
const menu = lazy(() => import("./extensions/contexify/Contexify"));
const swiper = lazy(() => import("./extensions/swiper/Swiper"));
const i18n = lazy(() => import("./extensions/i18n/I18n"));
const reactPaginate = lazy(() => import("./extensions/pagination/Pagination"));
const tree = lazy(() => import("./extensions/treeview/TreeView"));
const Import = lazy(() => import("./extensions/import-export/Import"));
const Export = lazy(() => import("./extensions/import-export/Export"));
const ExportSelected = lazy(() =>
  import("./extensions/import-export/ExportSelected")
);
const lockScreen = lazy(() =>
  import("./views/pages/authentication/LockScreen")
);
const register = lazy(() =>
  import("./views/pages/authentication/register/Register")
);
const accessControl = lazy(() =>
  import("./extensions/access-control/AccessControl")
);

// Set Layout and Component Using App Route
const RouteConfig = ({ component: Component, fullLayout, ...rest }) => (
  <Route
    {...rest}
    render={(props) => {
      return (
        <ContextLayout.Consumer>
          {(context) => {
            let LayoutTag =
              fullLayout === true
                ? context.fullLayout
                : context.state.activeLayout === "horizontal"
                ? context.horizontalLayout
                : context.VerticalLayout;
            return (
              <LayoutTag {...props} permission={props.user}>
                <Suspense fallback={<Spinner />}>
                  <Component {...props} />
                </Suspense>
              </LayoutTag>
            );
          }}
        </ContextLayout.Consumer>
      );
    }}
  />
);
const mapStateToProps = (state) => {
  return {
    user: state.auth.login.userRole,
  };
};
const AppRoute = connect(mapStateToProps)(RouteConfig);
class AppRouter extends React.Component {
  render() {
    return (
      // Set the directory path if you are deploying in sub-folder
      <Router history={history}>
        <Switch>
          <AppRoute exact path="/" component={analyticsDashboard} />
          <AppRoute
            path="/ecommerce-dashboard"
            component={ecommerceDashboard}
          />
          {/* Customer */}
          <AppRoute
            path="/app/freshlist/customer/customergroup"
            component={CustomerGroup}
          />
          <AppRoute
            path="/app/freshlist/customer/customerList"
            component={CustomerList}
          />
          <AppRoute
            path="/app/freshlist/customer/viewCustomer/:id"
            component={ViewCustomer}
          />
          <AppRoute
            path="/app/freshlist/customer/editCustomer/:id"
            component={EditCustomer}
          />
          <AppRoute
            path="/app/freshlist/customer/customerReview"
            component={CustomerReview}
          />
          <AppRoute
            path="/app/freshlist/customer/reviewTable"
            component={ReviewTable}
          />
          {/* Wallet */}
          <AppRoute path="/app/freshlist/wallet/credit" component={Credit} />
          <AppRoute path="/app/freshlist/wallet/debit" component={Debit} />
          <AppRoute
            path="/app/freshlist/wallet/addtransactions"
            component={AddTransactions}
          />
          <AppRoute
            path="/app/freshlist/customer/filterOption"
            component={FilterOption}
          />
          <AppRoute
            path="/app/freshlist/customer/summary"
            component={Summary}
          />
          <AppRoute
            path="/app/freshlist/customer/addFund"
            component={AddFund}
          />
          {/* Banner */}
          <AppRoute
            path="/app/freshlist/banner/addBanner"
            component={AddBanner}
          />
          <AppRoute
            path="/app/freshlist/banner/viewBanner"
            component={ViewBanner}
          />
          <AppRoute
            path="/app/freshlist/banner/bannerList"
            component={BannerList}
          />
          <AppRoute
            path="/app/freshlist/banner/editBanner"
            component={EditBanner}
          />
          {/* Sales */}
          <AppRoute
            path="/app/freshlist/sales/total_sales"
            component={TotalSales}
          />
          <AppRoute path="/app/freshlist/sales/hub_sale" component={HubSales} />
          {/* Zone */}
          <AppRoute
            path="/app/freshlist/zone/createzone"
            component={CreateZone}
          />
          <AppRoute
            path="/app/freshlist/zone/AddDeliveryCharges"
            component={AddDeliveryCharges}
          />
          {/* vendor */}
          <AppRoute
            path="/app/freshlist/vendor/addVendor"
            component={AddVendor}
          />
          <AppRoute
            path="/app/freshlist/vendor/vendorInformation"
            component={VendorInformation}
          />
          <AppRoute
            path="/app/freshlist/vendor/vendorList"
            component={VendorList}
          />
          <AppRoute
            path="/app/freshlist/vendor/withDraws"
            component={WithDraws}
          />
          <AppRoute
            path="/app/freshlist/vendor/viewWithDraws"
            component={ViewWithDraws}
          />
          {/* Delivery */}
          <AppRoute
            path="/app/freshlist/driver/addDriver"
            component={AddDriver}
          />
          <AppRoute
            path="/app/freshlist/driver/deliveryManList"
            component={DeliveryManList}
          />
          {/* Special */}
          <AppRoute
            path="/app/freshlist/special/SpecialList"
            component={SpecialList}
          />
          {/* Coupon */}
          <AppRoute
            path="/app/freshlist/coupon/couponList"
            component={CouponList}
          />
          {/* FlashSale */}
          <AppRoute
            path="/app/freshlist/flashSale/flashSale"
            component={FlashSale}
          />
          <AppRoute
            path="/app/freshlist/flashSale/editFlashSale"
            component={EditFlashSale}
          />
          <AppRoute
            path="/app/freshlist/flashSale/addFlashSale"
            component={AddFlashSale}
          />
          {/* Deal */}
          {/* <AppRoute
            path="/app/freshlist/dealOfDay/dealOfDay"
            component={DealOfDay}
          /> */}
          {/* Discount */}
          <AppRoute
            path="/app/freshlist/discount/DiscountList"
            component={DiscountList}
          />
          <AppRoute path="/app/freshlist/points/Points" component={Points} />
          <AppRoute
            path="/app/freshlist/dealOfDay/editDeal"
            component={EditDeal}
          />
          {/* feature Deal */}
          <AppRoute
            path="/app/freshlist/featuredeal/featureDeal"
            component={FeatureDeal}
          />
          <AppRoute
            path="/app/freshlist/featuredeal/editFeatureDeal"
            component={EditFeatureDeal}
          />
          <AppRoute
            path="/app/freshlist/featuredeal/addFeatureDeal"
            component={AddFeatureDeal}
          />
          {/* gallery */}
          <AppRoute path="/app/freshlist/gallery/gallery" component={Gallery} />
          <AppRoute
            path="/app/freshlist/gallery/addGallery"
            component={AddGallery}
          />
          {/* order */}
          <AppRoute path="/app/freshlist/order/all" component={All} />
          <AppRoute path="/app/freshlist/order/AddOrder" component={AddOrder} />
          <AppRoute
            path="/app/freshlist/order/editOrder"
            component={EditOrder}
          />
          <AppRoute path="/app/freshlist/order/viewAll" component={ViewAll} />
          <AppRoute path="/app/freshlist/order/pending" component={Pending} />
          <AppRoute
            path="/app/freshlist/order/viewPending"
            component={ViewPending}
          />
          <AppRoute
            path="/app/freshlist/order/confirmed"
            component={Confirmed}
          />
          <AppRoute
            path="/app/freshlist/order/{viewConfirmed"
            component={ViewConfirmed}
          />
          <AppRoute
            path="/app/freshlist/order/inprocess"
            component={InProcess}
          />
          <AppRoute
            path="/app/freshlist/order/viewPackaging"
            component={ViewPackaging}
          />
          <AppRoute
            path="/app/freshlist/order/outfordelivery"
            component={Outfordelivery}
          />
          <AppRoute
            path="/app/freshlist/order/viewOutfordelivery"
            component={ViewOutfordelivery}
          />
          <AppRoute
            path="/app/freshlist/order/delivered"
            component={Delivered}
          />
          <AppRoute
            path="/app/freshlist/order/viewDelivered"
            component={ViewDelivered}
          />
          <AppRoute path="/app/freshlist/order/returned" component={Returned} />
          <AppRoute
            path="/app/freshlist/order/viewReturned"
            component={ViewReturned}
          />
          <AppRoute
            path="/app/freshlist/order/failedtodeliver"
            component={Failedtodeliver}
          />
          <AppRoute
            path="/app/freshlist/order/viewFailedtodeliver"
            component={ViewFailedtodeliver}
          />
          <AppRoute path="/app/freshlist/order/canceled" component={Canceled} />
          <AppRoute
            path="/app/freshlist/order/viewCanceled"
            component={ViewCanceled}
          />
          {/* Refund Request */}
          <AppRoute
            path="/app/freshlist/refundrequest/pendingRequest"
            component={PendingRequest}
          />
          <AppRoute
            path="/app/freshlist/refundrequest/viewPendingRequest"
            component={ViewPendingRequest}
          />
          <AppRoute
            path="/app/freshlist/refundrequest/approvedRequest"
            component={ApprovedRequest}
          />
          <AppRoute
            path="/app/freshlist/refundrequest/viewApprovedRequest"
            component={ViewApprovedRequest}
          />
          <AppRoute
            path="/app/freshlist/refundrequest/rejectedRequest"
            component={RejectedRequest}
          />
          <AppRoute
            path="/app/freshlist/refundrequest/viewRejectedRequest"
            component={ViewRejectedRequest}
          />
          <AppRoute
            path="/app/freshlist/refundrequest/CompletedRequest"
            component={CompletedRequest}
          />
          <AppRoute
            path="/app/freshlist/refundrequest/viewRefundRequest"
            component={ViewRefundRequest}
          />
          {/* T&C */}
          <AppRoute
            path="/app/freshlist/termsAndCondition/tAndCList"
            component={TermsAndCondition}
          />
          <AppRoute
            path="/app/freshlist/termsAndCondition/addTAndC"
            component={AddTAndC}
          />
          {/* Options */}
          <AppRoute
            path="/app/freshlist/options/createAttribute"
            component={CreateAttribute}
          />
          <AppRoute
            path="/app/freshlist/options/AttributeList"
            component={AttributeList}
          />
          {/* Report */}
          <AppRoute
            path="/app/freshlist/report/stockReport"
            component={StockReport}
          />
          <AppRoute
            path="/app/freshlist/report/productReport"
            component={ProductReport}
          />
          <AppRoute
            path="/app/freshlist/report/commissionReport"
            component={CommissionReport}
          />
          <AppRoute
            path="/app/freshlist/report/customerReport"
            component={CustomerReport}
          />
          <AppRoute
            path="/app/freshlist/report/saleReport"
            component={SaleReport}
          />
          <AppRoute
            path="/app/freshlist/report/taxReport"
            component={TaxReport}
          />
          {/* category */}
          <AppRoute
            path="/app/freshlist/category/categoryList"
            component={CategoryList}
          />
          <AppRoute
            path="/app/freshlist/category/addCategory"
            component={AddCategory}
          />
          <AppRoute
            path="/app/freshlist/category/editCategory"
            component={EditCategory}
          />
          {/* Subcategory */}
          <AppRoute
            path="/app/freshlist/subcategory/subCategoryList"
            component={SubCategoryList}
          />
          <AppRoute
            path="/app/freshlist/subcategory/addSubCategory"
            component={AddSubCategory}
          />
          <AppRoute
            path="/app/freshlist/subcategory/editSubCategory"
            component={EditSubCategory}
          />
          {/* Brand */}
          <AppRoute
            path="/app/freshlist/brand/brandList"
            component={BrandList}
          />
          <AppRoute path="/app/freshlist/brand/addBrand" component={AddBrand} />
          <AppRoute
            path="/app/freshlist/brand/editBrand"
            component={EditBrand}
          />
          {/* Batch */}
          <AppRoute path="/app/freshlist/batch/addbatch" component={AddBatch} />
          <AppRoute
            path="/app/freshlist/batch/assigntobatch"
            component={AssigntoBatch}
          />
          {/* Product Attribute */}
          <AppRoute
            path="/app/freshlist/attribute/productAttributeList"
            component={ProductAttributeList}
          />
          <AppRoute
            path="/app/freshlist/attribute/addProductAttribute"
            component={AddProductAttribute}
          />
          <AppRoute
            path="/app/freshlist/attribute/editProductAttribute"
            component={EditProductAttribute}
          />
          {/* inhouse Product */}
          <AppRoute
            path="/app/freshlist/house/houseProductList"
            component={HouseProductList}
          />
          <AppRoute
            path="/app/freshlist/house/AddHouseProduct"
            component={AddHouseProduct}
          />
          <AppRoute
            path="/app/freshlist/house/editHouseProduct"
            component={EditHouseProduct}
          />
          {/* Bundle*/}
          <AppRoute
            path="/app/freshlist/bundle/BundleList"
            component={BundleList}
          />
          <AppRoute
            path="/app/freshlist/subscriber/subscriberList"
            component={SubscriberList}
          />
          {/* notification */}
          <AppRoute
            path="/app/freshlist/notif/notification"
            component={Notification}
          />
          <AppRoute
            path="/app/freshlist/notif/addNotification"
            component={AddNotification}
          />
          {/* Privacy Police */}
          <AppRoute
            path="/app/freshlist/privacyPolicy/privacyPolicy"
            component={PrivacyPolicy}
          />
          <AppRoute
            path="/app/freshlist/privacyPolicy/addPolicy"
            component={addPolicy}
          />
          {/* help */}
          <AppRoute
            path="/app/freshlist/helpAndSupport/helpAndSupport"
            component={HelpAndSupport}
          />
          {/* Payout */}
          <AppRoute
            path="/app/freshlist/payout/vendorPayout"
            component={VendorPayout}
          />
          <AppRoute
            path="/app/freshlist/payout/driverPayout"
            component={DriverPayout}
          />
          {/* Earning */}
          <AppRoute
            path="/app/freshlist/earning/vendorEarning"
            component={VendorEarning}
          />
          {/* Profile */}
          <AppRoute path="/pages/profile/userProfile" component={userProfile} />
          <AppRoute
            path="/pages/profile/editUserProfile/:id"
            component={editUserProfile}
          />
          <AppRoute
            path="/pages/profile/viewUserProfile/:id"
            component={viewUserProfile}
          />
          {/* Map */}
          <AppRoute
            path="/app/freshlist/location/location"
            component={Location}
          />
          <AppRoute
            path="/app/pendingPayment/pendingPayment"
            component={pendingPayment}
          />
          <AppRoute
            path="/app/productManagement/simpleProduct/simpleProductList"
            component={simpleProductList}
          />
          <AppRoute
            path="/app/productManagement/simpleProduct/addSimpleProduct"
            component={addSimpleProduct}
          />
          <AppRoute
            path="/app/productManagement/simpleProduct/editSimpleProduct"
            component={editSimpleProduct}
          />
          <AppRoute
            path="/app/productManagement/simpleProduct/viewSimpleProduct/:id"
            component={viewSimpleProduct}
          />
          {/* <AppRoute path="/app/products/coupon" component={coupon} /> */}
          <AppRoute
            path="/app/offerAndCoupon/offer/offerList"
            component={offerList}
          />
          <AppRoute
            path="/app/offerAndCoupon/specialOffer/addSpecialOffer"
            component={addSpecialOffer}
          />
          <AppRoute
            path="/app/offerAndCoupon/coupons/addCoupons"
            component={addCoupons}
          />
          <AppRoute
            path="/app/offerAndCoupon/coupons/editCoupon/:id"
            component={editCoupon}
          />
          <AppRoute
            path="/app/offerAndCoupon/offerByBrand"
            component={offerByBrand}
          />
          <AppRoute path="/app/offerAndCoupon/buyGet" component={buyGet} />
          <AppRoute path="/app/reward/rewardPoint" component={rewardPoint} />
          <AppRoute path="/app/commission/commission" component={commission} />
          <AppRoute
            path="/app/subscription/subscription"
            component={Subscription}
          />
          <AppRoute
            path="/app/adSubscription/adSubscription"
            component={adSubscription}
          />
          <AppRoute
            path="/app/stockControl/stockTransferRequest"
            component={stockTransferRequest}
          />
          <AppRoute
            path="/app/stockControl/stockAdjustment"
            component={stockAdjustment}
          />
          <AppRoute
            path="/app/activity/activityLogs"
            component={activityLogs}
          />
          <AppRoute
            path="/app/activity/addActivityLogs"
            component={addActivityLogs}
          />
          <AppRoute
            path="/app/activity/editActivityLogs"
            component={editActivityLogs}
          />
          <AppRoute
            path="/app/activity/viewActivityLogs"
            component={viewActivityLogs}
          />
          <AppRoute path="/app/activity/systemMails" component={systemMails} />
          <AppRoute
            path="/app/activity/addSystemMails"
            component={addSystemMails}
          />
          <AppRoute
            path="/app/activity/editSystemMails"
            component={editSystemMails}
          />
          <AppRoute
            path="/app/activity/viewSystemMails"
            component={viewSystemMails}
          />
          <AppRoute
            path="/app/sellerSubs/sellerSubscription"
            component={sellerSubscription}
          />
          <AppRoute path="/app/sellerSubs/addSub" component={addSub} />
          <AppRoute
            path="/app/menuManagement/menuManagementList"
            component={menuManagementList}
          />
          <AppRoute
            path="/app/menuManagement/addMenuManagement"
            component={addMenuManagement}
          />
          <AppRoute
            path="/app/menuManagement/editMenuManagement"
            component={editMenuManagement}
          />
          <AppRoute
            path="/app/store/stores/storesList"
            component={storesList}
          />
          <AppRoute path="/app/store/stores/addstores" component={addstores} />
          <AppRoute
            path="/app/store/stores/editstore/:id"
            component={editstore}
          />
          <AppRoute
            path="/app/store/stores/viewstore/:id"
            component={viewstore}
          />
          <AppRoute
            path="/app/store/storesRequest/storesRequestList"
            component={storesRequestList}
          />
          <AppRoute
            path="/app/store/storesRequest/addStoresRequest"
            component={addStoresRequest}
          />
          <AppRoute
            path="/app/purchasesAndExpenses/billableExpenseDetails/addBillableExpenseDetails"
            component={addBillableExpenseDetails}
          />
          <AppRoute
            path="/app/purchasesAndExpenses/billableExpenseDetails/billableExpenseDetails"
            component={billableExpenseDetails}
          />
          <AppRoute
            path="/app/purchasesAndExpenses/purchasesByItem/addPurchasesByItem"
            component={addPurchasesByItem}
          />
          <AppRoute
            path="/app/purchasesAndExpenses/purchasesByItem/purchasesByItem"
            component={purchasesByItem}
          />
          <AppRoute
            path="/app/purchasesAndExpenses/receiveHistory/addReceiveHistory"
            component={adRreceiveHistory}
          />
          <AppRoute
            path="/app/purchasesAndExpenses/receiveHistory/receiveHistory"
            component={receiveHistory}
          />
          <AppRoute path="/app/pageLayout/pageLayout" component={pageLayout} />
          <AppRoute
            path="/app/onlineOrders/onlineOrders"
            component={onlineOrders}
          />
          <AppRoute path="/app/website/blog/blogList" component={blogList} />
          <AppRoute path="/app/website/blog/addBlog" component={addBlog} />
          <AppRoute path="/app/website/news/newsList" component={newsList} />
          <AppRoute path="/app/website/news/addNews" component={addNews} />
          <AppRoute path="/app/website/websitePdf" component={websitePdf} />
          <AppRoute
            path="/app/website/websiteProduct/websiteProImg"
            component={websiteProImg}
          />
          <AppRoute
            path="/app/website/websiteProduct/addProImg"
            component={addProImg}
          />
          <AppRoute
            path="/app/website/videos/videosList"
            component={videosList}
          />
          <AppRoute path="/app/website/videos/addVideo" component={addVideo} />
          <AppRoute
            path="/app/mobileApp/appBanner/AppBanner"
            component={appBanner}
          />
          <AppRoute path="/app/user/list" component={userList} />
          <AppRoute path="/app/user/edit" component={userEdit} />
          <AppRoute path="/app/user/view" component={userView} />
          <AppRoute path="/pages/subs" component={Subs} fullLayout />
          {/* <AppRoute path="/pages/logDemo" component={ logDemo} fullLayout /> */}
          <AppRoute path="/pages/login" component={Login} fullLayout />
          {/* hub List */}
          <AppRoute path="/app/freshlist/hubs/AddHub" component={AddHub} />
          <AppRoute path="/app/freshlist/hubs/hub_list" component={HubList} />
          <AppRoute
            path="/pages/forgotpassword"
            component={forgotPassword}
            fullLayout
          />
          <AppRoute
            path="/pages/reset-password"
            component={resetPassword}
            fullLayout
          />{" "}
          <AppRoute
            path="/pages/newPassword"
            component={newPassword}
            fullLayout
          />
          <AppRoute
            path="/app/mysubs/mySubscription"
            component={mySubscription}
          />
          <AppRoute
            path="/app/sponsoredAds/sponsoredAd"
            component={sponsoredAd}
          />
          {/* Theme Components Starts from here all the demo components*/}
          <AppRoute
            path="/email"
            exact
            component={() => <Redirect to="/email/inbox" />}
          />
          <AppRoute path="/email/:filter" component={email} />
          <AppRoute path="/chat" component={chat} />
          <AppRoute
            path="/todo"
            exact
            component={() => <Redirect to="/todo/all" />}
          />
          <AppRoute path="/todo/:filter" component={todo} />
          <AppRoute path="/calendar" component={calendar} />
          <AppRoute path="/ecommerce/shop" component={shop} />
          <AppRoute path="/ecommerce/wishlist" component={wishlist} />
          <AppRoute
            path="/ecommerce/product-detail"
            component={productDetail}
          />
          <AppRoute
            path="/ecommerce/checkout"
            component={checkout}
            permission="admin"
          />
          <AppRoute path="/data-list/list-view" component={listView} />
          <AppRoute path="/data-list/thumb-view" component={thumbView} />
          <AppRoute path="/ui-element/grid" component={grid} />
          <AppRoute path="/ui-element/typography" component={typography} />
          <AppRoute
            path="/ui-element/textutilities"
            component={textutilities}
          />
          <AppRoute
            path="/ui-element/syntaxhighlighter"
            component={syntaxhighlighter}
          />
          <AppRoute path="/colors/colors" component={colors} />
          <AppRoute path="/icons/reactfeather" component={reactfeather} />
          <AppRoute path="/cards/basic" component={basicCards} />
          <AppRoute path="/cards/statistics" component={statisticsCards} />
          <AppRoute path="/cards/analytics" component={analyticsCards} />
          <AppRoute path="/cards/action" component={actionCards} />
          <AppRoute path="/components/alerts" component={Alerts} />
          <AppRoute path="/components/buttons" component={Buttons} />
          <AppRoute path="/components/breadcrumbs" component={Breadcrumbs} />
          <AppRoute path="/components/carousel" component={Carousel} />
          <AppRoute path="/components/collapse" component={Collapse} />
          <AppRoute path="/components/dropdowns" component={Dropdowns} />
          <AppRoute path="/components/list-group" component={ListGroup} />
          <AppRoute path="/components/modals" component={Modals} />
          <AppRoute path="/components/pagination" component={Pagination} />
          <AppRoute path="/components/nav-component" component={NavComponent} />
          <AppRoute path="/components/navbar" component={Navbar} />
          <AppRoute path="/components/tabs-component" component={Tabs} />
          <AppRoute path="/components/pills-component" component={TabPills} />
          <AppRoute path="/components/tooltips" component={Tooltips} />
          <AppRoute path="/components/popovers" component={Popovers} />
          <AppRoute path="/components/badges" component={Badge} />
          <AppRoute path="/components/pill-badges" component={BadgePill} />
          <AppRoute path="/components/progress" component={Progress} />
          <AppRoute path="/components/media-objects" component={Media} />
          <AppRoute path="/components/spinners" component={Spinners} />
          <AppRoute path="/components/toasts" component={Toasts} />
          <AppRoute
            path="/extra-components/auto-complete"
            component={AutoComplete}
          />
          <AppRoute path="/extra-components/avatar" component={avatar} />
          <AppRoute path="/extra-components/chips" component={chips} />
          <AppRoute path="/extra-components/divider" component={divider} />
          <AppRoute path="/forms/wizard" component={vuexyWizard} />
          <AppRoute path="/forms/elements/select" component={select} />
          <AppRoute path="/forms/elements/switch" component={switchComponent} />
          <AppRoute path="/forms/elements/checkbox" component={checkbox} />
          <AppRoute path="/forms/elements/radio" component={radio} />
          <AppRoute path="/forms/elements/input" component={input} />
          <AppRoute path="/forms/elements/input-group" component={group} />
          <AppRoute
            path="/forms/elements/number-input"
            component={numberInput}
          />
          <AppRoute path="/forms/elements/textarea" component={textarea} />
          <AppRoute path="/forms/elements/pickers" component={pickers} />
          <AppRoute path="/forms/elements/input-mask" component={inputMask} />
          <AppRoute path="/forms/layout/form-layout" component={layout} />
          <AppRoute path="/forms/formik" component={formik} />{" "}
          <AppRoute path="/tables/reactstrap" component={tables} />
          <AppRoute path="/tables/react-tables" component={ReactTables} />
          <AppRoute path="/tables/agGrid" component={Aggrid} />
          <AppRoute path="/tables/data-tables" component={DataTable} />
          <AppRoute path="/pages/faq" component={faq} />
          <AppRoute
            path="/pages/knowledge-base"
            component={knowledgeBase}
            exact
          />
          <AppRoute
            path="/pages/knowledge-base/category"
            component={knowledgeBaseCategory}
            exact
          />
          <AppRoute
            path="/pages/knowledge-base/category/questions"
            component={knowledgeBaseQuestion}
          />
          <AppRoute path="/pages/search" component={search} />
          <AppRoute
            path="/pages/account-settings"
            component={accountSettings}
          />
          <AppRoute path="/pages/invoice" component={invoice} />
          <AppRoute
            path="/misc/coming-soon"
            component={comingSoon}
            fullLayout
          />
          <AppRoute path="/misc/error/404" component={error404} fullLayout />
          <AppRoute path="/pages/register" component={register} fullLayout />
          <AppRoute
            path="/pages/lock-screen"
            component={lockScreen}
            fullLayout
          />
          <AppRoute path="/misc/error/500" component={error500} fullLayout />
          <AppRoute
            path="/misc/not-authorized"
            component={authorized}
            fullLayout
          />
          <AppRoute
            path="/misc/maintenance"
            component={maintenance}
            fullLayout
          />
          <AppRoute path="/charts/apex" component={apex} />
          <AppRoute path="/charts/chartjs" component={chartjs} />
          <AppRoute path="/charts/recharts" component={extreme} />
          <AppRoute path="/maps/leaflet" component={leafletMaps} />
          <AppRoute path="/extensions/sweet-alert" component={sweetAlert} />
          <AppRoute path="/extensions/toastr" component={toastr} />
          <AppRoute path="/extensions/slider" component={rcSlider} />
          <AppRoute path="/extensions/file-uploader" component={uploader} />
          <AppRoute path="/extensions/wysiwyg-editor" component={editor} />
          <AppRoute path="/extensions/drag-and-drop" component={drop} />
          <AppRoute path="/extensions/tour" component={tour} />
          <AppRoute path="/extensions/clipboard" component={clipboard} />
          <AppRoute path="/extensions/context-menu" component={menu} />
          <AppRoute path="/extensions/swiper" component={swiper} />
          <AppRoute
            path="/extensions/access-control"
            component={accessControl}
          />
          <AppRoute path="/extensions/i18n" component={i18n} />
          <AppRoute path="/extensions/tree" component={tree} />
          <AppRoute path="/extensions/import" component={Import} />
          <AppRoute path="/extensions/export" component={Export} />
          <AppRoute
            path="/extensions/export-selected"
            component={ExportSelected}
          />
          <AppRoute path="/extensions/pagination" component={reactPaginate} />
          <AppRoute component={error404} fullLayout />
        </Switch>
      </Router>
    );
  }
}
export default AppRouter;
