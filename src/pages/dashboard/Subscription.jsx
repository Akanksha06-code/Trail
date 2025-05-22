import React,{useState,useEffect} from "react";
import DashboardLayout from "../../components/layout/DashboardLayout";
import SubscriptionOverview from "../../components/Subscription/SubscriptionOverview"
import axiosInstance from "../../utils/axiosInstance";
import { API_PATHS } from "../../utils/apiPath";
import Modal from "../../components/Modal";
import AddSubscriptionForm from "../../components/Subscription/AddSubscriptionForm";
import toast from "react-hot-toast";
import SubscriptionList from "../../components/Subscription/SubscriptionList";
import DeleteAlert from "../../components/DeleteAlert";
import useUserAuth from "../../hooks/useUserAuth";
import SubscriptionCalendar from "../../components/Subscription/SubscriptionCalender";




const Subscription = () => {
  useUserAuth();

  const[SubscriptionData,setSubscriptionData] = useState([]);
  const[loading,setLoading] = useState(false);
  const[openDeleteAlert,setOpenDeleteAlert] = useState({
    show:false,
    data:null,
  });

 


  const[openAddSubscriptionModal ,setOpenAddSubscriptionModal] = useState(false);

    //Get All Subscription  Details 
  const fetchSubscriptionDetails = async () => {
     if(loading) return;

     setLoading(true);

     try{
      const response = await axiosInstance.get(
        `${API_PATHS.SUBSCRIPTION.GET_ALL_SUBSCRIPTION}`
      );

      if(response.data){
        setSubscriptionData(response.data)
      }
     }catch(error){
      console.log("Something went wrong. Please try again.",error)
     }finally{
      setLoading(false);
     }
  };

  //handle Add Subscription
  const handleAddSubscription = async (subscription) => {
    const {name,amount,startdate,enddate,icon} = subscription;

    //Validation Checks
    if(!name.trim()){
      toast.error("Name is required.");
      return;
    }
    if(!amount|| isNaN(amount) || Number(amount) <= 0){
      toast.error("Amount should be a valid number greater than 0.");
      return;
    }

    if(!startdate){
      toast.error("Date is  required.");
      return;
    }
    try{
      await axiosInstance.post(API_PATHS.SUBSCRIPTION.ADD_SUBSCRITPTION,{
        name,
        amount,
        startdate,
        enddate,
        icon,
      });

      setOpenAddSubscriptionModal(false);
      toast.success("Subscription added successfully");
      fetchSubscriptionDetails();
    } catch(error){
      console.error(
        "Error adding subscription:",
        error.response?.data?.message || error.message
      );
    }
  };
  
  //Delete Subscription
  const deleteSubscription = async(id) => {
    try{
      await axiosInstance.delete(API_PATHS.SUBSCRIPTION.DELETE_SUBSCRIPTION(id));

      setOpenDeleteAlert({show: false, data :null});
      toast.success("Subscription details deleted successfully");
      fetchSubscriptionDetails();
    }catch (error){
      console.error(
        "Error deleting subscription:",
        error.response?.data?.message||error.message
      );
    }
  };

  //handle download expense details
  const handleDownloadSubscriptionDetails = async() => {
    try{
      const response = await axiosInstance.get(
        API_PATHS.SUBSCRIPTION.DOWNLOAD_SUBSCRIPTION,
        {
          responseType:"blob"
        }
      );
    // create a URL for the blob
    const url = window.URL.createObjectURL(new Blob([response.data]));
    const link = document.createElement("a");
    link.href = url;
    link.setAttribute("download", "subscription_details.xlsx");
    document.body.appendChild(link);
    link.click();
    link.parentNode.removeChild(link);
    window.URL.revokeObjectURL(url);
    }catch(error){
      console.error("Error downloading subscription details:" ,error);
      toast.error("Failed to download subscription details. Please try again.");
    }
  };

  useEffect(() => {
    fetchSubscriptionDetails();

    return () => {};
  }, []);

  // State for current month and year
  const [currentDate, setCurrentDate] = useState(new Date());

  // Filter subscriptions by current month and year
  const filteredSubscriptions = SubscriptionData.filter(sub => {
    const subDate = new Date(sub.startdate);
    return (
      subDate.getMonth() === currentDate.getMonth() &&
      subDate.getFullYear() === currentDate.getFullYear()
    );
  });

  // Handlers to move between months
  const handlePrevMonth = () => {
    setCurrentDate(prev => {
      const prevMonth = new Date(prev.getFullYear(), prev.getMonth() - 1, 1);
      return prevMonth;
    });
  };

  const handleNextMonth = () => {
    setCurrentDate(prev => {
      const nextMonth = new Date(prev.getFullYear(), prev.getMonth() + 1, 1);
      return nextMonth;
    });
  };

  return(
    <DashboardLayout activeMenu="Subscription">
      <div className="grid grid-cols-1 gap-6">
        <div>
          <SubscriptionOverview
            transactions={filteredSubscriptions}
            onAddSubscription={() => setOpenAddSubscriptionModal(true)} />
        </div>
        <SubscriptionList
          transactions={filteredSubscriptions}
          onDelete={id => {
            setOpenDeleteAlert({ show: true, data: id });
          } }
          onDownload={handleDownloadSubscriptionDetails} />
      </div>

      <Modal
        isOpen={openAddSubscriptionModal}
        onClose={() => setOpenAddSubscriptionModal(false)}
        title="Add Subscription"
      >
        <AddSubscriptionForm onAddSubscription={handleAddSubscription} />
      </Modal>

      <Modal
        isOpen={openDeleteAlert.show}
        onClose={() => setOpenDeleteAlert({ show: false, data: null })}
        title="Delete Subscription"
      >
        <DeleteAlert
          content="Are you sure you want to delete this subscription details ?"
          onDelete={() => deleteSubscription(openDeleteAlert.data)} />
      </Modal>

      <div>
        <SubscriptionCalendar
          currentDate={currentDate}
          onPrevMonth={handlePrevMonth}
          onNextMonth={handleNextMonth}
          subscriptions={filteredSubscriptions} />
      </div>
    </DashboardLayout>
  )
};

export  default Subscription;