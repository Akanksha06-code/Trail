import React,{useState} from "react";
import Input from "../Inputs/input";
import EmojiPickerPopup from "../EmojiPickerPopup";


const AddSubscriptionForm = ({onAddSubscription}) =>{
    const [subscription,setSubscription] = useState({
        name:"",
        amount:"",
        startdate:"",
        enddate:"",
        icon:"",
    });

    const handleChange =(key,value) => setSubscription({...subscription,[key]:value});
        return(
            <div>
                <EmojiPickerPopup
                    icon={subscription.icon}
                    onSelect={(selectedIcon) => handleChange("icon",selectedIcon)}
                />
                <Input
                    value={subscription.name}
                    onChange={({target})=> handleChange("name",target.value)}
                    label="Subscription name"
                    placeholder="Netflix,Spotify, etc"
                    type="text"
                />

                <Input
                value={subscription.amount}
                onChange={({ target }) => handleChange("amount",target.value)}
                label="Amount"
                placeholder=""
                type="number"
                />
                
                <Input
                value={subscription.startdate}
                onChange={({ target }) => handleChange("startdate",target.value)}
                label="Start Date"
                placeholder=""
                type="date"
                />

                
                <Input
                value={subscription.enddate}
                onChange={({ target }) => handleChange("enddate",target.value)}
                label="End Date"
                placeholder=""
                type="date"
                />

                <div className="flex justify-end mt-6">
                    <button
                    type="button"
                    className="add-btn add-btn-fill"
                    onClick={() => onAddSubscription(subscription)}
                    >
                    Add Subscription 
                    </button>
                </div>
            </div>
        )
};
export  default AddSubscriptionForm;