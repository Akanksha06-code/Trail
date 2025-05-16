import React,{useState,useEffect} from 'react';
import DashboardLayout from '../../components/layout/DashboardLayout';
import useUserAuth from '../../hooks/useUserAuth';
import { useNavigate } from 'react-router-dom';
import axiosInstance from '../../utils/axiosInstance';
import { API_PATHS } from '../../utils/apiPath';
import InfoCard from '../../components/Cards/InfoCard';
import { LuHandCoins,LuWalletMinimal } from 'react-icons/lu';
import {IoMdCard} from "react-icons/io"
import {LuCreditCard} from "react-icons/lu";
import  {addThousandsSeparator } from "../../utils/helper";
import RecentTransactions from '../../components/Dashboard/RecentTransactions';


const Home = () => {
  useUserAuth();

  const navigate = useNavigate();

  const [dashboardData, setDashboardData] = useState(null);
  const [loading, setLoading] = useState(true);

  const fetchDashboardData = async () => {

    setLoading(true);

    try{
      const response = await axiosInstance.get(`${API_PATHS.DASHBOARD.GET_DASHBOARD_DATA}`);

      if(response.data){
        setDashboardData(response.data);
      }
    }catch(error){
      console.log("Something went wrong .Please try again later.",error);
    }
    finally{
      setLoading(false);
    }
  };
  useEffect(() => {
    fetchDashboardData();
    return () =>{};
  }, []);

  return (
    <DashboardLayout activeMenu="Dashboard">
      <div className="my-5 mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-1 gap-6">*
          <InfoCard 
            icon ={<IoMdCard/>}
            label="Total Balance"
            value={addThousandsSeparator(dashboardData?.totalBalance||0)}
            color="bg-green-500"
            />
            <InfoCard 
            icon ={<LuWalletMinimal/>}
            label="Total Income"
            value={addThousandsSeparator(dashboardData?.totalIncome||0)}
            color="bg-green-500"
            />
            <InfoCard 
            icon ={<LuHandCoins/>}
            label="Total Expense"
            value={addThousandsSeparator(dashboardData?.totalExpense||0)}
            color="bg-primary"
            />
            <InfoCard 
            icon ={<LuCreditCard/>}
            label="Total Subscription"
            value={addThousandsSeparator(dashboardData?.totalSubscription||0)}
            color="bg-yellow-500"
            />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
          <RecentTransactions
            transactions = {dashboardData?.recentTransactions}
            onSeeMore={()=> navigate("/expense")}
            />
        </div>
        </div>
        </DashboardLayout>
  );
};
export default Home;