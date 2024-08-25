import React from 'react';
import BreadCrumb from '../../components/breadCrumb/BreadCrumb';
import CampaignForm from '../../components/services/CampaignForm'; // Assuming you have a form component for the campaign page
import FooterV1 from '../../components/footer/FooterV1';
import HeaderV5 from '../../components/header/HeaderV5';

const Campaign = () => {
    return (
        <>
            {/* <HeaderV5 />
            <BreadCrumb breadCrumb="campaign" title1="Drive Campaigns" title2="With Strategic Insights" /> */}
            <CampaignForm />
        </>
    );
};

export default Campaign;

