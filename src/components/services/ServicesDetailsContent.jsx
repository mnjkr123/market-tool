import React from 'react';
import ServiceListWidget from '../widgets/ServiceListWidget';
import SupportWidget from '../widgets/SupportWidget';
import BoucherWidget from '../widgets/BoucherWidget';
import FeatureListData from '../../jsonData/FeatureListData.json'
import PopularServiceData from '../../jsonData/PopularServiceData.json'
import SinglePopularService from './SinglePopularService';
import ServiceFaqV1 from '../faq/ServiceFaqV1';

const ServicesDetailsContent = ({ serviceInfo }) => {
    const { thumb, text, title } = serviceInfo;

    return (
        <>
            <div className="services-details-area default-padding">
                <div className="container">
                    <div className="services-details-items">
                        <div className="row">
                            <div className="col-xl-8 col-lg-7 pr-45 pr-md-15 pr-xs-15 services-single-content">
                                <div className="service-single-thumb">
                                    <img src={`/img/services/${thumb}`} alt={`${title} Thumbnail`} />
                                </div>
                                <h2>{title}</h2>
                                <p>{text}</p>
                                <div className="features mt-40 mt-xs-30 mb-30 mb-xs-20">
                                    <div className="row">
                                        <div className="col-lg-5 col-md-6">
                                            <div className="content">
                                                <h3>Included Services</h3>
                                                <ul className="feature-list-item">
                                                    {FeatureListData.map(list =>
                                                        <li key={list.id}>{list.featureList}</li>
                                                    )}
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="col-lg-7 col-md-6 mt-xs-30">
                                            <div className="content">
                                                <h3>The Challenge</h3>
                                                <p>
                                                    At our company, we understand that challenges arise in every project. We address these by thoroughly analyzing the situation, developing innovative solutions, and continuously improving our processes. Our goal is to overcome obstacles and deliver outstanding results for our clients.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <h3>What We Do</h3>
                                <p>
                                    We specialize in providing tailored solutions to meet your unique needs. Our team is dedicated to understanding your goals, offering expert advice, and implementing strategies that drive success. We strive to deliver exceptional value and ensure complete satisfaction in every project we undertake.
                                </p>

                                <div className="faq-style-one service-faq mt-40">
                                    <h2 className="mb-30">Questions About Our Service</h2>
                                    <ServiceFaqV1 />
                                </div>
                                <div className="services-more mt-40">
                                    <h2>Popular Services</h2>
                                    <div className="row">
                                        {PopularServiceData.map(popular =>
                                            <SinglePopularService popular={popular} key={popular.id} />
                                        )}
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-4 col-lg-5 mt-md-50 mt-xs-50 pl-30 pl-md-15 pl-xs-15 services-sidebar">
                                <ServiceListWidget />
                                <SupportWidget />
                                <BoucherWidget />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ServicesDetailsContent;
