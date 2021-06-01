import React, { useEffect, useState } from "react";
import Faq from "react-faq-component";
import './support.css';

const data = {
    title: "Frequently asked questions.",
    rows: [
       
        {
            title: "Lorem ipsum dolor sit amet,",
            content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. In sed tempor sem. Aenean vel turpis feugiat,
              ultricies metus at, consequat velit. Curabitur est nibh, varius in tellus nec, mattis pulvinar metus.
              In maximus cursus lorem, nec laoreet velit eleifend vel. Ut aliquet mauris tortor, sed egestas libero interdum vitae.
              Fusce sed commodo purus, at tempus turpis.`,
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
     titleTextColor: 'black',
     titleTextSize: '30px',
     rowTitleColor: 'darkgreen',
     // rowTitleTextSize: 'medium',
     rowContentColor: 'grey',
     rowContentTextSize: '16px',
     rowContentPaddingTop: '10px',
     rowContentPaddingBottom: '10px',
     rowContentPaddingLeft: '50px',
     rowContentPaddingRight: '150px',
     arrowColor: "green",
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