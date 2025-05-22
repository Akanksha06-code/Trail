import React from "react";
import { LuDownload } from "react-icons/lu";
import TransactionInfoCard from "../Cards/TransactionInfoCard";
import moment from "moment";

const SubscriptionList=({transactions,onDelete,onDownload}) =>{
    return(
        <div className="card">
            <div className="flex items-center justify-between">
                <h5 className="text-lg text-green-600 font-bold">Subscriptions</h5>
            
            <button className="card-btn" onClick={onDownload}>
                <LuDownload className="text-base"/> Download
            </button>
            </div>

        <div className="grid grid-cols-1 md:grid-cols-2">
            {transactions?.map((subscription) => (
                <TransactionInfoCard
                key={subscription._id}
                title={subscription.name}
                icon={subscription.icon}
                startdate={moment(subscription.startdate).format("DD MMM YYYY")}
                enddate={moment(subscription.enddate).format("DD MMM YYYY")}
                amount={subscription.amount}
                type="subscription"
                onDelete={()=> onDelete(subscription._id)}
                />
            ))}
        </div>
        </div>
    )
};

export default SubscriptionList;