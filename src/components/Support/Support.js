import React, { useEffect, useState } from "react";
import Faq from "react-faq-component";
import './support.css';

const data = {
    title: "Frequently Asked Questions About Auto-Green.",
    rows: [
       
        {
            title: "What is Auto-Green ?",
            content: `Greenhouses are used to grow plants in controlled conditions.
            These green houses are usually built in houses with glass or plastic in which plants will be grown in controlled conditions.
            An automatic greenhouse is makes the production more faster and easier due to the automatic control.`,
        },
        {
            title: "Nunc maximus, magna at ultricies elementum",
            content:
                "Nunc maximus, magna at ultricies elementum, risus turpis vulputate quam, vitae convallis ex tortor sed dolor.",
        },
        {
            title: "Curabitur laoreet, mauris vel blandit fringilla",
            content: `Curabitur laoreet, mauris vel blandit fringilla, leo elit rhoncus nunc, ac sagittis leo elit vel lorem.
            Fusce tempor lacus ut libero posuere viverra. Nunc velit dolor, tincidunt at varius vel, laoreet vel quam.
            Sed dolor urna, lobortis in arcu auctor, tincidunt mattis ante. Vivamus venenatis ultricies nibh in volutpat.
            Cras eu metus quis leo vestibulum feugiat nec sagittis lacus.Mauris vulputate arcu sed massa euismod dignissim. `,
        },
        {
            title: "What is the package version",
            content: <p>current version is 1.2.1</p>,
        },
        {
            title: "Nunc maximus, magna at ultricies elementum",
            content:
                "Nunc maximus, magna at ultricies elementum, risus turpis vulputate quam, vitae convallis ex tortor sed dolor.",
        },
        {
            title: "Curabitur laoreet, mauris vel blandit fringilla",
            content: `Curabitur laoreet, mauris vel blandit fringilla, leo elit rhoncus nunc, ac sagittis leo elit vel lorem.
            Fusce tempor lacus ut libero posuere viverra. Nunc velit dolor, tincidunt at varius vel, laoreet vel quam.
            Sed dolor urna, lobortis in arcu auctor, tincidunt mattis ante. Vivamus venenatis ultricies nibh in volutpat.
            Cras eu metus quis leo vestibulum feugiat nec sagittis lacus.Mauris vulputate arcu sed massa euismod dignissim. `,
        },
        {
            title: "What is the package version",
            content: <p>current version is 1.2.1</p>,
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