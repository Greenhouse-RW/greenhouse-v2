import React, { useEffect, useState } from "react";
import Faq from "react-faq-component";
import './support.css';

const data = {
    title: "Frequently Asked Questions About Auto-Green.",
    rows: [
       
        {
            title: "What is Auto-Green ?",
            content: `Auto-Green is an automated greenhouse , Therefore greenhouse automated system is a hardware and software system that will involve most of the problems that limit greenhouse production including poor climate control , lack of enough water in winter seasons.
            `,
        },

        {
            title: "Why Auto-Green ?",
            content:
               `Auto-Green was thought of , due to low productivity of plants in Rwanda that is caused of poor maintenance of greenhouses.
               Mostly plants in greenhouses die of lack of water(wilting) and poor temperature control under greenhouses which cause low productivity of greenhouse crops.
               `,
        },
        {
            title: "What is the meaning of automatic greenhouses ?",
            content: `Greenhouses are used to grow plants in controlled conditions.
            These green houses are usually built in houses with glass or plastic in which plants will be grown in controlled conditions.
            An automatic greenhouse is makes the production more faster and easier due to the automatic control. `,
        },
        {
            title: "What solution does Auto-Green provide ?",
            content: <p>&#8594;	Automated greenhouse involves the automatic monitoring and controlling of climatic parameters which directly or indirectly govern the plant growth and their production.  <p>&#8594; It constantly monitors and controls environmental conditions in the greenhouse to ensure it remains at present temperature , light , moisture and humidity levels.
            </p>  <p>&#8594;	It focuses on saving water , increasing efficiency and reducing the environmental impacts on plant production.
</p> <p>&#8594;	The user can see the atmospheric conditions of the green house plants on the website and control the greenhouse from far away places.</p></p>,
        },
        {
            title: "How does Auto-Green work ?",
            content:
                `Users  see all the data collected from the sensor networks outside and inside the greenhouse periodically.
                by the use of camera that are placed in the greenhouse which helps the administrator to check on plant growth any time without going into the greenhouse daily.
                `,
        },
        {
            title: "What is the best feature of Auto-Green ?",
            content: `In case there is a problem the administrator will be informed immediately either via the sms or email given through the system according to the user’s choice. `,
        },
        {
            title: "What is the latest version ?",
            content: <p>current version is 1.0.0</p>,
        },
    ],
};

const styles = {
     // bgColor: 'white',
    //  titleTextColor: 'black',
    //  rowTitleColor: 'darkgreen',
     // rowTitleTextSize: 'medium',
     //  arrowColor: "green",
     //  rowContentPaddingBottom: '10px',
     titleTextSize: '26px',
     rowContentColor: 'grey',
     rowContentTextSize: '17px',
     rowContentPaddingTop: '10px',
     rowContentPaddingLeft: '50px',
     rowContentPaddingRight: '60px',
     transitionDuration: "1s",
     timingFunc: "ease"
     
};

const config = {
    // animate: true,
    // arrowIcon: "V",
    // tabFocus: true
};

const Support = () => {

    return (
        <div>
            <Faq
                data={data}
                styles={styles}
                config={config}
            />
        </div>
    );
}

export default Support