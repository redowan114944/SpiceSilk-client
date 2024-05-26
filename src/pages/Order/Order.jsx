import { useState } from 'react';
import orderCover from '../../assets/shop/banner2.jpg';
import Cover from '../Shared/Cover/Cover';
import { Tab, Tabs, TabPanel, TabList } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import './Order.css'; // Ensure this path is correct
import useMenu from '../../hooks/useMenu';
import OrderTabs from './OrderTabs';
import { useParams } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

const Order = () => {
    const categories = ['pizza', 'soup', 'salad', 'dessert', 'drinks' ];
    const {category} = useParams();
    const initialIndex = categories.indexOf(category)
    const [tabIndex, setTabIndex] = useState(initialIndex);
    const [menu] = useMenu()
    
    console.log(category);

    const dessert = menu.filter(item => item.category === 'dessert');
    const pizza = menu.filter(item => item.category === 'pizza');
    const salad = menu.filter(item => item.category === 'salad');
    const soup = menu.filter(item => item.category === 'soup');
    const drinks = menu.filter(item => item.category === 'drinks');

    return (
        <div>
            <Helmet>
                <title>Spice Silk | Order food</title>
            </Helmet>
            <Cover img={orderCover} title="Order Food" subTitle="Would you like to try a dish?" />
            <Tabs selectedIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
                <TabList>
                    <Tab className="react-tabs__tab">PIZZA</Tab>
                    <Tab className="react-tabs__tab">SOUP</Tab>
                    <Tab className="react-tabs__tab">SALAD</Tab>
                    <Tab className="react-tabs__tab">DESSERT</Tab>
                    <Tab className="react-tabs__tab">DRINKS</Tab>
                </TabList>
                <TabPanel>
                   <OrderTabs items={pizza}></OrderTabs> 
                </TabPanel>
                <TabPanel>
                   <OrderTabs items={salad}></OrderTabs> 
                </TabPanel>
                <TabPanel>
                   <OrderTabs items={soup}></OrderTabs> 
                </TabPanel>
                <TabPanel>
                   <OrderTabs items={dessert}></OrderTabs> 
                </TabPanel>
                <TabPanel>
                   <OrderTabs items={drinks}></OrderTabs> 
                </TabPanel>
                
            </Tabs>
        </div>
    );
};

export default Order;
